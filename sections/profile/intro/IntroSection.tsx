'use client'

import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

import { ABOUT_ME, COLORS } from '@/constants'

export default function IntroSection() {
  const name = ['최', '효', '정']

  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center gap-8">
      <div className="relative flex items-center justify-center">
        <Image
          src="/images/profile/profile2.png"
          alt="프로필이미지"
          width={150}
          height={150}
        />
        {/* 별 위치 absolute로 조절 */}
        <PixelStar delay="0s" style={{ top: '-20px', left: '10px' }} />
        <PixelStar delay="0.3s" style={{ top: '-10px', right: '0px' }} />
        <PixelStar delay="0.6s" style={{ top: '20px', left: '-25px' }} />
        <PixelStar delay="0.9s" style={{ bottom: '0px', left: '5px' }} />
        <PixelStar
          delay="1.2s"
          style={{ bottom: '-15px', right: '10px' }}
          size={10}
        />
        <PixelStar
          delay="1.5s"
          style={{ top: '50px', right: '-20px' }}
          size={8}
        />
      </div>
      <h3
        className="text-2xl font-bold"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        안녕하세요, 개발자{' '}
        {name.map((char, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              color: COLORS.panelSubTitle,
              cursor: 'default',
              animation: isHovered
                ? `wave 0.6s ease-in-out 1 ${i * 0.15}s both`
                : 'none',
            }}
          >
            {char}
          </span>
        ))}{' '}
        입니다.
      </h3>
      <p className="text-center text-lg leading-relaxed">
        {ABOUT_ME.introLines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </p>
    </section>
  )
}

const Twinkle = styled.div<{ $delay: string }>`
  @keyframes twinkle {
    0%,
    100% {
      opacity: 0.5;
      transform: scale(0.4);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
  }
  animation: twinkle 1.5s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
`

export function PixelStar({
  size = 16,
  color = '#ff9ebc',
  delay = '0s',
  style,
}: {
  size?: number
  color?: string
  delay?: string
  style?: React.CSSProperties
}) {
  return (
    <Twinkle $delay={delay} style={{ position: 'absolute', ...style }}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
        <rect x="7" y="0" width="2" height="16" />
        <rect x="0" y="7" width="16" height="2" />
        <rect x="6" y="2" width="4" height="12" opacity="0.4" />
        <rect x="2" y="6" width="12" height="4" opacity="0.4" />
      </svg>
    </Twinkle>
  )
}
