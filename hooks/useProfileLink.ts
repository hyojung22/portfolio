'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export function useProfileLink() {
  const router = useRouter()

  const handleLinkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (!value) return

    if (value.startsWith('http')) {
      window.open(value, '_blank')
    } else {
      router.push(value)
    }

    e.target.value = ''
  }

  return { handleLinkChange }
}
