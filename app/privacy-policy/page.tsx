import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AnimateIn from '../../components/AnimateIn'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description: 'EhViewer privacy policy — no personal data collected, no ads, no tracking.',
}

const SECTIONS = [
  {
    title: 'Information we collect',
    body: 'EhViewer does not require an account and does not collect any personal information. We do not ask for your name, email address, phone number, location, or any other identifying data. The app works entirely without you providing any personal details.',
  },
  {
    title: 'No ads or trackers',
    body: 'EhViewer contains no advertisements and no third-party tracking or analytics SDKs. Your reading habits, search queries, and browsing history are never sent to any server by the app itself.',
  },
  {
    title: 'Local storage',
    body: 'Data such as downloaded comics, your favorites list, and reading progress is stored locally on your device only. You control this data — it can be deleted at any time by clearing app data or uninstalling EhViewer.',
  },
  {
    title: 'Third-party content',
    body: 'EhViewer is a client app that connects to external gallery platforms. When you browse or download content from those platforms, their own privacy policies and terms of service apply. EhViewer has no control over and takes no responsibility for the data practices of those third-party services.',
  },
  {
    title: "Children's privacy",
    body: 'EhViewer is not intended for use by children under the age of 13. We do not knowingly collect or solicit any data from anyone under 13. Because the app collects no personal information from any user, no additional safeguards specific to children are technically possible or necessary beyond this statement.',
  },
  {
    title: 'Open source & GPLv3',
    body: 'EhViewer is free software distributed under the GNU General Public License v3. The full source code is publicly available on GitHub so anyone can audit exactly how the app works and confirm these privacy commitments.',
  },
  {
    title: 'Legality',
    body: "The legality of accessing content through EhViewer depends on the copyright and content distribution laws of your country. EhViewer the app is lawful free software, but users are solely responsible for ensuring their use of content complies with applicable local laws.",
  },
  {
    title: 'Changes to this policy',
    body: 'If this privacy policy changes materially, the updated version will be published on this page with a revised "Last updated" date. We encourage you to review this page periodically.',
  },
]

export default function PrivacyPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-24 bg-[#00111C] text-[#EAF2F9]">
        <section className="px-6 pt-16 pb-24">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <p className="text-[#4C9BE0] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
                Legal
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                Privacy Policy
              </h1>
              <p className="text-[#93A7B8] text-sm mb-12">Last updated: June 4, 2026</p>
            </AnimateIn>

            <AnimateIn delay={80}>
              <p className="text-[#93A7B8] leading-relaxed mb-16">
                EhViewer is built on a simple principle: your reading is your business. The app
                requires no account, collects no personal data, and contains no ads or trackers.
                This policy explains what information is and is not handled when you use EhViewer.
              </p>
            </AnimateIn>

            <div className="space-y-10">
              {SECTIONS.map((s, i) => (
                <AnimateIn key={s.title} delay={i * 50}>
                  <h2 className="text-xl font-semibold text-[#EAF2F9] mb-3">{s.title}</h2>
                  <p className="text-[#8398A9] leading-relaxed">{s.body}</p>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn delay={200}>
              <div className="mt-16 pt-10 border-t border-[#00253E]">
                <h2 className="text-xl font-semibold text-[#EAF2F9] mb-3">Contact</h2>
                <p className="text-[#8398A9] leading-relaxed mb-6">
                  Questions about this privacy policy? Reach us on the{' '}
                  <Link href="/contact" className="text-[#4C9BE0] hover:underline">
                    contact page
                  </Link>
                  .
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-5 py-2.5 rounded-full bg-[#00406C] text-white text-sm font-medium
                               hover:bg-[#003A61] transition-colors"
                  >
                    Contact us
                  </Link>
                  <a
                    href="https://github.com/Ehviewer-Overhauled/Ehviewer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full border border-[#00253E] text-[#EAF2F9] text-sm
                               font-medium hover:bg-[#001A2C] transition-colors"
                  >
                    View source on GitHub
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
