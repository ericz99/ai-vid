import { Composition } from "remotion";
import { Main } from "./main";
import {
  COMP_NAME,
  DEFAULT_DURATION_IN_FRAMES,
  DEFAULT_VIDEO_FPS,
  VIDEO_DIMENSIONS,
} from "@/lib/preset";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={DEFAULT_DURATION_IN_FRAMES}
        fps={DEFAULT_VIDEO_FPS}
        width={VIDEO_DIMENSIONS.YouTube.standard.width}
        height={VIDEO_DIMENSIONS.YouTube.standard.height}
        defaultProps={{
          subtitles: null,
          videoSrc: "",
        }}
      />
    </>
  );
};
