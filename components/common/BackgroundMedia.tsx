"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
  src: string;
};

export default function BackgroundMedia({ src }: Props) {
  const pathname = usePathname();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // If we're on the home page, attempt to autoplay muted background video
    if (videoRef.current && pathname === "/") {
      const v = videoRef.current;
      v.muted = true;
      v.play().catch(() => {
        // autoplay may be blocked; ignore
      });
    }
  }, [pathname]);

  const isVideo = /\.(mp4|webm|ogg)$/i.test(src);

  if (isVideo) {
    return (
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover opacity-60"
          loop
          playsInline
          muted
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f1410]/40 via-transparent to-[#0b0b0b]/60" />
      </div>
    );
  }

  // Not a video file — render a subtle decorative overlay instead
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none">
      <div className="w-full h-full bg-gradient-to-b from-[#2b2116] via-[#3b2b1f] to-[#0f1724] opacity-90" />
    </div>
  );
}
