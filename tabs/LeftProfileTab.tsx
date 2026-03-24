'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Fragment, useState } from 'react'
import { IconType } from 'react-icons'
import { FiAward, FiBriefcase, FiUser } from 'react-icons/fi'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu'
import styled from 'styled-components'

import { COLORS, PROFILE_MENU } from '@/constants'
import { useTabStore } from '@/store/useTabStore'

const MENU_ICONS: Record<string, IconType> = {
  intro: FiUser,
  experience: FiBriefcase,
  spec: FiAward,
}

export default function LeftProfileTab() {
  const {
    setActiveSubMenu,
    highlightedSubMenu,
    setHighlightedSubMenu,
    triggerScroll,
  } = useTabStore()
  const [openId, setOpenId] = useState<string[]>(['intro'])

  const handleToggle = (id: string) => {
    setOpenId((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  return (
    <div>
      <h3 className="font-bold" style={{ color: COLORS.panelSubTitle }}>
        프로필
      </h3>
      <hr
        className="mt-3 border font-bold"
        style={{ borderColor: COLORS.panelSubTitle }}
      />
      <nav className="mt-2">
        <ul className="pr-2 pl-2">
          {PROFILE_MENU.map((menu) => {
            const Icon = MENU_ICONS[menu.id]

            return (
              <Fragment key={menu.id}>
                <li>
                  <CategoryRow onClick={() => handleToggle(menu.id)}>
                    <span
                      className="flex items-center gap-2 font-bold"
                      style={{ color: COLORS.rightPanelTitle }}
                    >
                      <Icon size={14} color={COLORS.gray200} strokeWidth={3} />
                      {menu.label}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{
                        color: openId.includes(menu.id)
                          ? COLORS.orange
                          : COLORS.gray100,
                      }}
                    >
                      {openId.includes(menu.id) ? (
                        <LuChevronUp size={20} strokeWidth={3} />
                      ) : (
                        <LuChevronDown size={20} strokeWidth={3} />
                      )}
                    </span>
                  </CategoryRow>

                  {openId.includes(menu.id) && (
                    <AnimatePresence>
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        {menu.subMenu.map((sub) => (
                          <li key={sub.id}>
                            <span
                              className="cursor-pointer! text-sm hover:bg-yellow-200"
                              style={{
                                marginLeft: '23px',
                                color:
                                  highlightedSubMenu === sub.id
                                    ? COLORS.panelSubTitle
                                    : COLORS.gray500,
                                fontWeight:
                                  highlightedSubMenu === sub.id ? 700 : 400,
                              }}
                              onClick={() => {
                                setActiveSubMenu(sub.id)
                                setHighlightedSubMenu(sub.id)
                                triggerScroll(sub.id)
                              }}
                            >
                              {sub.label}
                            </span>
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  )}
                </li>
                <DashedDivider />
              </Fragment>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

const CategoryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
  cursor: pointer !important;

  * {
    cursor: pointer !important;
  }

  &:hover {
    opacity: 0.7;
  }
`

const DashedDivider = styled.hr`
  width: 100%;
  margin: 5px 0;
  border: none;
  border-top: 1px dashed ${COLORS.gray100};
`
