import { create } from 'zustand'

import { ProjectMenu, SubMenu, Tab } from '@/types'

interface TabStore {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
  activeSubMenu: SubMenu
  setActiveSubMenu: (subMenu: SubMenu) => void

  highlightedSubMenu: SubMenu // 왼쪽 패널 표시용
  setHighlightedSubMenu: (subMenu: SubMenu) => void

  scrollTrigger: { target: SubMenu; timestamp: number } | null
  triggerScroll: (target: SubMenu) => void

  activeProjectMenu: ProjectMenu
  setActiveProjectMenu: (menu: ProjectMenu) => void
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

  activeProjectMenu: 'all',
  setActiveProjectMenu: (menu) => set({ activeProjectMenu: menu }),
}))
