import { Composition } from "remotion";
import { Main } from "./main";
import {
  COMP_NAME,
  DEFAULT_DURATION_IN_FRAMES,
  DEFAULT_VIDEO_FPS,
  DEFAULT_VIDEO_HEIGHT,
  DEFAULT_VIDEO_WIDTH,
} from "@/lib/preset";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={DEFAULT_DURATION_IN_FRAMES}
        fps={DEFAULT_VIDEO_FPS}
        width={DEFAULT_VIDEO_WIDTH}
        height={DEFAULT_VIDEO_HEIGHT}
        defaultProps={{
          subtitles: null,
          videoSrc: "",
        }}
      />
    </>
  );
};
