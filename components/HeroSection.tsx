import { Download, BookOpen } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

type Avatar = {
  src: string;
  top: string;
  left?: string;
  right?: string;
  duration: number;
  delay: number;
};

const avatars: Avatar[] = [
  {
    src: "/icons/sailor.webp",
    top: "20%",
    left: "6%",
    duration: 3,
    delay: 0,
  },
  {
    src: "/icons/girl (1).webp",
    top: "30%",
    right: "7%",
    duration: 3.5,
    delay: 0.3,
  },
  {
    src: "/icons/comic.webp",
    top: "58%",
    left: "4%",
    duration: 4,
    delay: 0.6,
  },
  {
    src: "/icons/manga.webp",
    top: "65%",
    right: "5%",
    duration: 4.5,
    delay: 0.9,
  },
  {
    src: "/icons/anime_2314736.webp",
    top: "80%",
    left: "14%",
    duration: 5,
    delay: 1.2,
  },
  {
    src: "/icons/anime_6259201.webp",
    top: "42%",
    right: "4%",
    duration: 5.5,
    delay: 1.5,
  },
];

const socialProofAvatars = [
  "/icons/avatar.webp",
  "/icons/avatar (1).webp",
  "/icons/girl.webp",
  "/icons/otaku.webp",
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center
                 pt-28 pb-20 px-6 overflow-hidden bg-white"
    >
      {/* Background ambient glows — multicolor */}
      <div className="absolute top-1/4 left-1/6 w-150 h-150 rounded-full bg-[#4586F3]/20 blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-120 h-120 rounded-full bg-[#EB4334]/15 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-3/4 left-1/2 w-90 h-90 rounded-full bg-[#FBBD06]/12 blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-75 h-75 rounded-full bg-[#35AA53]/10 blur-[110px] -z-10 pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#4586F3 1px, transparent 1px), linear-gradient(90deg, #4586F3 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating avatars */}
      {avatars.map((a, i) => (
        <img
          key={i}
          src={a.src}
          alt=""
          className="absolute hidden lg:block w-16 h-16 rounded-full object-cover bg-white
                     border-[3px] border-white shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
          style={{
            top: a.top,
            left: a.left,
            right: a.right,
            animation: `floatY10 ${a.duration}s ease-in-out ${a.delay}s infinite`,
          }}
        />
      ))}

      {/* Content + phone row */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-10">
        {/* Main content */}
        <div className="text-center lg:text-left max-w-xl w-full lg:flex-1">
        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#202124]
                     leading-[1.08] tracking-[-0.02em] mb-6"
        >
          EhViewer: Read Manga <br className="hidden sm:block" />
          Anytime,{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4586F3] via-[#35AA53] to-[#EB4334]">
            Anywhere.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-[#5F6368] text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          style={{ animation: "heroFadeInUp 0.6s ease 0.2s both" }}
        >
          Your next favorite manga adventure starts here. EhViewer packs a huge
          catalog, offline downloads, zoom-perfect reading, and custom themes
          into one free, open-source app. Warning: may cause accidental
          all-night reading sessions.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
          style={{ animation: "heroFadeInUp 0.6s ease 0.28s both" }}
        >
          <a
            href="/download"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#4586F3] text-white
                       font-semibold text-[15px] shadow-[0_8px_32px_rgba(69,134,243,0.3)]
                       hover:bg-[#2F6FD6] hover:scale-[1.04] active:scale-[0.97]
                       transition-all duration-200"
          >
            <Download size={18} />
            Download APK
          </a>

          <a
            href="#features"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#202124]
                       font-semibold text-[15px] border border-[#E8EAED]
                       shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#4586F3]
                       hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
          >
            <BookOpen size={16} className="text-[#4586F3]" />
            View Features
          </a>
        </div>

        {/* Social proof */}
        <div
          className="flex items-center justify-center lg:justify-start gap-3"
          style={{ animation: "heroFadeIn 0.6s ease 0.45s both" }}
        >
          <div className="flex -space-x-2">
            {socialProofAvatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover bg-[#F1F3F4]"
              />
            ))}
          </div>
          <p className="text-sm text-[#5F6368]">
            <span className="font-bold text-[#202124]">2M+</span> readers reading
            with EhViewer worldwide
          </p>
        </div>
      </div>

        {/* Phone mockup */}
        <div
          className="relative lg:shrink-0"
          style={{
            animation:
              "heroPhoneEnter 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.38s both",
          }}
        >
          <div className="absolute inset-x-0 bottom-0 h-32 bg-[#4586F3]/15 blur-3xl -z-10 rounded-full" />
          <div className="absolute inset-0 bg-[#4586F3]/10 blur-[60px] scale-75 -z-10 rounded-full" />
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
