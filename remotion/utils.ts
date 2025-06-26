import type { Caption } from "@remotion/captions";

export type WordToken = {
  word: string;
  fromMs: number;
  toMs: number;
};

export type WordBase = {
  word: string;
  start: number;
  end: number;
  confidence: number;
  punctuated_word: string;
};

export function secondsToMilliseconds(seconds: number): number {
  return seconds * 1000;
}

export function chunkArrayWithTiming(
  array: string[],
  totalDurationMs: number,
  chunkSize: number
): WordToken[][] {
  const totalWords = array.length;
  const wordDurations: number[] = [];
  const baseDuration = totalDurationMs / totalWords;
  let accumulated = 0;

  for (let i = 0; i < totalWords; i++) {
    // Round each word's duration to avoid float errors
    const rounded = Math.round(baseDuration);
    wordDurations.push(rounded);
    accumulated += rounded;
  }

  // Adjust last word duration so total is exact
  const durationDiff = accumulated - totalDurationMs;
  if (durationDiff !== 0 && wordDurations.length > 0) {
    wordDurations[wordDurations.length - 1] -= durationDiff;
  }

  const wordTokens: WordToken[] = [];
  let currentTime = 0;

  for (let i = 0; i < totalWords; i++) {
    const fromMs = currentTime;
    const toMs = fromMs + wordDurations[i];
    wordTokens.push({ word: array[i], fromMs, toMs });
    currentTime = toMs;
  }

  const result: WordToken[][] = [];
  for (let i = 0; i < wordTokens.length; i += chunkSize) {
    result.push(wordTokens.slice(i, i + chunkSize));
  }

  return result;
}

export const convertTokensToCaptions = (tokens: WordBase[]) => {
  const captions: Caption[] = [];

  for (const token of tokens) {
    const { punctuated_word, start, end, confidence } = token;

    captions.push({
      text: punctuated_word,
      startMs: secondsToMilliseconds(start),
      endMs: secondsToMilliseconds(end),
      confidence,
      timestampMs: null,
    });
  }

  return captions;
};
