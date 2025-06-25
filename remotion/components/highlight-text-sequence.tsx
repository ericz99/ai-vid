"use client";

import { memo } from "react";
import { HighlightTextSequence as IHighlightTextSequence } from "@/remotion/store";
import { Sequence, useVideoConfig, AbsoluteFill } from "remotion";
import * as Montserrat from "@remotion/google-fonts/Montserrat";
import { fitText } from "@remotion/layout-utils";
import { ScaleUpCenter } from "../presets/animations/scale-up-center";

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

export const HighlightTextSequence = memo(
  ({ sequence }: { sequence: IHighlightTextSequence }) => {
    const { fromMs, toMs, text, config } = sequence;
    const { fps, width } = useVideoConfig();
    const durationMs = toMs - fromMs;

    // Convert fromMs and durationMs (ms) to frames for Sequence props
    const fromFrame = (fromMs / 1000) * fps;
    const durationInFrames = (durationMs / 1000) * fps;

    const fittedText = fitText({
      fontFamily,
      text: text,
      withinWidth: width * 0.9,
      textTransform: "uppercase",
    });

    const fontSize = Math.min(
      config?.fontSize ?? DESIRED_FONT_SIZE,
      fittedText.fontSize
    );

    return (
      <Sequence from={fromFrame} durationInFrames={durationInFrames}>
        <ScaleUpCenter>
          <AbsoluteFill
            style={{
              ...container,
              ...config?.pos,
            }}
          >
            <div
              style={{
                width: 200,
                fontSize,
                color: config?.color ?? "#ffffff",
                // WebkitTextStroke: "5px black",
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
        </ScaleUpCenter>
      </Sequence>
    );
  }
);

HighlightTextSequence.displayName = "HighlightTextSequence";
