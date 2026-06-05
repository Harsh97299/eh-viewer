'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home',    href: '/'             },
  { label: 'About',   href: '/about'        },
  { label: 'FAQ',     href: '/faq'          },
  { label: 'Contact', href: '/contact'      },
  { label: 'FAQ',     href: '/faq'           },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-[#E8EAED]/80"
      style={{ animation: 'navbarEnter 0.6s cubic-bezier(0.16, 1, 0.3, 1) both' }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/launcher_icon-web.svg"
            alt="EhViewer logo"
            className="w-8 h-8 rounded-xl shadow-[0_4px_12px_rgba(69,134,243,0.25)]"
          />
          <span className="font-semibold text-[#202124] text-[17px] tracking-tight">EhViewer</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#5F6368] hover:text-[#202124] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/download"
          className="hidden md:block px-5 py-2.5 rounded-full bg-[#4586F3] text-white text-sm
                     font-medium shadow-[0_4px_20px_rgba(69,134,243,0.3)] hover:bg-[#2F6FD6]
                     hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
        >
          Download APK
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl
                     bg-white border border-[#E8EAED] text-[#202124]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-b border-[#E8EAED] px-6
                    transition-all duration-300 ease-in-out
                    ${open ? 'max-h-[280px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#5F6368] hover:text-[#202124] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/download"
            onClick={() => setOpen(false)}
            className="w-fit px-6 py-3 rounded-full bg-[#4586F3] text-white text-sm font-medium"
          >
            Download APK
          </a>
        </div>
      </div>
    </nav>
  )
}
