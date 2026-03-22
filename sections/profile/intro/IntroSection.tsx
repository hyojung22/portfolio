'use client'

import Image from 'next/image'
import { useState } from 'react'

import { COLORS } from '@/constants'

export default function IntroSection() {
  const name = ['최', '효', '정']
  const lines = [
    '사용자가 편리하게 쓸 수 있는',
    '서비스를 만들고 싶은 프론트엔드 개발자입니다.',
    'React를 중심으로 화면을 설계하고 구현하며,',
    'Next.js를 익히며 한 단계씩 성장하고 있습니다.',
  ]
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center gap-8">
      <Image
        src="/images/profile2.png"
        alt="프로필이미지"
        width={150}
        height={150}
      />
      <h3
        className="text-2xl font-bold"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        안녕하세요, 프론트엔드 개발자{' '}
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
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </p>
    </section>
  )
}
