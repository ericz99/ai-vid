"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useTimelineStore } from "@/remotion/store";
import { msToSeconds } from "@/lib/utils";

export function SequenceTimeline() {
  const sequences = useTimelineStore((s) => s.sequences);
  const currentFrame = useTimelineStore((s) => s.currentFrame);
  const selectedId = useTimelineStore((s) => s.selectedSequenceId);
  const setSelected = useTimelineStore((s) => s.setSelectedSequence);
  const setCurrentFrame = useTimelineStore((s) => s.setCurrentFrame);
  const playerRef = useTimelineStore((s) => s.playerRef);
  const fps = useTimelineStore((s) => s.config?.fps ?? 30);
  const [currentMs, setCurrentMs] = useState(0);

  useEffect(() => {
    if (currentFrame) {
      console.log("currentFrame", currentFrame);
      setCurrentMs((currentFrame / fps) * 1000);
    }
  }, [currentFrame, fps]);

  const sortedSequences = useMemo(() => {
    return Object.values(sequences).sort((a, b) => a.fromMs - b.fromMs);
  }, [sequences]);

  const jumpToFrame = useCallback(
    (frame: number) => {
      if (playerRef?.current) {
        console.log("player", playerRef);
        playerRef.current.seekTo(frame);
        setCurrentFrame(frame);
      }
    },
    [playerRef, setCurrentFrame]
  );

  return (
    <div className="h-full w-full p-2 space-y-2">
      {sortedSequences.map((seq) => {
        const isActive = seq.fromMs <= currentMs && seq.toMs >= currentMs;
        const isSelected = selectedId === seq.id;
        const fromFrame = (seq.fromMs / 1000) * fps;

        const shouldHighlight =
          isSelected || isActive
            ? true // clicked and active → highlight only this one
            : !selectedId && isActive; // nothing selected → fallback to all actives

        return (
          <div
            key={seq.id}
            onClick={() => {
              console.log("frame", fromFrame);
              setSelected(seq.id);
              jumpToFrame(fromFrame);
            }}
            className={`cursor-pointer p-2 border rounded shadow transition
               ${
                 shouldHighlight && isActive
                   ? "bg-yellow-100 border-yellow-400"
                   : ""
               }`}
          >
            <div>
              <strong>{seq.type.toUpperCase()}</strong> — {seq.id}
            </div>
            <div>
              From: {msToSeconds(seq.fromMs)}s → To: {msToSeconds(seq.toMs)}s
            </div>
            {seq.type === "text" && (
              <div>
                Text: <em>{seq.text}</em>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
