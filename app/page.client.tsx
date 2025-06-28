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
  ImageSequence,
  TextSequence,
  useTimelineStore,
} from "@/remotion/store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TRACKS } from "@/remotion/constants";
import { TextTools } from "@/components/tools/text-tools";
import { MediaTools } from "@/components/tools/media-tools";
import { PlayerControl } from "@/components/player/player-control";
// import { HighlightTextTools } from "@/components/custom/text-tools";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CaptionsEditor } from "@/components/captions-editor";
import { StylesEditor } from "@/components/styles-editor";
import { WordBase } from "@/remotion/utils";
import { BrollEditor } from "@/components/broll-editor";

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
  subtitles: { transcript: string; srt: string; tokens: WordBase[] } | null;
}) {
  const {
    config,
    setConfig,
    setPlayerRef,
    setCurrentFrame,
    selectedSequenceId,
    sequences,
  } = useTimelineStore();
  const playerRef = useRef<PlayerRef>(null);
  const [isPreloaded, setPreload] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

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

  // const highlightSequence = useMemo(() => {
  //   if (selectedEditSequence) {
  //     console.log("selectedEditSequence", selectedEditSequence);
  //     const [type, range] = selectedEditSequence.split("-");

  //     // setSelected(type as HighlightType);

  //     if (type === "text") {
  //       return highlightSequences[`text-${range}`] as HighlightTextSequence;
  //     } else if (type === "overlay") {
  //       return highlightSequences[
  //         `overlay-${range}`
  //       ] as HighlightOverlaySequence;
  //     } else if (type === "broll") {
  //       return highlightSequences[`broll-${range}`] as HighlightBRollSequence;
  //     }
  //   }
  // }, [selectedEditSequence, highlightSequences]);

  // TODO: if hoverHighlightKey in mapper already or in highlightSequences then ignore do not open  drop down
  // TODO: cannot add duplicate highlight for example broll-24935:26935 text-24935:26935
  // ✅ TODO: in the handleSelection, it needs to make sure it highlights the whole word, for example "I also got their bacon cheese hot do", we're missing the g, g should be zone as well since its a whole word
  // ✅ TODO: we need to be able to select from multiple range, if we select from one line, we should be able to select with the current select the second line
  // ✅ TODO: if we were to click something it should jump to frame, but if we clicked on a highlighted (ALREADY HIGHLIGHTED) text, it should no open the default dropdown
  // TODO: cursor from beginning to end, i want to be able to reselect remove or add more  from a range

  return (
    <div className="flex flex-col justify-center items-center relative h-full">
      <div className="md:max-w-full lg:max-w-6xl lg:container lg:mx-auto h-full max-h-full flex gap-4 overflow-hidden p-4">
        <div className="flex-1 overflow-y-auto p-2 bg-white border border-solid rounded-md">
          <Tabs
            defaultValue="captions"
            style={{ height: "100%", overflow: "hidden" }}
            orientation="horizontal"
          >
            <TabsList className="w-full">
              <TabsTrigger value="captions">Captions</TabsTrigger>
              <TabsTrigger value="styles">Styles</TabsTrigger>
              <TabsTrigger value="broll">B-Rolls</TabsTrigger>
            </TabsList>

            <TabsContent value="broll" className="overflow-y-scroll">
              <div className="h-full">
                <BrollEditor />
              </div>
            </TabsContent>

            <TabsContent value="styles" className="overflow-y-scroll">
              <div className="h-full">
                <StylesEditor />
              </div>
            </TabsContent>

            <TabsContent value="captions" className="overflow-y-scroll">
              <CaptionsEditor />
            </TabsContent>
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

        {/* {selectedType && selectedType === "text" && highlightSequence && (
          <div className="flex-1 overflow-y-auto p-2 bg-white border border-solid rounded-md">
            <HighlightTextTools
              sequence={highlightSequence as HighlightTextSequence}
            />
          </div>
        )}

        {selectedType && selectedType === "overlay" && highlightSequence && (
          <div className="flex-1 overflow-y-auto p-2 bg-white border border-solid rounded-md">
            Overlay
          </div>
        )}

        {selectedType && selectedType === "broll" && highlightSequence && (
          <div className="flex-1 overflow-y-auto p-2 bg-white border border-solid rounded-md">
            B-Roll
          </div>
        )} */}

        <div className="flex-1 flex flex-col h-full py-3 px-2 w-full bg-zinc-100 border border-zinc-300 rounded-md">
          {!config || !subtitles ? (
            <div className="flex h-full flex-col justify-center items-center gap-4">
              <LoadingSpinner size="xl" />
              <span>Loading your video preview</span>
            </div>
          ) : (
            <div className="h-full w-full relative flex flex-col justify-between items-center">
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
                controls={false}
                loop
                acknowledgeRemotionLicense
                inputProps={inputProps}
                className="flex-1 select-none"
                clickToPlay={true}
              />

              <PlayerControl
                playerRef={playerRef}
                durationInFrames={config.durationInFrames}
                fps={config.fps}
              />
            </div>
          )}
        </div>
      </div>

      {dialogOpen && (
        <Dialog
          open={dialogOpen}
          defaultOpen={false}
          onOpenChange={(open) => {
            if (!open) {
              setDialogOpen(false);
            }
          }}
        >
          <DialogTrigger asChild>
            <button
              style={{
                width: 1,
                height: 1,
                opacity: 0,
                pointerEvents: "none",
              }}
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
