'use client'

import { useEffect, useState } from 'react'

// Indirizzo e URL della mappa caricati solo lato client — non presenti nell'HTML server-rendered
const a1 = 'Via Sansovino 3'
const a2 = '20133 Milano'
const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.9!2d9.2280!3d45.4640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a5cce9a0d5%3A0x0!2sVia%20Sansovino%2C%203%2C%2020133%20Milano%20MI!5e0!3m2!1sit!2sit!4v1710000000000!5m2!1sit!2sit'

export default function MapSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) {
    return (
      <div className="flex flex-col gap-6">
        <div>
          <p className="section-subtitle mb-2">Come raggiungerci</p>
          <div className="h-8 w-48 bg-beige rounded animate-pulse mb-1" />
          <div className="h-4 w-32 bg-beige rounded animate-pulse" />
        </div>
        <div className="rounded-2xl bg-beige h-80 md:h-[26rem] border border-beige animate-pulse" />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="section-subtitle mb-2">Come raggiungerci</p>
        <h2 className="font-serif text-2xl text-warm-brown">
          {a1} · Milano
        </h2>
        <p className="font-sans text-sm text-warm-taupe mt-1">
          Zona Città Studi · {a2}
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-[26rem] border border-beige">
        <iframe
          title="Studio Dott.ssa Marcella Marcone – Milano"
          src={mapSrc}
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
  )
}
