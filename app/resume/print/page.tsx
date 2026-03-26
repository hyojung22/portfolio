'use client'

import { useEffect } from 'react'

import ResumePrint from '@/components/resume/ResumePrint'

export default function ResumePrintPage() {
  useEffect(() => {
    const prevTitle = document.title
    document.title = '최효정_이력서'
    window.print()
    document.title = prevTitle // 인쇄 후 원래 제목으로 복구
  }, [])

  return (
    <main className="bg-white">
      <ResumePrint />
    </main>
  )
}
