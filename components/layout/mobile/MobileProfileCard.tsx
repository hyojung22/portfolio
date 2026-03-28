'use client'

import Image from 'next/image'
import styled from 'styled-components'

import { ABOUT_ME, COLORS, PROFILE_LINKS } from '@/constants'
import { useProfileLink } from '@/hooks/useProfileLink'
import { GenderSvg, TodayIs } from '@/tabs/LeftHomeTab'

export default function MobileProfileCard() {
  const { handleLinkChange } = useProfileLink()

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
        <div
          className="relative mt-2 mb-3 w-full border"
          style={{
            borderColor: COLORS.border,
            height: 'clamp(180px, 50vw, 260px)',
          }}
        >
          <Image
            src="/images/home/miniroom1.png"
            loading="eager"
            alt="미니룸"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
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
  /* font-size: 16px; */
  font-size: clamp(13px, 3.5vw, 16px);
  color: ${COLORS.orange};
  cursor: pointer;
`
