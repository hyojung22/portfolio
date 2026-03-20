'use client'

import styled from 'styled-components'
import { useTabStore } from '@/store/useTabStore'
import { TABS, COLORS } from '@/constants'

export default function TabMenu() {
  const { activeTab, setActiveTab } = useTabStore()

  return (
    <nav>
      <TabList>
        {TABS.map((tab) => (
          <TabItem
            key={tab}
            $isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
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
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: -0.05em;
  border: 2px solid ${COLORS.tabBorder};
  border-left: none;

  background-color: ${({ $isActive }) =>
    $isActive ? COLORS.tabActive : COLORS.tabInactive};
  color: ${({ $isActive }) => ($isActive ? '#000000' : '#FFFFFF')};
  font-weight: ${({ $isActive }) => ($isActive ? '900' : '600')};

  box-shadow: ${({ $isActive }) =>
    $isActive ? 'none' : '2px 2px 0px rgba(0,0,0,0.2)'};

  &:hover {
    filter: brightness(1.1);
  }
`
