'use client'

import styled from 'styled-components'

import { COLORS, MY_WORDS } from '@/constants'

export default function HomeTab() {
  return (
    <div className="mr-2 ml-4">
      {/* Mini Room 섹션 */}
      <section>
        <h3 className="font-bold" style={{ color: COLORS.panelSubTitle }}>
          Mini Room
        </h3>
        <div
          className="mt-2 mb-4 min-h-0 w-full border"
          style={{ borderColor: COLORS.border }}
        >
          sdfsd
        </div>
      </section>

      {/* My Words 섹션 */}
      <section>
        <div className="flex items-center gap-3">
          <h3
            className="font-bold"
            style={{
              color: COLORS.panelSubTitle,
            }}
          >
            My Words
          </h3>
          <span
            className="text-sm"
            style={{ fontFamily: 'var(--font-pixel)', color: COLORS.gray500 }}
          >
            한마디로 표현해봐~
          </span>
        </div>
        <hr className="mt-2" style={{ borderColor: COLORS.border }} />
        <WordList className="text-sm">
          {MY_WORDS.map((word) => (
            <WordItem key={word} className="text-sm">
              {word}
            </WordItem>
          ))}
        </WordList>
      </section>
    </div>
  )
}

const WordList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`

const WordItem = styled.li`
  position: relative;
  padding-left: 16px;
  font-weight: 500;
  color: ${COLORS.gray500};

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 6px;
    height: 6px;
    content: '';
    background-color: ${COLORS.gray100};
    transform: translateY(-50%);
  }
`
