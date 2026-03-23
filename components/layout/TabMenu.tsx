'use client'

import styled from 'styled-components'

import { COLORS, TABS } from '@/constants'
import { useTabStore } from '@/store/useTabStore'

export default function TabMenu() {
  const { activeTab, setActiveTab, setActiveSubMenu, setHighlightedSubMenu } =
    useTabStore()

  const handleTabClick = (tab: (typeof TABS)[number]) => {
    setActiveTab(tab)
    if (tab === '프로필') {
      setActiveSubMenu('personal')
      setHighlightedSubMenu('personal')
    }
  }

  return (
    <nav>
      <TabList>
        {TABS.map((tab) => (
          <TabItem
            key={tab}
            $isActive={activeTab === tab}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </TabItem>
        ))}
      </TabList>
    </nav>
  )
}

const TabList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

interface TabItemProps {
  $isActive: boolean
}

const TabItem = styled.li<TabItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 40px;
  font-size: 14px;
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '400')};
  color: ${({ $isActive }) => ($isActive ? '#000000' : '#FFFFFF')};
  letter-spacing: -0.05em;
  cursor: pointer !important;

  background-color: ${({ $isActive }) =>
    $isActive ? COLORS.tabActive : COLORS.tabInactive};
  border: 2px solid ${COLORS.tabBorder};
  border-left: none;
  border-radius: 0 6px 6px 0;

  box-shadow: ${({ $isActive }) =>
    $isActive ? 'none' : '2px 2px 0px rgba(0,0,0,0.2)'};

  &:hover {
    filter: brightness(1.1);
  }
`
