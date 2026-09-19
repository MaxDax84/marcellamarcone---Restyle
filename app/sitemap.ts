import { MetadataRoute } from 'next'

const baseUrl = 'https://www.marcellamarcone.it'

/**
 * Date di ultima modifica reali, allineate all'ultimo commit che ha toccato
 * ciascuna pagina. Sono volutamente statiche: con `new Date()` il campo
 * `lastmod` cambiava a ogni build, segnalando ai crawler modifiche
 * inesistenti. Vanno aggiornate quando il contenuto cambia davvero.
 */
const pages = [
  { path: '', lastModified: '2026-06-30', changeFrequency: 'monthly', priority: 1 },
  { path: '/maternita', lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.95 },
  { path: '/servizi', lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/chi-sono', lastModified: '2026-06-30', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contatti', lastModified: '2026-06-30', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/pubblicazioni', lastModified: '2026-07-11', changeFrequency: 'yearly', priority: 0.6 },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
