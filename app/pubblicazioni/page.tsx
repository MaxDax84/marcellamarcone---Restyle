import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Pubblicazioni',
  description:
    'Libri e articoli scientifici della Dott.ssa Marcella Marcone: psicologia della gravidanza, post partum, psicologia dello sport e micropsicoanalisi.',
}

const libri = [
  {
    anno: '1987',
    titolo: 'Un sogno lungo nove mesi',
    editore: 'CTS',
    note: 'Tradotto in russo',
    descrizione: 'Un testo sulla psicologia della gravidanza e sulla trasformazione interiore che accompagna il diventare madre.',
    tags: ['Gravidanza', 'Psicologia perinatale'],
  },
  {
    anno: '1993',
    titolo: 'Vivere la gravidanza',
    editore: 'Sole Verde',
    note: null,
    descrizione: 'Un accompagnamento psicologico alla gravidanza vissuta come esperienza totale: fisica, emotiva e relazionale.',
    tags: ['Gravidanza', 'Donna'],
  },
  {
    anno: '1997',
    titolo: "L'altro tennis: aspetti fondamentali della preparazione psicofisica alla gara",
    editore: 'Libreria dello Sport',
    note: 'Con C. Rossi',
    descrizione: 'Un manuale sulla preparazione mentale nel tennis agonistico. La psicologia come dimensione fondamentale della performance sportiva.',
    tags: ['Psicologia dello sport', 'Tennis'],
  },
  {
    anno: '2002',
    titolo: 'Diario della gravidanza',
    editore: 'De Vecchi Editore',
    note: 'Con N. Polla Mattiot · Traduzione francese: "Carnet de la grossesse"',
    descrizione: 'Un diario guidato per accompagnare la futura madre settimana dopo settimana, con riflessioni, spunti e domande.',
    tags: ['Gravidanza', 'Post partum'],
  },
  {
    anno: '2009',
    titolo: 'Tennis sul divano',
    editore: null,
    note: 'Con M. Mazzoni',
    descrizione: "Un'esplorazione psicoanalitica del tennis: le dinamiche inconsce che si giocano in campo, tra agonismo, paura e desiderio di vincere.",
    tags: ['Psicologia dello sport', 'Tennis', 'Psicoanalisi'],
  },
]

const articoli = [
  {
    anno: '2010',
    titolo: 'Non sottovalutiamo il baby blues',
    rivista: 'Nascere n. 109',
    tags: ['Post partum'],
  },
  {
    anno: '2011',
    titolo: "L'influenza degli aborti sulla depressione post partum",
    rivista: 'Nascere n. 112',
    tags: ['Post partum', 'DPP'],
  },
  {
    anno: '2011',
    titolo: 'Se accanto al bambino c\'è una madre vulnerabile',
    rivista: 'Nascere n. 113',
    tags: ['Post partum', 'Genitorialità'],
  },
  {
    anno: '2011',
    titolo: 'Vulnerabilità materna e violenza nel bambino',
    rivista: 'Atti del Congresso AEPEA · Lugano',
    tags: ['Psicologia perinatale', 'Congresso'],
  },
  {
    anno: '2012',
    titolo: 'La difficoltà a separarsi dal bambino nel post partum',
    rivista: 'Atti del Congresso AEPEA · Bologna',
    tags: ['Post partum', 'Congresso'],
  },
  {
    anno: '2013',
    titolo: "L'infertilità pre-primaria",
    rivista: 'Ricerca clinica',
    tags: ['Infertilità', 'Donna'],
  },
  {
    anno: 'n.d.',
    titolo: "Un aspetto della presenza affettiva della madre presso il bambino: la vulnerabilità",
    rivista: 'Atti Congresso AEPEA',
    tags: ['Psicologia perinatale'],
  },
]

const affiliazioni = [
  { nome: 'Société Internationale de Micropsychanalyse', url: 'https://www.micropsychanalyse.net' },
  { nome: 'Società Italiana di Micropsicoanalisi', url: 'https://www.micropsicoanalisi.com' },
  { nome: 'AEPEA – Associazione di Psicologia Perinatale', url: 'https://www.aepsy.org' },
  { nome: 'Tennis sul divano', url: 'https://www.tennissuldivano.com' },
]

