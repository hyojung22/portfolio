import { Fragment } from 'react/jsx-runtime'
import { FaFolder } from 'react-icons/fa'
import styled from 'styled-components'

import { COLORS, PROJECT_MENU } from '@/constants'
import { useTabStore } from '@/store/useTabStore'

export default function LeftProjectTab() {
  const { activeProjectMenu, setActiveProjectMenu } = useTabStore()

  return (
    <div>
      <h3 className="font-bold" style={{ color: COLORS.panelSubTitle }}>
        프로젝트
      </h3>
      <hr
        className="mt-3 border font-bold"
        style={{ borderColor: COLORS.panelSubTitle }}
      />
      <nav className="mt-2">
        <ul>
          {PROJECT_MENU.map((menu) => {
            return (
              <Fragment key={menu.id}>
                <li>
                  <CategoryRow
                    $isActive={activeProjectMenu === menu.id}
                    onClick={() => setActiveProjectMenu(menu.id)}
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <span style={{ filter: 'drop-shadow(0 0 0.5px black)' }}>
                        <FaFolder size={14} color="#FDF637" />
                      </span>
                      {menu.label}
                    </span>
                  </CategoryRow>
                </li>
              </Fragment>
            )
          })}
        </ul>
        <DashedDivider />
      </nav>
    </div>
  )
}

const CategoryRow = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 400)};
  color: ${({ $isActive }) =>
    $isActive ? COLORS.panelSubTitle : COLORS.gray500};
  cursor: pointer !important;

  * {
    cursor: pointer !important;
  }

  &:hover {
    /* background-color: rgba(0, 0, 0, 0.1); */
    opacity: 0.7;
  }
`

const DashedDivider = styled.hr`
  width: 100%;
  margin-top: 10px;
  border: none;
  border-bottom: 1px dashed ${COLORS.gray100};
`
