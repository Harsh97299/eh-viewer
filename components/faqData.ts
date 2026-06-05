export interface FaqItem {
  question: string
  answer: string
}

// Shared general FAQ — resolves the common questions about EhViewer.
// Plain module (no 'use client') so server components can index it safely.
// Answers are plain text so they can be reused verbatim in the FAQPage JSON-LD.
export const generalFaqs: FaqItem[] = [
  {
    question: 'What is EhViewer?',
    answer:
      'EhViewer is a free, open-source manga and anime comic reader for Android, built by a community of passionate contributors. EhViewer offers a huge catalog, offline downloads, smooth zoom reading, customizable themes, and privacy-first browsing — no account needed.',
  },
  {
    question: 'Is EhViewer free to use?',
    answer:
      'Yes. EhViewer is completely free and open-source under the GNU General Public License v3. There are no subscriptions, no paywalls, and no ads.',
  },
  {
    question: 'Which devices does EhViewer support?',
    answer:
      'EhViewer is built for Android phones and tablets, with Material Design 3 and Dynamic Color support. The reading experience is also tuned to work smoothly on iOS-class screen sizes.',
  },
  {
    question: 'How do I install the EhViewer APK?',
    answer:
      'Download the latest APK from the download page, then open the file on your Android device. If prompted, allow installation from unknown sources for your browser or file manager, and the app installs in a few seconds.',
  },
  {
    question: 'Do I need an account to use EhViewer?',
    answer:
      'No. EhViewer requires no signup or login. You can start browsing and reading immediately, and none of your personal information is requested or collected.',
  },
  {
    question: 'Can I read manga offline?',
    answer:
      'Yes. You can download chapters and full galleries to your device and read them offline anytime. All downloaded files are stored locally on your device.',
  },
  {
    question: 'Does EhViewer track me or show ads?',
    answer:
      'No. EhViewer contains no ads, no analytics, and no trackers. Reading history, bookmarks, and settings stay on your device and are never sent to us.',
  },
  {
    question: 'Is EhViewer safe to download?',
    answer:
      'Yes. EhViewer is open-source, so anyone can inspect the code, issue tracker, and releases on GitHub. The APK on this site is the official build with no bundled third-party software.',
  },
  {
    question: 'How do I update EhViewer?',
    answer:
      'Download the newest APK from the download page and install it over your existing app. Your library, downloads, and settings are preserved across updates.',
  },
]
