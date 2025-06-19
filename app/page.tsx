import React from "react";
import { PageClient } from "./page.client";
import { transcribeAudio } from "./action";

const SAMPLE_VIDEO_SRC =
  "https://1beinzj2lh.ufs.sh/f/aRikP5xoOpFDwgBung2GU6FzT0KrmlQ91P8stpWjALnXRfBI";

export default async function Page() {
  const transcribeData = await transcribeAudio(SAMPLE_VIDEO_SRC);
  console.log(transcribeData);

  return (
    <>
      <PageClient videoSrc={SAMPLE_VIDEO_SRC} subtitles={transcribeData} />
    </>
  );
}