const tagColors: Record<string, string> = {
  'Gravidanza': 'bg-sage/20 text-sage-dark',
  'Psicologia perinatale': 'bg-sage/20 text-sage-dark',
  'Post partum': 'bg-sage/20 text-sage-dark',
  'Donna': 'bg-sage/20 text-sage-dark',
  'Genitorialità': 'bg-sage/20 text-sage-dark',
  'DPP': 'bg-sage/20 text-sage-dark',
  'Infertilità': 'bg-sage/20 text-sage-dark',
  'Psicologia dello sport': 'bg-terracotta/10 text-terracotta-dark',
  'Tennis': 'bg-terracotta/10 text-terracotta-dark',
  'Psicoanalisi': 'bg-warm-brown/10 text-warm-brown',
  'Congresso': 'bg-beige-dark text-warm-taupe',
}

export default function Pubblicazioni() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-beige to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="section-subtitle">Ricerca e scrittura</p>
            <h1 className="section-title text-5xl md:text-6xl mb-6">Pubblicazioni</h1>
            <div className="divider" />
            <p className="font-sans text-warm-taupe text-lg max-w-2xl leading-relaxed">
              Libri e articoli frutto di decenni di pratica clinica e ricerca, con una particolare
              attenzione alla psicologia perinatale, alla salute della donna e alla psicologia dello sport.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* LIBRI */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-2 h-10 rounded-full bg-terracotta" />
              <div>
                <p className="section-subtitle mb-0">Monografie</p>
                <h2 className="font-serif text-3xl text-warm-brown">Libri pubblicati</h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {libri.map((libro, i) => (
              <ScrollReveal key={libro.titolo} delay={i * 60}>
                <div className="card flex flex-col md:flex-row gap-6 items-start">
                  {/* Anno */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <span className="font-serif text-3xl text-terracotta/40">{libro.anno}</span>
                  </div>
                  {/* Contenuto */}
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-warm-brown mb-1 italic">
                      &ldquo;{libro.titolo}&rdquo;
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {libro.editore && (
                        <span className="font-sans text-xs text-warm-taupe">{libro.editore}</span>
                      )}
                      {libro.note && (
                        <>
                          <span className="text-warm-muted">·</span>
                          <span className="font-sans text-xs text-warm-muted italic">{libro.note}</span>
                        </>
                      )}
                    </div>
                    <p className="font-sans text-sm text-warm-taupe leading-relaxed mb-3">
                      {libro.descrizione}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {libro.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`font-sans text-xs px-3 py-1 rounded-full ${tagColors[tag] ?? 'bg-beige text-warm-taupe'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICOLI */}
      <section className="bg-beige py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-2 h-10 rounded-full bg-sage" />
              <div>
                <p className="section-subtitle mb-0">Contributi scientifici</p>
                <h2 className="font-serif text-3xl text-warm-brown">Articoli e atti di congresso</h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {articoli.map((art, i) => (
              <ScrollReveal key={art.titolo} delay={i * 50}>
                <div className="bg-cream rounded-xl p-6 shadow-sm h-full">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-base text-warm-brown leading-snug italic">
                      &ldquo;{art.titolo}&rdquo;
                    </h3>
                    <span className="font-sans text-xs text-terracotta flex-shrink-0 mt-0.5">
                      {art.anno}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-warm-muted mb-3">{art.rivista}</p>
                  <div className="flex flex-wrap gap-2">
                    {art.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-sans text-xs px-3 py-1 rounded-full ${tagColors[tag] ?? 'bg-beige text-warm-taupe'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AFFILIAZIONI */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="mb-10">
            <p className="section-subtitle">Reti professionali</p>
            <h2 className="section-title">Affiliazioni e link</h2>
            <div className="divider" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {affiliazioni.map((aff, i) => (
              <ScrollReveal key={aff.nome} delay={i * 60}>
                <a
                  href={aff.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center justify-between gap-4 group"
                >
                  <span className="font-sans text-sm text-warm-brown group-hover:text-terracotta transition-colors">
                    {aff.nome}
                  </span>
                  <span className="text-warm-muted group-hover:text-terracotta transition-colors text-lg flex-shrink-0">
                    →
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
