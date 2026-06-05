import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AnimateIn from '../../components/AnimateIn'
import { Code, Mail, BookOpen, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with the EhViewer community — report bugs, request features, or reach out by email.',
}

const CONTACT_OPTIONS = [
  {
    icon: Code,
    title: 'Report a bug or request a feature',
    description:
      'Found something broken or have an idea? Open an issue on GitHub — the community tracks and fixes reported issues.',
    label: 'Open GitHub Issues',
    href: 'https://github.com/Ehviewer-Overhauled/Ehviewer/issues',
    external: true,
  },
  {
    icon: Mail,
    title: 'Email support',
    description:
      "For questions not suited to GitHub, reach us by email. We'll get back to you as soon as we can.",
    label: 'support@ehviewer.app',
    href: 'mailto:support@ehviewer.app',
    external: false,
  },
  {
    icon: BookOpen,
    title: 'Source code & releases',
    description:
      'Browse the full source, check changelogs, and download any release from the GitHub repository.',
    label: 'View on GitHub',
    href: 'https://github.com/Ehviewer-Overhauled/Ehviewer',
    external: true,
  },
]

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-24 bg-[#00111C] text-[#EAF2F9]">
        <section className="px-6 pt-16 pb-24">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <p className="text-[#4C9BE0] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
                Contact
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in touch</h1>
              <p className="text-[#93A7B8] leading-relaxed mb-12">
                EhViewer is a community project — no account or personal data is ever required to
                use the app. For questions, issues, or feedback, here's where to reach us.
              </p>
            </AnimateIn>

            <div className="space-y-4">
              {CONTACT_OPTIONS.map((opt, i) => (
                <AnimateIn key={opt.title} delay={i * 80}>
                  <div className="rounded-[28px] bg-[#001523] border border-[#00253E] p-7 md:p-9">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00253E] text-[#4C9BE0]
                                    flex items-center justify-center mt-0.5"
                      >
                        <opt.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-white font-semibold text-[17px] mb-2">{opt.title}</h2>
                        <p className="text-[#93A7B8] text-[14px] leading-relaxed mb-5">
                          {opt.description}
                        </p>
                        <a
                          href={opt.href}
                          {...(opt.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                                     bg-[#001A2C] border border-[#00253E] text-[#EAF2F9] text-sm
                                     font-medium hover:border-[#4C9BE0] hover:bg-[#002137]
                                     transition-all duration-200"
                        >
                          {opt.label}
                          {opt.external && <ExternalLink size={13} className="text-[#4C9BE0]" />}
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
