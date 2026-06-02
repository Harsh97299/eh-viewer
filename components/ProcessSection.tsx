import { Download, Settings, Smartphone, BookOpen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import AnimateIn from './AnimateIn'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

interface Step {
  icon: LucideIcon
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: Download,
    number: '01',
    title: 'Download the APK',
    description:
      'Tap the download button to grab the latest EhViewer APK directly to your Android device.',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Allow Unknown Sources',
    description:
      'In Settings → Security, enable "Install from unknown sources" so Android can install the APK.',
  },
  {
    icon: Smartphone,
    number: '03',
    title: 'Install & Launch',
    description:
      'Open the downloaded APK, tap Install, then launch EhViewer from your app drawer.',
  },
  {
    icon: BookOpen,
    number: '04',
    title: 'Search, Save, Read',
    description:
      'Search by title, tag, artist, or year. Save favorites with one tap and start reading instantly.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-28 px-6 bg-[#00111C]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateIn className="mb-16">
          <p className="text-sm font-semibold text-[#4C9BE0] tracking-[0.12em] uppercase mb-4">
            How to Install
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#EAF2F9] leading-tight tracking-tight max-w-xl">
            From download to first chapter in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAF2F9] to-[#4C9BE0]">
              under a minute
            </span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step, i) => (
              <AnimateIn key={step.number} direction="left" delay={i * 100}>
                <div className="flex gap-5 group">
                  {/* Icon + connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-2xl bg-[#001A2C] border border-[#00253E] flex items-center
                                 justify-center shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                                 group-hover:border-[#4C9BE0] group-hover:shadow-[0_4px_20px_rgba(69,134,243,0.25)]
                                 hover:scale-110 transition-all duration-300"
                    >
                      <step.icon size={20} className="text-[#4C9BE0]" strokeWidth={2} />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-10 bg-gradient-to-b from-[#00253E] to-transparent mt-2" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="pt-1">
                    <span className="text-[11px] font-bold text-[#4C9BE0] tracking-widest">{step.number}</span>
                    <h3 className="text-[17px] font-bold text-[#EAF2F9] mt-0.5 mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#93A7B8] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}

            {/* CTA */}
            <AnimateIn delay={500}>
              <a
                href="#download"
                className="inline-block px-7 py-3.5 rounded-full bg-[#00406C] text-white font-semibold
                           text-[15px] shadow-[0_8px_28px_rgba(69,134,243,0.3)] hover:bg-[#003A61]
                           hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
              >
                Download APK Now
              </a>
            </AnimateIn>
          </div>

          {/* Scroll animation visual */}
          <ContainerScroll titleComponent={null}>
            <img
              src="/screenshots/screenshots-01.webp"
              alt="EhViewer app screenshot"
              className="mx-auto rounded-2xl object-cover h-full w-full object-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </div>
    </section>
  )
}
