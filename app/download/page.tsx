import Navbar from '../../components/Navbar'
import DownloadCTA from '../../components/DownloadCTA'
import DownloadDetails from '../../components/DownloadDetails'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Download EhViewer 1.14.6 APK',
  description:
    'Download EhViewer 1.14.6 — a free, open-source manga reader for Android with Material Design 3 and Dynamic Color. All flavors, debug symbols and source. No signup, no ads, no tracking.',
}

export default function DownloadPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <DownloadCTA />
      </div>
      <DownloadDetails />
      <Footer />
    </main>
  )
}
