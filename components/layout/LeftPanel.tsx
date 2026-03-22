'use client'

import { COLORS } from '@/constants/index'
import { useTabStore } from '@/store/useTabStore'
import styled from 'styled-components'
import LeftHomeTab from '@/tabs/LeftHomeTab'
import LeftProfileTab from '@/tabs/LeftProfileTab'

export default function LeftPanel() {
  const { activeTab } = useTabStore()

  return (
    <aside className="flex h-full flex-col">
      <div
        className="mt-1 mb-2 flex justify-center gap-3 text-xs"
        style={{ fontFamily: 'var(--font-pixel)', color: COLORS.gray500 }}
      >
        <span>TODAY</span>
        <span>TOTAL</span>
      </div>
      <PanelWrapper className="p-3" $isProfile={activeTab === '프로필'}>
        <h2 className="sr-only">프로필</h2>
        <div className="rounded-me flex h-full flex-col bg-white p-3">
          {activeTab === '홈' && <LeftHomeTab />}
          {activeTab === '프로필' && <LeftProfileTab />}
          {activeTab === '프로젝트' && <LeftHomeTab />}
        </div>
      </PanelWrapper>
    </aside>
  )
}

interface PanelWrapperProps {
  $isProfile: boolean
}

const PanelWrapper = styled.section<PanelWrapperProps>`
  box-sizing: border-box;
  height: 100%;
  border-radius: 6px;
  border: 2px solid ${COLORS.border};
  background-color: ${({ $isProfile }) =>
    $isProfile ? COLORS.white : COLORS.panelBg};
`
