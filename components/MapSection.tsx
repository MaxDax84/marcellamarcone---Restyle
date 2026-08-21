'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CONSENT_EVENT, getConsent, setConsent } from '@/lib/cookieConsent'

// Indirizzo e URL della mappa caricati solo lato client — non presenti nell'HTML server-rendered
const a1 = 'Via Sansovino 3'
const a2 = '20133 Milano'
const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.9!2d9.2280!3d45.4640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a5cce9a0d5%3A0x0!2sVia%20Sansovino%2C%203%2C%2020133%20Milano%20MI!5e0!3m2!1sit!2sit!4v1710000000000!5m2!1sit!2sit'

export default function MapSection() {
  const [mounted, setMounted] = useState(false)
  const [mapAllowed, setMapAllowed] = useState(false)

  useEffect(() => {
    setMounted(true)
    setMapAllowed(getConsent() === 'accepted')

    const onConsentChange = () => setMapAllowed(getConsent() === 'accepted')
    window.addEventListener(CONSENT_EVENT, onConsentChange)
    return () => window.removeEventListener(CONSENT_EVENT, onConsentChange)
  }, [])

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
        {mapAllowed ? (
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
        ) : (
          <div className="w-full h-full bg-beige flex flex-col items-center justify-center text-center gap-3 p-6">
            <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="font-sans text-sm text-warm-taupe max-w-xs">
              La mappa di Google Maps verrà caricata solo con il tuo consenso ai cookie.
            </p>
            <button
              type="button"
              onClick={() => {
                setConsent('accepted')
                setMapAllowed(true)
              }}
              className="btn-primary text-xs py-2.5 px-5"
            >
              Attiva la mappa
            </button>
          </div>
        )}
      </div>

      <p className="font-sans text-xs text-warm-muted">
        Lo studio è raggiungibile con la metropolitana (linea verde, fermata Piola o Lambrate)
        e con diverse linee di tram e autobus. Consulta la{' '}
        <Link href="/cookie-policy" className="underline hover:text-terracotta transition-colors duration-300">
          Cookie Policy
        </Link>
        .
      </p>
    </div>
  )
}
