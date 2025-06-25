"use client";

import type { PlayerRef } from "@remotion/player";
import { useCallback, useEffect, useState } from "react";
import { Play, Pause } from "lucide-react";

import { Button } from "@/components/ui/button";

export const PlayPauseButton: React.FC<{
  playerRef: React.RefObject<PlayerRef | null>;
}> = ({ playerRef }) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const { current } = playerRef;
    setPlaying(current?.isPlaying() ?? false);
    if (!current) return;

    const onPlay = () => {
      setPlaying(true);
    };

    const onPause = () => {
      setPlaying(false);
    };

    current.addEventListener("play", onPlay);
    current.addEventListener("pause", onPause);

    return () => {
      current.removeEventListener("play", onPlay);
      current.removeEventListener("pause", onPause);
    };
  }, [playerRef]);

  const onToggle = useCallback(() => {
    playerRef.current?.toggle();
  }, [playerRef]);

  return (
    <Button variant="ghost" size="icon" onClick={onToggle} type="button">
      {playing ? <Pause size={18} /> : <Play size={18} />}
    </Button>
  );
};
