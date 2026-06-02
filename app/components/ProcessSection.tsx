import { Download, Settings, Smartphone, BookOpen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import PhoneMockup from './PhoneMockup'
import AnimateIn from './AnimateIn'

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
    <section id="process" className="py-28 px-6 bg-[#FFF8F5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateIn className="mb-16">
          <p className="text-sm font-semibold text-[#E63946] tracking-[0.12em] uppercase mb-4">
            How to Install
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight tracking-tight max-w-xl">
            From download to first chapter in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A01218] to-[#E63946]">
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
                      className="w-12 h-12 rounded-2xl bg-white border border-[#ECECEC] flex items-center
                                 justify-center shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                                 group-hover:border-[#E63946] group-hover:shadow-[0_4px_20px_rgba(230,57,70,0.25)]
                                 hover:scale-110 transition-all duration-300"
                    >
                      <step.icon size={20} className="text-[#E63946]" strokeWidth={2} />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-10 bg-gradient-to-b from-[#ECECEC] to-transparent mt-2" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="pt-1">
                    <span className="text-[11px] font-bold text-[#E63946] tracking-widest">{step.number}</span>
                    <h3 className="text-[17px] font-bold text-[#111111] mt-0.5 mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#666666] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}

            {/* CTA */}
            <AnimateIn delay={500}>
              <a
                href="#download"
                className="inline-block px-7 py-3.5 rounded-full bg-[#111111] text-white font-semibold
                           text-[15px] shadow-[0_8px_28px_rgba(17,17,17,0.18)] hover:bg-[#2a2a2a]
                           hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
              >
                Download APK Now
              </a>
            </AnimateIn>
          </div>

          {/* Phone + floating cards */}
          <AnimateIn direction="right" className="relative flex justify-center">
            <div className="absolute inset-0 bg-[#E63946]/18 blur-[80px] scale-75 -z-10 rounded-full" />

            <div className="relative">
              <PhoneMockup size="sm" />

              {/* Floating card — Library count */}
              <div
                style={{ animation: 'floatUp 3s ease-in-out infinite' }}
                className="absolute -left-[72px] top-24 bg-white rounded-2xl px-4 py-3
                           shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-[#ECECEC] min-w-[100px]"
              >
                <p className="text-[9px] text-[#666666] mb-0.5">In Your Library</p>
                <p className="text-xl font-bold text-[#111111] leading-none">128</p>
                <p className="text-[9px] text-[#E63946] font-semibold mt-0.5">+5 today</p>
              </div>

              {/* Floating card — Offline */}
              <div
                style={{ animation: 'floatDown 3.5s ease-in-out infinite 0.6s' }}
                className="absolute -right-[88px] bottom-32 bg-white rounded-2xl px-4 py-3
                           shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-[#ECECEC] min-w-[120px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#E63946] to-[#C81D25] flex-shrink-0" />
                  <p className="text-[9px] font-bold text-[#111111]">Offline Ready</p>
                </div>
                <p className="text-[8px] text-[#666666]">42 chapters saved</p>
              </div>

              {/* Rating badge */}
              <div
                style={{ animation: 'floatSm 4s ease-in-out infinite 1s' }}
                className="absolute -right-14 top-1/3 bg-gradient-to-br from-[#E63946] to-[#C81D25]
                           rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(230,57,70,0.4)]"
              >
                <p className="text-[11px] font-bold text-white">★ 4.8</p>
                <p className="text-[8px] text-white/80">9.4K reviews</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
