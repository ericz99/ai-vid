import { springTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import React from "react";

export function Fade({ out }: { out?: boolean }) {
  return (
    <TransitionSeries.Transition
      timing={springTiming({
        config: {
          damping: 200,
        },
        durationInFrames: 25,
        durationRestThreshold: 0.001,
      })}
      presentation={fade({ shouldFadeOutExitingScene: out ?? false })}
    />
  );
}
