'use client'

import { useTabStore } from '@/store/useTabStore'

const tabs = ['홈', '프로필', '프로젝트'] as const
const baseTabStyle =
  'flex items-center justify-center w-18 h-10 rounded-r-md cursor-pointer border-2 border-[#1D415F] border-l-0 text-sm tracking-tighter'

export default function TabMenu() {
  const { activeTab, setActiveTab } = useTabStore()

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`${baseTabStyle} ${activeTab === tab ? 'bg-white font-black text-black' : 'bg-[#268FAC] font-semibold text-white'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  )
}
