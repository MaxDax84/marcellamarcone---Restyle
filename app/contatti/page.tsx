import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import ContactReveal from '@/components/ContactReveal'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Contatti',
  description:
    'Contatta la Dott.ssa Marcella Marcone, psicologa e psicoterapeuta a Milano. Studio in Via Sansovino 3, 20133 Milano. Riceve su appuntamento.',
}

export default function Contatti() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-beige to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="section-subtitle">Prenota un incontro</p>
            <h1 className="section-title text-5xl md:text-6xl mb-6">Contatti</h1>
            <div className="divider" />
            <p className="font-sans text-warm-taupe text-lg max-w-xl leading-relaxed">
              Il primo colloquio è conoscitivo. Scrivimi per fissare un appuntamento:
              ti risponderò al più presto.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Colonna info */}
          <ScrollReveal>
            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="card">
                <p className="section-subtitle mb-2">Email</p>
                <p className="font-sans text-sm text-warm-taupe mb-4 leading-relaxed">
                  Per fissare un appuntamento o richiedere informazioni, scrivi una email.
                  Sarà risposto nel minor tempo possibile.
                </p>
                <ContactReveal type="email" />
              </div>

              {/* Indirizzo */}
              <div className="card">
                <p className="section-subtitle mb-2">Studio</p>
                <ContactReveal type="address" />
                <p className="font-sans text-sm text-warm-taupe mt-3">
                  I colloqui si svolgono esclusivamente su appuntamento.
                </p>
              </div>

              {/* Orari/note */}
              <div className="card bg-sage/10">
                <p className="section-subtitle mb-2">Note</p>
                <ul className="font-sans text-sm text-warm-taupe leading-relaxed space-y-2">
                  <li className="flex gap-2">
                    <span className="text-sage flex-shrink-0">◆</span>
                    Visite su appuntamento — non sono disponibili accessi diretti
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sage flex-shrink-0">◆</span>
                    Prima consultazione: colloquio conoscitivo senza impegno
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sage flex-shrink-0">◆</span>
                    Lingua dei colloqui: italiano o francese
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Mappa — client-only per non esporre l'indirizzo nell'HTML */}
          <ScrollReveal delay={150}>
            <MapSection />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
