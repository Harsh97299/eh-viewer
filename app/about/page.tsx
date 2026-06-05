import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AnimateIn from '../../components/AnimateIn'
import Link from 'next/link'
import {
  Lightbulb,
  Users,
  Heart,
  Search,
  Library,
  Shield,
  ZoomIn,
  Palette,
  Download,
  Star,
  BookOpen,
} from 'lucide-react'

export const metadata = {
  title: 'About',
  description:
    'Learn about EhViewer — a free, open-source manga reader for Android built with Material Design 3, Dynamic Color, and a huge catalog of manga comics.',
}

const CORE_VALUES = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We strive to introduce cutting-edge features that transform how you enjoy manga comics on your phone.',
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description:
      'Our interface is crafted with readers in mind, ensuring a seamless and intuitive experience for all manga fans.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description:
      'EhViewer is built by the community, for the community — open source, transparent, and always improving.',
  },
]

const FEATURES = [
  {
    icon: Search,
    title: 'Powerful Search',
    description:
      'Search by keyword, tags, artist, year, and more — with advanced filters for precise results.',
  },
  {
    icon: Library,
    title: 'Huge Collection',
    description:
      'Access a vast catalog spanning every genre — new releases and classics alike, always at your fingertips.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description:
      'No account required, no personal data collected, no ads, no trackers. Browse freely and securely.',
  },
  {
    icon: ZoomIn,
    title: 'Zoom Reading',
    description: 'Pinch to zoom for crystal-clear reading. Never strain your eyes over small text again.',
  },
  {
    icon: Palette,
    title: 'Fully Customizable',
    description:
      'Change themes, layouts, and display settings to create your ideal reading environment.',
  },
  {
    icon: Download,
    title: 'Offline Downloads',
    description:
      'Download your favorite comics and read anywhere — even without an internet connection.',
  },
  {
    icon: Star,
    title: 'Favorites List',
    description: 'Tap the heart icon to save any comic to your favorites for quick access anytime.',
  },
  {
    icon: BookOpen,
    title: 'Reading Progress',
    description:
      'Pick up exactly where you left off — EhViewer saves your position across every title.',
  },
]

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-24 bg-[#00111C] text-[#EAF2F9]">
        {/* Hero */}
        <section className="px-6 pt-16 pb-20">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <p className="text-[#4C9BE0] text-xs font-semibold tracking-[0.14em] uppercase mb-4">
                About EhViewer
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                A manga reader built for readers
              </h1>
              <p className="text-[#93A7B8] leading-relaxed text-lg mb-10">
                EhViewer is a free, open-source manga reader for Android, dedicated to offering a
                seamless reading experience with a user-friendly interface, a huge comic catalog,
                and top-notch privacy — no account, no ads, no tracking.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/download"
                  className="px-5 py-2.5 rounded-full bg-[#00406C] text-white text-sm font-medium
                             hover:bg-[#003A61] transition-colors"
                >
                  Download EhViewer
                </Link>
                <Link
                  href="/faq"
                  className="px-5 py-2.5 rounded-full border border-[#00253E] text-[#EAF2F9] text-sm
                             font-medium hover:bg-[#001A2C] transition-colors"
                >
                  Read the FAQ
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Our Story */}
        <section className="px-6 py-20 border-t border-[#00253E]">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <p className="text-[#4C9BE0] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
                Our Story
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                A vision for better manga reading
              </h2>
              <p className="text-[#93A7B8] leading-relaxed mb-5">
                EhViewer began in 2014 with a simple goal: make online manga reading effortless and
                enjoyable on mobile. Over the years it has been carried forward by a series of
                community contributors — and today the project lives on as a GPLv3-licensed,
                community-driven fork dedicated to high performance and Material Design 3.
              </p>
              <p className="text-[#93A7B8] leading-relaxed">
                The current 1.14.6 release adds gallery reading progress, Windows-compatible
                filename handling, and a range of stability improvements — the result of ongoing
                collaboration from manga fans around the world.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-6 py-20 border-t border-[#00253E]">
          <div className="max-w-6xl mx-auto">
            <AnimateIn>
              <p className="text-[#4C9BE0] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
                Core Values
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">What guides us</h2>
              <p className="text-[#93A7B8] leading-relaxed mb-12 max-w-2xl">
                Discover the principles behind our mission to enhance your manga reading experience.
              </p>
            </AnimateIn>
            <div className="grid md:grid-cols-3 gap-5">
              {CORE_VALUES.map((v, i) => (
                <AnimateIn key={v.title} delay={i * 80}>
                  <div className="rounded-[28px] bg-[#001523] border border-[#00253E] p-7 md:p-9 h-full">
                    <div className="flex items-center gap-2.5 mb-4 text-[#4C9BE0]">
                      <v.icon size={20} />
                      <h3 className="text-white font-semibold text-lg">{v.title}</h3>
                    </div>
                    <p className="text-[14px] text-[#93A7B8] leading-relaxed">{v.description}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Feature highlights */}
        <section className="px-6 py-20 border-t border-[#00253E]">
          <div className="max-w-6xl mx-auto">
            <AnimateIn>
              <p className="text-[#4C9BE0] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
                Why EhViewer
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Everything a manga reader needs
              </h2>
              <p className="text-[#93A7B8] leading-relaxed mb-12 max-w-2xl">
                From powerful search to offline downloads — EhViewer covers all your reading needs,
                completely free and open source.
              </p>
            </AnimateIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FEATURES.map((f, i) => (
                <AnimateIn key={f.title} delay={i * 60}>
                  <div
                    className="rounded-[28px] bg-[#001A2C] border border-[#00253E] p-6 h-full
                                hover:border-[#003356] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#00253E] text-[#4C9BE0] flex items-center justify-center mb-4">
                      <f.icon size={18} />
                    </div>
                    <h3 className="text-white font-semibold text-[15px] mb-2">{f.title}</h3>
                    <p className="text-[13px] text-[#93A7B8] leading-relaxed">{f.description}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Open source + CTA */}
        <section className="px-6 py-20 border-t border-[#00253E]">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Open source</h2>
              <p className="text-[#93A7B8] leading-relaxed mb-6">
                EhViewer is distributed under the{' '}
                <a
                  href="https://www.gnu.org/licenses/gpl-3.0.html"
                  className="text-[#4C9BE0] hover:underline"
                >
                  GNU General Public License v3
                </a>
                . Browse the source, report issues, and follow releases on{' '}
                <a
                  href="https://github.com/Ehviewer-Overhauled/Ehviewer"
                  className="text-[#4C9BE0] hover:underline"
                >
                  GitHub
                </a>
                .
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/download"
                  className="px-5 py-2.5 rounded-full bg-[#00406C] text-white text-sm font-medium
                             hover:bg-[#003A61] transition-colors"
                >
                  Download EhViewer
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full border border-[#00253E] text-[#EAF2F9] text-sm
                             font-medium hover:bg-[#001A2C] transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
