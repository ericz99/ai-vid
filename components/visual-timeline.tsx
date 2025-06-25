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
import { cn } from "@/lib/utils";

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
  setHoverDropdownPos,
  id,
}: {
  chunk: WordToken[];
  fromMs: number;
  currentTimeMs: number;
  onWordClick?: (wordStartMs: number) => void;
  handleSelection: () => void;
  selectedFrame: string | null;
  highlightKeys: string[];
  hoveredHighlightKey: string | null;
  setSelectedHightlightFrame: (key: string | null) => void;
  setHoveredHighlightKey: (key: string | null) => void;
  setHoverDropdownPos: (pos: { left: number; top: number } | null) => void;
  id: string;
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
        userSelect: "text",
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
            const [type, range] = key.split("-");
            if (!range) continue;
            const [from, to] = range.split(":").map(Number);
            if (wordEnd > from && wordStart < to) {
              isHighlighted = true;
              highlightKeyForWord = `${type}-${from}:${to}`;
              break;
            }
          }
        }

        const isHovered =
          isHighlighted && hoveredHighlightKey === highlightKeyForWord;

        return (
          <span
            key={wordIndex}
            data-seq-id={id}
            data-from-ms={fromMs + fromMsWord}
            data-to-ms={fromMs + toMsWord}
            style={{
              color: isActive ? "#f4a261" : "#000000",
              backgroundColor: isHovered
                ? "#2779bd" // darker blue on hover
                : isHighlighted
                ? "#90e0ef" // normal blue
                : undefined,
            }}
            className={cn(
              "text-black text-left text-sm transition-all ease-in-out duration-75 select-text",
              (isHighlighted || isHovered) &&
                "bg-[#90e0ef] text-white select-none"
            )}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              if (isHighlighted) {
                setHoveredHighlightKey(highlightKeyForWord);
                // setSelectedHightlightFrame(highlightKeyForWord);

                const rect = (e.target as HTMLElement).getBoundingClientRect();

                setHoverDropdownPos({
                  left: rect.left + window.scrollX,
                  top: rect.bottom + window.scrollY,
                });
                onWordClick?.(fromMs + toMsWord);
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

  const [dropdownPos, setDropdownPos] = useState<{
    left: number;
    top: number;
  } | null>(null);

  const [selectedSeq, setSelectedSeq] = useState<ITextSequence[]>([]);
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
      setDropdownPos(null);
      setSelectedSeq([]);

      return;
    }

    const range = selection.getRangeAt(0);
    const spans = Array.from(document.querySelectorAll("span[data-from-ms]"));
    const rect = range.getBoundingClientRect();
    // Adjust for scroll position
    setDropdownPos({
      left: rect.left + window.scrollX,
      top: rect.bottom + window.scrollY, // below the selection
    });

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
      // Sort by time
      selectedSpans.sort(
        (a, b) =>
          Number(a.getAttribute("data-from-ms")) -
          Number(b.getAttribute("data-from-ms"))
      );
      const fromMs = Number(selectedSpans[0].getAttribute("data-from-ms"));
      const toMs = Number(
        selectedSpans[selectedSpans.length - 1].getAttribute("data-to-ms")
      );
      setSelectedHightlightFrame(`${fromMs}:${toMs}`);

      // Collect all unique sequence IDs from selected spans
      const seqIds = [
        ...new Set(
          selectedSpans
            .map((span) =>
              span.closest("[data-seq-id]")?.getAttribute("data-seq-id")
            )
            .filter(Boolean)
        ),
      ];

      // Find all matching sequences
      const foundSeqs = sortedSequences.filter((s) =>
        seqIds.includes(String(s.id))
      );
      setSelectedSeq(foundSeqs);
    } else {
      setSelectedSeq([]);
    }
  }, [setSelectedHightlightFrame, sortedSequences]);

  const data = hoveredHighlightKey ? hoveredHighlightKey.split("-") : null;

  console.log("selectedSeq", selectedSeq);
  console.log("sortedSequences", sortedSequences);
  console.log("selectedHighlightFrame", selectedHighlightFrame);

  return (
    <div className="h-full w-full p-2 space-y-2 flex flex-col items-start visual-timeline">
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

        return (
          <div
            key={seq.id}
            // ref={(el) => {
            //   sequenceRefs.current[seq.id] = el;
            // }}
            className="flex flex-col gap-2"
          >
            {wordChucks.map((chunk, index) => {
              return (
                <TextChunk
                  id={seq.id}
                  key={index}
                  chunk={chunk}
                  fromMs={seq.fromMs}
                  currentTimeMs={currentMs}
                  handleSelection={handleSelection}
                  highlightKeys={seq.highlightKeys ?? []}
                  selectedFrame={selectedHighlightFrame}
                  hoveredHighlightKey={hoveredHighlightKey}
                  setHoveredHighlightKey={setHoveredHighlightKey}
                  setHoverDropdownPos={setDropdownPos}
                  setSelectedHightlightFrame={setSelectedHightlightFrame}
                  onWordClick={(wordStartMs) => {
                    const frame = Math.floor((wordStartMs / 1000) * fps);
                    jumpToFrame(frame);
                  }}
                />
              );
            })}
          </div>
        );
      })}

      {dropdownPos && selectedHighlightFrame && (
        <div
          style={{
            position: "absolute",
            left: dropdownPos.left,
            top: dropdownPos.top - 10,
            zIndex: 1000,
          }}
        >
          <DropdownMenu
            defaultOpen={false}
            open={true}
            onOpenChange={(open) => {
              if (!open) {
                setSelectedHightlightFrame(null);
                setDropdownPos(null);
                setSelectedSeq([]);
              }
            }}
          >
            <DropdownMenuTrigger asChild>
              <button
                style={{
                  width: 1,
                  height: 1,
                  opacity: 0,
                  pointerEvents: "none",
                }}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => {
                  setSelectedHightlightFrame(
                    `overlay-${selectedHighlightFrame}`
                  );
                  setSelected("overlay");
                  addHighlightSequence(
                    selectedSeq.map((s) => s.id),
                    {
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
                    }
                  );
                }}
              >
                <Layers size={18} />
                Add Overlay
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSelectedHightlightFrame(`broll-${selectedHighlightFrame}`);

                  setSelected("broll");
                  addHighlightSequence(
                    selectedSeq.map((s) => s.id),
                    {
                      type: "broll",
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
                    }
                  );
                }}
              >
                <Video size={18} />
                Add B-Roll
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSelectedHightlightFrame(`text-${selectedHighlightFrame}`);

                  setSelected("text");
                  addHighlightSequence(
                    selectedSeq.map((s) => s.id),
                    {
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
                    }
                  );
                }}
              >
                <TypeOutline size={18} />
                Add Text
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      {hoveredHighlightKey && dropdownPos && (
        <div
          style={{
            position: "absolute",
            left: dropdownPos.left,
            top: dropdownPos.top - 10,
            zIndex: 1000,
          }}
        >
          <DropdownMenu
            defaultOpen={false}
            open={true}
            onOpenChange={(open) => {
              if (!open) {
                setSelectedHightlightFrame(null);
                setHoveredHighlightKey(null);
                setDropdownPos(null);
                setSelectedSeq([]);
              }
            }}
          >
            <DropdownMenuTrigger asChild>
              <button
                style={{
                  width: 1,
                  height: 1,
                  opacity: 0,
                  pointerEvents: "none",
                }}
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              {data && data[0] === "text" && (
                <DropdownMenuItem
                  onClick={() => {
                    setSelected("text");
                    setSelectedHightlightFrame(hoveredHighlightKey);
                  }}
                >
                  Edit Text
                </DropdownMenuItem>
              )}

              {data && data[0] === "overlay" && (
                <DropdownMenuItem
                  onClick={() => {
                    setSelected("overlay");
                    setSelectedHightlightFrame(hoveredHighlightKey);
                  }}
                >
                  Edit Overlay
                </DropdownMenuItem>
              )}

              {data && data[0] === "broll" && (
                <DropdownMenuItem
                  onClick={() => {
                    setSelected("broll");
                    setSelectedHightlightFrame(hoveredHighlightKey);
                  }}
                >
                  Edit B-Roll
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
}
