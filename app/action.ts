"use server";

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
    }
  );

  if (error) {
    throw error;
  }

  const transcript = result.results.channels[0].alternatives[0].transcript;
  const srtValue = srt(result);

  // # convert into caption one word each

  return {
    transcript,
    srt: srtValue,
  };
};
