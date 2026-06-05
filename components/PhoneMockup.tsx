"use client";

import { useState, useEffect } from "react";

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

export default function PhoneMockup({
  size = "lg",
  frame = "dark",
}: {
  size?: "sm" | "lg";
  frame?: "dark" | "light";
}) {
  const sm = size === "sm";
  const light = frame === "light";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % screenshots.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`relative ${sm ? "w-[200px] h-[400px]" : "w-[270px] h-[530px]"}
        rounded-[40px] border-[10px] overflow-hidden flex-shrink-0
        ${
          light
            ? "border-surface-2 bg-surface shadow-[0_40px_90px_rgba(69,134,243,0.18)]"
            : "border-gray-800 bg-black shadow-[0_60px_120px_rgba(0,0,0,0.28)]"
        }`}
    >
      {/* Notch */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-5 rounded-b-3xl z-20 ${
          light ? "bg-surface-2" : "bg-gray-800"
        }`}
      />

      {/* Carousel */}
      <div className="h-full w-full relative">
        {screenshots.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`EhViewer screenshot ${i + 1}`}
            draggable={false}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
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
