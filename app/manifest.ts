import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dott.ssa Marcella Marcone – Psicologa e Psicoterapeuta',
    short_name: 'Marcella Marcone',
    description:
      'Psicologa e Psicoterapeuta a Milano, specializzata in psicologia della maternità, gravidanza, post partum, infertilità e micropsicoanalisi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F0F6FA',
    theme_color: '#0F2633',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-192-maskable.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
