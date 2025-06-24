"use client";

import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
import {
  HighlightType,
  TextSequence as ITextSequence,
  useTimelineStore,
} from "@/remotion/store";
import { chunkArrayWithTiming, WordToken } from "@/remotion/utils";
import { TRACKS } from "@/remotion/constants";
import { cn, msToSeconds } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Layers, TypeOutline, Video } from "lucide-react";

const TextChunk = ({
  chunk,
  fromMs,
  currentTimeMs,
  onWordClick,
  handleSelection,
  selectedFrame,
  highlightKeys,
  hoveredHighlightKey,
  setHoveredHighlightKey,
}: {
  chunk: WordToken[];
  fromMs: number;
  currentTimeMs: number;
  onWordClick?: (wordStartMs: number) => void;
  handleSelection: () => void;
  selectedFrame: string | null;
  highlightKeys: string[];
  hoveredHighlightKey: string | null;
  setHoveredHighlightKey: (key: string | null) => void;
}) => {
  useEffect(() => {
    document.addEventListener("mouseup", handleSelection);
    return () => document.removeEventListener("mouseup", handleSelection);
  }, [handleSelection]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        fontSize: 24,
      }}
    >
      {chunk.map(({ word, fromMs: fromMsWord, toMs: toMsWord }, wordIndex) => {
        const currentTimeRelativeToSequence = currentTimeMs - fromMs;

        const isActive =
          currentTimeRelativeToSequence >= fromMsWord &&
          currentTimeRelativeToSequence < toMsWord;

        let isHighlighted = false;

        if (selectedFrame) {
          const [highlightedFromMs, highlightedToMs] = selectedFrame?.split(
            ":"
          ) as [string, string];

          if (highlightedFromMs && highlightedToMs) {
            const highlightStart = Number(highlightedFromMs);
            const highlightEnd = Number(highlightedToMs);
            const wordStart = fromMs + fromMsWord;
            const wordEnd = fromMs + toMsWord;
            // Overlap check
            isHighlighted =
              wordEnd > highlightStart && wordStart < highlightEnd;
          }
        }

        // Highlight if in highlightKeys
        let highlightKeyForWord: string | null = null;
        if (highlightKeys.length > 0) {
          const wordStart = fromMs + fromMsWord;
          const wordEnd = fromMs + toMsWord;
          for (const key of highlightKeys) {
            const [, range] = key.split("-");
            if (!range) continue;
            const [from, to] = range.split(":").map(Number);
            if (wordEnd > from && wordStart < to) {
              isHighlighted = true;
              highlightKeyForWord = `${from}:${to}`;
              break;
            }
          }
        }

        const isHovered =
          isHighlighted && hoveredHighlightKey === highlightKeyForWord;

        return (
          <span
            key={wordIndex}
            data-from-ms={fromMs + fromMsWord}
            data-to-ms={fromMs + toMsWord}
            style={{
              color: isActive ? "#f4a261" : "#000000",
              userSelect: "all",
              backgroundColor: isHovered
                ? "#2779bd" // darker blue on hover
                : isHighlighted
                ? "#90e0ef" // normal blue
                : undefined,
            }}
            className={cn(
              "text-black text-left cursor-pointer text-base transition-all ease-in-out duration-75",
              (isHighlighted || isHovered) && "bg-[#90e0ef] text-white"
            )}
            onClick={() => {
              if (isHighlighted) {
                setHoveredHighlightKey(highlightKeyForWord);
              } else {
                onWordClick?.(fromMs + toMsWord);
              }
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export function VisualTimeline({
  setSelected,
}: {
  setSelected: (type: HighlightType) => void;
}) {
  const sequences = useTimelineStore((s) => s.sequences);
  const currentFrame = useTimelineStore((s) => s.currentFrame);
  const setCurrentFrame = useTimelineStore((s) => s.setCurrentFrame);
  const playerRef = useTimelineStore((s) => s.playerRef);
  const addHighlightSequence = useTimelineStore((s) => s.addHighlightSequence);
  const fps = useTimelineStore((s) => s.config?.fps ?? 30);
  const selectedHighlightFrame = useTimelineStore(
    (s) => s.selectedHighlightFrame
  );
  const setSelectedHightlightFrame = useTimelineStore(
    (s) => s.setSelectedHightlightFrame
  );

  const [currentMs, setCurrentMs] = useState(0);
  const [hoveredHighlightKey, setHoveredHighlightKey] = useState<string | null>(
    null
  );

  const sequenceRefs = useRef<{ [id: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (currentFrame) {
      setCurrentMs((currentFrame / fps) * 1000);
    }
  }, [currentFrame, fps]);

  const sortedSequences = useMemo(() => {
    return Object.values(sequences)
      .sort((a, b) => a.fromMs - b.fromMs)
      .filter((s) => s.track === TRACKS.SUBTITLES) as ITextSequence[];
  }, [sequences]);

  const jumpToFrame = useCallback(
    (frame: number) => {
      if (playerRef?.current) {
        playerRef.current.seekTo(frame);
        setCurrentFrame(frame);
      }
    },
    [playerRef, setCurrentFrame]
  );

  useEffect(() => {
    // Find the active sequence
    const activeSeq = sortedSequences.find(
      (seq) => seq.fromMs <= currentMs && seq.toMs > currentMs
    );
    if (activeSeq && sequenceRefs.current[activeSeq.id]) {
      sequenceRefs.current[activeSeq.id]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentMs, sortedSequences]);

  const handleSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setSelectedHightlightFrame(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const spans = Array.from(document.querySelectorAll("span[data-from-ms]"));

    const selectedSpans = spans.filter((span) => {
      const node = span as HTMLElement;
      const spanRange = document.createRange();
      spanRange.selectNodeContents(node);
      return (
        range.compareBoundaryPoints(Range.END_TO_START, spanRange) < 0 &&
        range.compareBoundaryPoints(Range.START_TO_END, spanRange) > 0
      );
    });

    if (selectedSpans.length > 0) {
      const fromMs = Number(selectedSpans[0].getAttribute("data-from-ms"));
      const toMs = Number(
        selectedSpans[selectedSpans.length - 1].getAttribute("data-to-ms")
      );
      console.log("Selected fromMs:", fromMs, "toMs:", toMs);
      setSelectedHightlightFrame(`${fromMs}:${toMs}`);
    }
  }, [setSelectedHightlightFrame]);

  return (
    <div className="h-full w-full p-2 space-y-2 flex flex-col gap-2 items-start visual-timeline">
      {sortedSequences.map((seq) => {
        const words = seq.text.split(" ").filter((word) => word.length > 0);
        const wordChucks = chunkArrayWithTiming(
          words,
          seq.durationMs,
          words.length
        );

        if (wordChucks.length === 0) {
          return null;
        }

        let selectedFromMs = null,
          selectedToMs = null;
        if (selectedHighlightFrame) {
          [selectedFromMs, selectedToMs] = selectedHighlightFrame
            .split(":")
            .map(Number);
        }

        const highlightSelected =
          selectedFromMs !== null &&
          selectedToMs !== null &&
          selectedFromMs >= seq.fromMs &&
          selectedToMs <= seq.toMs;

        const hoveredHighlightInSeq =
          hoveredHighlightKey !== null &&
          Array.isArray(seq.highlightKeys) &&
          seq.highlightKeys.some((key) => key.includes(hoveredHighlightKey));

        const openDropdown = highlightSelected || hoveredHighlightInSeq;

        return (
          <DropdownMenu
            key={seq.id}
            defaultOpen={false}
            open={openDropdown}
            onOpenChange={(open) => {
              if (!open) {
                setHoveredHighlightKey(null);
              }
            }}
          >
            <DropdownMenuTrigger asChild>
              <div
                ref={(el) => {
                  sequenceRefs.current[seq.id] = el;
                }}
                className="flex flex-col gap-2"
              >
                <div className="text-sm">
                  {"["}
                  {msToSeconds(seq.fromMs)}s → To: {msToSeconds(seq.toMs)}s{"]"}
                </div>

                {wordChucks.map((chunk, index) => {
                  return (
                    <TextChunk
                      key={index}
                      chunk={chunk}
                      fromMs={seq.fromMs}
                      currentTimeMs={currentMs}
                      handleSelection={handleSelection}
                      highlightKeys={seq.highlightKeys ?? []}
                      selectedFrame={selectedHighlightFrame}
                      hoveredHighlightKey={hoveredHighlightKey}
                      setHoveredHighlightKey={setHoveredHighlightKey}
                      onWordClick={(wordStartMs) => {
                        const frame = Math.floor((wordStartMs / 1000) * fps);
                        jumpToFrame(frame);
                      }}
                    />
                  );
                })}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => {
                  setSelected("overlay");
                  addHighlightSequence(seq.id, {
                    type: "overlay",
                    fromMs: selectedHighlightFrame
                      ? Number(selectedHighlightFrame.split(":")[0])
                      : 0,
                    toMs: selectedHighlightFrame
                      ? Number(selectedHighlightFrame.split(":")[1])
                      : 0,
                    id: `overlay-${selectedHighlightFrame}`,
                    overlaySrc: "",
                    track: TRACKS.OVERLAY,
                  });
                }}
              >
                <Layers size={18} />
                Add Overlay
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSelected("b-roll");
                  addHighlightSequence(seq.id, {
                    type: "b-roll",
                    fromMs: selectedHighlightFrame
                      ? Number(selectedHighlightFrame.split(":")[0])
                      : 0,
                    toMs: selectedHighlightFrame
                      ? Number(selectedHighlightFrame.split(":")[1])
                      : 0,
                    id: `broll-${selectedHighlightFrame}`,
                    videoSrc: "",
                    muteAudio: false,
                    track: TRACKS.BROLL,
                  });
                }}
              >
                <Video size={18} />
                Add B-Roll
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSelected("text");
                  addHighlightSequence(seq.id, {
                    type: "text",
                    fromMs: selectedHighlightFrame
                      ? Number(selectedHighlightFrame.split(":")[0])
                      : 0,
                    toMs: selectedHighlightFrame
                      ? Number(selectedHighlightFrame.split(":")[1])
                      : 0,
                    id: `text-${selectedHighlightFrame}`,
                    text: "",
                    config: {},
                    track: TRACKS.TEXT,
                  });
                }}
              >
                <TypeOutline size={18} />
                Add Text
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      })}
    </div>
  );
}
