import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FaqSection from '../../components/FaqSection'
import AnimateIn from '../../components/AnimateIn'
import Link from 'next/link'

export const metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about EhViewer — search, downloads, customization, legality, and more.',
}

export default function FaqPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-24 bg-[#00111C] text-[#EAF2F9]">
        <section className="px-6 pt-16">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <p className="text-[#4C9BE0] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
                FAQ
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Frequently asked questions
              </h1>
              <p className="text-[#93A7B8] leading-relaxed mb-4">
                Quick answers to common questions about EhViewer.
              </p>
            </AnimateIn>
          </div>
        </section>

        <FaqSection showHeading={false} />

        <section className="px-6 pb-24">
          <AnimateIn>
            <div className="max-w-3xl mx-auto text-center border-t border-[#00253E] pt-12">
              <p className="text-[#93A7B8] mb-6">Still have questions?</p>
              <Link
                href="/contact"
                className="inline-flex px-6 py-3 rounded-full bg-[#00406C] text-white text-sm
                           font-medium hover:bg-[#003A61] transition-colors"
              >
                Contact us
              </Link>
            </div>
          </AnimateIn>
        </section>
      </div>
      <Footer />
    </main>
  )
}
