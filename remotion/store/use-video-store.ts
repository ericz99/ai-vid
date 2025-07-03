export type VideoCreationType = "meme" | "ranking" | "kpop";

type VideoSequenceMap = {
  meme: { memeText: string; duration: number };
  ranking: { items: string[]; title: string };
  kpop: { idolName: string; fanComments: string[] };
};

export interface VideoCreationStore {
  type: VideoCreationType;
}
