import { Star } from 'lucide-react'
import AnimateIn from './AnimateIn'

const testimonials = [
  {
    name: 'Ren Takahashi',
    role: 'Manga Collector',
    avatar: '#E63946',
    initials: 'RT',
    rating: 5,
    tag: 'Daily Reader',
    text: "Best manga reader I've used hands down. The offline downloads saved my long flights, and the zoom is buttery smooth. No ads, no signup, just reading.",
  },
  {
    name: 'Sofia Marchetti',
    role: 'Anime & Manga Blogger',
    avatar: '#FFD6B0',
    initials: 'SM',
    rating: 5,
    tag: 'Verified User',
    text: "Catalog is massive and the filters by tag and artist are unreal. I've organized 200+ favorites into folders and it just works. Lightweight too.",
  },
]

const stats = [
  { value: '4.8★', label: 'Average Rating', sub: '9.4K+ reviews' },
  { value: '2M+', label: 'Active Readers', sub: 'worldwide' },
  { value: '100%', label: 'Free Forever', sub: 'no ads, no signup' },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-sm font-semibold text-[#E63946] tracking-[0.12em] uppercase mb-4">
            Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight tracking-tight max-w-2xl mx-auto">
            What manga readers{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A01218] to-[#E63946]">
              are saying.
            </span>
          </h2>
        </AnimateIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 140}>
              <div
                className="relative rounded-[28px] p-8 bg-[#FFF8F5] border border-[#ECECEC]
                           shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_56px_rgba(0,0,0,0.1)]
                           hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full"
              >
                {/* Decorative quote */}
                <span className="absolute top-4 right-7 text-7xl font-serif text-[#ECECEC] leading-none select-none">
                  &ldquo;
                </span>

                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white
                                 text-[13px] font-bold shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex-shrink-0"
                      style={{ backgroundColor: t.avatar }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-[#111111] text-[15px] leading-tight">{t.name}</p>
                      <p className="text-[12px] text-[#888888] mt-0.5">{t.role}</p>
                    </div>
                  </div>
                  <span className="text-[11px] px-3 py-1.5 rounded-full bg-white border border-[#ECECEC]
                                   text-[#666666] font-semibold flex-shrink-0">
                    {t.tag}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={15} className="fill-[#E63946] text-[#E63946]" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-[15px] text-[#444444] leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Stats row */}
        <AnimateIn delay={350} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-[#111111] tracking-tight">{s.value}</p>
              <p className="text-[13px] text-[#666666] mt-2">{s.label}</p>
              <p className="text-[12px] text-[#E63946] font-semibold mt-0.5">{s.sub}</p>
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  )
}
