'use client'

import { useState } from 'react'

// I dati di contatto NON sono nel DOM al caricamento della pagina.
// Vengono rivelati solo dopo che l'utente clicca il bottone,
// rendendo impossibile lo scraping automatizzato.

const emailParts = ['mmarcone', '\u0040', 'me', '\u002E', 'com']
const addrLine1 = 'Via Sansovino 3'
const addrLine2 = '20133 Milano'

interface ContactRevealProps {
  type: 'email' | 'address'
}

export default function ContactReveal({ type }: ContactRevealProps) {
  const [revealed, setRevealed] = useState(false)

  if (type === 'email') {
    return (
      <div>
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="btn-primary inline-flex items-center gap-2 text-sm"
            aria-label="Mostra indirizzo email"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Mostra email
          </button>
        ) : (
          <a
            href={`mailto:${emailParts.join('')}`}
            className="font-sans text-lg text-terracotta hover:text-terracotta-dark transition-colors duration-300 underline underline-offset-4"
          >
            {emailParts.join('')}
          </a>
        )}
      </div>
    )
  }

  if (type === 'address') {
    return (
      <div>
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="btn-outline inline-flex items-center gap-2 text-sm"
            aria-label="Mostra indirizzo dello studio"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Mostra indirizzo
          </button>
        ) : (
          <div className="font-sans">
            <p className="text-lg text-warm-brown font-medium">{addrLine1}</p>
            <p className="text-warm-taupe">{addrLine2}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${addrLine1}, ${addrLine2}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-terracotta hover:text-terracotta-dark transition-colors mt-2 underline underline-offset-4"
            >
              Apri in Google Maps →
            </a>
          </div>
        )}
      </div>
    )
  }

  return null
}
