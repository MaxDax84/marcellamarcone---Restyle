import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Psicologia della Maternità – Supporto per Gravidanza, Parto e Post Partum',
  description:
    'Psicologa specializzata in maternità a Milano. Supporto psicologico per prepararsi a diventare mamma, affrontare le difficoltà della maternità, infertilità, preparazione al parto e depressione post partum.',
  keywords: [
    'psicologia della maternità Milano',
    'maternità difficile',
    'come prepararsi a diventare mamma',
    'preparazione al parto psicologica',
    'non riesco ad avere un bambino',
    'infertilità supporto psicologico',
    'difficoltà della maternità',
    'depressione post partum',
    'psicologia perinatale Milano',
    'supporto gravidanza psicologa',
    'partorire paura parto',
    'psicologa maternità Milano',
    'problemi maternità',
    'diventare mamma psicologia',
  ],
  alternates: {
    canonical: 'https://www.marcellamarcone.it/maternita',
  },
}

const faq = [
  {
    domanda: 'Come ci si prepara psicologicamente a diventare mamma?',
    risposta:
      'Prepararsi a diventare mamma non riguarda solo il corpo, ma anche la mente e l\'identità. Un percorso psicologico aiuta ad esplorare le aspettative sulla maternità, a riconoscere e elaborare le paure, a rafforzare le risorse interiori e a prepararsi ai cambiamenti che accompagnano l\'arrivo di un figlio. Lavorare su questi aspetti durante la gravidanza rende il percorso più sereno e consapevole.',
  },
  {
    domanda: 'Come ci si prepara al parto psicologicamente?',
    risposta:
      'La preparazione psicologica al parto è fondamentale quanto quella fisica. Attraverso colloqui individuali si lavora sulla gestione dell\'ansia, sulla paura del dolore, sulla costruzione di aspettative realistiche e sul senso di controllo. Questo aiuta la futura mamma ad affrontare il parto con maggiore fiducia nel proprio corpo e serenità interiore.',
  },
  {
    domanda: 'Cosa fare se non riesco ad avere un bambino?',
    risposta:
      'L\'infertilità è un\'esperienza emotivamente molto intensa, che può generare senso di colpa, dolore, tensione di coppia e crisi identitaria. Un supporto psicologico specialistico aiuta ad elaborare queste emozioni, a sostenere il percorso di procreazione medicalmente assistita (PMA) e a prendere decisioni consapevoli nel momento più difficile.',
  },
  {
    domanda: 'Cosa si intende per difficoltà della maternità?',
    risposta:
      'Le difficoltà della maternità comprendono un ampio spettro di vissuti: l\'ambivalenza emotiva durante la gravidanza, le paure legate al parto, le difficoltà nel legame con il neonato, la depressione post partum, il senso di inadeguatezza come madre e il cambiamento dell\'identità femminile. Un percorso psicologico aiuta a riconoscere, attraversare e trasformare queste fasi.',
  },
  {
    domanda: 'Quando chiedere aiuto durante la gravidanza?',
    risposta:
      'È utile chiedere supporto psicologico in qualsiasi momento in cui si avverte una difficoltà: ansia eccessiva, umore costantemente basso, paure intense legate al parto o al futuro bambino, storia di aborti precedenti, gravidanza a rischio o semplicemente il desiderio di vivere questa esperienza con più consapevolezza e supporto.',
  },
  {
    domanda: 'Cos\'è la depressione post partum e come si affronta?',
    risposta:
      'La depressione post partum è un disturbo dell\'umore che colpisce alcune donne nelle settimane o mesi dopo il parto. Si manifesta con tristezza persistente, stanchezza intensa, difficoltà nel legame con il bambino, ansia e pensieri intrusivi. Non è una colpa né una debolezza: è una condizione reale e trattabile. Un sostegno psicologico tempestivo è fondamentale per il benessere della madre e del neonato.',
  },
]

