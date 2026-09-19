import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termini e Condizioni',
  description:
    'Condizioni di utilizzo del sito della Dott.ssa Marcella Marcone: contenuti, proprietà intellettuale, limitazioni di responsabilità e legge applicabile.',
  robots: { index: false, follow: false },
}

export default function TerminiCondizioni() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-36 pb-24">
      <p className="section-subtitle">Informativa</p>
      <h1 className="font-serif text-4xl md:text-5xl text-warm-brown mb-4 leading-tight">
        Termini e Condizioni
      </h1>
      <p className="font-sans text-sm text-warm-muted mb-10">Ultimo aggiornamento: 21 agosto 2026</p>
      <div className="divider mb-10" />

      <div className="prose prose-slate max-w-none font-sans text-warm-taupe leading-relaxed space-y-6">
        <h2 className="font-serif text-2xl text-warm-brown mt-8">Oggetto</h2>
        <p>
          Il presente sito ha finalità informativa e di presentazione dei servizi professionali
          della Dott.ssa Marcella Marcone, Psicologa e Psicoterapeuta iscritta all&apos;Albo degli
          Psicologi della Lombardia con n. 5056, P.IVA 11971950156, con domicilio professionale in
          Via Sansovino 3, 20133 Milano (MI). Navigando e utilizzando questo sito accetti i
          termini descritti in questa pagina.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Natura dei contenuti</h2>
        <p>
          I contenuti pubblicati su questo sito hanno scopo puramente informativo e divulgativo:
          descrivono i servizi, l&apos;approccio e l&apos;attività professionale della Dott.ssa
          Marcone, ma <strong>non costituiscono in alcun modo una consulenza psicologica, una
          diagnosi o un trattamento a distanza</strong>, né sostituiscono un colloquio diretto con
          un professionista.
        </p>
        <p>
          Se ti trovi in una situazione di emergenza o urgenza, non utilizzare questo sito:
          contatta il numero unico di emergenza 112, il tuo medico di base, o rivolgiti al Pronto
          Soccorso più vicino.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Avvio di un percorso</h2>
        <p>
          Nessun rapporto professionale si costituisce con la sola consultazione del sito o
          l&apos;invio di un&apos;email. L&apos;effettivo avvio di un percorso, con le relative
          condizioni, viene definito solo dopo un primo colloquio conoscitivo diretto con la
          Dott.ssa Marcone.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Link e servizi esterni</h2>
        <p>
          Il sito contiene collegamenti a piattaforme esterne (Google Maps e altri servizi
          eventualmente citati nelle pubblicazioni) gestite da terze parti. La Titolare non è
          responsabile dei contenuti, delle condizioni d&apos;uso o delle pratiche in materia di
          privacy di questi servizi, che restano regolati dai rispettivi termini.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Proprietà intellettuale</h2>
        <p>
          Testi, immagini e grafica di questo sito sono di proprietà della Dott.ssa Marcella
          Marcone o utilizzati con relativa licenza. È vietata la riproduzione, anche parziale,
          dei contenuti senza autorizzazione scritta, salvo le citazioni con indicazione della
          fonte.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Limitazione di responsabilità</h2>
        <p>
          La Titolare cura con attenzione l&apos;accuratezza dei contenuti pubblicati, ma non
          garantisce che siano sempre completi, aggiornati o privi di errori. Le informazioni
          presenti sul sito possono essere modificate in qualsiasi momento senza preavviso.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Legge applicabile e foro competente</h2>
        <p>
          Il presente sito e i suoi contenuti sono regolati dalla legge italiana. Per qualsiasi
          controversia relativa all&apos;uso del sito è competente il foro di Milano, salvo le
          diverse previsioni inderogabili eventualmente applicabili a tutela del consumatore.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Contatti</h2>
        <p>
          Per qualsiasi richiesta relativa a questi termini puoi scrivere all&apos;indirizzo email
          indicato nella pagina{' '}
          <a href="/contatti" className="text-terracotta hover:underline">
            Contatti
          </a>
          . Per l&apos;informativa sul trattamento dei dati personali e sui cookie, consulta la{' '}
          <a href="/privacy-policy" className="text-terracotta hover:underline">
            Privacy Policy
          </a>{' '}
          e la{' '}
          <a href="/cookie-policy" className="text-terracotta hover:underline">
            Cookie Policy
          </a>
          .
        </p>
      </div>
    </section>
  )
}
