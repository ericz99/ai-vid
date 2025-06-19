"use client";

import React from "react";
import { AbsoluteFill, Audio } from "remotion";

export function AudioSequence({ src }: { src: string }) {
  return (
    <AbsoluteFill>
      <Audio loop src={src} />
    </AbsoluteFill>
  );
}
