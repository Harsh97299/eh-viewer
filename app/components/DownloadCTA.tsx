import { Download, Smartphone } from 'lucide-react'
import AnimateIn from './AnimateIn'
import FloatingPhone from './FloatingPhone'

export default function DownloadCTA() {
  return (
    <section id="download" className="py-16 px-6 bg-[#FFF8F5]">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div
            className="relative rounded-[36px] overflow-hidden
                       bg-gradient-to-br from-[#1A0808] via-[#3A0A0A] to-[#0E0404] p-10 md:p-16"
          >
            {/* Ambient glows */}
            <div className="absolute -top-20 left-1/3 w-72 h-72 rounded-full bg-[#E63946]/25 blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-[#C81D25]/30 blur-[70px] pointer-events-none" />

            {/* Decorative dot grid */}
            <div className="absolute top-8 right-10 grid grid-cols-5 gap-2.5 opacity-[0.15] pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
              ))}
            </div>

            {/* Decorative rings */}
            <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full border border-white/5 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text side */}
              <div className="text-center lg:text-left max-w-lg">
                <p className="text-[#FFB8B8] text-sm font-semibold tracking-[0.12em] uppercase mb-5">
                  Ready to Start Reading?
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                  Download{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#FFB8B8]">
                    EhViewer APK
                  </span>
                </h2>
                <p className="text-white/55 text-[17px] leading-relaxed mb-10">
                  Free, open-source manga reader. No signup, no ads, no tracking.
                  Install in under a minute.
                </p>

                {/* Download buttons */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                  <a
                    href="/ehviewer.apk"
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white text-[#111111]
                               shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
                               hover:scale-[1.05] active:scale-[0.97] transition-all duration-300 min-w-[200px]"
                  >
                    <Download size={24} />
                    <div className="text-left">
                      <p className="text-[10px] text-[#777777] font-normal leading-none mb-0.5">Direct Download</p>
                      <p className="font-bold text-[16px] leading-tight">Android APK</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm
                               border border-white/20 text-white hover:bg-white/15
                               hover:scale-[1.05] active:scale-[0.97] transition-all duration-300 min-w-[200px]"
                  >
                    <Smartphone size={22} />
                    <div className="text-left">
                      <p className="text-[10px] text-white/55 font-normal leading-none mb-0.5">iOS</p>
                      <p className="font-bold text-[16px] leading-tight">Coming Soon</p>
                    </div>
                  </a>
                </div>

                {/* Version + meta */}
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/50">
                  <span><span className="text-white/80 font-semibold">Version</span> 1.9.7</span>
                  <span><span className="text-white/80 font-semibold">Size</span> 18 MB</span>
                  <span><span className="text-white/80 font-semibold">Android</span> 7.0+</span>
                  <span><span className="text-white/80 font-semibold">License</span> GPLv3</span>
                </div>
              </div>

              {/* Floating phone */}
              <FloatingPhone />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
