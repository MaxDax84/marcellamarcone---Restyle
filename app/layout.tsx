import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Dott.ssa Marcella Marcone – Psicologa e Psicoterapeuta | Milano',
    template: '%s | Dott.ssa Marcella Marcone',
  },
  description:
    'Psicologa e Psicoterapeuta a Milano. Specializzata in psicologia perinatale, disturbi alimentari, psicologia dello sport e micropsicoanalisi. Riceve su appuntamento in Via Sansovino 3, Milano.',
  keywords: [
    'psicologa Milano',
    'psicoterapeuta Milano',
    'micropsicoanalisi',
    'psicologia perinatale',
    'depressione post partum',
    'disturbi alimentari',
    'ansia',
    'psicologia dello sport',
    'Marcella Marcone',
  ],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Dott.ssa Marcella Marcone',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="bg-cream text-warm-brown antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
