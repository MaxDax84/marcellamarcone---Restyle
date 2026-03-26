import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import ContactReveal from '@/components/ContactReveal'

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

          {/* Mappa */}
          <ScrollReveal delay={150}>
            <div className="flex flex-col gap-6">
              <div>
                <p className="section-subtitle mb-2">Come raggiungerci</p>
                <h2 className="font-serif text-2xl text-warm-brown">
                  Via Sansovino 3 · Milano
                </h2>
                <p className="font-sans text-sm text-warm-taupe mt-1">
                  Zona Città Studi · Milano 20133
                </p>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-[26rem] border border-beige">
                <iframe
                  title="Studio Dott.ssa Marcella Marcone – Via Sansovino 3, Milano"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.9!2d9.2280!3d45.4640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a5cce9a0d5%3A0x0!2sVia%20Sansovino%2C%203%2C%2020133%20Milano%20MI%2C%20Italy!5e0!3m2!1sit!2sit!4v1710000000000!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <p className="font-sans text-xs text-warm-muted">
                Lo studio è raggiungibile con la metropolitana (linea verde, fermata Piola o Lambrate)
                e con diverse linee di tram e autobus.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
