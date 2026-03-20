'use client'

import { COLORS, PROFILE_MENU } from '@/constants'
import { Fragment, useState } from 'react'
import styled from 'styled-components'

export default function LeftProfileTab() {
  const [openId, setOpenId] = useState<string[]>(['intro'])
  const [activeSubId, setActiveSubId] = useState<string>('personal')

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
          {PROFILE_MENU.map((menu) => (
            <Fragment key={menu.id}>
              <li>
                <CategoryRow onClick={() => handleToggle(menu.id)}>
                  <span
                    className="font-bold"
                    style={{ color: COLORS.rightPanelTitle }}
                  >
                    {menu.label}
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{
                      color: openId.includes(menu.id)
                        ? COLORS.orange
                        : COLORS.lightGray,
                    }}
                  >
                    {openId.includes(menu.id) ? '∧' : '∨'}
                  </span>
                </CategoryRow>

                {openId.includes(menu.id) && (
                  <ul>
                    {menu.subMenu.map((sub) => (
                      <li key={sub.id}>
                        <a
                          href={`#${sub.id}`}
                          className="text-sm"
                          style={{
                            marginLeft: '27px',
                            color:
                              activeSubId === sub.id
                                ? COLORS.panelSubTitle
                                : COLORS.gray,
                            fontWeight: activeSubId === sub.id ? 700 : 400,
                          }}
                          onClick={() => setActiveSubId(sub.id)}
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <DashedDivider />
            </Fragment>
          ))}
        </ul>
      </nav>
    </div>
  )
}

const CategoryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 4px 0;

  &:hover {
    opacity: 0.7;
  }
`

const DashedDivider = styled.hr`
  width: 100%;
  margin: 5px 0;
  border: none;
  border-top: 1px dashed ${COLORS.border};
`
