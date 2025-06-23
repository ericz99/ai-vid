"use client";

import { memo, useMemo } from "react";
import {
  useTimelineStore,
  type TextSequence as ITextSequence,
  type SequenceObject,
} from "@/remotion/store";
import { Sequence, useVideoConfig, AbsoluteFill } from "remotion";
import * as Montserrat from "@remotion/google-fonts/Montserrat";
import { fitText } from "@remotion/layout-utils";
import { ScaleUpCenter } from "../presets/animations/scale-up-center";
import { captionPresets } from "../presets/text";

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
  ({ sequence }: { sequence: SequenceObject & ITextSequence }) => {
    const preset = useTimelineStore((s) => s.preset);
    const { fromMs, durationMs, text, config } = sequence;
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

    const presetStyles = useMemo(() => {
      return captionPresets.find((c) => c.id === preset);
    }, [preset]);

    const fontSize = Math.min(
      config.fontSize ?? DESIRED_FONT_SIZE,
      fittedText.fontSize
    );

    return (
      <Sequence from={fromFrame} durationInFrames={durationInFrames}>
        <ScaleUpCenter>
          <AbsoluteFill
            style={{
              ...container,
              ...config.pos,
            }}
          >
            <div
              style={{
                width: config.width,
                fontSize,
                color: config.color ?? "#ffffff",
                // WebkitTextStroke: "5px black",
                paintOrder: "stroke",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily,
                textTransform: "uppercase",
                ...presetStyles?.textStyle,
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

TextSequence.displayName = "TextSequence";
