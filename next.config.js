/*
 * Content-Security-Policy costruita sulle risorse realmente usate dal sito:
 *
 * script-src  'self' + 'unsafe-inline'. Next.js in App Router inserisce script
 *             inline per l'idratazione (self.__next_f.push) e il sito include
 *             blocchi JSON-LD inline. Eliminare 'unsafe-inline' richiederebbe
 *             un nonce per richiesta, quindi middleware e rendering dinamico su
 *             tutte le pagine, che oggi sono interamente statiche. Non ci sono
 *             script da domini terzi: nessun analytics, nessun tag manager.
 * style-src   'self' + 'unsafe-inline' per gli attributi style inline presenti
 *             nei componenti (es. style={{ border: 0 }} nell'iframe mappa).
 * img-src     'self' + data: e blob: per i placeholder di next/image.
 * font-src    solo 'self': i font sono self-hosted via next/font, non c'e' piu'
 *             alcuna richiesta a fonts.googleapis.com o fonts.gstatic.com.
 * frame-src   solo l'embed di Google Maps, caricato unicamente dopo consenso.
 * connect-src 'self' per le richieste della stessa origine.
 * Bloccati per default: object-src, base-uri, form-action, frame-ancestors.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "frame-src https://www.google.com",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  'upgrade-insecure-requests',
].join('; ')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.marcellamarcone.it',
        pathname: '/images/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
    ]
  },
}

module.exports = nextConfig
