"use client";

import React from "react";
import type { PlayerRef } from "@remotion/player";
import { PlayPauseButton } from "./play-pause-button";
import { TimeDisplay } from "./time-display";
import { SeekBar } from "./seek-bar";

export const PlayerControl: React.FC<{
  playerRef: React.RefObject<PlayerRef | null>;
  fps: number;
  durationInFrames: number;
}> = ({ playerRef, fps, durationInFrames }) => {
  return (
    <div className="w-full relative flex flex-col p-2 bg-[#ffffff] rounded-b-lg border">
      <SeekBar playerRef={playerRef} durationInFrames={durationInFrames} />

      <div className="flex items-center">
        <PlayPauseButton playerRef={playerRef} />
        <TimeDisplay
          playerRef={playerRef}
          durationInFrames={durationInFrames}
          fps={fps}
        />
      </div>
    </div>
  );
};
