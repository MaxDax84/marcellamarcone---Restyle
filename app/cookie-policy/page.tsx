import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Tipologie di cookie e strumenti equivalenti utilizzati dal sito della Dott.ssa Marcella Marcone e modalità per gestire o revocare il consenso.',
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
          accetti i cookie dal banner in fondo alla pagina, oppure se la attivi singolarmente
          cliccando sul pulsante &laquo;Carica la mappa di Google&raquo;. Quel pulsante vale
          soltanto per la mappa e non modifica le altre preferenze. Una volta caricata, Google può
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
          Puoi accettare o rifiutare dal banner mostrato alla prima visita. La scelta viene
          salvata nella memoria locale del tuo browser e{' '}
          <strong>
            puoi modificarla o revocarla in qualsiasi momento dal link &laquo;Preferenze
            cookie&raquo; presente nel footer di ogni pagina
          </strong>
          , che riapre il banner. Revocare è semplice quanto acconsentire, come previsto
          dall&apos;art. 7.3 del GDPR.
        </p>
        <p>
          In alternativa puoi cancellare i dati di navigazione del sito dalle impostazioni del
          browser:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Chrome</a></li>
          <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Firefox</a></li>
          <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Safari</a></li>
          <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Edge</a></li>
        </ul>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Caratteri tipografici</h2>
        <p>
          I caratteri Playfair Display e Inter sono <strong>ospitati direttamente su questo
          sito</strong>: non viene effettuata alcuna connessione ai server di Google Fonts e il
          tuo indirizzo IP non viene comunicato a Google per visualizzare le pagine. L&apos;unico
          contenuto di terze parti è la mappa descritta sopra, che resta subordinata al tuo
          consenso.
        </p>
      </div>
    </section>
  )
}
