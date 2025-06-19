/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchMp4AsDataContent(url: string): Promise<Uint8Array> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch MP4");
  const arrayBuffer = await response.arrayBuffer();
  return new Uint8Array(arrayBuffer);
}

export async function fetchMp4AsBase64(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch MP4");
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return buffer.toString("base64");
}

export function base64ToBlobUrl(base64: string, mimetype: string) {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: mimetype });
  return URL.createObjectURL(blob);
}

export function msToSeconds(ms: number, decimals: number = 2): string {
  return (ms / 1000).toFixed(decimals) + "s";
}
