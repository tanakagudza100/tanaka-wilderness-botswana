"use client";

import dynamic from "next/dynamic";

const AboutVideoPlayer = dynamic(
  () => import("@/components/common/AboutVideoPlayer"),
  { ssr: false }
);

const MEDIA_SRC =
  "https://tanaka-images.s3.us-east-1.amazonaws.com/Discover+Botswana+A+Wildlife+Haven+-+Wilderness.mp4";

export default function AboutVideoSection() {
  return <AboutVideoPlayer src={MEDIA_SRC} />;
}
