'use client'

import dynamic from 'next/dynamic'

import { useTabStore } from '@/store/useTabStore'
import MobileHomeTab from '@/tabs/mobile/MobileHomeTab'
import MobileProfileTab from '@/tabs/mobile/MobileProfileTab'
import MobileProjectTab from '@/tabs/mobile/MobileProjectTab'

import BottomNav from './BottomNav'
import MobileHeader from './MobileHeader'

// SSR 끄고 클라이언트에서만 렌더링
const MobileMusicPlayer = dynamic(
  () => import('@/components/common/MobileMusicPlayer'),
  { ssr: false },
)

export default function MobileLayout() {
  const { activeTab } = useTabStore()

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* 상단 헤더 */}
      <MobileHeader />
      <div className="w-full px-4 md:px-0">
        {/* 콘텐츠 */}
        <main className="flex-1 overflow-y-auto rounded-lg pb-21">
          {/* 홈 / 프로필 / 프로젝트 */}
          {activeTab === '홈' && <MobileHomeTab />}
          {activeTab === '프로필' && <MobileProfileTab />}
          {activeTab === '프로젝트' && <MobileProjectTab />}
        </main>
      </div>

      {/* 뮤직플레이어 */}
      <MobileMusicPlayer />
      {/* 하단 탭바 */}
      <BottomNav />
    </div>
  )
}
