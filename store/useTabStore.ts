import { create } from 'zustand'

import { SubMenu, Tab } from '@/types'

interface TabStore {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
  activeSubMenu: SubMenu
  setActiveSubMenu: (subMenu: SubMenu) => void

  highlightedSubMenu: SubMenu // 왼쪽 패널 표시용
  setHighlightedSubMenu: (subMenu: SubMenu) => void

  scrollTrigger: { target: SubMenu; timestamp: number } | null
  triggerScroll: (target: SubMenu) => void
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: '홈',
  setActiveTab: (tab) => set({ activeTab: tab }),
  activeSubMenu: 'personal',
  setActiveSubMenu: (subMenu) => set({ activeSubMenu: subMenu }),

  highlightedSubMenu: 'personal',
  setHighlightedSubMenu: (SubMenu) => set({ highlightedSubMenu: SubMenu }),

  scrollTrigger: null,
  triggerScroll: (target) =>
    set({ scrollTrigger: { target, timestamp: Date.now() } }),
}))
