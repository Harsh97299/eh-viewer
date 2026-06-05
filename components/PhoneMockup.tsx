"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const screenshots = [
  "/screenshots/ehviewer-library.webp",
  "/screenshots/ehviewer-search.webp",
  "/screenshots/ehviewer-manga-reader.webp",
  "/screenshots/ehviewer-reading-tools.webp",
  "/screenshots/ehviewer-manga-download.webp",
  "/screenshots/ehviewer-related-manga.webp",
  "/screenshots/ehviewer-sidebar.webp",
  "/screenshots/ehviewer-about.webp",
];

export default function PhoneMockup({ size = "lg" }: { size?: "sm" | "lg" }) {
  const sm = size === "sm";
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % screenshots.length;
        setPrevIndex(i);
        setFading(true);
        setTimeout(() => {
          setPrevIndex(null);
          setFading(false);
        }, 700);
        return next;
      });
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`relative ${sm ? "w-[200px] h-[400px]" : "w-[270px] h-[530px]"}
        rounded-[40px] border-[10px] border-gray-800 bg-black
        shadow-[0_60px_120px_rgba(0,0,0,0.28)] overflow-hidden flex-shrink-0`}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-5 bg-gray-800 rounded-b-3xl z-20" />

      {/* Carousel — only current + prev in DOM */}
      <div className="h-full w-full relative">
        {prevIndex !== null && (
          <Image
            key={`prev-${prevIndex}`}
            src={screenshots[prevIndex]}
            alt=""
            fill
            sizes="270px"
            className={`object-cover transition-opacity duration-700 ${fading ? "opacity-0" : "opacity-100"}`}
          />
        )}
        <Image
          key={`cur-${index}`}
          src={screenshots[index]}
          alt={`EhViewer screenshot ${index + 1}`}
          fill
          sizes="270px"
          priority={index === 0}
          className="object-cover"
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {screenshots.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-4 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
