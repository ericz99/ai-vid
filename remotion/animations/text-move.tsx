"use client";

import React from "react";
import { useCurrentFrame, AbsoluteFill, Easing } from "remotion";
import {
  makeTransform,
  interpolateStyles,
  translateY,
  translateX,
} from "@remotion/animation-utils";

export type Direction = "top" | "bottom" | "left" | "right";

interface TextMoveProps {
  children: React.ReactNode;
  direction?: Direction;
  distance?: number; // px
  inFrame?: number;
  outFrame?: number;
  style?: React.CSSProperties;
}

const getXY = (direction: Direction, distance: number) => {
  switch (direction) {
    case "top":
      return { x: 0, y: -distance };
    case "bottom":
      return { x: 0, y: distance };
    case "left":
      return { x: -distance, y: 0 };
    case "right":
      return { x: distance, y: 0 };
    default:
      return { x: 0, y: -distance };
  }
};

export function TextMove({
  children,
  direction = "top",
  distance = 50,
  inFrame = 30,
  outFrame = 90,
  style = {},
}: TextMoveProps) {
  const frame = useCurrentFrame();
  const { x, y } = getXY(direction, distance);

  const moveStyle = interpolateStyles(
    frame,
    [inFrame, (inFrame + outFrame) / 2, outFrame],
    [
      {
        opacity: 0,
        transform: makeTransform([translateX(x), translateY(y)]),
      },
      {
        opacity: 1,
        transform: makeTransform([translateX(0), translateY(0)]),
      },
      {
        opacity: 0,
        transform: makeTransform([translateX(x), translateY(y)]),
      },
    ],
    {
      easing: Easing.bezier(0.45, 0, 0.55, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill>
      <AbsoluteFill className="justify-center items-center">
        <div style={{ ...moveStyle, ...style }}>{children}</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
