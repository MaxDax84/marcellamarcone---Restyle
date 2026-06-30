import type { Metadata } from 'next'
import Script from 'next/script'
import { IUBENDA_POLICY_ID } from '@/lib/iubenda'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  robots: { index: false, follow: false },
}

export default function CookiePolicy() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-36 pb-24">
      <p className="section-subtitle">Informativa</p>
      <h1 className="font-serif text-4xl md:text-5xl text-warm-brown mb-10 leading-tight">
        Cookie Policy
      </h1>
      <div className="divider mb-10" />

      {IUBENDA_POLICY_ID > 0 ? (
        <>
          <a
            href={`https://www.iubenda.com/privacy-policy/${IUBENDA_POLICY_ID}/cookie-policy`}
            className="iubenda-white iubenda-noiframe iubenda-embed"
            title="Cookie Policy"
          >
            Cookie Policy
          </a>
          <Script src="https://cdn.iubenda.com/iubenda.js" strategy="afterInteractive" />
        </>
      ) : (
        <div className="prose prose-slate max-w-none font-sans text-warm-taupe leading-relaxed space-y-6">
          <p>
            Il presente documento descrive le tipologie di cookie utilizzate dal sito{' '}
            <strong>www.marcellamarcone.it</strong> e le modalità con cui è possibile gestirle.
          </p>

          <h2 className="font-serif text-2xl text-warm-brown mt-8">Cosa sono i cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti visitati inviano al browser, dove vengono
            memorizzati per essere ritrasmessi alla visita successiva. Permettono al sito di
            ricordare le preferenze dell'utente e di migliorarne l'esperienza.
          </p>

          <h2 className="font-serif text-2xl text-warm-brown mt-8">Cookie tecnici (necessari)</h2>
          <p>
            Questo sito utilizza esclusivamente cookie tecnici, necessari al funzionamento delle
            pagine. Non richiedono il consenso dell'utente ai sensi dell'art. 122 del Codice Privacy.
          </p>

          <h2 className="font-serif text-2xl text-warm-brown mt-8">Cookie di terze parti</h2>
          <p>
            Il sito incorpora una mappa fornita da <strong>Google Maps</strong> (Google LLC,
            USA). L'interazione con la mappa può comportare l'installazione di cookie di terze
            parti soggetti alla{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta hover:underline"
            >
              Privacy Policy di Google
            </a>
            .
          </p>

          <h2 className="font-serif text-2xl text-warm-brown mt-8">Gestione dei cookie</h2>
          <p>
            L'utente può controllare e/o eliminare i cookie attraverso le impostazioni del proprio
            browser. La disabilitazione dei cookie tecnici potrebbe compromettere la corretta
            visualizzazione del sito.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Chrome</a></li>
            <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Firefox</a></li>
            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Edge</a></li>
          </ul>
        </div>
      )}
    </section>
  )
}
