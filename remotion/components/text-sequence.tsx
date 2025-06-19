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
import { makeTransform, scale, translateY } from "@remotion/animation-utils";
import * as Montserrat from "@remotion/google-fonts/Montserrat";
import { fitText } from "@remotion/layout-utils";

const { fontFamily } = Montserrat.loadFont("normal", {
  weights: ["400", "600", "800"],
  subsets: ["latin", "latin-ext"],
});

const container: React.CSSProperties = {
  justifyContent: "center",
  alignItems: "center",
  top: "0",
  left: "0",
  right: undefined,
  bottom: undefined,
  height: 150,
  display: "flex",
  zIndex: "10",
};

const DESIRED_FONT_SIZE = 120;

export const TextSequence = memo(
  ({ sequence }: { sequence: ITextSequence }) => {
    const { fromMs, durationMs, text, pos, width: textWidth, color } = sequence;
    const frame = useCurrentFrame();
    const { fps, width } = useVideoConfig();

    // Convert fromMs and durationMs (ms) to frames for Sequence props
    const fromFrame = (fromMs / 1000) * fps;
    const durationInFrames = (durationMs / 1000) * fps;

    const fittedText = fitText({
      fontFamily,
      text: text,
      withinWidth: width * 0.9,
      textTransform: "uppercase",
    });

    const fontSize = Math.min(DESIRED_FONT_SIZE, fittedText.fontSize);

    const enter = spring({
      frame,
      fps,
      config: { damping: 200 },
      durationInFrames: durationInFrames,
    });

    return (
      <Sequence from={fromFrame} durationInFrames={durationInFrames}>
        <AbsoluteFill
          style={{
            ...container,
            ...pos,
          }}
        >
          <div
            style={{
              width: textWidth,
              fontSize,
              transform: makeTransform([
                scale(interpolate(enter, [0, 1], [0.8, 1])),
                translateY(interpolate(enter, [0, 1], [50, 0])),
              ]),
              color: color ?? "#ffffff",
              WebkitTextStroke: "5px black",
              paintOrder: "stroke",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily,
              textTransform: "uppercase",
            }}
          >
            {text}
          </div>
        </AbsoluteFill>
      </Sequence>
    );
  }
);

TextSequence.displayName = "TextSequence";
