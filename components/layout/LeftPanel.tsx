'use client'

import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { COLORS } from '@/constants/index'
import { useTabStore } from '@/store/useTabStore'
import LeftHomeTab from '@/tabs/LeftHomeTab'
import LeftProfileTab from '@/tabs/LeftProfileTab'
import LeftProjectTab from '@/tabs/LeftProjectTab'

export default function LeftPanel() {
  const { activeTab } = useTabStore()

  return (
    <aside className="flex h-full flex-col">
      {/* <div
        className="mt-1 mb-2 flex justify-center gap-3 text-xs"
        style={{ fontFamily: 'var(--font-pixel)', color: COLORS.gray500 }}
      >
        <span>TODAY</span>
        <span>TOTAL</span>
      </div> */}
      <LiveClock />
      <PanelWrapper
        className="flex-1 p-3"
        $isProfile={activeTab === '프로필' || activeTab === '프로젝트'}
      >
        <h2 className="sr-only">프로필</h2>
        <div className="rounded-me flex h-full flex-col bg-white p-3">
          {activeTab === '홈' && <LeftHomeTab />}
          {activeTab === '프로필' && <LeftProfileTab />}
          {activeTab === '프로젝트' && <LeftProjectTab />}
        </div>
      </PanelWrapper>
    </aside>
  )
}

const PanelWrapper = styled.section<{ $isProfile: boolean }>`
  box-sizing: border-box;
  height: 100%;
  background-color: ${({ $isProfile }) =>
    $isProfile ? COLORS.white : COLORS.panelBg};
  border: 2px solid ${COLORS.border};
  border-radius: 10px;
`
function LiveClock() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // 한국 시간으로 변환
  const koreaTime = new Date(
    now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }),
  )

  const date = `${koreaTime.getFullYear()}.${String(koreaTime.getMonth() + 1).padStart(2, '0')}.${String(koreaTime.getDate()).padStart(2, '0')}`
  const time = `${String(koreaTime.getHours()).padStart(2, '0')}:${String(koreaTime.getMinutes()).padStart(2, '0')}:${String(koreaTime.getSeconds()).padStart(2, '0')}`

  return (
    <div
      className="flex w-full items-center justify-center gap-1 text-center text-xs font-bold"
      style={{
        fontFamily: 'var(--font-pixel)',
        color: COLORS.gray500,
        fontSize: '14px',
        transform: 'scaleY(0.9)', // 0.7 = 세로 70%로 압축
        transformOrigin: 'left center',
        flexWrap: 'wrap',
      }}
    >
      <span className="mb-1 text-base">🌸</span>
      <span
        suppressHydrationWarning
        style={{
          background: 'linear-gradient(90deg, #ff9ebc, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {date} {time}
      </span>
      <span className="mb-1 text-base">🌸</span>
    </div>
  )
}
