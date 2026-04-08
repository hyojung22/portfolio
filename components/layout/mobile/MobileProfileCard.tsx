'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ABOUT_ME, COLORS, PLAYLIST, PROFILE_LINKS } from '@/constants'
import { useMusicStore } from '@/store/useMusicStore'
import { GenderSvg, TodayIs } from '@/tabs/LeftHomeTab'

export default function MobileProfileCard() {
  const { setCurrentIndex, setIsPlaying, setIsListOpen } = useMusicStore()

  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const hasSeen = localStorage.getItem('dev_hint_seen')

    if (!hasSeen) {
      const raf = requestAnimationFrame(() => {
        setShowHint(true)

        setTimeout(() => {
          setShowHint(false)
        }, 2500)
      })

      localStorage.setItem('dev_hint_seen', 'true')

      return () => cancelAnimationFrame(raf)
    }
  }, [])

  const handleDevMode = () => {
    const devIndex = PLAYLIST.findIndex(
      (track) => track.title === 'Hello World',
    )

    if (devIndex !== -1) {
      setCurrentIndex(devIndex)
      setIsPlaying(true)
      setIsListOpen(true)
    }
  }

  return (
    <>
      <Card className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <Image
            src="/images/home/profile.png"
            alt="프로필사진"
            width={100}
            height={100}
            className="rounded-xl"
            style={{
              width: 'clamp(80px, 20vw, 120px)',
              height: 'clamp(80px, 20vw, 120px)',
            }}
          />
          <div className="flex flex-col gap-0.5">
            <ProfileInfo />
          </div>
        </div>

        {/* TODAY IS */}
        <div className="flex items-center gap-2">
          <TodayIs fontSize="clamp(13px, 3.5vw, 16px)" />
        </div>
      </Card>
      <Card className="mt-3 flex items-center justify-around">
        <div className="flex gap-5">
          <span
            style={{
              color: COLORS.panelSubTitle,
              fontSize: 'clamp(13px, 3.5vw, 16px)',
              fontFamily: 'var(--font-galmuri)',
            }}
          >
            깃허브
          </span>
          <LinkBtn
            href={PROFILE_LINKS[1].value}
            target="_blank"
            rel="noreferrer"
          >
            바로가기
          </LinkBtn>
        </div>
        <DottedDivider />
        <div className="flex gap-5">
          <span
            style={{
              color: COLORS.panelSubTitle,
              fontSize: 'clamp(13px, 3.5vw, 16px)',
              fontFamily: 'var(--font-galmuri)',
            }}
          >
            이력서
          </span>
          <LinkBtn
            href={PROFILE_LINKS[2].value}
            target="_blank"
            rel="noreferrer"
          >
            바로가기
          </LinkBtn>
        </div>
      </Card>
      <Card className="mt-3">
        <h3
          className="font-bold"
          style={{
            color: COLORS.panelSubTitle,
            fontFamily: 'var(--font-pixel)',
            letterSpacing: 1.5,
            transform: 'scaleY(0.8)', // 0.7 = 세로 70%로 압축
            transformOrigin: 'left center',
            fontSize: 'clamp(16px, 4vw, 20px)',
            display: 'inline-block',
          }}
        >
          Mini Room
        </h3>
        <Wrapper>
          <Image
            src="/images/home/miniroom1.png"
            loading="eager"
            alt="미니룸"
            width={678}
            height={364}
            // fill
            // sizes="(max-width: 768px) 100vw, 90vw"
            // style={{ objectFit: 'cover', objectPosition: 'center top' }}
            style={{ width: '100%', height: 'auto' }}
          />

          <DevHotspot onClick={handleDevMode} />

          {showHint && <HintBubble>이 컴퓨터… 뭔가 있다 👀</HintBubble>}
        </Wrapper>
      </Card>
    </>
  )
}

function ProfileInfo() {
  return (
    <div className="flex flex-col gap-0.5">
      <span
        style={{
          color: COLORS.rightPanelTitle,
          fontSize: 'clamp(24px, 5vw, 28px)',
          fontWeight: 'bold',
        }}
      >
        {ABOUT_ME.name}
      </span>
      <div className="flex items-center gap-1">
        <GenderSvg className="h-5 shrink-0" />
        <span
          style={{
            color: COLORS.gray500,
            fontSize: 'clamp(15px, 3.5vw, 18px)',
            fontWeight: 'bold',
          }}
        >
          {ABOUT_ME.contact.birth}
        </span>
        <span
          style={{
            color: COLORS.orange,
            fontSize: 'clamp(13px, 2.5vw, 14px)',
            fontWeight: 'bold',
          }}
        >
          (+)
        </span>
      </div>
      <p
        style={{
          fontFamily: 'var(--font-pixel)',
          color: COLORS.orange,
          fontSize: 'clamp(12px, 2.5vw, 13px)',
        }}
      >
        {ABOUT_ME.contact.email}
      </p>
    </div>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  /* height: clamp(180px, 50vw, 260px); */
  margin-top: 8px;
  margin-bottom: 12px;
  border: 1px solid ${COLORS.border};
`

const DevHotspot = styled.div`
  position: absolute;
  top: 55%;
  left: 64%;
  z-index: 2;
  width: 8%;
  height: 18%;
  cursor: pointer !important;
  transform: translate(-50%, -50%);
`

const HintBubble = styled.div`
  position: absolute;
  top: 45%;
  left: 34%;
  z-index: 2;

  padding: 1vw 1.5vw;
  font-family: var(--font-pixel);
  font-size: 1.9vw;
  font-weight: bold;

  background: #fff;
  border: 0.2vw solid #000;
  border-radius: 1.2vw;
  transform: translate(-50%, -50%);

  animation: fadeInUp 0.4s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate(-50%, -40%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`

const Card = styled.div`
  padding: 16px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`

const DottedDivider = styled.div`
  width: 1px;
  height: 20px;
  border-left: 2px dotted ${COLORS.gray100};
`

const LinkBtn = styled.a`
  font-family: var(--font-galmuri);
  font-size: clamp(13px, 3.5vw, 16px);
  color: ${COLORS.orange};
  cursor: pointer;
`
