'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import AnimateIn from './AnimateIn'

export interface FaqItem {
  question: string
  answer: string
}

// Shared general FAQ — resolves the common questions about EhViewer.
// Answers are plain text so they can be reused verbatim in the FAQPage JSON-LD.
export const generalFaqs: FaqItem[] = [
  {
    question: 'What is EhViewer?',
    answer:
      'EhViewer is a free, open-source manga and anime comic reader for Android. It offers a huge catalog, offline downloads, smooth zoom reading, customizable themes, and privacy-first browsing — no account needed.',
  },
  {
    question: 'Is EhViewer free to use?',
    answer:
      'Yes. EhViewer is completely free and open-source under the GNU General Public License v3. There are no subscriptions, no paywalls, and no ads.',
  },
  {
    question: 'Which devices does EhViewer support?',
    answer:
      'EhViewer is built for Android phones and tablets, with Material Design 3 and Dynamic Color support. The reading experience is also tuned to work smoothly on iOS-class screen sizes.',
  },
  {
    question: 'How do I install the EhViewer APK?',
    answer:
      'Download the latest APK from the download page, then open the file on your Android device. If prompted, allow installation from unknown sources for your browser or file manager, and the app installs in a few seconds.',
  },
  {
    question: 'Do I need an account to use EhViewer?',
    answer:
      'No. EhViewer requires no signup or login. You can start browsing and reading immediately, and none of your personal information is requested or collected.',
  },
  {
    question: 'Can I read manga offline?',
    answer:
      'Yes. You can download chapters and full galleries to your device and read them offline anytime. All downloaded files are stored locally on your device.',
  },
  {
    question: 'Does EhViewer track me or show ads?',
    answer:
      'No. EhViewer contains no ads, no analytics, and no trackers. Reading history, bookmarks, and settings stay on your device and are never sent to us.',
  },
  {
    question: 'Is EhViewer safe to download?',
    answer:
      'Yes. EhViewer is open-source, so anyone can inspect the code, issue tracker, and releases on GitHub. The APK on this site is the official build with no bundled third-party software.',
  },
  {
    question: 'How do I update EhViewer?',
    answer:
      'Download the newest APK from the download page and install it over your existing app. Your library, downloads, and settings are preserved across updates.',
  },
]

interface Props {
  items?: FaqItem[]
  className?: string
}

export default function FAQSection({ items = generalFaqs, className = '' }: Props) {
  const [open, setOpen] = useState<number | null>(0)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <section
      id="faq"
      className={`px-6 py-24 relative overflow-hidden ${className}`}
    >
      {/* JSON-LD for rich results — rendered into initial HTML for crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* Ambient glows — multicolor, matches site sections */}
      <div className="absolute -top-10 right-1/4 w-96 h-96 rounded-full bg-blue/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/6 w-80 h-80 rounded-full bg-green/10 blur-[110px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <AnimateIn className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-blue tracking-[0.12em] uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Everything you need to know about EhViewer. Can&apos;t find an
            answer? Reach us on the contact page.
          </p>
        </AnimateIn>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <AnimateIn key={item.question} delay={i * 40}>
                <div className="rounded-2xl bg-background border border-border shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                               hover:bg-surface transition-colors"
                  >
                    <span className="text-[15px] md:text-base font-semibold text-foreground">
                      {item.question}
                    </span>
                    <Plus
                      size={20}
                      strokeWidth={2}
                      className={`shrink-0 text-blue transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                    />
                  </button>
                  {/* grid-rows trick keeps answer in the DOM (SEO) while animating height */}
                  <div
                    id={`faq-answer-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[14px] text-text-muted leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
