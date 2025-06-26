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
import { msToSeconds } from "@/lib/utils";
import { TRACKS } from "@/remotion/constants";

export function CaptionsTimeline() {
  const sequences = useTimelineStore((s) => s.sequences);
  const currentFrame = useTimelineStore((s) => s.currentFrame);
  const setSelected = useTimelineStore((s) => s.setSelectedSequence);
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

  return (
    <div className="h-full w-full p-2 space-y-2">
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
            className={`flex gap-4 cursor-pointer p-2 border rounded-lg shadow  hover:bg-blue-100 hover:border-blue-400 transition-all ease-in-out duration-75
               ${isActive ? "bg-blue-100 border-blue-400" : ""}`}
          >
            <div className="flex-1 flex flex-col gap-2">
              <h1 className="text-sm text-blue-400 font-semibold">
                {msToSeconds(seq.fromMs)} → {msToSeconds(seq.toMs)}
              </h1>

              <div>
                {tokens.map((t) => {
                  const active =
                    t.fromMs <= currentTimeMs && t.toMs > currentTimeMs;

                  return (
                    <span
                      key={t.fromMs}
                      style={{
                        display: "inline",
                        whiteSpace: "pre",
                        color: active ? "#f4a261" : "black",
                      }}
                    >
                      {t.text}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
