"use client";

import { memo } from "react";
import type { TextSequence as ITextSequence } from "@/remotion/store";
import {
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  AbsoluteFill,
} from "remotion";
import * as Montserrat from "@remotion/google-fonts/Montserrat";

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

const HIGHLIGHT_COLOR = "#f4a261";

export const SubtitleSequence = memo(
  ({ sequence }: { sequence: ITextSequence }) => {
    const { fromMs, toMs, config, tokens } = sequence;
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const currentTimeMs = (frame / fps) * 1000;

    const fromFrame = (fromMs / 1000) * fps;
    const toFrame = (toMs / 1000) * fps;
    const durationInFrames = toFrame - fromFrame;

    return (
      <Sequence from={fromFrame} durationInFrames={durationInFrames}>
        <AbsoluteFill
          style={{
            ...container,
            ...config.pos,
          }}
        >
          <span
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
              justifyContent: "center",
              alignItems: "center",
              fontSize: 24,
              color: "#ffffff",
            }}
          >
            {tokens.map((t) => {
              const active =
                t.fromMs <= currentTimeMs && t.toMs > currentTimeMs;

              return (
                <span
                  key={t.fromMs}
                  style={{
                    display: "inline",
                    whiteSpace: "pre",
                    color: active ? HIGHLIGHT_COLOR : "white",
                  }}
                >
                  {t.text}
                </span>
              );
            })}
          </span>
        </AbsoluteFill>
      </Sequence>
    );
  }
);

SubtitleSequence.displayName = "SubtitleSequence";
