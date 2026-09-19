'use client'

import { openCookiePreferences } from '@/lib/cookieConsent'

/**
 * Riapre il banner dei cookie da qualsiasi pagina. Serve a rendere la revoca
 * del consenso semplice quanto il suo rilascio (art. 7.3 GDPR): senza questo,
 * chi aveva accettato poteva cambiare idea solo svuotando i dati del browser.
 */
export default function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      Preferenze cookie
    </button>
  )
}
