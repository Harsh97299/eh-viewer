import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "EhViewer Privacy Policy — Privacy-First Manga Reader",
  description:
    "Privacy policy for EhViewer — a free, open-source, privacy-first manga reader for Android. No accounts, no ads, no tracking.",
  alternates: { canonical: "https://ehviewer.app/privacy-policy" },
};


export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#202124] px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-[#80868B]">
            Last updated: June 6, 2026
          </p>

          <p className="mt-6 text-[#5F6368] leading-relaxed">
            EhViewer is a free, open-source manga reader built on privacy-first
            principles — no account required, no ads, no tracking. This policy
            describes what limited information is collected when you use the
            EhViewer app or the{" "}
            <a
              href="https://ehviewer.app"
              className="text-[#4586F3] hover:underline"
            >
              ehviewer.app
            </a>{" "}
            website.
          </p>

          {/* 1 */}
          <h2 className="mt-10 text-xl font-semibold text-[#202124]">
            1. Information We Collect
          </h2>
          <p className="mt-4 text-[#5F6368] leading-relaxed">
            <strong className="text-[#202124]">App:</strong> EhViewer does not
            require you to create an account or provide any personal
            information. No data is transmitted to us from within the app.
          </p>
          <p className="mt-4 text-[#5F6368] leading-relaxed">
            <strong className="text-[#202124]">Website:</strong> Our web server
            may record standard access logs (IP address, browser user-agent,
            referring URL, timestamp) solely for security and operational
            purposes. These logs are not shared with third parties and are
            retained only as long as necessary.
          </p>

          {/* 2 */}
          <h2 className="mt-10 text-xl font-semibold text-[#202124]">
            2. How We Use Information
          </h2>
          <p className="mt-4 text-[#5F6368] leading-relaxed">
            Server logs are used exclusively to operate and secure the website.
            We do not use any information to build profiles, serve targeted
            advertising, or share data with marketing partners.
          </p>

          {/* 3 */}
          <h2 className="mt-10 text-xl font-semibold text-[#202124]">
            3. Data Stored on Your Device
          </h2>
          <p className="mt-4 text-[#5F6368] leading-relaxed">
            All app data — reading history, bookmarks, downloaded files, and
            settings — is stored locally on your device. Uninstalling EhViewer
            removes this data. We have no access to it.
          </p>

          {/* 4 */}
          <h2 className="mt-10 text-xl font-semibold text-[#202124]">
            4. Third-Party Services
          </h2>
          <p className="mt-4 text-[#5F6368] leading-relaxed">
            EhViewer connects to content sources that you configure. Those
            services have their own privacy practices which we do not control.
            Please review the policies of any source you choose to use.
          </p>
          <p className="mt-4 text-[#5F6368] leading-relaxed">
            The app&apos;s source code, issue tracker, and releases are hosted
            on{" "}
            <a
              href="https://github.com/Ehviewer-Overhauled/Ehviewer"
              className="text-[#4586F3] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            , subject to{" "}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              className="text-[#4586F3] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub&apos;s Privacy Statement
            </a>
            .
          </p>

          {/* 5 */}
          <h2 className="mt-10 text-xl font-semibold text-[#202124]">
            5. Cookies &amp; Tracking
          </h2>
          <p className="mt-4 text-[#5F6368] leading-relaxed">
            This website does not use advertising cookies, analytics scripts, or
            cross-site trackers. No fingerprinting or behavioural profiling
            takes place.
          </p>

          {/* 6 */}
          <h2 className="mt-10 text-xl font-semibold text-[#202124]">
            6. Children&apos;s Privacy
          </h2>
          <p className="mt-4 text-[#5F6368] leading-relaxed">
            EhViewer is not directed at children under the age of 13. We do not
            knowingly collect personal information from children. If you believe
            a child has provided us with personal information, please{" "}
            <Link href="/contact" className="text-[#4586F3] hover:underline">
              contact us
            </Link>{" "}
            so we can address it.
          </p>

          {/* 7 */}
          <h2 className="mt-10 text-xl font-semibold text-[#202124]">
            7. Data Sharing
          </h2>
          <p className="mt-4 text-[#5F6368] leading-relaxed">
            We do not sell, rent, or otherwise share personal data with third
            parties, except where required by law.
          </p>

          {/* 8 */}
          <h2 className="mt-10 text-xl font-semibold text-[#202124]">
            8. Your Rights
          </h2>
          <p className="mt-4 text-[#5F6368] leading-relaxed">
            Because all app data is stored locally on your device, you can
            access or delete it at any time by clearing the app&apos;s storage
            in your device settings or uninstalling the app. For any website
            data concerns, please{" "}
            <Link href="/contact" className="text-[#4586F3] hover:underline">
              contact us
            </Link>
            .
          </p>

          {/* 9 */}
          <h2 className="mt-10 text-xl font-semibold text-[#202124]">
            9. Changes to This Policy
          </h2>
          <p className="mt-4 text-[#5F6368] leading-relaxed">
            We may update this policy from time to time. The &ldquo;Last
            updated&rdquo; date at the top of this page always reflects the most
            recent revision. Continued use of EhViewer after changes are posted
            constitutes your acceptance of the updated policy.
          </p>

          {/* 10 */}
          <h2 className="mt-10 text-xl font-semibold text-[#202124]">
            10. Contact
          </h2>
          <p className="mt-4 text-[#5F6368] leading-relaxed">
            Questions about this policy? Reach us via our{" "}
            <Link href="/contact" className="text-[#4586F3] hover:underline">
              contact page
            </Link>{" "}
            or email{" "}
            <a
              href="mailto:support@ehviewer.app"
              className="text-[#4586F3] hover:underline"
            >
              support@ehviewer.app
            </a>
            .
          </p>

          <p className="mt-12 text-sm text-[#80868B] leading-relaxed">
            EhViewer is free software distributed under the{" "}
            <a
              href="https://www.gnu.org/licenses/gpl-3.0.html"
              className="text-[#4586F3] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GNU General Public License v3
            </a>
            .
          </p>
        </div>

      </main>
      <Footer />
    </>
  );
}
