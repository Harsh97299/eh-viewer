import Link from "next/link";
import { Sparkles, Palette, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PhoneMockup from "../../components/PhoneMockup";
import AnimateIn from "../../components/AnimateIn";

export const metadata = {
  title: "About EhViewer — Free Open-Source Manga Reader",
  description:
    "The story behind EhViewer — a free, open-source manga reader built by the community to give fans worldwide a smooth, friendly reading experience.",
  alternates: { canonical: "https://ehviewer.io/about" },
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
      "Being open source means fans helping fans. Contributors, translators, and maintainers around the world keep it growing.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ehviewer.io" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://ehviewer.io/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
                EhViewer is a free, open-source manga and anime comic reader for
                Android, licensed under the GNU General Public License v3
                (GPLv3). The current release is version 1.14.6, published on
                December 17, 2025, supporting Android 8.0 and above.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                EhViewer was originally created by Hippo Seven in 2014 as a
                lightweight gallery client for Android. In 2020, NekoInverter
                forked the project to modernize the codebase and add Material
                Design support. Tarsin Norbin took over maintenance in 2022,
                introducing Material Design 3 and Dynamic Color theming. Since
                2023, Foolbar and the Ehviewer-Overhauled community have driven
                development, adding offline download management, advanced tag
                search, and configurable multi-source gallery browsing.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                Today the project is maintained by the{" "}
                <a
                  href="https://github.com/Ehviewer-Overhauled/Ehviewer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  Ehviewer-Overhauled
                </a>{" "}
                GitHub organization. Contributors, translators, and testers from
                around the world keep EhViewer growing — with no ads, no
                tracking, and no cost to readers.
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

        {/* Project Timeline */}
        <section className="px-6 py-24 relative overflow-hidden">
          <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-yellow/10 blur-[130px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <AnimateIn className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-blue tracking-[0.12em] uppercase mb-4">
                Project Timeline
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                How EhViewer evolved
              </h2>
            </AnimateIn>

            <div className="mt-14 max-w-2xl mx-auto space-y-8">
              {[
                { year: "2014", title: "EhViewer created", desc: "Hippo Seven builds the original EhViewer as a lightweight Android gallery client." },
                { year: "2020", title: "NekoInverter fork", desc: "NekoInverter forks the project to modernize the codebase and add Material Design support." },
                { year: "2022", title: "Material Design 3", desc: "Tarsin Norbin introduces Material Design 3, Dynamic Color theming, and improved performance." },
                { year: "2023", title: "Ehviewer-Overhauled", desc: "Foolbar and the community take over. Offline downloads, advanced tag search, and multi-source browsing added." },
                { year: "2025", title: "Version 1.14.6", desc: "Latest stable release (December 17, 2025) with support for Android 8.0+ and Marshmallow 6.0+ flavors." },
              ].map((item, i) => (
                <AnimateIn key={item.year} direction="left" delay={i * 80}>
                  <div className="flex gap-5">
                    <div className="shrink-0 w-16 text-right">
                      <span className="text-sm font-bold text-blue">{item.year}</span>
                    </div>
                    <div className="border-l-2 border-border pl-5 pb-2">
                      <h3 className="text-[16px] font-bold text-foreground tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-text-muted leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
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

      </main>
      <Footer />
    </>
  );
}
