import React from "react";
import { AbsoluteFill, Img, Sequence, staticFile } from "remotion";

export function TwitterPost({
  name,
  userName,
  body,
  image,
  ...rest
}: {
  name: string;
  userName: string;
  profileImg?: string;
  body: string;
  image: string;
}) {
  return (
    <Sequence from={0}>
      <AbsoluteFill
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Tweet Header Section */}
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          style={{ width: "300px" }}
        >
          <div className="flex gap-2 p-2 flex-shrink-0">
            {/* Profile Image */}
            <div className="flex items-center justify-center">
              {!rest.profileImg && (
                <Img
                  src={staticFile("default-pfp.png")}
                  alt="default__pfp"
                  width={32}
                  height={32}
                  className="object-cover rounded-full"
                />
              )}
            </div>

            {/* Profile Name + User name */}
            <div className="flex flex-col text-xs">
              <p className="font-semibold">{name}</p>
              <p className="text-zinc-500">@{userName}</p>
            </div>
          </div>

          {/* Tweet Body */}
          <div className="px-2 pb-2 flex-shrink-0">
            <p className="text-xs">{body}</p>
          </div>

          {/* Tweet Image */}
          <div className="flex-1 flex items-center justify-center px-2 pb-2">
            <div className="w-full h-full flex items-center justify-center">
              <Img
                src={image}
                alt="tweet__img"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </Sequence>
  );
}
