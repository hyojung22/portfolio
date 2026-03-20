import { create } from 'zustand'
import { Tab } from '@/types'

interface TabStore {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: '홈',
  setActiveTab: (tab) => set({ activeTab: tab }),
}))
