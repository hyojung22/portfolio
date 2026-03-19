import { create } from 'zustand'

type Tab = '홈' | '프로필' | '프로젝트'

interface TabStore {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: '홈',
  setActiveTab: (tab) => set({ activeTab: tab }),
}))
