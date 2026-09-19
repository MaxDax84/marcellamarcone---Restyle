'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  CONSENT_EVENT,
  OPEN_PREFERENCES_EVENT,
  getConsent,
  setConsent,
  type ConsentValue,
} from '@/lib/cookieConsent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState<ConsentValue | null>(null)

  useEffect(() => {
    const choice = getConsent()
    setCurrent(choice)
    // Al primo accesso il banner compare da solo.
    if (!choice) setVisible(true)

    // Riapertura su richiesta dal link "Preferenze cookie" nel footer.
    const onOpen = () => {
      setCurrent(getConsent())
      setVisible(true)
    }
    const onChange = () => setCurrent(getConsent())

    window.addEventListener(OPEN_PREFERENCES_EVENT, onOpen)
    window.addEventListener(CONSENT_EVENT, onChange)
    return () => {
      window.removeEventListener(OPEN_PREFERENCES_EVENT, onOpen)
      window.removeEventListener(CONSENT_EVENT, onChange)
    }
  }, [])

  const handle = (value: ConsentValue) => {
    setConsent(value)
    setCurrent(value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-[100]"
      role="dialog"
      aria-label="Preferenze cookie"
    >
      <div className="max-w-3xl mx-auto rounded-2xl border border-beige bg-cream/95 backdrop-blur-sm shadow-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-sans text-sm text-warm-taupe">
            Usiamo solo strumenti tecnici necessari al funzionamento del sito. La mappa di Google
            viene caricata solo con il tuo consenso.{' '}
            <Link
              href="/cookie-policy"
              className="underline text-terracotta hover:text-terracotta-dark transition-colors duration-300"
            >
              Scopri di più
            </Link>
          </p>
          {current && (
            <p className="font-sans text-xs text-warm-muted mt-2">
              Scelta attuale: {current === 'accepted' ? 'consenso accettato' : 'consenso rifiutato'}.
              Puoi cambiarla qui sotto.
            </p>
          )}
        </div>
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
