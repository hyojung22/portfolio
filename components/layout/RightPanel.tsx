'use client'

import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'

import { COLORS } from '@/constants/index'
import { useTabStore } from '@/store/useTabStore'
import HomeTab from '@/tabs/HomeTab'
import ProfileTab from '@/tabs/ProfileTab'
import ProjectTab from '@/tabs/ProjectTab'

export default function RightPanel() {
  const { activeTab } = useTabStore()

  return (
    <section className="flex h-full flex-col">
      <div className="mb-1 flex">
        <h2
          className="-mt-2 ml-4 text-2xl font-bold"
          style={{
            color: COLORS.homeTitle,
            fontFamily: 'var(--font-pixel)',
          }}
        >
          반가워요 ヽ(´▽｀)/ 개발자 최효정입니다
        </h2>
      </div>

      <ContentPanel className="p-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ height: '100%' }}
          >
            {activeTab === '홈' && <HomeTab />}
            {activeTab === '프로필' && <ProfileTab />}
            {activeTab === '프로젝트' && <ProjectTab />}
          </motion.div>
        </AnimatePresence>
      </ContentPanel>
    </section>
  )
}

const ContentPanel = styled.div`
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  background-color: #ffffff;
  border: 2px solid ${COLORS.border};
  border-radius: 10px;
`
