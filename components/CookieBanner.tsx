'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getConsent, setConsent } from '@/lib/cookieConsent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!getConsent()) setVisible(true)
  }, [])

  const handle = (value: 'accepted' | 'rejected') => {
    setConsent(value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100]">
      <div className="max-w-3xl mx-auto rounded-2xl border border-beige bg-cream/95 backdrop-blur-sm shadow-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="font-sans text-sm text-warm-taupe flex-1">
          Usiamo solo strumenti tecnici necessari al funzionamento del sito. La mappa di Google
          viene caricata solo con il tuo consenso.{' '}
          <Link
            href="/cookie-policy"
            className="underline text-terracotta hover:text-terracotta-dark transition-colors duration-300"
          >
            Scopri di più
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handle('rejected')}
            className="btn-outline text-xs py-2.5 px-5"
          >
            Rifiuta
          </button>
          <button
            type="button"
            onClick={() => handle('accepted')}
            className="btn-primary text-xs py-2.5 px-5"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  )
}
