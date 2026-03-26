'use client'

import { useEffect, useState } from 'react'

// I dati di contatto vengono assemblati solo lato client via JS
// I bot che fanno scraping del HTML non vedono mai l'indirizzo completo

const emailParts = ['mmarcone', '@', 'me', '.', 'com']
const addressParts = ['Via Sansovino 3', ', 20133 ', 'Milano']

interface HiddenEmailProps {
  className?: string
  showLabel?: boolean
}

export function HiddenEmail({ className = '', showLabel = true }: HiddenEmailProps) {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    // Assemblato solo dopo l'idratazione React — invisibile al crawling HTML
    setEmail(emailParts.join(''))
  }, [])

  if (!email) {
    return (
      <span className={`text-warm-muted text-sm ${className}`}>
        {showLabel ? 'Caricamento...' : ''}
      </span>
    )
  }

  return (
    <a
      href={`mailto:${email}`}
      className={`font-sans transition-colors duration-300 hover:text-terracotta ${className}`}
    >
      {email}
    </a>
  )
}

interface HiddenAddressProps {
  className?: string
}

export function HiddenAddress({ className = '' }: HiddenAddressProps) {
  const [address, setAddress] = useState<string | null>(null)

  useEffect(() => {
    setAddress(addressParts.join(''))
  }, [])

  if (!address) {
    return <span className={`text-warm-muted ${className}`}>&nbsp;</span>
  }

  return <span className={className}>{address}</span>
}
