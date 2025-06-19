import { AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import React from "react";
import { LoopableOffthreadVideo } from "../loop-thread-video";

loadFont("normal", {
  subsets: ["latin"],
  weights: ["400", "700"],
});

export const Main = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <AbsoluteFill>
        <LoopableOffthreadVideo
          src="https://1beinzj2lh.ufs.sh/f/aRikP5xoOpFDFU8pcVZqtR0IMNuelXkdpmUBFaJ9hiGEA48W"
          style={{
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
