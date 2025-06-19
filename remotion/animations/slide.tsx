import { springTiming, TransitionSeries } from "@remotion/transitions";
import { slide, SlideDirection } from "@remotion/transitions/slide";
import React from "react";

export function Slide({ direction }: { direction?: SlideDirection }) {
  return (
    <TransitionSeries.Transition
      timing={springTiming({
        config: {
          damping: 200,
        },
        durationInFrames: 25,
        durationRestThreshold: 0.001,
      })}
      presentation={slide({ direction: direction ?? "from-left" })}
    />
  );
}
