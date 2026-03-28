'use client'

import { AiFillHome, AiFillSmile } from 'react-icons/ai'
import { BsFillFolderFill } from 'react-icons/bs'
import styled from 'styled-components'

import { COLORS, Tab, TABS } from '@/constants'
import { useTabStore } from '@/store/useTabStore'

const TAB_ICONS: Record<Tab, React.ElementType> = {
  홈: AiFillHome,
  프로필: AiFillSmile,
  프로젝트: BsFillFolderFill,
}

export default function BottomNav() {
  const { activeTab, setActiveTab } = useTabStore()

  return (
    <NavWrapper>
      {TABS.map((tab) => {
        const Icon = TAB_ICONS[tab]
        const isActive = activeTab === tab

        return (
          <NavItem
            key={tab}
            $isActive={isActive}
            onClick={() => setActiveTab(tab)}
          >
            <Icon size={22} />
            <span>{tab}</span>
          </NavItem>
        )
      })}
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  display: flex;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.08);
`

const NavItem = styled.button<{ $isActive: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 400)};
  color: ${({ $isActive }) => ($isActive ? COLORS.orange : COLORS.gray500)};
  cursor: pointer;
  background: none;
  border: none;
`
