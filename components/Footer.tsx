import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-warm-brown text-cream/80">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-cream mb-2">Marcella Marcone</p>
            <p className="font-sans text-xs tracking-widest uppercase text-cream/60 mb-4">
              Psicologa · Psicoterapeuta
            </p>
            <p className="font-sans text-sm leading-relaxed text-cream/70">
              Ascolto, cura e percorsi di trasformazione personale.<br />
              Milano, dal 1987.
            </p>
          </div>

          {/* Navigazione */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-cream/60 mb-4">
              Navigazione
            </p>
            <nav className="flex flex-col gap-2">
              {[
                ['/', 'Home'],
                ['/chi-sono', 'Chi Sono'],
                ['/servizi', 'Servizi'],
                ['/pubblicazioni', 'Pubblicazioni'],
                ['/contatti', 'Contatti'],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="font-sans text-sm text-cream/70 hover:text-cream transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Studio */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-cream/60 mb-4">
              Studio
            </p>
            <p className="font-sans text-sm text-cream/70 leading-relaxed mb-1">
              Via Sansovino 3
            </p>
            <p className="font-sans text-sm text-cream/70 mb-4">
              20133 Milano
            </p>
            <p className="font-sans text-sm text-cream/70">
              Riceve su appuntamento
            </p>
            <div className="mt-4">
              <Link
                href="/contatti"
                className="font-sans text-xs tracking-widest uppercase text-terracotta-light hover:text-cream transition-colors duration-300 border-b border-terracotta-light/50 pb-0.5"
              >
                Richiedi un appuntamento →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/40">
            © {new Date().getFullYear()} Dott.ssa Marcella Marcone · P.IVA 11971950156
          </p>
          <p className="font-sans text-xs text-cream/40">
            Iscritta all&apos;Albo degli Psicologi della Lombardia n. 5056
          </p>
        </div>
      </div>
    </footer>
  )
}
