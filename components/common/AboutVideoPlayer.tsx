"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

type Props = {
  src: string;
};

export default function AboutVideoPlayer({ src }: Props) {
  const params = useSearchParams();
  const shouldPlay = params?.get("play") === "1";
  const isVideo = true; // Force video player since we know it's a video
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement | null>(null);

  useEffect(() => {
    if (mediaRef.current) {
      mediaRef.current.load(); // Ensure media is loaded
      if (shouldPlay) {
        const playPromise = mediaRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Autoplay prevented:", error);
          });
        }
      }
    }
  }, [shouldPlay, src]);

  if (isVideo) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <video
          ref={mediaRef as React.RefObject<HTMLVideoElement>}
          src={src}
          controls
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <audio
        ref={mediaRef as React.RefObject<HTMLAudioElement>}
        src={src}
        controls
        className="w-full"
      />
    </div>
  );
}
