'use client'

import { COLORS } from '@/constants/index'
import { useTabStore } from '@/store/useTabStore'
import styled from 'styled-components'
import HomeTab from '@/tabs/HomeTab'
import ProfileTab from '@/tabs/ProfileTab'
import ProjectTab from '@/tabs/ProjectTab'

export default function RightPanel() {
  const { activeTab } = useTabStore()

  return (
    <section className="flex h-full flex-col">
      <div className="mb-1 flex">
        <h2 className="font-bold" style={{ color: COLORS.rightPanelTitle }}>
          ✨프론트엔드 개발자 입니다
        </h2>
      </div>

      <ContentPanel className="p-3">
        {activeTab === '홈' && <HomeTab />}
        {activeTab === '프로필' && <ProfileTab />}
        {activeTab === '프로젝트' && <ProjectTab />}
      </ContentPanel>
    </section>
  )
}

const ContentPanel = styled.div`
  box-sizing: border-box;
  height: 100%;
  border-radius: 6px;
  border: 2px solid ${COLORS.border};
  background-color: #ffffff;
`
