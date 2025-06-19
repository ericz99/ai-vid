import { convertMedia } from "@remotion/webcodecs";

export const convertVideoAudioToWav = async (src: string) => {
  const output = await convertMedia({
    src,
    container: "wav",
  });

  const blob = await output.save();
  return blob;
};
