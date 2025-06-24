export type WordToken = {
  word: string;
  fromMs: number;
  toMs: number;
};

export function chunkArrayWithTiming(
  array: string[],
  totalDurationMs: number,
  chunkSize: number
): WordToken[][] {
  const totalWords = array.length;
  const durationPerWord = totalDurationMs / totalWords;

  const wordTokens: WordToken[] = array.map((word, index) => {
    const fromMs = index * durationPerWord;
    const toMs = fromMs + durationPerWord;
    return { word, fromMs, toMs };
  });

  const result: WordToken[][] = [];
  for (let i = 0; i < wordTokens.length; i += chunkSize) {
    result.push(wordTokens.slice(i, i + chunkSize));
  }

  return result;
}
