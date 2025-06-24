"use client";

import { Player, PlayerRef, RenderPoster } from "@remotion/player";
import { preloadVideo } from "@remotion/preload";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import {
  DEFAULT_DURATION_IN_FRAMES,
  DEFAULT_VIDEO_FPS,
  DEFAULT_VIDEO_HEIGHT,
  DEFAULT_VIDEO_WIDTH,
} from "@/lib/preset";
import { Main } from "@/remotion/main";
import { AbsoluteFill } from "remotion";
import LoadingSpinner from "@/components/spinner";
import { parseMedia } from "@remotion/media-parser";
import {
  HighlightBRollSequence,
  HighlightOverlaySequence,
  HighlightTextSequence,
  HighlightType,
  ImageSequence,
  TextSequence,
  useTimelineStore,
} from "@/remotion/store";
import { SequenceTimeline } from "@/components/sequence-timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Subtitles } from "@/components/subtitles";
import { TRACKS } from "@/remotion/constants";
import { TextTools } from "@/components/tools/text-tools";
import { MediaTools } from "@/components/tools/media-tools";
import { VisualTimeline } from "@/components/visual-timeline";
import { HighlightTextTools } from "@/components/custom/text-tools";

const calculateCaptionedVideoMetadata = async ({ src }: { src: string }) => {
  const { slowDurationInSeconds, dimensions } = await parseMedia({
    src: src,
    fields: {
      slowDurationInSeconds: true,
      dimensions: true,
    },
    acknowledgeRemotionLicense: true,
  });

  if (dimensions === null) {
    throw new Error("Not a video file");
  }

  const fps = 30;

  return {
    durationInFrames: Math.floor(slowDurationInSeconds * fps),
    fps,
    width: dimensions.width,
    height: dimensions.height,
  };
};

