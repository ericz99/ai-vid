"use client";

import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
import {
  TextSequence as ITextSequence,
  useTimelineStore,
} from "@/remotion/store";
import { chunkArrayWithTiming, WordToken } from "@/remotion/utils";
import { TRACKS } from "@/remotion/constants";
import { msToSeconds } from "@/lib/utils";

const TextChunk = ({
  chunk,
  fromMs,
  currentTimeMs,
  onWordClick,
}: {
  chunk: WordToken[];
  fromMs: number;
  currentTimeMs: number;
  onWordClick?: (wordStartMs: number) => void;
}) => {
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;

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
        // You can now use fromMs and toMs as needed
      }
    };

    document.addEventListener("mouseup", handleSelection);
    return () => document.removeEventListener("mouseup", handleSelection);
  }, []);

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

        return (
          <span
            key={wordIndex}
            data-from-ms={fromMs + fromMsWord}
            data-to-ms={fromMs + toMsWord}
            style={{
              color: isActive ? "#f4a261" : "#000000",
              userSelect: "all",
            }}
            className="text-black text-left cursor-pointer text-base "
            onClick={() => onWordClick?.(fromMs + toMsWord)}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export function VisualTimeline() {
  const sequences = useTimelineStore((s) => s.sequences);
  const currentFrame = useTimelineStore((s) => s.currentFrame);
  const setCurrentFrame = useTimelineStore((s) => s.setCurrentFrame);
  const playerRef = useTimelineStore((s) => s.playerRef);
  const fps = useTimelineStore((s) => s.config?.fps ?? 30);
  const [currentMs, setCurrentMs] = useState(0);

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

        return (
          <div
            key={seq.id}
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
    </div>
  );
}
