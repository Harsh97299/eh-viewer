'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import AnimateIn from './AnimateIn'
import { generalFaqs, type FaqItem } from './faqData'

interface Props {
  items?: FaqItem[]
  className?: string
  viewAllHref?: string
}

export default function FAQSection({
  items = generalFaqs,
  className = '',
  viewAllHref,
}: Props) {
  const [open, setOpen] = useState<number | null>(0)

  const faqItems = (items ?? generalFaqs).filter(
    (item): item is FaqItem => Boolean(item && item.question && item.answer),
  )

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ question, answer }) => ({
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
            Everything you need to know about EhViewer before your next
            binge-reading session. Can&apos;t find an answer? Reach us on the
            contact page.
          </p>
        </AnimateIn>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, i) => {
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

        {viewAllHref && (
          <AnimateIn className="mt-10 text-center">
            <Link
              href={viewAllHref}
              className="inline-block px-6 py-3 rounded-full border border-border
                         text-foreground text-sm font-semibold hover:bg-surface transition-colors"
            >
              View all FAQs →
            </Link>
          </AnimateIn>
        )}
      </div>
    </section>
  )
}
