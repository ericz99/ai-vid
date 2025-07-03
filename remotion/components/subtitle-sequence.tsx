"use client";

import { memo, useMemo } from "react";
import {
  useTimelineStore,
  type TextSequence as ITextSequence,
} from "@/remotion/store";
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

export const SubtitleSequence = memo(
  ({ sequence }: { sequence: ITextSequence }) => {
    const captionPreset = useTimelineStore((s) => s.captionPreset);
    const { fromMs, toMs, config, tokens } = sequence;
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const currentTimeMs = (frame / fps) * 1000;

    const fromFrame = (fromMs / 1000) * fps;
    const toFrame = (toMs / 1000) * fps;
    const durationInFrames = toFrame - fromFrame;

    const presetStyles = useMemo(() => {
      const styles = {
        fontFamily: captionPreset.fontFamily,
        fontWeight: captionPreset.fontWeight.toLowerCase(),
        textTransform: captionPreset.uppercase ? "uppercase" : "none",
        fontSize: Math.min(24, captionPreset.fontSize),
        color: captionPreset.fontColor,
        paintOrder: "stroke",
        WebkitTextStroke: `${
          captionPreset.strokeWeight === "None"
            ? 0
            : captionPreset.strokeWeight === "Small"
            ? 1
            : captionPreset.strokeWeight === "Medium"
            ? 2
            : 3
        }px ${captionPreset.strokeColor}`,
        textShadow:
          captionPreset.shadow === "None"
            ? "none"
            : `${
                captionPreset.shadow === "Small"
                  ? "1px 1px 2px"
                  : captionPreset.shadow === "Medium"
                  ? "2px 2px 4px"
                  : "3px 3px 6px"
              } rgba(0,0,0,0.5)`,
        lineHeight: 1.2,
      } as React.CSSProperties;

      if (captionPreset.backgroundColor) {
        styles["backgroundColor"] = captionPreset.backgroundColor;
        styles["padding"] = "2px 6px";
        styles["borderRadius"] = "6px";
      }

      return styles;
    }, [captionPreset]);

    return (
      <Sequence from={fromFrame} durationInFrames={durationInFrames}>
        <AbsoluteFill
          style={{
            ...container,
            ...config.pos,
          }}
        >
          <div
            style={{
              WebkitTextStroke: "5px black",
              paintOrder: "stroke",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily,
              textTransform: "uppercase",
              width: "100%",
              alignItems: "center",
              fontSize: 24,
              color: "#ffffff",
              whiteSpace: "nowrap",
              display: "inline-block",
              maxWidth: "fit-content",
              ...presetStyles,
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
                    color: active
                      ? captionPreset.activeColor
                      : captionPreset.mainColor,
                  }}
                >
                  {t.text}
                </span>
              );
            })}
          </div>
        </AbsoluteFill>
      </Sequence>
    );
  }
);

SubtitleSequence.displayName = "SubtitleSequence";
