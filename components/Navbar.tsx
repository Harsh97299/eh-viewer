'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home',    href: '/'             },
  { label: 'About',   href: '/about'        },
  { label: 'Contact', href: '/contact'      },
  { label: 'Reviews', href: '/#testimonials' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#001A2C]/80 backdrop-blur-2xl border-b border-[#00253E]/60"
      style={{ animation: 'navbarEnter 0.6s cubic-bezier(0.16, 1, 0.3, 1) both' }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/launcher_icon-web.svg"
            alt="EhViewer logo"
            className="w-8 h-8 rounded-xl shadow-[0_4px_12px_rgba(69,134,243,0.4)]"
          />
          <span className="font-semibold text-[#EAF2F9] text-[17px] tracking-tight">EhViewer</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#93A7B8] hover:text-[#EAF2F9] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/download"
          className="hidden md:block px-5 py-2.5 rounded-full bg-[#00406C] text-white text-sm
                     font-medium shadow-[0_4px_20px_rgba(69,134,243,0.3)] hover:bg-[#003A61]
                     hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
        >
          Download APK
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl
                     bg-[#001A2C] border border-[#00253E] text-[#EAF2F9]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-[#001A2C]/95 backdrop-blur-2xl border-b border-[#00253E] px-6
                    transition-all duration-300 ease-in-out
                    ${open ? 'max-h-[280px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#C2D1DD] hover:text-[#EAF2F9] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/download"
            onClick={() => setOpen(false)}
            className="w-fit px-6 py-3 rounded-full bg-[#00406C] text-white text-sm font-medium"
          >
            Download APK
          </a>
        </div>
      </div>
    </nav>
  )
}
