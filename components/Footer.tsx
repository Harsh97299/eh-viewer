import Link from 'next/link'

const navGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'How to Install', href: '/#process' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Download', href: '/download' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Source Code', href: 'https://github.com/Ehviewer-Overhauled/Ehviewer' },
      { label: 'Release Notes', href: 'https://github.com/Ehviewer-Overhauled/Ehviewer/releases' },
      { label: 'Report a Bug', href: 'https://github.com/Ehviewer-Overhauled/Ehviewer/issues' },
      { label: 'GPLv3 License', href: 'https://www.gnu.org/licenses/gpl-3.0.html' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'About', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy-policy' },
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
    <footer className="bg-[#F8F9FA] border-t border-[#E8EAED] py-16 px-6 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#4586F3]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-[#EB4334]/6 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <img
                src="/launcher_icon-web.svg"
                alt="EhViewer logo"
                className="w-8 h-8 rounded-xl shadow-[0_4px_12px_rgba(69,134,243,0.25)]"
              />
              <span className="font-semibold text-[#202124] text-[17px] tracking-tight">EhViewer</span>
            </Link>
            <p className="text-sm text-[#5F6368] leading-relaxed max-w-50">
              EhViewer — a free, open-source manga reader for Android — iOS coming
              soon — built by the community.
            </p>
          </div>

          {/* Nav groups */}
          {navGroups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[13px] font-bold text-[#202124] mb-5 tracking-wide uppercase">
                {g.title}
              </h4>
              <ul className="space-y-3.5">
                {g.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#5F6368] hover:text-[#202124] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#5F6368] hover:text-[#202124] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright block */}
        <div className="pt-8 border-t border-[#E8EAED] space-y-4">
          <div className="text-[12px] text-[#80868B] space-y-1 leading-relaxed">
            {copyrightLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="text-[11px] text-[#80868B] leading-relaxed max-w-3xl">
            EhViewer is free software: you can redistribute it and/or modify it under the terms of the{' '}
            <a
              href="https://www.gnu.org/licenses/gpl-3.0.html"
              className="text-[#4586F3] hover:underline"
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
