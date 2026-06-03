import { Download, Smartphone } from 'lucide-react'
import AnimateIn from './AnimateIn'
import FloatingPhone from './FloatingPhone'

export default function DownloadCTA() {
  return (
    <section id="download" className="py-16 px-6 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div
            className="relative rounded-[36px] overflow-hidden border border-[#E8EAED]
                       bg-linear-to-br from-[#F8F9FA] via-white to-[#F1F3F4] p-10 md:p-16"
          >
            {/* Ambient glows — multicolor */}
            <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full bg-[#4586F3]/20 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#35AA53]/15 blur-[90px] pointer-events-none" />
            <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-[#EB4334]/12 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-10 right-10 w-56 h-56 rounded-full bg-[#FBBD06]/12 blur-[80px] pointer-events-none" />

            {/* Decorative dot grid */}
            <div className="absolute top-8 right-10 grid grid-cols-5 gap-2.5 opacity-[0.18] pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#202124]" />
              ))}
            </div>

            {/* Decorative rings */}
            <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full border border-[#4586F3]/10 pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full border border-[#4586F3]/10 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text side */}
              <div className="text-center lg:text-left max-w-lg">
                <p className="text-[#4586F3] text-sm font-semibold tracking-[0.12em] uppercase mb-5">
                  Ready to Start Reading?
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#202124] leading-tight tracking-tight mb-6">
                  Download{' '}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4586F3] to-[#35AA53]">
                    EhViewer APK
                  </span>
                </h2>
                <p className="text-[#5F6368] text-[17px] leading-relaxed mb-10">
                  Free, open-source manga reader with Material Design 3 and Dynamic Color.
                  No signup, no ads, no tracking. Install in under a minute.
                </p>

                {/* Download buttons */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                  <a
                    href="/downloads/EhViewer-1.14.6-default-universal.apk"
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#4586F3] text-white
                               shadow-[0_8px_32px_rgba(69,134,243,0.3)] hover:shadow-[0_12px_40px_rgba(69,134,243,0.4)]
                               hover:bg-[#2F6FD6] hover:scale-[1.05] active:scale-[0.97] transition-all duration-300 min-w-50"
                  >
                    <Download size={24} />
                    <div className="text-left">
                      <p className="text-[10px] text-white/70 font-normal leading-none mb-0.5">Direct Download</p>
                      <p className="font-bold text-[16px] leading-tight">Android APK</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white
                               border border-[#E8EAED] text-[#5F6368] hover:border-[#4586F3] hover:text-[#202124]
                               hover:scale-[1.05] active:scale-[0.97] transition-all duration-300 min-w-50"
                  >
                    <Smartphone size={22} />
                    <div className="text-left">
                      <p className="text-[10px] text-[#80868B] font-normal leading-none mb-0.5">iOS</p>
                      <p className="font-bold text-[16px] leading-tight">Coming Soon</p>
                    </div>
                  </a>
                </div>

                {/* Version + meta */}
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-[#80868B]">
                  <span><span className="text-[#202124] font-semibold">Version</span> 1.14.6</span>
                  <span><span className="text-[#202124] font-semibold">Released</span> Dec 17, 2025</span>
                  <span><span className="text-[#202124] font-semibold">Android</span> 8.0+</span>
                  <span><span className="text-[#202124] font-semibold">License</span> GPLv3</span>
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
