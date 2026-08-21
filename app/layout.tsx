import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.marcellamarcone.it'),
  title: {
    default: 'Marcella Marcone – Psicologa e Psicoterapeuta a Milano',
    template: '%s | Dott.ssa Marcella Marcone',
  },
  description:
    'Psicologa e Psicoterapeuta a Milano, specializzata in psicologia della maternità, gravidanza, post partum, infertilità e micropsicoanalisi.',
  keywords: [
    'psicologa Milano',
    'psicoterapeuta Milano',
    'psicologia maternità Milano',
    'psicologia perinatale',
    'preparazione al parto',
    'depressione post partum',
    'maternità difficile',
    'non riesco ad avere un bambino',
    'infertilità psicologa',
    'come prepararsi a diventare mamma',
    'micropsicoanalisi',
    'ansia',
    'psicologia dello sport',
    'Marcella Marcone',
  ],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Dott.ssa Marcella Marcone',
    url: 'https://www.marcellamarcone.it',
    title: 'Dott.ssa Marcella Marcone – Psicologa e Psicoterapeuta | Milano',
    description:
      'Psicologa e Psicoterapeuta a Milano specializzata in psicologia della maternità, psicologia perinatale, gravidanza, preparazione al parto, depressione post partum, infertilità e micropsicoanalisi.',
    images: [
      {
        url: '/images/foto.jpeg',
        alt: 'Dott.ssa Marcella Marcone – Psicologa e Psicoterapeuta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dott.ssa Marcella Marcone – Psicologa e Psicoterapeuta | Milano',
    description:
      'Psicologa e Psicoterapeuta a Milano specializzata in psicologia della maternità, psicologia perinatale e micropsicoanalisi.',
    images: ['/images/foto.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Psychologist',
  name: 'Dott.ssa Marcella Marcone – Psicologa e Psicoterapeuta',
  description:
    'Psicologa e Psicoterapeuta a Milano specializzata in psicologia della maternità, psicologia perinatale, preparazione al parto, depressione post partum, infertilità e micropsicoanalisi.',
  url: 'https://www.marcellamarcone.it',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Sansovino 3',
    addressLocality: 'Milano',
    postalCode: '20133',
    addressCountry: 'IT',
  },
  areaServed: {
    '@type': 'City',
    name: 'Milano',
  },
  sameAs: ['https://www.sostegnoallamaternita.com'],
  medicalSpecialty: ['Psychiatric', 'Midwifery'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi di Psicologia e Psicoterapia',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Psicologia della Maternità' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Preparazione al Parto' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Depressione Post Partum' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infertilità e Percorsi PMA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Micropsicoanalisi' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Psicologia dello Sport' } },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
