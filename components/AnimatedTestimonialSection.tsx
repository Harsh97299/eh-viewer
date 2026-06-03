"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ');

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "The catalog is massive. Whatever manga I search for, EhViewer has it. Never had to leave the app.",
    by: "Kenji, Daily Reader",
    imgSrc: "/icons/otaku.webp"
  },
  {
    tempId: 1,
    testimonial: "Offline downloads saved my commute. I queue up chapters at home and read on the train, no signal needed.",
    by: "Aisha, Commuter",
    imgSrc: "/icons/girl.webp"
  },
  {
    tempId: 2,
    testimonial: "No account, no tracking, no ads. Finally a reader that respects my privacy. This is how it should be.",
    by: "Marco, Privacy Nerd",
    imgSrc: "/icons/sailor.webp"
  },
  {
    tempId: 3,
    testimonial: "Pinch-to-zoom on detailed panels is buttery smooth. Reading on my phone never strained my eyes like this.",
    by: "Lena, Art Lover",
    imgSrc: "/icons/manga.webp"
  },
  {
    tempId: 4,
    testimonial: "Custom themes are everything. Dark mode at night, sepia for long sessions. EhViewer just gets it.",
    by: "Hiro, Night Owl",
    imgSrc: "/icons/anime_2314736.webp"
  },
  {
    tempId: 5,
    testimonial: "One tap to favorite, folders to organize. My 200-title backlog has never been this tidy.",
    by: "Sofia, Collector",
    imgSrc: "/icons/avatar.webp"
  },
  {
    tempId: 6,
    testimonial: "It's free and open source. I checked the code myself. No shady business, just a great reader.",
    by: "Dev, Tinkerer",
    imgSrc: "/icons/comic-book.webp"
  },
  {
    tempId: 7,
    testimonial: "Switched from three different apps to just EhViewer. Multiple sources in one place is a game changer.",
    by: "Priya, Power User",
    imgSrc: "/icons/girl (1).webp"
  },
  {
    tempId: 8,
    testimonial: "Search by tag, artist, or year actually works. I find exactly what I want in seconds.",
    by: "Tomoko, Hardcore Fan",
    imgSrc: "/icons/anime_6259201.webp"
  },
  {
    tempId: 9,
    testimonial: "Lightweight, fast, and ad-free. Installed the APK in a minute and never looked back.",
    by: "Carlos, Android User",
    imgSrc: "/icons/comic.webp"
  },
  {
    tempId: 10,
    testimonial: "The reading tools — page jump, reading direction, brightness — make long sessions effortless.",
    by: "Yuna, Binge Reader",
    imgSrc: "/icons/avatar (1).webp"
  },
  {
    tempId: 11,
    testimonial: "Best manga reader I've used, hands down. Clean UI, no clutter, just the content.",
    by: "Raj, Manga Veteran",
    imgSrc: "/icons/music_6368891.webp"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-[#4586F3] text-white border-[#2F6FD6]"
          : "z-0 bg-white text-[#202124] border-[#E8EAED] hover:border-[#4586F3]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #DADCE0" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-[#E8EAED]"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-[#F1F3F4] object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px #E8EAED"
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-[#202124]")}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-white/80" : "text-[#5F6368]"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const interval = setInterval(() => handleMove(1), 2000);
    return () => clearInterval(interval);
  }, [testimonialsList]);

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl text-[#202124] transition-colors",
            "bg-white border-2 border-[#E8EAED] hover:bg-[#4586F3] hover:text-white hover:border-[#4586F3]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4586F3] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl text-[#202124] transition-colors",
            "bg-white border-2 border-[#E8EAED] hover:bg-[#4586F3] hover:text-white hover:border-[#4586F3]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4586F3] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default function AnimatedTestimonialSection() {
  return (
    <section id="testimonials" className="py-28 px-6 bg-white relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#4586F3]/12 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#EB4334]/10 blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/6 w-64 h-64 rounded-full bg-[#35AA53]/8 blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
        <p className="text-sm font-semibold text-[#4586F3] tracking-[0.12em] uppercase mb-4">
          Reviews
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] leading-tight tracking-tight">
          Loved by readers everywhere
        </h2>
      </div>
      <StaggerTestimonials />
    </section>
  );
}
