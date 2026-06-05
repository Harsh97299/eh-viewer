import Link from "next/link";
import { Sparkles, Palette, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PhoneMockup from "../../components/PhoneMockup";
import AnimateIn from "../../components/AnimateIn";
import FAQSection from "../../components/FAQSection";

export const metadata = {
  title: "About EhViewer — Free Open-Source Manga Reader",
  description:
    "The story behind EhViewer — a free, open-source manga reader built by the community to give fans worldwide a smooth, friendly reading experience.",
};

interface Value {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Sparkles,
    color: "#4586F3",
    title: "Discovery",
    description:
      "EhViewer is built to help you find your next favorite series — fresh features that make discovering manga on your phone genuinely fun.",
  },
  {
    icon: Palette,
    color: "#EB4334",
    title: "Reader-First Design",
    description:
      "Like a perfectly organized manga shelf, EhViewer keeps everything exactly where you need it — a smooth, intuitive experience for every reader.",
  },
  {
    icon: Heart,
    color: "#35AA53",
    title: "Community",
    description:
      "EhViewer is open source means fans helping fans. Contributors, translators, and maintainers around the world keep it growing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="px-6 pt-36 pb-20 relative overflow-hidden">
          {/* Ambient glows — multicolor */}
          <div className="absolute -top-10 right-1/4 w-96 h-96 rounded-full bg-blue/20 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/6 w-80 h-80 rounded-full bg-red/15 blur-[110px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-yellow/12 blur-[100px] pointer-events-none" />
          <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-green/10 blur-[110px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <AnimateIn direction="left">
              <p className="text-sm font-semibold text-blue tracking-[0.12em] uppercase mb-4">
                Our Story
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
                About{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue via-green to-red">
                  EhViewer
                </span>
              </h1>

              <p className="mt-6 text-text-muted leading-relaxed">
                The internet is more fun when knowledge is shared. EhViewer
                exists to give manga fans worldwide a smooth, friendly place to
                read — clean, fast, and free of the clutter that gets in the way
                of a good story.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                EhViewer started as a passion project and grew into a true
                open-source effort. Every great manga journey begins with a
                single chapter, and we wanted that first chapter to feel
                effortless on any phone.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                Today EhViewer is shaped by passionate contributors, translators,
                and maintainers around the world — fans helping fans discover the
                next series worth staying up for.
              </p>
            </AnimateIn>

            {/* Phone visual */}
            <AnimateIn
              direction="right"
              className="flex justify-center lg:justify-end"
            >
              <div
                className="relative shrink-0"
                style={{ animation: "floatY14 4.5s ease-in-out infinite" }}
              >
                <div className="absolute inset-0 bg-blue/20 blur-[70px] scale-90 rounded-full -z-10" />
                <PhoneMockup size="lg" frame="dark" />
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-6 py-24 bg-surface relative overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute -top-20 right-1/5 w-96 h-96 rounded-full bg-red/8 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/5 w-80 h-80 rounded-full bg-blue/10 blur-[110px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <AnimateIn className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-blue tracking-[0.12em] uppercase mb-4">
                What Drives Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                What EhViewer stands for
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                The values that guide every decision behind EhViewer and keep
                the reading experience fun.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {values.map((value, i) => (
                <AnimateIn key={value.title} delay={i * 100}>
                  <div
                    className="rounded-[28px] bg-background border border-border p-7 h-full
                               shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                               hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]
                               hover:-translate-y-2.5 transition-all duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${value.color}1A` }}
                    >
                      <value.icon
                        size={22}
                        style={{ color: value.color }}
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-[17px] font-bold text-foreground mb-2 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-[14px] text-text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Ready for your next reading arc?
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed max-w-xl">
                Download EhViewer for Android and dive into your next favorite
                manga — free, open source, no signup, no ads.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/download"
                  className="px-7 py-3.5 rounded-full bg-blue text-white font-semibold text-[15px]
                             shadow-[0_8px_28px_rgba(69,134,243,0.3)] hover:bg-blue-hover
                             hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
                >
                  Download EhViewer
                </Link>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-full border border-border text-foreground font-semibold
                             text-[15px] hover:bg-surface transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        <FAQSection className="bg-surface" />
      </main>
      <Footer />
    </>
  );
}
