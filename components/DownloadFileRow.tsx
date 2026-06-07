'use client'

import { useState, useEffect } from 'react'
import { Download, FileText, FileArchive, Code, Lock } from 'lucide-react'

function iconFor(file: string) {
  if (file.endsWith('.txt')) return FileText
  if (file.endsWith('.zip') || file.endsWith('.tar.gz')) return FileArchive
  if (file.includes('source')) return Code
  return Download
}

type State = 'idle' | 'counting' | 'ready'

export default function DownloadFileRow({ file, label }: { file: string; label?: string }) {
  const [state, setState] = useState<State>('idle')
  const [seconds, setSeconds] = useState(10)
  const Icon = iconFor(file)
  const progress = ((10 - seconds) / 10) * 100

  useEffect(() => {
    if (state !== 'counting') return
    if (seconds <= 0) { setState('ready'); return }
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [state, seconds])

  function startTimer() {
    setSeconds(10)
    setState('counting')
  }

  if (state === 'counting') {
    return (
      <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-[#E8EAED] cursor-not-allowed select-none">
        <span className="shrink-0 grid place-items-center w-9 h-9 rounded-xl bg-[#F1F3F4] text-[#80868B]">
          <Lock size={18} />
        </span>
        <span className="font-mono text-[13px] sm:text-[14px] text-[#80868B] break-all leading-tight flex-1">
          {label ?? file}
        </span>
        <span className="ml-auto shrink-0 relative flex items-center justify-center w-9 h-9">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15" fill="none" stroke="#E8EAED" strokeWidth="2.5" />
            <circle
              cx="18" cy="18" r="15" fill="none"
              stroke="#4586F3" strokeWidth="2.5"
              strokeDasharray="94.25"
              strokeDashoffset={94.25 - (progress / 100) * 94.25}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.9s linear' }}
            />
          </svg>
          <span className="text-[11px] font-bold text-[#4586F3] tabular-nums">{seconds}</span>
        </span>
      </div>
    )
  }

  if (state === 'ready') {
    return (
      <a
        href={`/downloads/${file}`}
        download
        onClick={() => setState('idle')}
        className="group flex items-center gap-3 px-5 py-4 rounded-2xl border
                   bg-[#4586F3]/8 border-[#4586F3]/40
                   hover:bg-[#4586F3]/14 hover:border-[#4586F3]/70 hover:-translate-y-0.5
                   transition-all duration-300 animate-pulse-once"
      >
        <span className="shrink-0 grid place-items-center w-9 h-9 rounded-xl bg-[#4586F3] text-white">
          <Icon size={18} />
        </span>
        <div className="flex flex-col leading-tight flex-1 min-w-0">
          <span className="text-[10px] font-semibold text-[#4586F3] uppercase tracking-wide mb-0.5">
            Ready — click to download
          </span>
          <span className="font-mono text-[13px] sm:text-[14px] text-[#202124] break-all">
            {label ?? file}
          </span>
        </div>
        <Download size={16} className="ml-auto shrink-0 text-[#4586F3]" />
      </a>
    )
  }

  return (
    <button
      onClick={startTimer}
      className="group w-full flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-[#E8EAED]
                 hover:border-[#4586F3]/40 hover:bg-[#F8F9FA] hover:-translate-y-0.5
                 transition-all duration-300 text-left cursor-pointer"
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
    </button>
  )
}
