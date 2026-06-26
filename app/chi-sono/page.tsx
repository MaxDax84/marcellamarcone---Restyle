import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Chi Sono',
  description:
    'Curriculum e formazione della Dott.ssa Marcella Marcone, psicologa e psicoterapeuta a Milano. 37 anni di esperienza clinica, micropsicoanalisi, psicologia perinatale.',
}

const formazione: { anno: string; titolo: string; luogo: string; descrizione: string; badge?: string }[] = [
  {
    anno: '2025',
    titolo: 'Autrice del corso per psicologi',
    luogo: '"Aspetti psicologici della gravidanza e del puerperio"',
    descrizione: 'Corso di formazione professionale continua per psicologi sugli aspetti psicologici della gravidanza e del puerperio.',
  },
  {
    anno: '2025',
    titolo: 'Corso di perfezionamento',
    luogo: 'Università di Firenze',
    descrizione: '"I primi mille giorni di vita"',
  },
  {
    anno: '2023 – oggi',
    titolo: 'Docente di perinatalità',
    luogo: 'Università di Mosca – corso di psicoanalisi',
    descrizione: 'Docenza nel corso di psicoanalisi dell\'Università di Mosca con focus sulla psicologia perinatale.',
  },
  {
    anno: '1995',
    titolo: 'Trasferimento all\'Albo della Lombardia',
    luogo: 'Albo degli Psicologi della Lombardia n. 5056',
    descrizione: 'Trasferimento e continuazione dell\'attività clinica a Milano.',
    badge: 'ABILITATA ALLA PRATICA DELLA PSICOTERAPIA',
  },
  {
    anno: '1989',
    titolo: 'Iscrizione all\'Albo degli Psicologi',
    luogo: 'Albo del Piemonte',
    descrizione: 'Prima iscrizione all\'Albo degli Psicologi del Piemonte.',
    badge: 'ABILITATA ALLA PRATICA DELLA PSICOTERAPIA',
  },
  {
    anno: '1987',
    titolo: 'Membro effettivo',
    luogo: 'Società Internazionale di Micropsicoanalisi',
    descrizione: "Riconoscimento formale nell'approccio micropsicanalitico fondato da Silvio Fanti.",
  },
  {
    anno: '1976',
    titolo: 'Laurea in Filosofia',
    luogo: 'Università di Torino',
    descrizione: 'Indirizzo psicologico, con approfondimento nelle discipline della mente e del comportamento umano.',
  },
]

const collaborazioni = [
  {
    periodo: '2014 – presente',
    luogo: 'Studio Maggi · Via Palma 31, Milano',
    ruolo: 'Supporto psicologico integrato nella medicina integrativa',
  },
  {
    periodo: '1997 – 2012',
    luogo: 'Clinica S. Pio X · Milano',
    ruolo: 'Preparazione al parto, accompagnamento alla nascita e sostegno alla genitorialità',
  },
  {
    periodo: '1982 – 1992',
    luogo: 'Clinica Sedes Sapientiae · Torino',
    ruolo: 'Preparazione al parto, accompagnamento alla nascita e sostegno alla genitorialità',
  },
]

const docenza = [
  'Psicologia perinatale',
  'Salute della donna',
  'Educazione sessuale',
  'Psicologia dello sport',
]

