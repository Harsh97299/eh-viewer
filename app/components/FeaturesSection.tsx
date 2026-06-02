import { Library, Download, ZoomIn, Heart, Palette, Shield } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import AnimateIn from './AnimateIn'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  cardBg: string
  imageBg: string
  accentBg: string
  iconColor: string
  badge: string
}

const features: Feature[] = [
  {
    icon: Library,
    title: 'Huge Manga Catalog',
    description:
      'Browse a vast library of manga spanning every genre — from the newest releases to timeless classics.',
    cardBg: 'from-[#FFE8E8] to-[#FFD0D0]',
    imageBg: 'from-[#E63946]/15 to-[#FFB8B8]/25',
    accentBg: 'from-[#FFB8B8]/30 to-[#E63946]/20',
    iconColor: '#E63946',
    badge: 'All genres',
  },
  {
    icon: Download,
    title: 'Offline Downloads',
    description:
      'Save comics to your device and read anywhere — no internet required. Pick your folder, choose image quality.',
    cardBg: 'from-[#FFF3EA] to-[#FFE4CC]',
    imageBg: 'from-[#FF9B6A]/15 to-[#FFD0B0]/25',
    accentBg: 'from-[#FFB08A]/30 to-[#FFD6B0]/20',
    iconColor: '#FF7A3D',
    badge: 'Offline',
  },
  {
    icon: ZoomIn,
    title: 'Zoom for Clear Reading',
    description:
      'Pinch to zoom on small text or detailed panels — no more eye strain on tiny fonts.',
    cardBg: 'from-[#E6F4FF] to-[#CCE8FF]',
    imageBg: 'from-[#6AADFF]/15 to-[#B0D8FF]/25',
    accentBg: 'from-[#6AADFF]/30 to-[#B8DCFF]/20',
    iconColor: '#6AADFF',
    badge: 'Pinch + zoom',
  },
  {
    icon: Heart,
    title: 'Favorites List',
    description:
      'One tap on the heart icon adds any manga to your favorites — organize them into folders your way.',
    cardBg: 'from-[#FFE8F0] to-[#FFD0E0]',
    imageBg: 'from-[#FF6A9B]/15 to-[#FFB0CC]/25',
    accentBg: 'from-[#FF6A9B]/30 to-[#FFB0CC]/20',
    iconColor: '#FF6A9B',
    badge: 'Tap to save',
  },
  {
    icon: Palette,
    title: 'Custom Themes',
    description:
      'Light, dark, and beyond. Tweak themes, display, and reader settings to match your taste.',
    cardBg: 'from-[#F0E8FF] to-[#DDD0FF]',
    imageBg: 'from-[#8B5CF6]/15 to-[#BFA6FF]/25',
    accentBg: 'from-[#BFA6FF]/30 to-[#9B7FFF]/20',
    iconColor: '#8B5CF6',
    badge: 'Fully custom',
  },
  {
    icon: Shield,
    title: 'Privacy-First',
    description:
      'No accounts, no personal info, no tracking. Browse and read with peace of mind.',
    cardBg: 'from-[#E8F8E8] to-[#D0F0D0]',
    imageBg: 'from-[#4CAF50]/15 to-[#A8E0A8]/25',
    accentBg: 'from-[#4CAF50]/30 to-[#A8E0A8]/20',
    iconColor: '#4CAF50',
    badge: 'No signup',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimateIn className="text-center mb-18">
          <p className="text-sm font-semibold text-[#E63946] tracking-[0.12em] uppercase mb-4">
            Why EhViewer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight tracking-tight">
            Everything you need,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A01218] to-[#E63946]">
              nothing you don&apos;t
            </span>
          </h2>
          <p className="mt-5 text-[#666666] text-lg max-w-lg mx-auto leading-relaxed">
            A focused manga reader built for comic lovers — fast, free, and feature-packed.
          </p>
        </AnimateIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {features.map((f, i) => (
            <AnimateIn key={f.title} delay={i * 100}>
              <div
                className="group rounded-[28px] overflow-hidden bg-white border border-[#ECECEC]
                           shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]
                           hover:-translate-y-2.5 hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full"
              >
                {/* Visual area */}
                <div className={`h-56 bg-gradient-to-br ${f.cardBg} relative overflow-hidden flex items-center justify-center`}>
                  <div
                    className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${f.accentBg}`}
                  />
                  <div
                    className={`absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-gradient-to-br ${f.imageBg} opacity-70`}
                  />

                  {/* Icon container */}
                  <div
                    className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-white/70 backdrop-blur-md
                               flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.1)]
                               group-hover:bg-white/90 hover:scale-110 hover:rotate-[5deg]
                               transition-all duration-300"
                  >
                    <f.icon size={30} style={{ color: f.iconColor }} strokeWidth={1.8} />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-sm">
                    <p className="text-[10px] font-bold text-[#111111]">{f.badge}</p>
                  </div>
                </div>

                {/* Text */}
                <div className="p-7">
                  <h3 className="text-[18px] font-bold text-[#111111] mb-2.5 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-[14px] text-[#666666] leading-relaxed">{f.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
