"use client";

import {
  spring,
  useCurrentFrame,
  useVideoConfig,
  AbsoluteFill,
  interpolate,
} from "remotion";

export const ScaleUpCenter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    config: {
      damping: 200,
      stiffness: 100,
      mass: 1,
    },
  });

  const scale = interpolate(progress, [0, 1], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale})`,
        zIndex: "10",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
