"use client";

import React from "react";
import type { PlayerRef } from "@remotion/player";
import { PlayPauseButton } from "./play-pause-button";
import { TimeDisplay } from "./time-display";

export const PlayerControl: React.FC<{
  playerRef: React.RefObject<PlayerRef | null>;
  fps: number;
  durationInFrames: number;
}> = ({ playerRef, fps, durationInFrames }) => {
  return (
    <div className="w-full relative flex items-center p-2 rounded-b-lg bg-[#ffffff] rounded-lg border">
      <PlayPauseButton playerRef={playerRef} />
      <TimeDisplay
        playerRef={playerRef}
        durationInFrames={durationInFrames}
        fps={fps}
      />
    </div>
  );
};