export default function Maternita() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.domanda,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.risposta,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-beige to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="section-subtitle text-terracotta">Psicologia della Maternità · Milano</p>
            <h1 className="font-serif text-5xl md:text-6xl text-warm-brown leading-[1.1] mb-6">
              Maternità: un percorso<br />
              <span className="text-terracotta">da non affrontare da sola</span>
            </h1>
            <div className="divider" />
            <p className="font-sans text-warm-taupe text-lg max-w-2xl leading-relaxed">
              Diventare madre è una delle esperienze più profonde e trasformative nella vita di una donna.
              Porta con sé gioia, ma anche ansie, incertezze e difficoltà. La Dott.ssa Marcella Marcone
              offre supporto psicologico specialistico per accompagnare ogni donna nel percorso verso
              la maternità: dal desiderio di avere un bambino, alla gravidanza, al parto e al post partum.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contatti" className="btn-primary">
                Richiedi un colloquio
              </Link>
              <Link href="/servizi" className="btn-outline">
                Tutti i servizi
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AREE */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-24">

          {/* PREPARARSI A DIVENTARE MAMMA */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-subtitle">Gravidanza</p>
                <h2 className="font-serif text-3xl md:text-4xl text-warm-brown mb-4 leading-snug">
                  Come prepararsi<br />a diventare mamma
                </h2>
                <div className="divider" />
                <p className="font-sans text-warm-taupe leading-relaxed mb-4">
                  La gravidanza è un momento di profonda trasformazione: cambia il corpo, cambia l'identità,
                  cambiano le relazioni. Molte donne si chiedono se stanno facendo le cose giuste, se saranno
                  mamme all'altezza, come cambierà la coppia con l'arrivo di un figlio.
                </p>
                <p className="font-sans text-warm-taupe leading-relaxed">
                  Un percorso psicologico durante la gravidanza aiuta a prepararsi emotivamente alla maternità:
                  a riconoscere le proprie paure, a costruire aspettative realistiche e a rafforzare le risorse
                  interiori necessarie per affrontare questo cambiamento con serenità e consapevolezza.
                </p>
              </div>
              <div className="bg-sage/10 rounded-2xl p-8 md:p-10">
                <h3 className="font-serif text-xl text-warm-brown mb-6">Il percorso supporta:</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    'Gestione dell\'ansia e delle paure legate alla gravidanza',
                    'Elaborazione delle aspettative sul ruolo materno',
                    'Supporto alla coppia nel cambiamento',
                    'Preparazione emotiva al momento del parto',
                    'Costruzione del legame prenatale con il bambino',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-terracotta mt-1 flex-shrink-0">◈</span>
                      <span className="font-sans text-sm text-warm-taupe leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* PREPARAZIONE AL PARTO */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-terracotta/5 rounded-2xl p-8 md:p-10">
                <h3 className="font-serif text-xl text-warm-brown mb-6">Il lavoro psicologico comprende:</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    'Elaborazione delle paure legate al dolore del parto',
                    'Tecniche di rilassamento e gestione dell\'ansia',
                    'Rafforzamento del senso di controllo e fiducia nel proprio corpo',
                    'Preparazione mentale a possibili scenari imprevisti',
                    'Supporto anche dopo un parto traumatico o difficile',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-terracotta mt-1 flex-shrink-0">◈</span>
                      <span className="font-sans text-sm text-warm-taupe leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <p className="section-subtitle">Preparazione al parto</p>
                <h2 className="font-serif text-3xl md:text-4xl text-warm-brown mb-4 leading-snug">
                  Affrontare il parto<br />con serenità
                </h2>
                <div className="divider" />
                <p className="font-sans text-warm-taupe leading-relaxed mb-4">
                  Il momento del parto è spesso carico di aspettative, timori e incognite. La paura del dolore,
                  di non essere all'altezza, di perdere il controllo sono sentimenti comuni e comprensibili
                  che è possibile riconoscere ed elaborare in un percorso psicologico.
                </p>
                <p className="font-sans text-warm-taupe leading-relaxed">
                  La Dott.ssa Marcella Marcone ha maturato una lunga esperienza nella preparazione psicologica
                  al parto, avendo collaborato per oltre quindici anni con la Clinica S. Pio X di Milano
                  dove seguiva le future mamme nell'accompagnamento alla nascita e nel sostegno alla genitorialità.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* DIFFICOLTÀ POST PARTUM */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-subtitle">Post partum</p>
                <h2 className="font-serif text-3xl md:text-4xl text-warm-brown mb-4 leading-snug">
                  Le difficoltà<br />della maternità
                </h2>
                <div className="divider" />
                <p className="font-sans text-warm-taupe leading-relaxed mb-4">
                  Diventare mamma non è sempre come ci si aspettava. Molte donne vivono un senso di
                  inadeguatezza, di stanchezza profonda, di distanza dal proprio bambino, di smarrimento
                  identitario. Queste difficoltà non sono un fallimento: sono segnali da ascoltare.
                </p>
                <p className="font-sans text-warm-taupe leading-relaxed mb-4">
                  La <strong className="text-warm-brown font-medium">depressione post partum</strong> è
                  una condizione reale e trattabile che colpisce molte donne dopo il parto. Si manifesta
                  con tristezza persistente, ansia, irritabilità, difficoltà nel legame con il neonato e
                  senso di colpa. Un supporto psicologico tempestivo è fondamentale.
                </p>
                <p className="font-sans text-warm-taupe leading-relaxed">
                  Anche il <strong className="text-warm-brown font-medium">baby blues</strong> e le
                  trasformazioni identitarie profonde che accompagnano il diventare madre meritano
                  attenzione e ascolto specialistico.
                </p>
              </div>
              <div className="bg-sage/10 rounded-2xl p-8 md:p-10">
                <h3 className="font-serif text-xl text-warm-brown mb-6">Problemi frequenti:</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    'Depressione post partum',
                    'Baby blues e sbalzi d\'umore',
                    'Senso di inadeguatezza come madre',
                    'Difficoltà nel legame con il neonato',
                    'Ansia e pensieri intrusivi',
                    'Smarrimento identitario',
                    'Difficoltà nel ritorno alla vita lavorativa e sociale',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-terracotta mt-1 flex-shrink-0">◈</span>
                      <span className="font-sans text-sm text-warm-taupe leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* INFERTILITÀ */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-terracotta/5 rounded-2xl p-8 md:p-10">
                <p className="font-sans text-warm-taupe text-sm leading-relaxed italic border-l-2 border-terracotta pl-4 mb-6">
                  "Il desiderio di maternità non sempre trova risposta immediata. Questo non significa
                  che il percorso sia finito: significa che ha bisogno di sostegno, di tempo e di uno
                  sguardo che sappia tenere insieme la speranza e la realtà."
                </p>
                <h3 className="font-serif text-xl text-warm-brown mb-4">Il supporto psicologico aiuta a:</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Elaborare il dolore e il senso di colpa legati all\'infertilità',
                    'Sostenere emotivamente le fasi del percorso PMA',
                    'Gestire i possibili insuccessi e le decisioni difficili',
                    'Supportare la comunicazione nella coppia',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-terracotta mt-1 flex-shrink-0">◈</span>
                      <span className="font-sans text-sm text-warm-taupe leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <p className="section-subtitle">Infertilità e PMA</p>
                <h2 className="font-serif text-3xl md:text-4xl text-warm-brown mb-4 leading-snug">
                  Non riesco<br />ad avere un bambino
                </h2>
                <div className="divider" />
                <p className="font-sans text-warm-taupe leading-relaxed mb-4">
                  L'infertilità è una delle esperienze più dolorose che una donna o una coppia possa
                  attraversare. Porta con sé un dolore spesso silenzioso e difficile da condividere:
                  il senso di colpa, la sensazione di un corpo che "non funziona", la tensione nella
                  coppia, l'incertezza sul futuro.
                </p>
                <p className="font-sans text-warm-taupe leading-relaxed mb-4">
                  Il supporto psicologico specialistico è prezioso sia per chi affronta un{' '}
                  <strong className="text-warm-brown font-medium">
                    percorso di procreazione medicalmente assistita (PMA)
                  </strong>{' '}
                  — con i suoi tempi, le sue incertezze e i possibili insuccessi — sia per chi sta
                  elaborando la possibilità di non avere figli biologici.
                </p>
                <p className="font-sans text-warm-taupe leading-relaxed">
                  Un percorso terapeutico aiuta a dare nome alle emozioni, a sostenere il confronto
                  nella coppia e a prendere decisioni consapevoli senza lasciarsi travolgere dal dolore.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-beige py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal className="mb-16 text-center">
            <p className="section-subtitle">Domande frequenti</p>
            <h2 className="section-title">Tutto quello che<br />vuoi sapere</h2>
            <div className="divider mx-auto" />
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {faq.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-cream rounded-xl p-6 shadow-sm">
                  <h3 className="font-serif text-lg text-warm-brown mb-3">{f.domanda}</h3>
                  <p className="font-sans text-sm text-warm-taupe leading-relaxed">{f.risposta}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESPERIENZA */}
      <section className="py-24 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-warm-brown/5 border border-warm-brown/10 rounded-2xl p-8 md:p-12">
              <p className="section-subtitle mb-2">Esperienza clinica</p>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-brown mb-4">
                Oltre 37 anni di specializzazione<br />nella psicologia della donna e della maternità
              </h2>
              <div className="divider" />
              <p className="font-sans text-warm-taupe leading-relaxed mb-4">
                La Dott.ssa Marcella Marcone ha maturato un'esperienza clinica approfondita nel campo
                della psicologia perinatale e della donna. Ha collaborato per oltre quindici anni con
                la Clinica S. Pio X di Milano seguendo le donne nella preparazione al parto,
                nell'accompagnamento alla nascita e nel sostegno alla genitorialità.
              </p>
              <p className="font-sans text-warm-taupe leading-relaxed mb-8">
                Ha tenuto corsi e seminari di psicologia perinatale, salute della donna ed educazione
                sessuale presso istituti milanesi e nazionali. La sua formazione psicoanalitica
                profonda le consente di lavorare sui vissuti più profondi legati alla femminilità,
                alla maternità e all'identità.
              </p>
              <Link href="/chi-sono" className="btn-outline">
                Scopri il curriculum completo
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-brown py-20 md:py-28">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="font-sans text-xs tracking-widest uppercase text-cream/60 mb-4">
              Inizia il percorso
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
              Hai bisogno di supporto<br />nel percorso della maternità?
            </h2>
            <p className="font-sans text-cream/70 leading-relaxed mb-10">
              Ricevo a Milano su appuntamento. Il primo colloquio è conoscitivo e senza impegno.
              Contattami per raccontarmi la tua situazione.
            </p>
            <Link href="/contatti" className="btn-primary bg-terracotta hover:bg-terracotta-light border-0">
              Richiedi un colloquio
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
