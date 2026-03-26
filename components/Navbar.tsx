'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/chi-sono', label: 'Chi Sono' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/pubblicazioni', label: 'Pubblicazioni' },
  { href: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Nome */}
        <Link href="/" className="group">
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg text-warm-brown group-hover:text-terracotta transition-colors duration-300">
              Marcella Marcone
            </span>
            <span className="font-sans text-xs text-warm-muted tracking-widest uppercase">
              Psicologa · Psicoterapeuta
            </span>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-sm tracking-wide transition-all duration-300 relative group ${
                pathname === href
                  ? 'text-terracotta'
                  : 'text-warm-taupe hover:text-warm-brown'
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-terracotta transition-all duration-300 ${
                  pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Link href="/contatti" className="btn-primary text-xs py-2.5 px-6">
            Contatti
          </Link>
        </nav>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-warm-brown transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-warm-brown transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-warm-brown transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-cream/98 backdrop-blur-sm border-t border-beige px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-base transition-colors duration-300 ${
                pathname === href
                  ? 'text-terracotta font-medium'
                  : 'text-warm-taupe hover:text-warm-brown'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contatti" className="btn-primary text-center mt-2">
            Contatti
          </Link>
        </nav>
      </div>
    </header>
  )
}
