import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Servizi',
  description:
    'Servizi di psicologia e psicoterapia della Dott.ssa Marcella Marcone a Milano: ansia, psicologia perinatale, psicologia dello sport, micropsicoanalisi.',
}

const aree = [
  {
    categoria: 'Disagio emotivo',
    colore: 'terracotta',
    servizi: [
      {
        titolo: 'Ansia e Disturbi d\'Ansia',
        descrizione:
          'Fobie, attacchi di panico, sintomi ossessivo-compulsivi. L\'ansia è spesso una risposta comprensibile a vissuti profondi. Attraverso il percorso terapeutico è possibile comprenderne le radici e ritrovare serenità e libertà d\'azione.',
      },
    ],
  },
  {
    categoria: 'Psicologia della donna',
    colore: 'sage',
    servizi: [
      {
        titolo: 'Psicologia Perinatale',
        descrizione:
          'Gravidanza, nascita, post partum, depressione post partum. Un periodo ricco di trasformazioni che può portare con sé ansie, paure e fragilità. Un sostegno specialistico accompagna la donna nel diventare madre.',
      },
      {
        titolo: 'Infertilità e Percorsi PMA',
        descrizione:
          'Il desiderio di maternità non sempre trova risposte immediate. Supporto psicologico per chi affronta percorsi di procreazione medicalmente assistita o elabora la difficoltà di concepire.',
      },
      {
        titolo: 'Menopausa e Climaterio',
        descrizione:
          'Le trasformazioni legate alla menopausa coinvolgono corpo, mente e identità femminile. Un percorso terapeutico aiuta ad attraversare questa fase con consapevolezza e serenità.',
      },
    ],
  },
  {
    categoria: 'Performance e sport',
    colore: 'sage',
    servizi: [
      {
        titolo: 'Psicologia dello Sport',
        descrizione:
          'Miglioramento della performance atletica, gestione dell\'ansia agonistica, concentrazione e resilienza mentale. Autrice di due volumi sulla psicologia del tennis, ha sviluppato un approccio specifico per l\'atleta.',
      },
    ],
  },
  {
    categoria: 'Approccio psicoanalitico',
    colore: 'terracotta',
    servizi: [
      {
        titolo: 'Micropsicoanalisi',
        descrizione:
          'Approccio psicoanalitico fondato da Silvio Fanti, che lavora attraverso sedute di lunga durata per esplorare in profondità l\'inconscio e i nodi evolutivi della persona. Permette di raggiungere strati di esperienza altrimenti inaccessibili.',
      },
      {
        titolo: 'Psicoterapia Psicoanalitica',
        descrizione:
          'Percorsi individuali di psicoterapia a orientamento psicoanalitico, adattati ai bisogni della persona. L\'approccio mira a favorire una comprensione profonda di sé, delle proprie relazioni e dei meccanismi inconsci.',
      },
    ],
  },
]

const colorMap: Record<string, string> = {
  terracotta: 'bg-terracotta/10 text-terracotta-dark',
  sage: 'bg-sage/10 text-sage-dark',
}

const dotMap: Record<string, string> = {
  terracotta: 'bg-terracotta',
  sage: 'bg-sage',
}

export default function Servizi() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-beige to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="section-subtitle">Aree di intervento</p>
            <h1 className="section-title text-5xl md:text-6xl mb-6">Servizi</h1>
            <div className="divider" />
            <p className="font-sans text-warm-taupe text-lg max-w-2xl leading-relaxed">
              Un approccio integrato e personalizzato, fondato su oltre trentasette anni di pratica clinica
              e su una formazione psicoanalitica approfondita.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* AREE */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-20">
          {aree.map((area, ai) => (
            <ScrollReveal key={area.categoria} delay={ai * 60}>
              <div>
                {/* Intestazione categoria */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-2 h-10 rounded-full ${dotMap[area.colore]}`} />
                  <h2 className="font-sans text-xs tracking-widest uppercase text-warm-taupe">
                    {area.categoria}
                  </h2>
                </div>

                {/* Servizi della categoria */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {area.servizi.map((s) => (
                    <div key={s.titolo} className="card group">
                      <span className={`inline-block text-xs font-sans tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${colorMap[area.colore]}`}>
                        {area.categoria}
                      </span>
                      <h3 className="font-serif text-xl text-warm-brown mb-3 group-hover:text-terracotta transition-colors">
                        {s.titolo}
                      </h3>
                      <p className="font-sans text-sm text-warm-taupe leading-relaxed">
                        {s.descrizione}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="bg-beige py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-subtitle">Il percorso</p>
            <h2 className="section-title">Come funziona</h2>
            <div className="divider mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                numero: '01',
                titolo: 'Primo colloquio',
                testo: 'Un incontro conoscitivo in cui si definisce insieme la natura della difficoltà e si valuta il tipo di percorso più adatto.',
              },
              {
                numero: '02',
                titolo: 'Impostazione del percorso',
                testo: 'Viene concordata la frequenza degli incontri e l\'approccio terapeutico più indicato, su misura per ogni persona.',
              },
              {
                numero: '03',
                titolo: 'Il lavoro terapeutico',
                testo: 'Attraverso la relazione terapeutica, l\'ascolto e la parola, si lavora per comprendere e trasformare i nodi profondi.',
              },
            ].map((step, i) => (
              <ScrollReveal key={step.numero} delay={i * 100}>
                <div className="text-center">
                  <span className="font-serif text-6xl text-terracotta/20 block mb-4">{step.numero}</span>
                  <h3 className="font-serif text-xl text-warm-brown mb-3">{step.titolo}</h3>
                  <p className="font-sans text-sm text-warm-taupe leading-relaxed">{step.testo}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-brown py-20">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
              Iniziamo insieme
            </h2>
            <p className="font-sans text-cream/70 mb-8">
              Ricevo a Milano su appuntamento. Il primo colloquio è conoscitivo.
            </p>
            <Link href="/contatti" className="btn-primary">
              Richiedi un colloquio
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
