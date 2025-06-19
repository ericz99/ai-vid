import { z } from "zod";
export const COMP_NAME = "MyComp";

export const VIDEO_DIMENSIONS = {
  TikTok: {
    standard: { width: 1080, height: 1920, aspectRatio: "9:16" },
  },
  YouTube: {
    standard: { width: 1920, height: 1080, aspectRatio: "16:9" },
    shorts: { width: 1080, height: 1920, aspectRatio: "9:16" },
  },
  Instagram: {
    squareFeed: { width: 1080, height: 1080, aspectRatio: "1:1" },
    portraitFeed: { width: 1080, height: 1350, aspectRatio: "4:5" },
    reelsStories: { width: 1080, height: 1920, aspectRatio: "9:16" },
  },
};

export const DEFAULT_DURATION_IN_FRAMES = 200;
export const DEFAULT_VIDEO_WIDTH = 1280;
export const DEFAULT_VIDEO_HEIGHT = 720;
export const DEFAULT_VIDEO_FPS = 30;

export const CompositionProps = z.object({
  title: z.string(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "Next.js and Remotion",
};

// - 1500 to display a lot of words at a time
// - 200 to only display 1 word at a time
export const SWITCH_CAPTIONS_EVERY_MS = 200;
