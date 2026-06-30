import type { Metadata } from 'next'
import Script from 'next/script'
import { IUBENDA_POLICY_ID } from '@/lib/iubenda'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-36 pb-24">
      <p className="section-subtitle">Informativa</p>
      <h1 className="font-serif text-4xl md:text-5xl text-warm-brown mb-10 leading-tight">
        Privacy Policy
      </h1>
      <div className="divider mb-10" />

      {IUBENDA_POLICY_ID > 0 ? (
        <>
          <a
            href={`https://www.iubenda.com/privacy-policy/${IUBENDA_POLICY_ID}`}
            className="iubenda-white iubenda-noiframe iubenda-embed"
            title="Privacy Policy"
          >
            Privacy Policy
          </a>
          <Script src="https://cdn.iubenda.com/iubenda.js" strategy="afterInteractive" />
        </>
      ) : (
        <div className="prose prose-slate max-w-none font-sans text-warm-taupe leading-relaxed space-y-6">
          <p>
            La presente informativa descrive le modalità di trattamento dei dati personali degli
            utenti che consultano il sito web <strong>www.marcellamarcone.it</strong>, gestito dalla
            Dott.ssa Marcella Marcone (di seguito «Titolare»).
          </p>

          <h2 className="font-serif text-2xl text-warm-brown mt-8">Titolare del trattamento</h2>
          <p>
            Dott.ssa Marcella Marcone<br />
            Via Sansovino 3, 20133 Milano (MI)<br />
            P.IVA 11971950156
          </p>

          <h2 className="font-serif text-2xl text-warm-brown mt-8">Dati raccolti e finalità</h2>
          <p>
            Il sito raccoglie dati personali unicamente attraverso il modulo di contatto (nome,
            indirizzo e-mail, messaggio) al solo scopo di rispondere alle richieste degli utenti.
            Non vengono effettuate profilazioni, né i dati vengono ceduti a terzi.
          </p>

          <h2 className="font-serif text-2xl text-warm-brown mt-8">Base giuridica</h2>
          <p>
            Il trattamento è fondato sul consenso dell'interessato (art. 6, par. 1, lett. a GDPR)
            e sull'esecuzione di misure precontrattuali (art. 6, par. 1, lett. b GDPR).
          </p>

          <h2 className="font-serif text-2xl text-warm-brown mt-8">Conservazione</h2>
          <p>
            I dati sono conservati per il tempo strettamente necessario a evadere la richiesta e,
            in ogni caso, non oltre 12 mesi dalla ricezione.
          </p>

          <h2 className="font-serif text-2xl text-warm-brown mt-8">Servizi di terze parti</h2>
          <p>
            Il sito utilizza Google Maps (Google LLC) per la visualizzazione della mappa dello
            studio. Google potrebbe raccogliere dati di utilizzo secondo la propria{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta hover:underline"
            >
              informativa sulla privacy
            </a>
            .
          </p>

          <h2 className="font-serif text-2xl text-warm-brown mt-8">Diritti degli interessati</h2>
          <p>
            L'interessato ha diritto di accedere ai propri dati, rettificarli, cancellarli,
            limitarne il trattamento e opporsi al trattamento (artt. 15–21 GDPR). Può esercitare
            tali diritti scrivendo a: <a href="/contatti" className="text-terracotta hover:underline">modulo contatti</a>.
          </p>
        </div>
      )}
    </section>
  )
}
