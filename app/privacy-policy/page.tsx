import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-36 pb-24">
      <p className="section-subtitle">Informativa</p>
      <h1 className="font-serif text-4xl md:text-5xl text-warm-brown mb-4 leading-tight">
        Privacy Policy
      </h1>
      <p className="font-sans text-sm text-warm-muted mb-10">Ultimo aggiornamento: 21 agosto 2026</p>
      <div className="divider mb-10" />

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

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Dati raccolti dal sito</h2>
        <p>
          Questo sito non utilizza moduli di contatto, newsletter o altri strumenti che
          raccolgano direttamente dati personali. L&apos;indirizzo email dello studio è visibile
          solo dopo un clic esplicito dell&apos;utente (per limitare la raccolta automatica da
          parte di bot) e il contatto avviene tramite il tuo client di posta esterno: se scrivi
          all&apos;indirizzo indicato, i tuoi dati (indirizzo email, contenuto del messaggio) sono
          trattati secondo le finalità della richiesta e nel rispetto del segreto professionale e
          degli obblighi deontologici a cui è tenuta la Dott.ssa Marcone in quanto psicologa
          iscritta all&apos;Albo.
        </p>
        <p>
          Il sito registra automaticamente, tramite il tuo browser, un dato tecnico in memoria
          locale (<em>local storage</em>) per ricordare la scelta espressa nel banner cookie, così
          da non richiederla ad ogni visita. Questo dato resta sul tuo dispositivo e non viene
          trasmesso al Titolare.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Base giuridica</h2>
        <p>
          Il trattamento dei dati eventualmente scambiati via email si fonda sul consenso
          implicito nell&apos;atto di scrivere (art. 6, par. 1, lett. a GDPR) e, per l&apos;eventuale
          svolgimento di un percorso, sull&apos;esecuzione di misure precontrattuali (art. 6, par. 1,
          lett. b GDPR). L&apos;attivazione della mappa di Google avviene solo previo consenso
          esplicito, revocabile in ogni momento cancellando i dati di navigazione del browser.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Conservazione</h2>
        <p>
          Non essendoci raccolta diretta di dati tramite moduli sul sito, non vengono conservati
          archivi di contatti da parte del sito stesso. Le comunicazioni scambiate via email
          restano nella casella di posta della Titolare secondo la propria prassi professionale.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Servizi di terze parti</h2>
        <p>
          Nella pagina Contatti è presente una mappa di <strong>Google Maps</strong>. La mappa{' '}
          <strong>non viene caricata automaticamente</strong>: viene mostrata solo dopo che
          accetti i cookie dal banner, oppure se attivi manualmente la mappa cliccando
          sull&apos;apposito pulsante. Una volta caricata, Google può installare propri cookie e
          raccogliere dati secondo la{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta hover:underline"
          >
            informativa sulla privacy di Google
          </a>
          , che non è sotto il controllo del Titolare.
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Diritti degli interessati</h2>
        <p>
          In qualità di interessato, ai sensi degli articoli 15-22 del Regolamento (UE) 2016/679
          (GDPR), hai diritto di richiedere in ogni momento: accesso ai tuoi dati, rettifica,
          cancellazione, limitazione del trattamento, portabilità dei dati e opposizione al
          trattamento. Puoi esercitare questi diritti scrivendo all&apos;indirizzo email indicato
          nella pagina{' '}
          <a href="/contatti" className="text-terracotta hover:underline">
            Contatti
          </a>
          . Hai inoltre diritto di proporre reclamo al Garante per la Protezione dei Dati
          Personali (
          <a
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta hover:underline"
          >
            www.garanteprivacy.it
          </a>
          ).
        </p>

        <h2 className="font-serif text-2xl text-warm-brown mt-8">Modifiche a questa informativa</h2>
        <p>
          Questa informativa può essere aggiornata nel tempo, ad esempio in caso di modifiche agli
          strumenti utilizzati dal sito. La data di ultimo aggiornamento è indicata in cima alla
          pagina.
        </p>
      </div>
    </section>
  )
}
