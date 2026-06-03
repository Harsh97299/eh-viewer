import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — EhViewer',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#00111C] text-[#EAF2F9] px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-[#4C9BE0] hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-[#8398A9] leading-relaxed">
          Placeholder content. Add the EhViewer privacy policy here.
        </p>
      </div>
    </main>
  )
}
