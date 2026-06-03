import {
  Download,
  FileText,
  Code,
  FileArchive,
  Cpu,
  HardDrive,
  MonitorSmartphone,
  MemoryStick,
  Smartphone,
  Sparkles,
  Wrench,
  Bug,
  Apple,
} from 'lucide-react'
import AnimateIn from './AnimateIn'

/* ---------------------------------------------------------------- data --- */

const DEFAULT_APKS = [
  'EhViewer-1.14.6-default-arm64-v8a.apk',
  'EhViewer-1.14.6-default-armeabi-v7a.apk',
  'EhViewer-1.14.6-default-universal.apk',
  'EhViewer-1.14.6-default-x86_64.apk',
]

const MARSHMALLOW_APKS = [
  'EhViewer-1.14.6-marshmallow-arm64-v8a.apk',
  'EhViewer-1.14.6-marshmallow-armeabi-v7a.apk',
  'EhViewer-1.14.6-marshmallow-universal.apk',
  'EhViewer-1.14.6-marshmallow-x86_64.apk',
]

const SYMBOLS = [
  'EhViewer-1.14.6-default-mapping.txt',
  'EhViewer-1.14.6-marshmallow-mapping.txt',
  'EhViewer-1.14.6-default-native-debug-symbols.zip',
  'EhViewer-1.14.6-marshmallow-native-debug-symbols.zip',
]

const SOURCE = [
  { label: 'Source code (zip)', file: 'EhViewer-1.14.6.zip' },
  { label: 'Source code (tar.gz)', file: 'EhViewer-1.14.6.tar.gz' },
]

const FLAVORS = [
  { name: 'Default', min: '8.0', notes: 'Animated WebP support requires Android 9+.' },
  {
    name: 'Ehviewer_CN_SX',
    min: '8.0',
    notes:
      'Simultaneous translation from German, Spanish, French, Korean, Thai, Japanese and Traditional Chinese.',
  },
  { name: 'Marshmallow', min: '6.0*', notes: 'Limited support, no guarantees.' },
]

const CHANGELOG = {
  new: ['Display gallery reading progress, enabled in EH settings (#2277)'],
  improved: [
    'Redisplay the hover action button when the gallery list changes (#2681)',
    'Remove trailing spaces and dots from filenames for Windows compatibility (#2727)',
    'Long-pressing a tag in the gallery details now shows the tag name (#2769)',
    'Miscellaneous optimization',
  ],
  fixes: [
    'Fixed misaligned drop-down menu inside dialog boxes',
    'Fixed HTTP status errors being shown as "Nothing found"',
    'Some older devices could not pass Cloudflare verification (#2794)',
    'Miscellaneous repairs',
  ],
}

const ANDROID_REQS = [
  { icon: Smartphone, text: 'Android 6.0 or newer' },
  { icon: Cpu, text: 'Quad-core 2.0 GHz (or higher)' },
  { icon: MemoryStick, text: '1 GB RAM and above recommended' },
  { icon: HardDrive, text: '1+ GB storage needed' },
  { icon: MonitorSmartphone, text: '720px+ display' },
]

const IOS_REQS = [
  'iOS 10 or higher',
  'Portrait orientation lock turned off',
  'Background app refresh turned on',
  'Low Power Mode turned off',
  'iPhone 6 or above',
]

const ANDROID_STEPS = [
  'Visit Ehviewer.app',
  'Hit the download button',
  'Download the APK first',
  'Head to Settings → Security → Unknown sources',
  'Hit the install button',
  'Launch EhViewer from your home screen and enjoy',
]

const IOS_STEPS = [
  'Visit the EhViewer official website',
  'Hit the download button',
  'Allow your iPhone to accept the profile',
  'Open the Settings app',
  'Navigate to the Profile Download section',
  'Tap Install',
  'Enter your passcode and tap Next',
  'Tap the Install link again',
  'Launch EhViewer from your home screen and enjoy',
]

/* ----------------------------------------------------------- primitives --- */

function iconFor(file: string) {
  if (file.endsWith('.txt')) return FileText
  if (file.endsWith('.zip') || file.endsWith('.tar.gz')) return FileArchive
  if (file.includes('source')) return Code
  return Download
}

