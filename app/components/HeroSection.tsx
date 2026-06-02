import { Download, BookOpen, Star } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

type Avatar = {
  bg: string;
  initials: string;
  top: string;
  left?: string;
  right?: string;
  duration: number;
  delay: number;
};

const avatars: Avatar[] = [
  {
    bg: "#FFB8B8",
    initials: "AK",
    top: "20%",
    left: "6%",
    duration: 3,
    delay: 0,
  },
  {
    bg: "#FFD6B0",
    initials: "RM",
    top: "30%",
    right: "7%",
    duration: 3.5,
    delay: 0.3,
  },
  {
    bg: "#B0D8FF",
    initials: "JS",
    top: "58%",
    left: "4%",
    duration: 4,
    delay: 0.6,
  },
  {
    bg: "#FFB0C8",
    initials: "KL",
    top: "65%",
    right: "5%",
    duration: 4.5,
    delay: 0.9,
  },
  {
    bg: "#FFC8B8",
    initials: "PQ",
    top: "80%",
    left: "14%",
    duration: 5,
    delay: 1.2,
  },
  {
    bg: "#FFE8B0",
    initials: "TH",
    top: "42%",
    right: "4%",
    duration: 5.5,
    delay: 1.5,
  },
];

const socialProofAvatars = ["#E63946", "#FFD6B0", "#B0D8FF", "#FFB0C8"];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center
                 pt-28 pb-20 px-6 overflow-hidden bg-[#FFF8F5]"
    >
      {/* Background ambient glows */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full
                      bg-[#E63946]/18 blur-[120px] -z-10 pointer-events-none"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full
                      bg-[#FF7B7B]/12 blur-[100px] -z-10 pointer-events-none"
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#7A1A1A 1px, transparent 1px), linear-gradient(90deg, #7A1A1A 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating avatars */}
      {avatars.map((a, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex w-11 h-11 rounded-full items-center justify-center
                     text-white text-[10px] font-bold border-[3px] border-white
                     shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          style={{
            backgroundColor: a.bg,
            top: a.top,
            left: a.left,
            right: a.right,
            animation: `floatY10 ${a.duration}s ease-in-out ${a.delay}s infinite`,
          }}
        >
          {a.initials}
        </div>
      ))}

      {/* Main content */}
      <div className="text-center max-w-3xl mx-auto w-full">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     bg-white border border-[#ECECEC] shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                     text-sm text-[#666666] mb-8"
          style={{ animation: "heroFadeInUp 0.55s ease both" }}
        >
          <Star size={13} className="text-[#E63946] fill-[#E63946]" />
          Free Manga Reader · Android & iOS
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#111111]
                     leading-[1.08] tracking-[-0.02em] mb-6"
        >
          Read Manga <br className="hidden sm:block" />
          Anytime,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A01218] via-[#C81D25] to-[#E63946]">
            Anywhere.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-[#666666] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "heroFadeInUp 0.6s ease 0.2s both" }}
        >
          EhViewer brings a huge manga catalog, offline downloads, zoom-perfect
          reading, and custom themes to your phone — completely free.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          style={{ animation: "heroFadeInUp 0.6s ease 0.28s both" }}
        >
          <a
            href="#download"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#111111] text-white
                       font-semibold text-[15px] shadow-[0_8px_32px_rgba(17,17,17,0.22)]
                       hover:bg-[#2a2a2a] hover:scale-[1.04] active:scale-[0.97]
                       transition-all duration-200"
          >
            <Download size={18} />
            Download APK
          </a>

          <a
            href="#features"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#111111]
                       font-semibold text-[15px] border border-[#ECECEC]
                       shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:border-[#E63946]
                       hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
          >
            <BookOpen size={16} className="text-[#E63946]" />
            View Features
          </a>
        </div>

        {/* Social proof */}
        <div
          className="flex items-center justify-center gap-3"
          style={{ animation: "heroFadeIn 0.6s ease 0.45s both" }}
        >
          <div className="flex -space-x-2">
            {socialProofAvatars.map((c, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <p className="text-sm text-[#666666]">
            <span className="font-bold text-[#111111]">2M+</span> manga readers
            worldwide
          </p>
        </div>
      </div>

      {/* Phone mockup */}
      <div
        className="relative mt-16"
        style={{
          animation:
            "heroPhoneEnter 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.38s both",
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[#E63946]/25 blur-3xl -z-10 rounded-full" />
        <div className="absolute inset-0 bg-[#FFB8B8]/30 blur-[60px] scale-75 -z-10 rounded-full" />
        <PhoneMockup />
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: "heroFadeIn 0.6s ease 1.1s both" }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-[#E63946]/50 flex items-start justify-center pt-1.5">
          <div
            className="w-1 h-2 rounded-full bg-[#E63946]"
            style={{ animation: "scrollDot 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
