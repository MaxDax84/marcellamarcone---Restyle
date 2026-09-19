export const CONSENT_KEY = 'mm_cookie_consent'
/** Consenso specifico per l'iframe di Google Maps, indipendente da quello generale. */
export const MAP_CONSENT_KEY = 'mm_map_consent'

export const CONSENT_EVENT = 'mm-cookie-consent-changed'
/** Richiesta di riapertura del banner, emessa dal link "Preferenze cookie". */
export const OPEN_PREFERENCES_EVENT = 'mm-cookie-preferences-open'

export type ConsentValue = 'accepted' | 'rejected'

function read(key: string): ConsentValue | null {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem(key) as ConsentValue | null
  } catch {
    // localStorage puo' non essere disponibile (navigazione privata, cookie bloccati)
    return null
  }
}

function write(key: string, value: ConsentValue) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Se non possiamo memorizzare la scelta, la sessione corrente resta senza consenso.
  }
}

export function getConsent(): ConsentValue | null {
  return read(CONSENT_KEY)
}

/**
 * Scelta generale dal banner. Si propaga anche alla mappa: accettare tutto
 * include l'iframe di Google, rifiutare tutto lo revoca.
 */
export function setConsent(value: ConsentValue) {
  write(CONSENT_KEY, value)
  write(MAP_CONSENT_KEY, value)
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

export function getMapConsent(): ConsentValue | null {
  return read(MAP_CONSENT_KEY)
}

/**
 * Consenso limitato alla sola mappa. Attivare la mappa non concede nient'altro:
 * il banner generale resta da compilare se non lo era gia'.
 */
export function setMapConsent(value: ConsentValue) {
  write(MAP_CONSENT_KEY, value)
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

export function isMapAllowed(): boolean {
  return getMapConsent() === 'accepted'
}

/** Riapre il banner per permettere di modificare o revocare il consenso (art. 7.3 GDPR). */
export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))
}
