import { Download, Settings, Smartphone, BookOpen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import AnimateIn from './AnimateIn'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

interface Step {
  icon: LucideIcon
  number: string
  title: string
  description: string
  color: string
}

const steps: Step[] = [
  {
    icon: Download,
    number: '01',
    title: 'Download the APK',
    description:
      'Tap the download button to grab the latest EhViewer APK directly to your Android device.',
    color: '#4586F3',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Allow Unknown Sources',
    description:
      'In Settings → Security, enable "Install from unknown sources" so Android can install the APK.',
    color: '#EB4334',
  },
  {
    icon: Smartphone,
    number: '03',
    title: 'Install & Launch',
    description:
      'Open the downloaded APK, tap Install, then launch EhViewer from your app drawer.',
    color: '#FBBD06',
  },
  {
    icon: BookOpen,
    number: '04',
    title: 'Search, Save, Read',
    description:
      'Search by title, tag, artist, or year. Save favorites with one tap and start reading instantly.',
    color: '#35AA53',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-28 px-6 bg-[#F8F9FA] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-[#35AA53]/12 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/6 w-80 h-80 rounded-full bg-[#4586F3]/10 blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/6 w-64 h-64 rounded-full bg-[#FBBD06]/10 blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <AnimateIn className="mb-16">
          <p className="text-sm font-semibold text-[#4586F3] tracking-[0.12em] uppercase mb-4">
            How to Install
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#202124] leading-tight tracking-tight max-w-xl">
            Install EhViewer and reach your first chapter in{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4586F3] to-[#35AA53]">
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
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-12 h-12 rounded-2xl bg-white border border-[#E8EAED] flex items-center
                                 justify-center shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                                 hover:scale-110 transition-all duration-300"
                      style={{
                        ['--hover-border' as string]: step.color,
                      }}
                    >
                      <step.icon size={20} style={{ color: step.color }} strokeWidth={2} />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-10 bg-linear-to-b from-[#E8EAED] to-transparent mt-2" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="pt-1">
                    <span
                      className="text-[11px] font-bold tracking-widest"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-[17px] font-bold text-[#202124] mt-0.5 mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#5F6368] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}

            {/* CTA */}
            <AnimateIn delay={500}>
              <a
                href="#download"
                className="inline-block px-7 py-3.5 rounded-full bg-[#4586F3] text-white font-semibold
                           text-[15px] shadow-[0_8px_28px_rgba(69,134,243,0.3)] hover:bg-[#2F6FD6]
                           hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
              >
                Download APK Now
              </a>
            </AnimateIn>
          </div>

          {/* Scroll animation visual */}
          <ContainerScroll titleComponent={null}>
            <div className="relative h-full w-full">
              <Image
                src="/screenshots/screenshots-01.webp"
                alt="EhViewer app screenshot"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl object-cover object-top"
                draggable={false}
              />
            </div>
          </ContainerScroll>
        </div>
      </div>
    </section>
  )
}
