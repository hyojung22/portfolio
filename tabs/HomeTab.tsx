'use client'

import Image from 'next/image'
import styled from 'styled-components'

import { COLORS, MY_WORDS, PLAYLIST } from '@/constants'
import { useMusicStore } from '@/store/useMusicStore'

export default function HomeTab() {
  const { setCurrentIndex, setIsPlaying, isDevMode, setIsDevMode } =
    useMusicStore()

  const handleDevMode = (): void => {
    console.log(
      '%c🚀 dev_mode = true',
      'color: #ff6600; font-size: 14px; font-weight: bold;',
    )
    console.log('%cWelcome, developer 👀', 'color: #999;')

    console.table(PLAYLIST)
    const devIndex = PLAYLIST.findIndex(
      (track) => track.title === 'Hello World',
    )

    if (devIndex !== -1) {
      setCurrentIndex(devIndex)
      setIsPlaying(true)
    }
    setIsDevMode(true)
  }

  return (
    <div className="mr-2 ml-4">
      {/* Mini Room 섹션 */}
      <section>
        <h3
          className="font-bold"
          style={{
            color: COLORS.panelSubTitle,
            fontFamily: 'var(--font-pixel)',
            letterSpacing: 1.5,
            transform: 'scaleY(0.8)', // 0.7 = 세로 70%로 압축
            transformOrigin: 'left center',
            display: 'inline-block',
          }}
        >
          Mini Room
        </h3>
        <Wrapper
          $devMode={isDevMode}
          className="mt-2 mb-4 w-full border"
          style={{ borderColor: COLORS.border, height: '245px' }}
        >
          <Image
            src="/images/home/miniroom1.png"
            loading="eager"
            alt="미니룸"
            fill
            // sizes="(max-width: 768px) 100vw, 50vw"
            sizes="(max-width: 768px) 100vw, 90vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />

          <DevHotspot $devMode={isDevMode} onClick={handleDevMode} />

          <HintBubble>이 컴퓨터… 뭔가 있다 👀</HintBubble>
        </Wrapper>
      </section>

      {/* My Words 섹션 */}
      <section>
        <div className="flex items-center gap-3">
          <h3
            className="font-bold"
            style={{
              color: COLORS.panelSubTitle,
              fontFamily: 'var(--font-pixel)',
              letterSpacing: 1.5,
              transform: 'scaleY(0.8)', // 0.7 = 세로 70%로 압축
              transformOrigin: 'left center',
              display: 'inline-block',
            }}
          >
            Who i am
          </h3>
          <span
            className="mt-0.75 text-sm"
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

const HintBubble = styled.div`
  position: absolute;
  bottom: 45%;
  left: 37%;
  z-index: 2;
  padding: 6px 12px;
  font-family: var(--font-pixel);
  font-size: 11px;
  font-weight: bold;
  color: #030303;

  background: #fefefe;
  border: 1.5px solid #030303;
  border-radius: 8px;

  opacity: 0;
  transform: translate(-50%, -30%);
  transition: 0.2s;
`

const Wrapper = styled.div<{ $devMode: boolean }>`
  position: relative;

  filter: ${({ $devMode }) =>
    $devMode ? 'brightness(0.9) contrast(1.1)' : 'none'};
  transition: 0.3s;
`

const DevHotspot = styled.div<{ $devMode: boolean }>`
  position: absolute;
  top: 125px;
  right: 160px;
  z-index: 2;
  width: 55px;
  height: 60px;
  cursor: ${({ $devMode }) => ($devMode ? 'default' : 'pointer')} !important;

  &:hover {
    transform: ${({ $devMode }) => ($devMode ? 'none' : 'scale(1.05)')};
  }

  &:hover + ${HintBubble} {
    opacity: ${({ $devMode }) => ($devMode ? '0' : '1')};
  }
`

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