export function PageClient({
  videoSrc,
  subtitles = null,
}: {
  videoSrc: string;
  subtitles: { transcript: string; srt: string } | null;
}) {
  const {
    config,
    setConfig,
    setPlayerRef,
    setCurrentFrame,
    selectedSequenceId,
    sequences,
    selectedHighlightFrame,
    highlightSequences,
  } = useTimelineStore();
  const playerRef = useRef<PlayerRef>(null);
  const [isPreloaded, setPreload] = useState(false);
  const [selectedType, setSelected] = useState<HighlightType | null>(null);

  useEffect(() => {
    if (config || subtitles) {
      if (playerRef && playerRef.current != null) {
        setPlayerRef(playerRef as React.RefObject<PlayerRef>);
      }
    }
  }, [config, playerRef, setPlayerRef, subtitles]);

  useEffect(() => {
    if (!isPreloaded) {
      setPreload(true);

      const unpreloadVideo = preloadVideo(videoSrc);

      return () => {
        unpreloadVideo();
      };
    }
  }, [isPreloaded, videoSrc]);

  useEffect(() => {
    if (isPreloaded) {
      calculateCaptionedVideoMetadata({
        src: videoSrc,
      })
        .then((d) => {
          setConfig(d);
        })
        .catch((err) => {
          console.log(`Error fetching metadata: ${err}`);
        });
    }
  }, [isPreloaded, setConfig, videoSrc]);

  useEffect(() => {
    if (config || subtitles) {
      if (playerRef.current) {
        playerRef.current.addEventListener("frameupdate", (e) => {
          setCurrentFrame(e.detail.frame);
        });
      }
    }
  }, [config, playerRef, setCurrentFrame, subtitles]);

  const renderPoster: RenderPoster = useCallback(({ isBuffering }) => {
    if (isBuffering) {
      return (
        <AbsoluteFill
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <LoadingSpinner size="xl" />
        </AbsoluteFill>
      );
    }

    return null;
  }, []);

  const inputProps = useMemo(() => {
    return {
      subtitles,
      videoSrc,
    };
  }, [subtitles, videoSrc]);

  const seq = useMemo(() => {
    if (selectedSequenceId) {
      return sequences[selectedSequenceId];
    }
  }, [sequences, selectedSequenceId]);

  const highlightSequence = useMemo(() => {
    if (selectedHighlightFrame) {
      console.log("selectedHighlightFrame", selectedHighlightFrame);
      const [type, range] = selectedHighlightFrame.split("-");

      if (type === "text") {
        return highlightSequences[`text-${range}`] as HighlightTextSequence;
      } else if (type === "overlay") {
        return highlightSequences[
          `overlay-${range}`
        ] as HighlightOverlaySequence;
      } else if (type === "broll") {
        return highlightSequences[`broll-${range}`] as HighlightBRollSequence;
      }
    }
  }, [selectedHighlightFrame, highlightSequences]);

  console.log("highlightSequence", highlightSequence);

  return (
    <div className="md:max-w-full lg:max-w-8xl lg:container lg:mx-auto flex gap-4 h-screen overflow-hidden p-4">
      <div className="flex-1 overflow-y-auto p-2 bg-white border border-solid rounded-md">
        <Tabs defaultValue="sequence">
          <TabsList className="w-full">
            <TabsTrigger value="sequence">Sequence</TabsTrigger>
            <TabsTrigger value="visuals">Visuals</TabsTrigger>
            <TabsTrigger value="subtitles">Subtitles</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
          </TabsList>

          <TabsContent value="sequence">
            <SequenceTimeline />
          </TabsContent>

          <TabsContent value="visuals">
            <VisualTimeline
              setSelected={(type: HighlightType) => setSelected(type)}
            />
          </TabsContent>

          <TabsContent value="subtitles">
            <Subtitles />
          </TabsContent>
          <TabsContent value="audio">audio</TabsContent>
        </Tabs>
      </div>

      {selectedSequenceId && seq?.track !== TRACKS.SUBTITLES && (
        <div className="flex-1 overflow-y-auto p-2 bg-white border border-solid rounded-md">
          {seq && seq?.track === TRACKS.TEXT && (
            <TextTools sequence={seq as TextSequence} />
          )}

          {seq && seq?.track === TRACKS.IMAGE && (
            <MediaTools sequence={seq as ImageSequence} />
          )}
        </div>
      )}

      {selectedType && selectedType === "text" && (
        <div className="flex-1 overflow-y-auto p-2 bg-white border border-solid rounded-md">
          {highlightSequence && (
            <HighlightTextTools
              sequence={highlightSequence as HighlightTextSequence}
            />
          )}
        </div>
      )}

      {selectedType && selectedType === "overlay" && (
        <div className="flex-1 overflow-y-auto p-2 bg-white border border-solid rounded-md">
          Overlay
        </div>
      )}

      {selectedType && selectedType === "b-roll" && (
        <div className="flex-1 overflow-y-auto p-2 bg-white border border-solid rounded-md">
          B-roll
        </div>
      )}

      <div className="flex-1 flex items-center justify-center p-2">
        <div className="h-full w-full relative flex justify-center items-center">
          {!config || !subtitles ? (
            <div className="flex flex-col justify-center items-center gap-4">
              <LoadingSpinner size="xl" />
              <span>Loading your video preview</span>
            </div>
          ) : (
            <Player
              ref={playerRef}
              component={Main}
              durationInFrames={
                config?.durationInFrames ?? DEFAULT_DURATION_IN_FRAMES
              }
              fps={config?.fps ?? DEFAULT_VIDEO_FPS}
              compositionHeight={config?.height ?? DEFAULT_VIDEO_HEIGHT}
              compositionWidth={config?.width ?? DEFAULT_VIDEO_WIDTH}
              renderPoster={renderPoster}
              showPosterWhenUnplayed
              controls
              loop
              acknowledgeRemotionLicense
              inputProps={inputProps}
            />
          )}
        </div>
      </div>
    </div>
  );
}
