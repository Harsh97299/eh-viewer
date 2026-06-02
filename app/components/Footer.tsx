import { BookOpen } from 'lucide-react'

const navGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How to Install', href: '#process' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Download', href: '#download' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Source Code', href: '#' },
      { label: 'Release Notes', href: '#' },
      { label: 'Report a Bug', href: '#' },
      { label: 'GPLv3 License', href: 'https://www.gnu.org/licenses/gpl-3.0.html' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
]

const copyrightLines = [
  'Copyright 2014–2019 Hippo Seven',
  'Copyright 2020–2022 NekoInverter',
  'Copyright 2022–2023 Tarsin Norbin',
  'Copyright 2023–2024 Foolbar',
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#ECECEC] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand column */}
          <div>
            <a href="#" className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E63946] to-[#C81D25]
                              flex items-center justify-center shadow-[0_4px_12px_rgba(230,57,70,0.35)]">
                <BookOpen size={15} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-semibold text-[#111111] text-[17px] tracking-tight">EhViewer</span>
            </a>
            <p className="text-sm text-[#888888] leading-relaxed max-w-[200px]">
              Free, open-source manga reader for Android &amp; iOS.
            </p>
          </div>

          {/* Nav groups */}
          {navGroups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[13px] font-bold text-[#111111] mb-5 tracking-wide uppercase">
                {g.title}
              </h4>
              <ul className="space-y-3.5">
                {g.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#888888] hover:text-[#111111] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright block */}
        <div className="pt-8 border-t border-[#ECECEC] space-y-4">
          <div className="text-[12px] text-[#888888] space-y-1 leading-relaxed">
            {copyrightLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="text-[11px] text-[#AAAAAA] leading-relaxed max-w-3xl">
            EhViewer is free software: you can redistribute it and/or modify it under the terms of the{' '}
            <a
              href="https://www.gnu.org/licenses/gpl-3.0.html"
              className="text-[#E63946] hover:underline"
            >
              GNU General Public License
            </a>{' '}
            as published by the Free Software Foundation, either version 3 of the License, or (at your
            option) any later version. EhViewer is distributed in the hope that it will be useful, but
            WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
            A PARTICULAR PURPOSE.
          </p>
        </div>
      </div>
    </footer>
  )
}
