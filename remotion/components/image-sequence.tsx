"use client";

import React from "react";
import { AbsoluteFill, Img, useVideoConfig } from "remotion";
import type { ImageSequence } from "../store";
import { springTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";

export function ImageSequence({ sequence }: { sequence: ImageSequence }) {
  const { fps } = useVideoConfig();
  const { styleType, src, durationMs, fromMs } = sequence;

  const dimensions =
    styleType === "full"
      ? { height: "100%", width: "100%" }
      : { height: "50%", width: "100%" };

  // # start frame
  const startFrame = (fromMs * fps) / 1000;
  const durationInFrames = (durationMs / 1000) * fps;

  // # add tranisiton if exist
  if (sequence.transitionIn || sequence.transitionOut) {
    return (
      <TransitionSeries from={startFrame}>
        {sequence.transitionIn && sequence.transitionIn === "fade" && (
          <TransitionSeries.Transition
            timing={springTiming({
              config: {
                damping: 200,
              },
              durationInFrames: 25,
              durationRestThreshold: 0.001,
            })}
            presentation={fade()}
          />
        )}

        {sequence.transitionIn && sequence.transitionIn === "slide" && (
          <TransitionSeries.Transition
            timing={springTiming({
              config: {
                damping: 200,
              },
              durationInFrames: 25,
              durationRestThreshold: 0.001,
            })}
            presentation={slide({ direction: "from-left" })}
          />
        )}

        <TransitionSeries.Sequence durationInFrames={durationInFrames}>
          <AbsoluteFill>
            <Img
              src={src}
              style={{
                ...dimensions,
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </AbsoluteFill>
        </TransitionSeries.Sequence>

        {sequence.transitionOut && sequence.transitionOut === "fade" && (
          <TransitionSeries.Transition
            timing={springTiming({
              config: {
                damping: 200,
              },
              durationInFrames: 25,
              durationRestThreshold: 0.001,
            })}
            presentation={fade({ shouldFadeOutExitingScene: true })}
          />
        )}

        {sequence.transitionOut && sequence.transitionOut === "slide" && (
          <TransitionSeries.Transition
            timing={springTiming({
              config: {
                damping: 200,
              },
              durationInFrames: 25,
              durationRestThreshold: 0.001,
            })}
            presentation={slide({ direction: "from-right" })}
          />
        )}
      </TransitionSeries>
    );
  }

  return (
    <AbsoluteFill>
      <Img
        src={src}
        style={{ ...dimensions, objectFit: "cover", objectPosition: "top" }}
      />
    </AbsoluteFill>
  );
}
