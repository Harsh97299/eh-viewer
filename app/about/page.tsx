import Link from 'next/link'

export const metadata = {
  title: 'About — EhViewer',
  description:
    'About EhViewer — a modern, open-source manga reader fork for Android, built for high performance with Material Design 3 and Dynamic Color.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#202124] px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-[#4586F3] hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">About EhViewer</h1>

        <p className="mt-6 text-[#5F6368] leading-relaxed">
          EhViewer is a modern, open-source manga reader fork dedicated to high performance, built
          with Material Design 3 and Dynamic Color support. It is free software — no signup, no ads,
          no tracking.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#202124]">The project</h2>
        <p className="mt-4 text-[#5F6368] leading-relaxed">
          Originally created in 2014 and maintained by a series of contributors over the years,
          EhViewer continues as a community-driven, GPLv3-licensed project. The current 1.14.6
          release adds gallery reading progress, filename compatibility fixes, and a range of
          stability improvements.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#202124]">Open source</h2>
        <p className="mt-4 text-[#5F6368] leading-relaxed">
          EhViewer is distributed under the{' '}
          <a
            href="https://www.gnu.org/licenses/gpl-3.0.html"
            className="text-[#4586F3] hover:underline"
          >
            GNU General Public License v3
          </a>
          . You can browse the source, report issues, and follow releases on{' '}
          <a
            href="https://github.com/Ehviewer-Overhauled/Ehviewer"
            className="text-[#4586F3] hover:underline"
          >
            GitHub
          </a>
          .
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/download"
            className="px-5 py-2.5 rounded-full bg-[#4586F3] text-white text-sm font-medium
                       hover:bg-[#2F6FD6] transition-colors"
          >
            Download EhViewer
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full border border-[#E8EAED] text-[#202124] text-sm
                       font-medium hover:bg-[#F8F9FA] transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  )
}
