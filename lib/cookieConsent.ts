export const CONSENT_KEY = 'mm_cookie_consent'
export const CONSENT_EVENT = 'mm-cookie-consent-changed'

export type ConsentValue = 'accepted' | 'rejected'

export function getConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(CONSENT_KEY) as ConsentValue | null
}

export function setConsent(value: ConsentValue) {
  localStorage.setItem(CONSENT_KEY, value)
  window.dispatchEvent(new Event(CONSENT_EVENT))
}
