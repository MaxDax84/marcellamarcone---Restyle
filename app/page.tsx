import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const servizi = [
  {
    icon: '◈',
    titolo: 'Ansia e Fobie',
    descrizione: 'Attacchi di panico, fobie, sintomi ossessivi. Un percorso per ritrovare equilibrio e libertà interiore.',
  },
  {
    icon: '◈',
    titolo: 'Umore e Depressione',
    descrizione: 'Sostegno nei momenti di difficoltà emotiva, depressione e oscillazioni del tono dell'umore.',
  },
  {
    icon: '◈',
    titolo: 'Psicologia Perinatale',
    descrizione: 'Gravidanza, post partum, depressione post partum, infertilità. Un accompagnamento specialistico nel percorso della maternità.',
  },
  {
    icon: '◈',
    titolo: 'Disturbi Alimentari',
    descrizione: 'Anoressia nervosa, bulimia e difficoltà nel rapporto con il cibo e il corpo.',
  },
  {
    icon: '◈',
    titolo: 'Psicologia dello Sport',
    descrizione: 'Miglioramento della performance atletica e gestione della pressione agonistica.',
  },
  {
    icon: '◈',
    titolo: 'Micropsicoanalisi',
    descrizione: 'Un approccio psicanalitico profondo, rivolto all'esplorazione dell'inconscio e dei nodi evolutivi della persona.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Sfondo caldo con texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-beige via-cream to-beige-dark opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233D2B1F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Testo */}
          <div className="animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            <p className="section-subtitle text-terracotta">Psicologa · Psicoterapeuta · Milano</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-brown leading-[1.1] mb-6">
              Dott.ssa<br />
              <span className="text-terracotta">Marcella</span><br />
              Marcone
            </h1>
            <div className="divider" />
            <p className="font-sans text-lg text-warm-taupe leading-relaxed mb-8 max-w-md">
              Oltre trentasette anni di esperienza clinica nel sostegno psicologico e psicanalitico a Milano.
              Un luogo di ascolto, comprensione e trasformazione.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contatti" className="btn-primary">
                Prenota un colloquio
              </Link>
              <Link href="/chi-sono" className="btn-outline">
                Chi sono
              </Link>
            </div>
          </div>

          {/* Foto */}
          <div
            className="relative flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards', opacity: 0 }}
          >
            <div className="relative">
              {/* Cornice decorativa */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-terracotta/20" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-sage/10" />
              <div className="relative w-72 md:w-96 h-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://www.marcellamarcone.it/images/foto.png"
                  alt="Dott.ssa Marcella Marcone – Psicologa e Psicoterapeuta"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-muted">
          <span className="font-sans text-xs tracking-widest uppercase">Scopri</span>
          <div className="w-px h-12 bg-terracotta/30 animate-pulse" />
        </div>
      </section>

      {/* CITAZIONE */}
      <section className="bg-terracotta py-16 md:py-20">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-serif text-2xl md:text-3xl text-cream leading-relaxed italic">
              &ldquo;Ogni persona porta in sé risorse preziose. Il percorso terapeutico è un viaggio verso la propria autenticità.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CHI SONO (anteprima) */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Foto studio */}
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-sage/10 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:h-[26rem]">
                <Image
                  src="https://www.marcellamarcone.it/images/studio2.png"
                  alt="Studio della Dott.ssa Marcella Marcone a Milano"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Testo */}
          <ScrollReveal delay={150}>
            <p className="section-subtitle">Chi sono</p>
            <h2 className="section-title mb-4">
              Un'esperienza clinica<br />profonda e specializzata
            </h2>
            <div className="divider" />
            <p className="font-sans text-warm-taupe leading-relaxed mb-4">
              Laureata in Filosofia all'Università di Torino nel 1976, mi sono formata nella tradizione psicoanalitica
              con un percorso rigoroso di analisi personale, analisi didattica e supervisione clinica.
            </p>
            <p className="font-sans text-warm-taupe leading-relaxed mb-8">
              Dal 1987 sono membro effettivo della Società Internazionale di Micropsicoanalisi.
              Ricevo a Milano, dove esercito la libera professione integrando psicanalisi, psicoterapia
              e una specializzazione nella psicologia perinatale e della donna.
            </p>
            <Link href="/chi-sono" className="btn-outline">
              Leggi il curriculum
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="bg-beige py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-subtitle">Aree di intervento</p>
            <h2 className="section-title">Come posso aiutarti</h2>
            <div className="divider mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servizi.map((s, i) => (
              <ScrollReveal key={s.titolo} delay={i * 80}>
                <div className="card h-full">
                  <span className="text-terracotta text-2xl mb-4 block">{s.icon}</span>
                  <h3 className="font-serif text-xl text-warm-brown mb-3">{s.titolo}</h3>
                  <p className="font-sans text-sm text-warm-taupe leading-relaxed">{s.descrizione}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link href="/servizi" className="btn-primary">
              Tutti i servizi
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* STUDIO (seconda foto) */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="section-subtitle">Lo studio</p>
            <h2 className="section-title mb-4">
              Un ambiente pensato<br />per il tuo benessere
            </h2>
            <div className="divider" />
            <p className="font-sans text-warm-taupe leading-relaxed mb-4">
              Lo studio si trova in Via Sansovino 3, nel cuore di Milano, in un contesto
              tranquillo e riservato, pensato per favorire la concentrazione e la confidenzialità
              del percorso terapeutico.
            </p>
            <p className="font-sans text-warm-taupe leading-relaxed mb-8">
              I colloqui si svolgono esclusivamente su appuntamento, per garantire la massima
              attenzione e riservatezza ad ogni persona.
            </p>
            <Link href="/contatti" className="btn-primary">
              Prenota un appuntamento
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:h-[26rem]">
              <Image
                src="https://www.marcellamarcone.it/images/studio3.png"
                alt="Studio di psicologia e psicoterapia a Milano"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="bg-warm-brown py-20 md:py-28">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="font-sans text-xs tracking-widest uppercase text-cream/60 mb-4">
              Inizia il percorso
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 leading-tight">
              Pronto a fare il primo passo?
            </h2>
            <p className="font-sans text-cream/70 leading-relaxed mb-10">
              Il percorso terapeutico inizia con un primo colloquio conoscitivo.
              Contattami per fissare un appuntamento.
            </p>
            <Link href="/contatti" className="btn-primary bg-terracotta hover:bg-terracotta-light border-0">
              Contattami
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
