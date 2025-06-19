"use client";

import { AbsoluteFill, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import {
  Caption,
  createTikTokStyleCaptions,
  parseSrt,
} from "@remotion/captions";
import { LoopableOffthreadVideo } from "./loop-thread-video";
import { useEffect, useMemo } from "react";
import { SWITCH_CAPTIONS_EVERY_MS } from "@/lib/preset";
import { SequenceObject, useTimelineStore } from "./store";
import { TRACKS } from "./constants";
import { ImageSequence } from "./components/image-sequence";
import { SubtitleSequence } from "./components/subtitle-sequence";
import { TextSequence } from "./components/text-sequence";

loadFont("normal", {
  subsets: ["latin"],
  weights: ["400", "700"],
});

function formatCaptionsForRemotion(captions: Caption[]): Caption[] {
  return captions.map((caption, index) => {
    const updatedText =
      index === 0
        ? caption.text
        : caption.text.startsWith(" ")
        ? caption.text
        : " " + caption.text;

    return {
      ...caption,
      text: updatedText,
    };
  });
}

export const Main = ({
  subtitles,
  videoSrc,
}: {
  subtitles: { transcript: string; srt: string } | null;
  videoSrc: string;
}) => {
  const { sequences, bulkAddSequence, captions, setCaptions } =
    useTimelineStore();

  const { fps } = useVideoConfig();

  useEffect(() => {
    if (!captions.length) {
      const { captions: parseCaptions } = parseSrt({ input: subtitles!.srt });
      const formattedCaptions = formatCaptionsForRemotion(parseCaptions);
      setCaptions(formattedCaptions);
    }
  }, [subtitles, captions, setCaptions]);

  const { pages } = useMemo(() => {
    return createTikTokStyleCaptions({
      combineTokensWithinMilliseconds: SWITCH_CAPTIONS_EVERY_MS,
      captions: captions ?? [],
    });
  }, [captions]);

  // # load default sequence for the captions
  useEffect(() => {
    const hasSequence = Object.keys(sequences);
    if (hasSequence.length === 0) {
      console.log("LOADING SEQUENCES");
      const allCaptionSequence = pages
        .map((page, index) => {
          const originalToMs = page.tokens[0].toMs;
          const durationMs = originalToMs - page.startMs;

          return {
            type: "text",
            id: `text__${index}`,
            fromMs: page.startMs,
            toMs: originalToMs,
            durationMs,
            track: TRACKS.SUBTITLES,
            text: page.text,
          };
        })
        .filter((c) => c) as SequenceObject[];

      // # bulk add caption sequences
      bulkAddSequence(allCaptionSequence);
    }
  }, [bulkAddSequence, fps, pages, sequences]);

  const subTitlesSequences = Object.values(sequences)
    .filter((seq) => seq.type === "text")
    .sort((a, b) => a.fromMs - b.fromMs);

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <AbsoluteFill>
        <LoopableOffthreadVideo
          src={videoSrc}
          style={{
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>

      {/* SUBTITLE SEQUENCE - TRACK 1 -> SUBTITLES */}
      {subTitlesSequences.map((seq) => (
        <SubtitleSequence key={seq.id} sequence={seq} />
      ))}

      <TextSequence
        sequence={{
          type: "text",
          id: `text__0`,
          fromMs: 2000,
          toMs: 10000,
          durationMs: 8000,
          track: TRACKS.TEXT,
          text: "I love Rosé from BP!",
          pos: {
            top: 100,
            left: 0,
          },
          width: 200,
          color: "#f07167",
        }}
      />

      <ImageSequence
        sequence={{
          fromMs: 2000,
          toMs: 4000,
          durationMs: 2000,
          src: "https://1beinzj2lh.ufs.sh/f/aRikP5xoOpFDr2gamwsULMt1R84T2JfsEGqg3dy0vxonNl67",
          styleType: "full",
          type: "image",
          id: "image__1",
          transitionIn: "fade",
          transitionOut: "fade",
        }}
      />

      <ImageSequence
        sequence={{
          fromMs: 4000,
          toMs: 6000,
          durationMs: 2000,
          src: "https://1beinzj2lh.ufs.sh/f/aRikP5xoOpFD9byk6Yr8zhQiCDwR2VFA4GUeg1mk3nNLsBq0",
          styleType: "full",
          type: "image",
          id: "image__2",
          transitionIn: "slide",
          transitionOut: "slide",
        }}
      />
    </AbsoluteFill>
  );
};