function FileRow({ file, label }: { file: string; label?: string }) {
  const Icon = iconFor(file)
  return (
    <a
      href={`/downloads/${file}`}
      download
      className="group flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-[#E8EAED]
                 hover:border-[#4586F3]/40 hover:bg-[#F8F9FA] hover:-translate-y-0.5
                 transition-all duration-300"
    >
      <span className="shrink-0 grid place-items-center w-9 h-9 rounded-xl bg-[#F1F3F4] text-[#4586F3] group-hover:bg-[#4586F3] group-hover:text-white transition-colors">
        <Icon size={18} />
      </span>
      <span className="font-mono text-[13px] sm:text-[14px] text-[#202124] break-all leading-tight">
        {label ?? file}
      </span>
      <Download
        size={16}
        className="ml-auto shrink-0 text-[#4586F3] opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </a>
  )
}

function SectionHeading({
  kicker,
  title,
  children,
}: {
  kicker?: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="mb-8">
      {kicker && (
        <p className="text-[#4586F3] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-[#202124] tracking-tight">{title}</h2>
      {children && <p className="mt-3 text-[#5F6368] leading-relaxed max-w-2xl">{children}</p>}
    </div>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[28px] bg-white border border-[#E8EAED] p-7 md:p-9">{children}</div>
  )
}

const ISRG_NOTE = (
  <p className="mt-5 text-[13px] text-[#5F6368] leading-relaxed">
    <span className="text-[#4586F3]">*</span> Devices running Android 6 need the{' '}
    <span className="text-[#202124] font-medium">ISRG Root X1</span> certificate installed.
  </p>
)

// Changelog card colors: green=new, blue=improved, red=fixes
const changelogConfig = [
  { icon: Sparkles, title: 'New features',  items: CHANGELOG.new,      color: '#35AA53', bg: '#F0FBF4' },
  { icon: Wrench,   title: 'Improvements', items: CHANGELOG.improved,  color: '#4586F3', bg: '#EEF3FE' },
  { icon: Bug,      title: 'Bug fixes',    items: CHANGELOG.fixes,     color: '#EB4334', bg: '#FEF0EE' },
]

/* -------------------------------------------------------------- section --- */

export default function DownloadDetails() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 pb-24 space-y-20">
        {/* What's new */}
        <AnimateIn>
          <SectionHeading kicker="Release 1.14.6 · Dec 17, 2025" title="What's new">
            A modern EhViewer fork dedicated to high performance, with Material Design 3 and Dynamic
            Color support.
          </SectionHeading>
          <div className="grid md:grid-cols-3 gap-5">
            {changelogConfig.map(({ icon: Icon, title, items, color, bg }) => (
              <div
                key={title}
                className="rounded-[28px] bg-white border border-[#E8EAED] p-7"
              >
                <div className="flex items-center gap-2.5 mb-4" style={{ color }}>
                  <div className="grid place-items-center w-8 h-8 rounded-xl" style={{ backgroundColor: bg }}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-[#202124] font-semibold text-lg">{title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[14px] text-[#5F6368] leading-relaxed">
                      <span className="mt-2 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: color }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Android downloads — default flavor */}
        <AnimateIn>
          <SectionHeading kicker="Android" title="EhViewer for Android">
            Click a build to download EhViewer for Android and enjoy uninterrupted manga reading.
          </SectionHeading>
          <Card>
            <div className="grid sm:grid-cols-2 gap-3">
              {DEFAULT_APKS.map((f) => (
                <FileRow key={f} file={f} />
              ))}
            </div>
            {ISRG_NOTE}
          </Card>
        </AnimateIn>

        {/* Flavor table */}
        <AnimateIn>
          <SectionHeading title="Flavors & compatibility" />
          <div className="rounded-[28px] overflow-hidden border border-[#E8EAED]">
            <div className="hidden sm:grid grid-cols-[1fr_auto_2fr] gap-4 px-7 py-4 bg-[#F8F9FA] text-[12px] font-semibold uppercase tracking-wider text-[#4586F3]">
              <span>Flavor</span>
              <span>Min Android</span>
              <span>Notes</span>
            </div>
            {FLAVORS.map((f, i) => (
              <div
                key={f.name}
                className={`grid sm:grid-cols-[1fr_auto_2fr] gap-1 sm:gap-4 px-7 py-5 ${
                  i % 2 ? 'bg-[#F8F9FA]' : 'bg-white'
                }`}
              >
                <span className="text-[#202124] font-medium">{f.name}</span>
                <span className="text-[#202124] sm:text-center">{f.min}</span>
                <span className="text-[#5F6368] text-[14px] leading-relaxed">{f.notes}</span>
              </div>
            ))}
          </div>
          {ISRG_NOTE}
        </AnimateIn>

        {/* System requirements + install guide (Android) */}
        <AnimateIn>
          <div className="grid lg:grid-cols-2 gap-5">
            <Card>
              <h3 className="text-xl font-bold text-[#202124] mb-6">System Requirements (Android)</h3>
              <ul className="space-y-4">
                {ANDROID_REQS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-[#5F6368]">
                    <span className="grid place-items-center w-9 h-9 rounded-xl bg-[#F1F3F4] text-[#4586F3]">
                      <Icon size={18} />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-[#202124] mb-6">Installation Guide (Android)</h3>
              <ol className="space-y-4">
                {ANDROID_STEPS.map((step, i) => (
                  <li key={step} className="flex gap-3.5 text-[#5F6368]">
                    <span className="grid place-items-center shrink-0 w-7 h-7 rounded-full bg-[#4586F3] text-white text-[13px] font-semibold">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </AnimateIn>

        {/* Marshmallow downloads */}
        <AnimateIn>
          <SectionHeading kicker="Marshmallow build" title="Android 6 (Marshmallow) downloads">
            Legacy builds for older devices. Limited support, no guarantees.
          </SectionHeading>
          <Card>
            <div className="grid sm:grid-cols-2 gap-3">
              {MARSHMALLOW_APKS.map((f) => (
                <FileRow key={f} file={f} />
              ))}
            </div>
            {ISRG_NOTE}
          </Card>
        </AnimateIn>

        {/* Mapping / debug symbols + source */}
        <AnimateIn>
          <SectionHeading kicker="For developers" title="Mapping, debug symbols & source" />
          <div className="grid lg:grid-cols-2 gap-5">
            <Card>
              <h3 className="text-lg font-semibold text-[#202124] mb-5">Mapping & debug symbols</h3>
              <div className="space-y-3">
                {SYMBOLS.map((f) => (
                  <FileRow key={f} file={f} />
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-[#202124] mb-5">Source code</h3>
              <div className="space-y-3">
                {SOURCE.map((s) => (
                  <FileRow key={s.file} file={s.file} label={s.label} />
                ))}
              </div>
            </Card>
          </div>
        </AnimateIn>

        {/* iOS */}
        <AnimateIn>
          <SectionHeading kicker="iOS / iPhone" title="EhViewer for iOS" />
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="rounded-[28px] bg-linear-to-br from-[#EEF3FE] via-[#F8F9FA] to-[#F1F3F4] border border-[#E8EAED] p-9 flex flex-col items-center justify-center text-center">
              <span className="grid place-items-center w-16 h-16 rounded-2xl bg-[#4586F3]/10 text-[#4586F3] mb-5">
                <Apple size={30} />
              </span>
              <p className="text-2xl font-bold text-[#202124] mb-2">Launching Soon</p>
              <p className="text-[#5F6368] max-w-xs leading-relaxed">
                The iOS build is on its way. Read manga on your iPhone or iPad shortly.
              </p>
            </div>
            <Card>
              <h3 className="text-xl font-bold text-[#202124] mb-6">System Requirements (iOS)</h3>
              <ul className="space-y-3 mb-8">
                {IOS_REQS.map((r) => (
                  <li key={r} className="flex gap-2.5 text-[#5F6368] leading-relaxed">
                    <span className="mt-2 h-1 w-1 rounded-full bg-[#4586F3] shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-bold text-[#202124] mb-6">Installation Guide (iOS)</h3>
              <ol className="space-y-3.5">
                {IOS_STEPS.map((step, i) => (
                  <li key={step} className="flex gap-3.5 text-[#5F6368]">
                    <span className="grid place-items-center shrink-0 w-7 h-7 rounded-full bg-[#4586F3] text-white text-[13px] font-semibold">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </AnimateIn>
      </div>
    </div>
  )
}
