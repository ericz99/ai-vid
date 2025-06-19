"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useTimelineStore } from "@/remotion/store";
import { msToSeconds } from "@/lib/utils";
import Image from "next/image";
import { TRACKS } from "@/remotion/constants";

export function SequenceTimeline() {
  const sequences = useTimelineStore((s) => s.sequences);
  const currentFrame = useTimelineStore((s) => s.currentFrame);
  const selectedId = useTimelineStore((s) => s.selectedSequenceId);
  const setSelected = useTimelineStore((s) => s.setSelectedSequence);
  const setCurrentFrame = useTimelineStore((s) => s.setCurrentFrame);
  const playerRef = useTimelineStore((s) => s.playerRef);
  const fps = useTimelineStore((s) => s.config?.fps ?? 30);
  const enableCaptions = useTimelineStore((s) => s.enableCaptions);
  const [currentMs, setCurrentMs] = useState(0);

  useEffect(() => {
    if (currentFrame) {
      setCurrentMs((currentFrame / fps) * 1000);
    }
  }, [currentFrame, fps]);

  const sortedSequences = useMemo(() => {
    const seq = Object.values(sequences).sort((a, b) => a.fromMs - b.fromMs);

    if (!enableCaptions) {
      return seq.filter((s) => s.track !== TRACKS.SUBTITLES);
    }

    return seq;
  }, [sequences, enableCaptions]);

  const jumpToFrame = useCallback(
    (frame: number) => {
      if (playerRef?.current) {
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
            className={`flex gap-4 cursor-pointer p-2 border rounded-md shadow transition
               ${
                 shouldHighlight && isActive
                   ? "bg-yellow-100 border-yellow-400"
                   : ""
               }`}
          >
            {seq.type === "image" && (
              <div>
                <Image
                  src={seq.src}
                  alt={`alt__img__${seq.id}`}
                  width={50}
                  height={50}
                  unoptimized
                  className="rounded-md"
                />
              </div>
            )}

            <div className="flex-1 flex flex-col gap-2">
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
          </div>
        );
      })}
    </div>
  );
}
