import type { PlayerRef } from "@remotion/player";
import React, { useEffect } from "react";

export const formatTime = (frame: number, fps: number): string => {
  const hours = Math.floor(frame / fps / 3600);

  const remainingMinutes = frame - hours * fps * 3600;
  const minutes = Math.floor(remainingMinutes / 60 / fps);

  const remainingSec = frame - hours * fps * 3600 - minutes * fps * 60;
  const seconds = Math.floor(remainingSec / fps);

  const frameAfterSec = Math.round(frame % fps);

  const hoursStr = String(hours);
  const minutesStr = String(minutes).padStart(2, "0");
  const secondsStr = String(seconds).padStart(2, "0");
  const frameStr = String(frameAfterSec).padStart(2, "0");

  if (hours > 0) {
    return `${hoursStr}:${minutesStr}:${secondsStr}.${frameStr}`;
  }

  return `${minutesStr}:${secondsStr}.${frameStr}`;
};

export const TimeDisplay: React.FC<{
  durationInFrames: number;
  fps: number;
  playerRef: React.RefObject<PlayerRef | null>;
}> = ({ durationInFrames, fps, playerRef }) => {
  const [time, setTime] = React.useState(0);

  useEffect(() => {
    const { current } = playerRef;
    if (!current) {
      return;
    }

    const onTimeUpdate = () => {
      setTime(current.getCurrentFrame());
    };

    current.addEventListener("frameupdate", onTimeUpdate);

    return () => {
      current.removeEventListener("frameupdate", onTimeUpdate);
    };
  }, [playerRef]);

  return (
    <div
      style={{
        fontFamily: "monospace",
      }}
    >
      <span>
        {formatTime(time, fps)}/{formatTime(durationInFrames, fps)}
      </span>
    </div>
  );
};
