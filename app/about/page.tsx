import Link from 'next/link'

export const metadata = {
  title: 'About — EhViewer',
  description:
    'About EhViewer — a modern, open-source manga reader fork for Android, built for high performance with Material Design 3 and Dynamic Color.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#00111C] text-[#EAF2F9] px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-[#4C9BE0] hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">About EhViewer</h1>

        <p className="mt-6 text-[#8398A9] leading-relaxed">
          EhViewer is a modern, open-source manga reader fork dedicated to high performance, built
          with Material Design 3 and Dynamic Color support. It is free software — no signup, no ads,
          no tracking.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#EAF2F9]">The project</h2>
        <p className="mt-4 text-[#8398A9] leading-relaxed">
          Originally created in 2014 and maintained by a series of contributors over the years,
          EhViewer continues as a community-driven, GPLv3-licensed project. The current 1.14.6
          release adds gallery reading progress, filename compatibility fixes, and a range of
          stability improvements.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#EAF2F9]">Open source</h2>
        <p className="mt-4 text-[#8398A9] leading-relaxed">
          EhViewer is distributed under the{' '}
          <a
            href="https://www.gnu.org/licenses/gpl-3.0.html"
            className="text-[#4C9BE0] hover:underline"
          >
            GNU General Public License v3
          </a>
          . You can browse the source, report issues, and follow releases on{' '}
          <a
            href="https://github.com/Ehviewer-Overhauled/Ehviewer"
            className="text-[#4C9BE0] hover:underline"
          >
            GitHub
          </a>
          .
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
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
      </div>
    </main>
  )
}
