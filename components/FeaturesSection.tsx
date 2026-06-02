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
    cardBg: 'from-[#002137] to-[#001523]',
    imageBg: 'from-[#4C9BE0]/15 to-[#003A61]/30',
    accentBg: 'from-[#003A61]/40 to-[#4C9BE0]/15',
    iconColor: '#4C9BE0',
    badge: 'All genres',
  },
  {
    icon: Download,
    title: 'Offline Downloads',
    description:
      'Save comics to your device and read anywhere — no internet required. Pick your folder, choose image quality.',
    cardBg: 'from-[#001A2C] to-[#001523]',
    imageBg: 'from-[#4C9BE0]/15 to-[#002E4E]/30',
    accentBg: 'from-[#002E4E]/40 to-[#4C9BE0]/15',
    iconColor: '#4C9BE0',
    badge: 'Offline',
  },
  {
    icon: ZoomIn,
    title: 'Zoom for Clear Reading',
    description:
      'Pinch to zoom on small text or detailed panels — no more eye strain on tiny fonts.',
    cardBg: 'from-[#00253E] to-[#001A2C]',
    imageBg: 'from-[#4C9BE0]/15 to-[#003356]/30',
    accentBg: 'from-[#003356]/40 to-[#4C9BE0]/15',
    iconColor: '#4C9BE0',
    badge: 'Pinch + zoom',
  },
  {
    icon: Heart,
    title: 'Favorites List',
    description:
      'One tap on the heart icon adds any manga to your favorites — organize them into folders your way.',
    cardBg: 'from-[#002137] to-[#001A2C]',
    imageBg: 'from-[#4C9BE0]/15 to-[#003A61]/30',
    accentBg: 'from-[#003A61]/40 to-[#4C9BE0]/15',
    iconColor: '#4C9BE0',
    badge: 'Tap to save',
  },
  {
    icon: Palette,
    title: 'Custom Themes',
    description:
      'Light, dark, and beyond. Tweak themes, display, and reader settings to match your taste.',
    cardBg: 'from-[#00253E] to-[#001523]',
    imageBg: 'from-[#4C9BE0]/15 to-[#002E4E]/30',
    accentBg: 'from-[#002E4E]/40 to-[#4C9BE0]/15',
    iconColor: '#4C9BE0',
    badge: 'Fully custom',
  },
  {
    icon: Shield,
    title: 'Privacy-First',
    description:
      'No accounts, no personal info, no tracking. Browse and read with peace of mind.',
    cardBg: 'from-[#002137] to-[#001523]',
    imageBg: 'from-[#4C9BE0]/15 to-[#003356]/30',
    accentBg: 'from-[#003356]/40 to-[#4C9BE0]/15',
    iconColor: '#4C9BE0',
    badge: 'No signup',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 px-6 bg-[#001523]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimateIn className="text-center mb-18">
          <p className="text-sm font-semibold text-[#4C9BE0] tracking-[0.12em] uppercase mb-4">
            Why EhViewer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#EAF2F9] leading-tight tracking-tight">
            Everything you need,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAF2F9] to-[#4C9BE0]">
              nothing you don&apos;t
            </span>
          </h2>
          <p className="mt-5 text-[#93A7B8] text-lg max-w-lg mx-auto leading-relaxed">
            A focused manga reader built for comic lovers — fast, free, and feature-packed.
          </p>
        </AnimateIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {features.map((f, i) => (
            <AnimateIn key={f.title} delay={i * 100}>
              <div
                className="group rounded-[28px] overflow-hidden bg-[#001A2C] border border-[#00253E]
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
                    className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-[#001A2C]/70 backdrop-blur-md
                               flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.1)]
                               group-hover:bg-[#001A2C]/90 hover:scale-110 hover:rotate-[5deg]
                               transition-all duration-300"
                  >
                    <f.icon size={30} style={{ color: f.iconColor }} strokeWidth={1.8} />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute bottom-4 right-4 bg-[#001A2C]/80 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-sm">
                    <p className="text-[10px] font-bold text-[#EAF2F9]">{f.badge}</p>
                  </div>
                </div>

                {/* Text */}
                <div className="p-7">
                  <h3 className="text-[18px] font-bold text-[#EAF2F9] mb-2.5 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-[14px] text-[#93A7B8] leading-relaxed">{f.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
