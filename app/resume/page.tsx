'use client'

import dynamic from 'next/dynamic'

const Resume = dynamic(() => import('@/components/resume/Resume'), {
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200"
          style={{ borderTopColor: '#3b82f6' }}
        />
        <p className="text-sm text-gray-400">불러오는 중...</p>
      </div>
    </div>
  ),
  ssr: false,
})

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white">
      <Resume />
    </main>
  )
}
