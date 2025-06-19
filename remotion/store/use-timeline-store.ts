import { PlayerRef } from "@remotion/player";
import { create } from "zustand";
import { RefObject } from "react";
import { Caption } from "@remotion/captions";
import { TRACKS } from "../constants";

type SequenceType =
  | "text"
  | "subtitles"
  | "video"
  | "audio-transition"
  | "image";

interface BaseSequence {
  id: string;
  type: SequenceType;
  fromMs: number;
  toMs: number;
  durationMs: number;
  track?: number;

  transitionIn?: "fade" | "slide" | "wipe" | "flip";
  transitionOut?: "fade" | "slide" | "wipe" | "flip";
}

export interface TextSequence extends BaseSequence {
  type: "text";
  text: string;

  // # position of the text
  pos?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };

  // # color of the text
  color?: string;

  // # width
  width?: number;
}

interface AudioTransitionSequence extends BaseSequence {
  type: "audio-transition";
  audioSrc: string;
}

interface VideoSequence extends BaseSequence {
  type: "video";
  src: string;
}

export interface ImageSequence extends BaseSequence {
  type: "image";
  src: string;

  pos?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };

  scale?: number; // default: 1

  opacity?: number; // 0 to 1

  styleType?: "half" | "full";
}

export type SequenceObject =
  | TextSequence
  | VideoSequence
  | AudioTransitionSequence
  | ImageSequence;

interface TimelineConfig {
  durationInFrames: number;
  height: number;
  width: number;
  fps: number;
}

interface TimelineStore {
  loadCaption: boolean;
  setLoadCaption: () => void;

  selectedSequenceId: string | null;
  setSelectedSequence: (id: string | null) => void;

  currentFrame: number;
  setCurrentFrame: (frame: number) => void;

  config: TimelineConfig | null;
  setConfig: (config: TimelineConfig) => void;

  captions: Caption[];
  setCaptions: (captions: Caption[]) => void;

  sequences: Record<string, SequenceObject>;
  addSequence: (sequence: SequenceObject) => void;
  removeSequence: (id: string) => void;
  updateSequence: (id: string, updated: Partial<SequenceObject>) => void;
  bulkAddSequence: (sequence: SequenceObject[]) => void;

  playerRef: RefObject<PlayerRef> | null;
  setPlayerRef: (playerRef: RefObject<PlayerRef>) => void;

  setState: (state: Partial<TimelineStore>) => Promise<void>;
}

export const useTimelineStore = create<TimelineStore>((set) => ({
  loadCaption: false,
  setLoadCaption: () =>
    set(() => ({
      loadCaption: true,
    })),

  selectedSequenceId: null,
  setSelectedSequence: (id) =>
    set(() => ({
      selectedSequenceId: id,
    })),

  currentFrame: 0,
  setCurrentFrame: (frame) =>
    set(() => ({
      currentFrame: frame,
    })),

  config: null,
  captions: [],

  setCaptions: (captions: Caption[]) =>
    set(() => ({
      captions,
    })),

  setConfig: (config: TimelineConfig) =>
    set(() => ({
      config,
    })),

  sequences: {
    // # DEFAULT WILL DELETE
    text__0: {
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
    },
    image__1: {
      fromMs: 2000,
      toMs: 4000,
      durationMs: 2000,
      src: "https://1beinzj2lh.ufs.sh/f/aRikP5xoOpFDr2gamwsULMt1R84T2JfsEGqg3dy0vxonNl67",
      styleType: "full",
      type: "image",
      id: "image__1",
      track: TRACKS.IMAGE,
      transitionIn: "fade",
      transitionOut: "fade",
    },
    image__2: {
      fromMs: 4000,
      toMs: 6000,
      durationMs: 2000,
      src: "https://1beinzj2lh.ufs.sh/f/aRikP5xoOpFD9byk6Yr8zhQiCDwR2VFA4GUeg1mk3nNLsBq0",
      styleType: "full",
      type: "image",
      id: "image__2",
      track: TRACKS.IMAGE,
      transitionIn: "slide",
      transitionOut: "slide",
    },
  },

  playerRef: null,

  setPlayerRef: (ref) => set({ playerRef: ref }),

  bulkAddSequence: (sequences) => {
    set((state) => {
      const newSequences: Record<string, SequenceObject> = {
        ...state.sequences,
      };

      for (const sequence of sequences) {
        const { id } = sequence;
        newSequences[id] = sequence;
      }

      return {
        sequences: newSequences,
      };
    });
  },

  addSequence: (sequence) =>
    set((state) => ({
      sequences: {
        ...state.sequences,
        [sequence.id]: sequence,
      },
    })),

  removeSequence: (id: string) =>
    set((state) => {
      const updatedSequences: Record<string, SequenceObject> = {
        ...state.sequences,
      };
      delete updatedSequences[id];
      return { sequences: updatedSequences };
    }),

  updateSequence: (id: string, updates: Partial<SequenceObject>) =>
    set((state) => {
      const existing = state.sequences[id];
      if (!existing) return {}; // or optionally throw error
      const updatedSequence = {
        ...existing,
        ...updates,
      } as SequenceObject;
      return {
        sequences: {
          ...state.sequences,
          [id]: updatedSequence,
        },
      };
    }),

  setState: async (partialState) => {
    set((prev) => ({ ...prev, ...partialState }));
  },
}));
