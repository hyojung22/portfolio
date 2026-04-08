'use client'

import Image from 'next/image'
import { createPortal } from 'react-dom'
import { IoPause, IoPlay, IoPlayBack, IoPlayForward } from 'react-icons/io5'
import styled, { css, keyframes } from 'styled-components'

import { PLAYLIST } from '@/constants'
import { useMusicStore } from '@/store/useMusicStore'

export default function MobileMusicPlayer() {
  const {
    currentIndex,
    isPlaying,
    setIsPlaying,
    nextTrack,
    prevTrack,
    isListOpen,
    setIsListOpen,
  } = useMusicStore()

  const currentTrack = PLAYLIST[currentIndex]

  return createPortal(
    <Wrapper $isOpen={isListOpen}>
      <LpButton onClick={() => setIsListOpen(!isListOpen)}>
        <Image
          src="/images/music/music.png"
          fill
          sizes="80px"
          alt="뮤직플레이어"
          style={{ objectFit: 'contain', transform: 'translateZ(0)' }}
        />
      </LpButton>

      {isListOpen && (
        <PlayerBar onClick={() => setIsListOpen(false)}>
          <TitleWrapper $isPlaying={isPlaying}>
            <TitleText $isPlaying={isPlaying}>
              {currentTrack.artist} - {currentTrack.title}
            </TitleText>
          </TitleWrapper>

          <Controls onClick={(e) => e.stopPropagation()}>
            <CtrlBtn onClick={prevTrack} title="이전">
              <IoPlayBack size={18} />
            </CtrlBtn>
            {isPlaying ? (
              <CtrlBtn onClick={() => setIsPlaying(false)} title="일시정지">
                <IoPause size={18} color="#ff6600" />
              </CtrlBtn>
            ) : (
              <CtrlBtn onClick={() => setIsPlaying(true)} title="재생">
                <IoPlay size={18} color="#ff6600" />
              </CtrlBtn>
            )}
            <CtrlBtn onClick={nextTrack} title="다음">
              <IoPlayForward size={18} />
            </CtrlBtn>
          </Controls>
        </PlayerBar>
      )}
    </Wrapper>,
    document.body,
  )
}

const expandWidth = keyframes`
  from { width: 0; opacity: 0; }
  to   { width: calc(100vw - 80px); opacity: 1; }
`

const marquee = keyframes`
  0%   { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`

const Wrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 85px;
  z-index: 100;
  display: flex;
  align-items: center;
  transform: translateZ(0);
  transition:
    left 0.25s ease,
    right 0.25s ease,
    transform 0.25s ease;
  will-change: transform;

  ${({ $isOpen }) =>
    !$isOpen
      ? `right: 16px; left: auto; transform: none;`
      : `left: 50%; right: auto; transform: translateX(-50%);`}

  @media (min-width: 720px) {
    display: none;
  }
`

const LpButton = styled.button`
  position: relative;
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  padding: 0;
  cursor: pointer !important;
  background: none;
  border: none;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  * {
    cursor: pointer !important;
  }
`

const PlayerBar = styled.div`
  z-index: -1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 17px 16px 15px 45px;
  margin-left: -40px;
  overflow: hidden;
  background: rgba(208, 208, 208, 0.85);
  border-right: none;
  border-radius: 0 50px 50px 0;
  animation: ${expandWidth} 0.25s ease forwards;

  @media (min-width: 500px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

const TitleWrapper = styled.div<{ $isPlaying: boolean }>`
  width: 100%;
  padding: 3px 6px 3px 10px;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  border-radius: 3px;
  -webkit-mask-image: ${({ $isPlaying }) =>
    $isPlaying
      ? 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
      : 'none'};
  mask-image: ${({ $isPlaying }) =>
    $isPlaying
      ? 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
      : 'none'};
`

const TitleText = styled.span<{ $isPlaying: boolean }>`
  display: block;
  width: 100%;
  overflow: hidden;
  font-size: 14px;
  color: #333;
  white-space: nowrap;

  /* 정지 중일 때 ellipsis 처리 */
  ${({ $isPlaying }) =>
    !$isPlaying &&
    css`
      text-overflow: ellipsis;
    `}

  ${({ $isPlaying }) =>
    $isPlaying
      ? css`
          animation: ${marquee} 8s linear infinite;
        `
      : css`
          animation: none;
        `}

  @media (min-width: 500px) {
    font-size: 22px;
  }
`

const Controls = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
`

const CtrlBtn = styled.button`
  display: flex;
  align-items: center;
  color: #333;
  cursor: pointer !important;
  background: rgba(208, 208, 208, 0);
  border: none;

  * {
    cursor: pointer !important;
  }
`
