'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import AnimateIn from './AnimateIn'

const FAQS: { q: string; a: string; cta?: { href: string; label: string } }[] = [
  {
    q: 'How can I search for content on EhViewer?',
    a: 'EhViewer includes a powerful search engine that goes well beyond a basic keyword box. You can enter titles, enter partial titles, and combine multiple filters in a single query. Category filters let you narrow results to specific genres such as doujinshi, manga, artist CG, or western. Tag-based search is particularly precise — tap any tag on a gallery detail page to launch an instant filtered search for that tag. You can also search by artist name, group, parody, or character, and sort results by rating, date, or page count. Saved searches and a browsing history make it easy to return to previous queries. The search syntax supports negation (prefix a term with a minus sign to exclude it), so you can build highly specific queries without scrolling through irrelevant results.',
    cta: { href: '/download', label: 'Download EhViewer →' },
  },
  {
    q: 'Is EhViewer available on the Google Play Store?',
    a: 'No — EhViewer is not available on the Google Play Store, and that is intentional. EhViewer is a free, open-source application distributed directly to users so that no platform can restrict or remove it based on content policies. To install it, you download the APK file directly from this website, enable "Install from unknown sources" in your Android settings (Settings → Security → Unknown sources or Settings → Apps → Special app access on newer Android versions), and then tap the downloaded file to install. The process takes under two minutes. Once installed, EhViewer updates are announced on GitHub Releases, so you can always check there for the latest version.',
    cta: { href: '/download', label: 'Get the APK →' },
  },
  {
    q: 'Can I customize my viewing experience?',
    a: 'Yes — EhViewer offers extensive customization so you can tailor every aspect of reading to your preferences. Themes include light, dark, and system-default modes, with Dynamic Color support on Android 12 and newer so the interface adapts to your wallpaper palette. Reading direction can be set to left-to-right, right-to-left, or vertical scroll to match the source material. Page scaling options include fit-to-width, fit-to-height, and original size, and pinch-to-zoom works smoothly across all modes. You can adjust display brightness independently of the system setting, enable a reading timer, configure auto-scroll speed, and set the app to keep the screen on during reading sessions. Download storage location and image resolution are also configurable.',
  },
  {
    q: 'Does EhViewer support tag search?',
    a: 'Yes, tag search is one of EhViewer\'s most powerful features. Every gallery in the catalog is annotated with a rich set of tags covering artist, group, parody, character, language, and content attributes. You can tap any visible tag on a gallery\'s detail page to immediately launch a search filtered to that exact tag — no typing required. In the search bar, you can type tags in the standard namespace:value format (for example, artist:tagname or language:english) and combine multiple tag conditions in a single query. Tag negation works by prefixing with a minus sign, allowing you to exclude specific tags from results. This makes it practical to locate niche content that would otherwise require scrolling through thousands of results using keyword search alone.',
  },
  {
    q: 'Can I download content for offline viewing?',
    a: 'Yes. EhViewer has a built-in download manager that lets you save entire galleries to your device for reading without an internet connection. From any gallery detail page, tap the download button to queue it. You can monitor download progress, pause and resume downloads, and manage your library of saved content from the Downloads section of the app. Storage location is configurable — you can save to internal storage or an SD card depending on your device. Image resolution settings let you balance file size against quality: choose original quality for the best reading experience or a compressed preset to conserve space. Downloaded galleries remain available indefinitely and are stored entirely on your device, so no account or cloud subscription is required.',
    cta: { href: '/download', label: 'Download EhViewer →' },
  },
  {
    q: 'Is EhViewer free?',
    a: 'EhViewer is completely free — there is no purchase price, no subscription fee, no premium tier, and no in-app purchases of any kind. All features, including offline downloads, advanced search, custom themes, and the full catalog, are available to every user at no cost. EhViewer is licensed under the GNU General Public License v3 (GPLv3), which means it is not only free to use but also free to inspect, modify, and redistribute. The full source code is publicly available on GitHub. There are no advertisements in the app and no monetisation mechanism of any sort. The project is maintained entirely by volunteer contributors who believe that a quality manga reader should be accessible to everyone without financial barriers.',
    cta: { href: '/download', label: 'Download for free →' },
  },
  {
    q: 'What should I do if EhViewer is not working properly?',
    a: 'Start by checking that you are running the latest version of EhViewer — visit the Download page on this site or check the Releases page on GitHub for the current release. Many reported issues are resolved in newer versions. Also confirm that your Android OS is up to date, as some features depend on system APIs introduced in newer Android versions. If you are on Android 6 (Marshmallow), make sure you have installed the ISRG Root X1 certificate, which is required for secure connections on that version. If the problem persists after updating, open a new issue on the EhViewer GitHub Issues page. Include your Android version, device model, EhViewer version, and a clear description of the steps that reproduce the problem. The maintainer community reviews issues regularly and community members often provide workarounds quickly.',
    cta: { href: '/download', label: 'Check for updates →' },
  },
  {
    q: 'Is EhViewer legal?',
    a: "EhViewer the software is lawful free software distributed under the GNU General Public License v3 — the same licence used by the Linux kernel and thousands of other widely used open-source projects. Developing, distributing, and installing GPLv3 software is legal in virtually every jurisdiction. Whether the content you access through EhViewer is legal depends entirely on your country's copyright and content distribution laws, the specific content you view or download, and the terms of the gallery platforms you connect to. EhViewer is a client application; it does not host, store, or distribute any content itself. Users are solely responsible for ensuring that their personal use of any content complies with applicable local laws. When in doubt, consult the legal resources available in your country.",
  },
]

interface Props {
  limit?: number
  showHeading?: boolean
}

export default function FaqSection({ limit, showHeading = true }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const items = limit ? FAQS.slice(0, limit) : FAQS

  // FAQPage rich-results schema — matches the questions actually rendered.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <section id="faq" className="bg-surface py-24 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <div className="max-w-3xl mx-auto">
        {showHeading && (
          <AnimateIn>
            <p className="text-blue text-xs font-semibold tracking-[0.14em] uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Frequently asked questions
            </h2>
            <p className="text-text-muted leading-relaxed mb-12">
              Quick answers to common questions about EhViewer.
            </p>
          </AnimateIn>
        )}

        <AnimateIn delay={showHeading ? 100 : 0}>
          <div className="space-y-3">
            {items.map((item, i) => {
              const isOpen = openIdx === i
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-background shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                               text-foreground font-medium hover:bg-surface transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 text-blue transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-150' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 pt-1 pb-4 text-text-muted leading-relaxed text-[15px]">
                      {item.a}
                    </p>
                    {item.cta && (
                      <div className="px-6 pb-5">
                        <Link
                          href={item.cta.href}
                          className="inline-flex items-center text-blue text-sm font-medium hover:underline"
                        >
                          {item.cta.label}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </AnimateIn>

        <AnimateIn delay={200}>
          <div className="mt-8 text-center text-sm text-text-muted">
            Still have questions?{' '}
            <Link href="/contact" className="text-blue font-medium hover:underline">
              Contact us →
            </Link>
          </div>
        </AnimateIn>

        {limit && FAQS.length > limit && (
          <AnimateIn delay={250}>
            <div className="mt-4 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-blue text-sm font-medium hover:underline"
              >
                View all {FAQS.length} questions →
              </Link>
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  )
}
