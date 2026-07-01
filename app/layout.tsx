import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { IUBENDA_SITE_ID, IUBENDA_POLICY_ID } from '@/lib/iubenda'

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
  '@type': 'MedicalBusiness',
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
  medicalSpecialty: ['Psychiatry', 'Midwifery'],
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
        {IUBENDA_SITE_ID > 0 && IUBENDA_POLICY_ID > 0 && (
          <>
            <Script id="iubenda-config" strategy="beforeInteractive">{`
              var _iub = _iub || [];
              _iub.csConfiguration = {
                "siteId": ${IUBENDA_SITE_ID},
                "cookiePolicyId": ${IUBENDA_POLICY_ID},
                "lang": "it",
                "storage": { "useSiteId": true },
                "banner": {
                  "acceptButtonColor": "#2B7390",
                  "acceptButtonDisplay": true,
                  "backgroundColor": "#0F2633",
                  "closeButtonDisplay": false,
                  "customizeButtonDisplay": true,
                  "explicitWithdrawal": true,
                  "listPurposes": true,
                  "ownerName": "Dott.ssa Marcella Marcone",
                  "position": "bottom",
                  "rejectButtonDisplay": true,
                  "textColor": "#F0F6FA"
                }
              };
            `}</Script>
            <Script src={`https://cs.iubenda.com/autoblocking/${IUBENDA_SITE_ID}.js`} strategy="afterInteractive" />
            <Script src="//cdn.iubenda.com/cs/gpp/stub.js" strategy="afterInteractive" />
            <Script src="//cdn.iubenda.com/cs/iubenda_cs.js" strategy="afterInteractive" />
          </>
        )}
      </body>
    </html>
  )
}
