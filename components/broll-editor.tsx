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
import { cn, msToSeconds } from "@/lib/utils";
import { TRACKS } from "@/remotion/constants";
import LoadingSpinner from "./spinner";

export function BrollEditor() {
  const sequences = useTimelineStore((s) => s.sequences);
  const currentFrame = useTimelineStore((s) => s.currentFrame);
  const setSelected = useTimelineStore((s) => s.setSelectedSequence);
  const setCurrentFrame = useTimelineStore((s) => s.setCurrentFrame);
  const playerRef = useTimelineStore((s) => s.playerRef);
  const fps = useTimelineStore((s) => s.config?.fps ?? 30);
  const [currentMs, setCurrentMs] = useState(0);
  const editableRefs = useRef<{ [id: string]: HTMLSpanElement | null }>({});

  const sequenceRefs = useRef<{ [id: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (currentFrame) {
      setCurrentMs((currentFrame / fps) * 1000);
    }
  }, [currentFrame, fps]);

  const sortedSequences = useMemo(() => {
    const seq = Object.values(sequences).sort((a, b) => a.fromMs - b.fromMs);
    return seq.filter((f) => f.track === TRACKS.SUBTITLES) as ITextSequence[];
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

  if (sortedSequences.length === 0) {
    return (
      <div className="h-full w-full p-2 space-y-2 flex flex-col justify-center items-center">
        <LoadingSpinner size="xl" />
        <span>Loading Captions</span>
      </div>
    );
  }

  return (
    <div className="h-full w-full space-y-2 relative">
      <div className="flex flex-col gap-2 relative">
        {sortedSequences.map((seq) => {
          const { tokens } = seq;
          const isActive = seq.fromMs <= currentMs && seq.toMs > currentMs;
          const fromFrame = (seq.fromMs / 1000) * fps;
          const currentTimeMs = (currentFrame / fps) * 1000;

          return (
            <div
              key={seq.id}
              ref={(el) => {
                sequenceRefs.current[seq.id] = el;
              }}
              onClick={() => {
                setSelected(seq.id);
                jumpToFrame(fromFrame);
              }}
              className={cn(
                "select-none flex gap-4 cursor-pointer p-2 border rounded-lg hover:bg-zinc-100 hover:border-blue-200 transition-all ease-in-out duration-75",
                isActive && "bg-blue-50 border-blue-200",
                seq.hidden && "opacity-50"
              )}
            >
              <div className="bg-zinc-100 flex-1 flex justify-center items-center h-36">
                he
              </div>

              <div className="flex-4 flex items-start justify-between gap-2 py-2">
                <div className="flex flex-col flex-1 relative gap-2">
                  <h1 className="text-xs text-blue-400 font-semibold">
                    {msToSeconds(seq.fromMs)} → {msToSeconds(seq.toMs)}
                  </h1>

                  <div className="relative">
                    {tokens.map((t) => {
                      const active =
                        t.fromMs <= currentTimeMs && t.toMs > currentTimeMs;

                      return (
                        <span
                          key={t.fromMs}
                          ref={(el) => {
                            editableRefs.current[seq.id] = el;
                          }}
                          style={{
                            display: "inline",
                            whiteSpace: "pre",
                            color: active ? "#f4a261" : "black",
                            fontSize: 14,
                            userSelect: "text",
                          }}
                        >
                          {t.text}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
