import { create } from 'zustand'

import { SubMenu, Tab } from '@/types'

interface TabStore {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
  activeSubMenu: SubMenu
  setActiveSubMenu: (subMenu: SubMenu) => void
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: '홈',
  setActiveTab: (tab) => set({ activeTab: tab }),
  activeSubMenu: 'personal',
  setActiveSubMenu: (subMenu) => set({ activeSubMenu: subMenu }),
}))
