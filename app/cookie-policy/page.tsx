import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  robots: { index: false, follow: false },
}

export default function CookiePolicy() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-36 pb-24">
      <p className="section-subtitle">Informativa</p>
      <h1 className="font-serif text-4xl md:text-5xl text-warm-brown mb-4 leading-tight">
        Cookie Policy
      </h1>
      <p className="font-sans text-sm text-warm-muted mb-10">Ultimo aggiornamento: 21 agosto 2026</p>
      <div className="divider mb-10" />

      <div className="prose prose-slate max-w-none font-sans text-warm-taupe leading-relaxed space-y-6">
        <p>
          Il presente documento descrive le tipologie di cookie e strumenti equivalenti
          utilizzati dal sito <strong>www.marcellamarcone.it</strong> e le modalità con cui è
          possibile gestirli.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Cookie tecnici e strumenti equivalenti</h2>
        <p>
          Il sito non installa cookie di profilazione o marketing. L&apos;unico strumento tecnico
          utilizzato è la memoria locale del browser (<em>local storage</em>, non un vero e
          proprio cookie HTTP) per salvare la scelta espressa nel banner cookie, così da non
          richiederla ad ogni visita.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Google Maps</h2>
        <p>
          Nella pagina Contatti è presente una mappa di <strong>Google Maps</strong> (Google LLC,
          USA) con l&apos;indirizzo dello studio.{' '}
          <strong>La mappa non viene caricata automaticamente</strong>: compare solo dopo che
          accetti i cookie dal banner in fondo alla pagina, oppure se attivi manualmente la mappa
          cliccando sul pulsante &laquo;Attiva la mappa&raquo;. Una volta caricata, Google può
          installare propri cookie soggetti alla{' '}
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

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Come gestire la tua scelta</h2>
        <p>
          Puoi accettare o rifiutare l&apos;attivazione della mappa dal banner mostrato alla prima
          visita. La scelta viene salvata nella memoria locale del tuo browser e puoi cambiarla in
          qualsiasi momento cancellando i dati di navigazione del sito dalle impostazioni del
          browser:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Chrome</a></li>
          <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Firefox</a></li>
          <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Safari</a></li>
          <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Edge</a></li>
        </ul>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Google Fonts</h2>
        <p>
          Per la visualizzazione dei caratteri tipografici, il sito carica i font Playfair Display
          e Inter da Google Fonts. Questo comporta una connessione tecnica ai server di Google,
          che può registrare l&apos;indirizzo IP del dispositivo utilizzato per la visita, secondo
          le medesime modalità indicate nella{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta hover:underline"
          >
            informativa privacy di Google
          </a>
          .
        </p>
      </div>
    </section>
  )
}
