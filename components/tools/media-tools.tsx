"use client";

import React from "react";

import {
  ImageSequence as IImageSequence,
  useTimelineStore,
} from "@/remotion/store";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function MediaTools({ sequence }: { sequence: IImageSequence }) {
  const updateImageConfig = useTimelineStore((s) => s.updateImageConfig);

  return (
    <div className="h-full w-full p-2 flex flex-col gap-6">
      <div className="space-y-2 flex gap-2 justify-between">
        <div className="flex-1 flex flex-col gap-2">
          <Label htmlFor="media-src">Media Src</Label>
          <div className="flex items-center gap-2">
            <Input
              id="media-src"
              value={sequence.src}
              onChange={(e) => {
                updateImageConfig(sequence.id, {
                  src: e.target.value,
                });
              }}
              type="text"
              className="media-src"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <Label>Image Layout</Label>

        <Select
          onValueChange={(value) => {
            updateImageConfig(sequence.id, {
              styleType: value as "full" | "half",
            });
          }}
          defaultValue={sequence.styleType}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Full" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full">Full</SelectItem>
            <SelectItem value="half">Half</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
