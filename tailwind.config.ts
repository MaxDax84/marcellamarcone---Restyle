import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F0F6FA',
        beige: {
          DEFAULT: '#DAE8F0',
          dark: '#C2D6E5',
        },
        terracotta: {
          light: '#82BDD0',
          DEFAULT: '#2B7390',
          dark: '#1A5870',
        },
        sage: {
          light: '#8AAFC4',
          DEFAULT: '#537F97',
          dark: '#345F75',
        },
        warm: {
          brown: '#0F2633',
          taupe: '#2E5B72',
          muted: '#5A8EA8',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
