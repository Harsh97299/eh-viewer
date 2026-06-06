'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import AnimateIn from './AnimateIn'

const FAQS = [
  {
    q: 'How can I search for content on EhViewer?',
    a: 'EhViewer offers an advanced search feature where you can enter keywords, select categories, and apply filters to narrow results. You can also search by tags, artist, year, and more for precise results.',
  },
  {
    q: 'Is EhViewer available on the Google Play Store?',
    a: 'No — EhViewer is not on the Play Store as it is a third-party, open-source application. Download the latest APK directly from this website.',
  },
  {
    q: 'Can I customize my viewing experience?',
    a: 'Yes. EhViewer lets you change the theme, layout, and display settings to tailor the reading experience to your preferences.',
  },
  {
    q: 'Does EhViewer support tag search?',
    a: 'Yes, you can search for content using specific tags, which delivers more accurate and targeted results across the catalog.',
  },
  {
    q: 'Can I download content for offline viewing?',
    a: 'Yes. EhViewer includes a download feature so you can read your favorite manga without an internet connection. You can also set the download location and image resolution.',
  },
  {
    q: 'Is EhViewer free?',
    a: 'EhViewer is completely free and open-source, licensed under GPLv3. There is no subscription, no premium tier, and no ads — all features are available at no cost.',
  },
  {
    q: 'What should I do if EhViewer is not working properly?',
    a: 'First, make sure you are running the latest version and that your Android OS is up to date. If the issue persists, report it on GitHub Issues so the community can investigate.',
  },
  {
    q: 'Is EhViewer legal?',
    a: "The legality of using EhViewer depends on your country's copyright and content distribution laws. EhViewer itself is lawful free software licensed under GPLv3, but you are responsible for ensuring your use of content complies with your local regulations.",
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
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 pb-5 text-text-muted leading-relaxed text-[15px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </AnimateIn>

        {limit && FAQS.length > limit && (
          <AnimateIn delay={200}>
            <div className="mt-10 text-center">
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
