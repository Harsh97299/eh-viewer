import Navbar from '../../components/Navbar'
import DownloadCTA from '../../components/DownloadCTA'
import DownloadDetails from '../../components/DownloadDetails'
import FAQSection from '../../components/FaqSection'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Download EhViewer 1.14.6 APK — Free Manga Reader',
  description:
    'Download EhViewer 1.14.6 — a free, open-source manga reader for Android with Material Design 3 and Dynamic Color. All EhViewer flavors, debug symbols and source. No signup, no ads, no tracking.',
  alternates: { canonical: 'https://ehviewer.app/download' },
}

export default function DownloadPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <h1 className="sr-only">Download EhViewer APK — Free Manga Reader for Android</h1>
      <div className="pt-24">
        <DownloadCTA downloadFile="EhViewer-1.14.6-default-universal.apk" />
      </div>
      <DownloadDetails />
      <Footer />
    </main>
  )
}