export default function ChiSono() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-beige to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="section-subtitle">Curriculum</p>
            <h1 className="section-title text-5xl md:text-6xl mb-6">Chi sono</h1>
            <div className="divider" />
          </ScrollReveal>
        </div>
      </section>

      {/* INTRO con foto */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <ScrollReveal className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-sage/30" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[32rem]">
                <Image
                  src="/images/foto.jpeg"
                  alt="Dott.ssa Marcella Marcone"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-5 -right-5 bg-terracotta text-cream rounded-xl px-5 py-4 shadow-lg">
                <p className="font-sans text-sm font-semibold leading-snug tracking-wide">specializzata<br />in perinatalità</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} className="lg:col-span-3">
            <h2 className="font-serif text-3xl text-warm-brown mb-4">
              Psicologa, Psicoterapeuta<br />e Micropsicoanalista
            </h2>
            <div className="divider" />
            <p className="font-sans text-warm-taupe leading-relaxed mb-4">
              Mi sono laureata all'Università di Torino nel 1976 con un indirizzo psicologico. Da subito
              ho intrapreso un percorso di formazione psicoanalitica rigoroso: psicoanalisi personale,
              psicoanalisi didattica e supervisione presso la Società Internazionale di Micropsicoanalisi,
              di cui sono diventata membro effettivo nel 1987. La micropsicoanalisi fondata da Silvio Fanti
              approfondisce l'esplorazione dell'inconscio attraverso sedute di lunga durata.
            </p>
            <p className="font-sans text-warm-taupe leading-relaxed mb-4">
              Dal 1982 mi sono occupata di <strong className="text-warm-brown font-medium">psicologia perinatale e della donna</strong>:
              infertilità, PMA, gravidanza, problematiche del post partum e menopausa. Parallelamente ho
              approfondito la psicologia dello sport.
            </p>
            <p className="font-sans text-warm-taupe leading-relaxed">
              Parlo italiano e francese. Ricevo a Milano, in Via Sansovino 3, in uno studio riservato
              e pensato per favorire l'apertura e la fiducia necessarie al percorso terapeutico.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FORMAZIONE */}
      <section className="bg-beige py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="mb-16">
            <p className="section-subtitle">Percorso formativo</p>
            <h2 className="section-title">Formazione e qualifiche</h2>
            <div className="divider" />
          </ScrollReveal>

          <div className="relative">
            {/* Linea verticale */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-terracotta/20 hidden md:block" />

            <div className="flex flex-col gap-8">
              {formazione.map((f, i) => (
                <ScrollReveal key={f.anno} delay={i * 60}>
                  <div className="flex gap-6 md:gap-8 items-start">
                    {/* Punto sulla timeline */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0 w-16 pt-1">
                      <div className="w-4 h-4 rounded-full bg-terracotta ring-4 ring-beige flex-shrink-0" />
                    </div>
                    {/* Contenuto */}
                    <div className="bg-cream rounded-xl p-6 flex-1 shadow-sm">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-serif text-lg text-warm-brown">{f.titolo}</h3>
                        <span className="font-sans text-xs text-terracotta bg-terracotta/10 px-3 py-1 rounded-full flex-shrink-0">
                          {f.anno}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-warm-taupe tracking-wide uppercase mb-2">{f.luogo}</p>
                      <p className="font-sans text-sm text-warm-taupe leading-relaxed">{f.descrizione}</p>
                      {f.badge && (
                        <p className="font-sans text-xs font-bold text-terracotta tracking-widest uppercase mt-3">
                          {f.badge}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORAZIONI */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="mb-16">
            <p className="section-subtitle">Esperienza clinica</p>
            <h2 className="section-title">Collaborazioni e attività</h2>
            <div className="divider" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {collaborazioni.map((c, i) => (
              <ScrollReveal key={c.luogo} delay={i * 100}>
                <div className="card h-full">
                  <span className="font-sans text-xs text-terracotta tracking-widest uppercase mb-3 block">
                    {c.periodo}
                  </span>
                  <h3 className="font-serif text-lg text-warm-brown mb-3">{c.luogo}</h3>
                  <p className="font-sans text-sm text-warm-taupe leading-relaxed">{c.ruolo}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Docenza */}
          <ScrollReveal>
            <div className="bg-sage/10 rounded-2xl p-8 md:p-10">
              <p className="section-subtitle mb-2">Attività didattica (2005–2013)</p>
              <h3 className="font-serif text-2xl text-warm-brown mb-6">
                Docenza in psicologia specialistica
              </h3>
              <p className="font-sans text-warm-taupe text-sm mb-6">
                Ha tenuto corsi e seminari presso Vertici, USL di Ferrara e istituti milanesi nelle seguenti aree:
              </p>
              <div className="flex flex-wrap gap-3">
                {docenza.map((d) => (
                  <span
                    key={d}
                    className="font-sans text-sm text-sage-dark bg-sage/20 px-4 py-2 rounded-full"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-brown py-20">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
              Vuoi conoscermi meglio?
            </h2>
            <p className="font-sans text-cream/70 mb-8">
              Il primo colloquio è conoscitivo e senza impegno. Contattami per fissare un appuntamento.
            </p>
            <Link href="/contatti" className="btn-primary">
              Contattami
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
