import { COLORS, MY_WORDS } from '@/constants'
import styled from 'styled-components'

export default function HomeTab() {
  return (
    <>
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
    </>
  )
}

const WordList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`

const WordItem = styled.li`
  padding-left: 16px;
  position: relative;
  color: ${COLORS.gray500};
  font-weight: 500;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background-color: ${COLORS.gray100};
  }
`
