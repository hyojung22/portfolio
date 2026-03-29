'use client'

import { useEffect, useState } from 'react'

import MusicPlayer from '@/common/MusicPlayer'
import MobileLayout from '@/components/layout/mobile/MobileLayout'
import MinihompyLayout from '@/layout/MinihompyLayout'

export default function Home() {
  const [zoom, setZoom] = useState(1.08)

  useEffect(() => {
    const calcZoom = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const zoomByWidth = width / 1150
      const zoomByHeight = height / 606
      setZoom(Math.min(1.08, zoomByWidth, zoomByHeight))
    }
    calcZoom()
    window.addEventListener('resize', calcZoom)
    return () => window.removeEventListener('resize', calcZoom)
  }, [])

  return (
    <main className="flex min-h-screen items-center">
      {/* 데스크탑 - 기존 유지 */}
      <div
        className="desktop:flex mx-auto hidden items-center gap-4"
        style={{
          zoom: zoom,
        }}
      >
        <MinihompyLayout />
        <aside className="self-start">
          <MusicPlayer />
        </aside>
      </div>

      {/* 모바일 */}
      <div className="desktop:hidden block w-full">
        <MobileLayout />
      </div>
    </main>
  )
}
