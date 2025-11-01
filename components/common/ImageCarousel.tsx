"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
  /**
   * object-fit behavior for images in the carousel. Use 'contain' to avoid cropping.
   */
  fit?: "cover" | "contain";
}

export default function ImageCarousel({
  images,
  alt = "gallery",
  fit = "cover",
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Preload next image
  useEffect(() => {
    if (images.length > 1) {
      const nextIndex = (index + 1) % images.length;
      const preloadImage = document.createElement("img");
      preloadImage.src = images[nextIndex];
    }
  }, [index, images]);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, [images.length]);

  if (!images || images.length === 0) {
    return <div className="bg-slate-800 h-64 rounded-md" />;
  }

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full rounded-md overflow-hidden">
      <div className="relative h-80 bg-black/5 flex items-center justify-center">
        <Image
          src={images[index]}
          alt={`${alt}-${index}`}
          className={`w-full h-full ${
            fit === "contain" ? "object-contain" : "object-cover"
          } transition-all duration-700 ${
            isLoading ? "scale-105 blur-sm" : "scale-100 blur-0"
          }`}
          priority={index === 0}
          fill
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRsdHh4fIR0hISEdICMgICAjIR4eIyMnJSUjHi8vMTMvLzU3Nzc3Nzc3Nzc3Nzf/2wBDARUXFyAeIB4dHh4iIiIfHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>

      {/* controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all"
          >
            <span className="sr-only">Previous image</span>
            <span aria-hidden="true" className="text-xl">
              ‹
            </span>
          </button>

          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all"
          >
            <span className="sr-only">Next image</span>
            <span aria-hidden="true" className="text-xl">
              ›
            </span>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-[var(--accent)]" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
