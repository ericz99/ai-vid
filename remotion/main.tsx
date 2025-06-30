"use client";

import { AbsoluteFill, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import { Caption, createTikTokStyleCaptions } from "@remotion/captions";
import { LoopableOffthreadVideo } from "./loop-thread-video";
import { useEffect, useMemo } from "react";
import { SWITCH_CAPTIONS_EVERY_MS } from "@/lib/preset";
import {
  SequenceObject,
  TextSequence as ITextSequence,
  useTimelineStore,
  HighlightTextSequence as IHighlightTextSequence,
} from "./store";
import { TRACKS } from "./constants";
// import { ImageSequence } from "./components/image-sequence";
// import { TextSequence } from "./components/text-sequence";
import { HighlightTextSequence } from "./components/highlight-text-sequence";
import { convertTokensToCaptions, WordBase } from "./utils";
import { SubtitleSequence } from "./components/subtitle-sequence";

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
  subtitles: { transcript: string; srt: string; tokens: WordBase[] } | null;
  videoSrc: string;
}) => {
  const {
    sequences,
    highlightSequences,
    bulkAddSequence,
    captions,
    setCaptions,
    loadCaption,
    setLoadCaption,
    enableCaptions,
  } = useTimelineStore();

  const { fps } = useVideoConfig();

  useEffect(() => {
    if (!captions.length) {
      // const { captions: parseCaptions } = parseSrt({ input: subtitles!.srt });
      // const formattedCaptions = formatCaptionsForRemotion(parseCaptions);
      // setCaptions(formattedCaptions);

      const tokenCaptions = convertTokensToCaptions(subtitles!.tokens);
      const formattedCaptions = formatCaptionsForRemotion(tokenCaptions);
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
    if (!loadCaption && pages.length > 0) {
      console.log("LOADING SEQUENCES");
      const allCaptionSequence = pages
        .map((page, index) => {
          const originalToMs = page.tokens[page.tokens.length - 1].toMs;
          const durationMs = originalToMs - page.startMs;

          return {
            type: "text",
            id: `subtitle__${index}`,
            fromMs: page.startMs,
            toMs: originalToMs,
            durationMs,
            track: TRACKS.SUBTITLES,
            text: page.text,
            config: {},
            tokens: page.tokens,
          };
        })
        .filter((c) => c) as SequenceObject[];

      // # bulk add caption sequences
      bulkAddSequence(allCaptionSequence);

      // # update load caption
      setLoadCaption();
    }
  }, [bulkAddSequence, fps, pages, loadCaption, setLoadCaption]);

  const subTitlesSequences = useMemo(() => {
    const captions = Object.values(sequences)
      .filter((seq) => seq.track === TRACKS.SUBTITLES)
      .sort((a, b) => a.fromMs - b.fromMs) as ITextSequence[];

    return captions.filter((seq) => !seq.hidden);
  }, [sequences]);

  console.log("subTitlesSequences", subTitlesSequences);

  // const titleSequences = useMemo(() => {
  //   return Object.values(sequences)
  //     .filter((seq) => seq.track === TRACKS.TEXT)
  //     .sort((a, b) => a.fromMs - b.fromMs) as ITextSequence[];
  // }, [sequences]);

  // const imageSequence = useMemo(() => {
  //   return Object.values(sequences)
  //     .filter((seq) => seq.track === TRACKS.IMAGE)
  //     .sort((a, b) => a.fromMs - b.fromMs) as IImageSequence[];
  // }, [sequences]);

  const customTextSequences = useMemo(() => {
    return Object.values(highlightSequences)
      .filter((seq) => seq.track === TRACKS.TEXT)
      .sort((a, b) => a.fromMs - b.fromMs) as IHighlightTextSequence[];
  }, [highlightSequences]);

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
      {enableCaptions &&
        subTitlesSequences.map((seq) => (
          <SubtitleSequence key={seq.id} sequence={seq} />
        ))}

      {/* TEXT SEQUENCE */}
      {/* {titleSequences.map((seq) => (
        <TextSequence key={seq.id} sequence={seq} />
      ))} */}

      {/* IMAGE SEQUENCE */}
      {/* {imageSequence.map((seq) => (
        <ImageSequence key={seq.id} sequence={seq} />
      ))} */}

      {/* CUSTOM TEXT SEQUENCE */}
      {customTextSequences.map((seq) => (
        <HighlightTextSequence key={seq.id} sequence={seq} />
      ))}
    </AbsoluteFill>
  );
};
