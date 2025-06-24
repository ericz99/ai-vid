"use client";

import { memo } from "react";
import type { TextSequence as ITextSequence } from "@/remotion/store";
import {
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  AbsoluteFill,
  interpolate,
} from "remotion";
import { makeTransform, scale } from "@remotion/animation-utils";
import * as Montserrat from "@remotion/google-fonts/Montserrat";
import { chunkArrayWithTiming, WordToken } from "../utils";

const { fontFamily } = Montserrat.loadFont("normal", {
  weights: ["400", "600", "800"],
  subsets: ["latin", "latin-ext"],
});

const container: React.CSSProperties = {
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  right: undefined,
  bottom: undefined,
  height: 150,
  display: "flex",
  zIndex: "10",
};

const DESIRED_FONT_SIZE = "24px";
const HIGHLIGHT_COLOR = "#f4a261";

const TextChunk = ({
  chunk,
  fromMs,
  currentTimeMs,
  fps,
  sequence,
}: {
  chunk: WordToken[];
  fromMs: number;
  currentTimeMs: number;
  fps: number;
  sequence: ITextSequence;
}) => {
  const { config } = sequence;
  const frame = useCurrentFrame(); // Scoped to chunk's sequence

  const chunkStartMs = chunk[0].fromMs;
  const chunkEndMs = chunk[chunk.length - 1].toMs;
  const durationInFrames = Math.max(
    1,
    Math.floor(((chunkEndMs - chunkStartMs) / 1000) * fps)
  );

  const enter = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames,
  });

  return (
    <div
      style={{
        WebkitTextStroke: "5px black",
        paintOrder: "stroke",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily,
        textTransform: "uppercase",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        justifyContent: "center",
        alignItems: "center",
        transform: makeTransform([scale(interpolate(enter, [0, 1], [0.8, 1]))]),

        color: config.color ?? "#ffffff",
        fontSize: config.color ?? 24,
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
            style={{
              fontSize: DESIRED_FONT_SIZE,
              display: "inline-block",
              color: isActive ? HIGHLIGHT_COLOR : "#ffffff",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export const SubtitleSequence = memo(
  ({ sequence }: { sequence: ITextSequence }) => {
    const { fromMs, durationMs, text, config } = sequence;
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const currentTimeMs = (frame / fps) * 1000;

    const words = text.split(" ").filter((word) => word.length > 0);
    const wordChunks = chunkArrayWithTiming(words, durationMs, 3);
    const numChunks = wordChunks.length;

    if (numChunks === 0) {
      return null;
    }

    // Convert fromMs and durationMs (ms) to frames for Sequence props
    const fromFrame = (fromMs / 1000) * fps;
    const durationInFrames = (durationMs / 1000) * fps;

    return (
      <Sequence from={fromFrame} durationInFrames={durationInFrames}>
        <AbsoluteFill
          style={{
            ...container,
            ...config.pos,
          }}
        >
          {wordChunks.map((chunk, index) => {
            const startFrameForChunk = Math.floor(
              (chunk[0].fromMs / 1000) * fps
            );
            const endFrameForChunk = Math.floor(
              (chunk[chunk.length - 1].toMs / 1000) * fps
            );
            const durationInFrames = endFrameForChunk - startFrameForChunk;

            return (
              <Sequence
                key={index}
                from={startFrameForChunk}
                durationInFrames={durationInFrames}
              >
                <TextChunk
                  chunk={chunk}
                  fromMs={fromMs}
                  currentTimeMs={currentTimeMs}
                  fps={fps}
                  sequence={sequence}
                />
              </Sequence>
            );
          })}
        </AbsoluteFill>
      </Sequence>
    );
  }
);

SubtitleSequence.displayName = "SubtitleSequence";
