"use server";

import { WordBase } from "@/remotion/utils";
import { createClient, srt } from "@deepgram/sdk";

const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

export const transcribeAudio = async (url: string) => {
  const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
    {
      url,
    },
    {
      model: "nova-3",
      language: "en",
      smart_format: true,
      utterances: true,
      filler_words: true,
      dictation: true,
      punctuate: true,
    }
  );

  if (error) {
    throw error;
  }

  const transcript = result.results.channels[0].alternatives[0].transcript;
  const srtValue = srt(result);
  const tokens = result.results.channels[0].alternatives[0].words as WordBase[];

  return {
    transcript,
    srt: srtValue,
    tokens,
  };
};
