import Image from 'next/image'

import { COLORS } from '@/constants'

export default function MobileHeader() {
  return (
    <header
      style={{ backgroundColor: `${COLORS.panelSubTitle}` }}
      className="flex h-25 w-full justify-center overflow-hidden pt-3"
    >
      <div className="relative h-full w-[320px]">
        <Image
          src="/images/home/mobile-profile.png"
          alt="모바일 프로필"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'center bottom',
          }}
        />

        <span className="absolute text-2xl" style={{ top: '6%', left: '29%' }}>
          🌸
        </span>
        <span
          className="absolute text-base"
          style={{ bottom: '15%', left: '27%' }}
        >
          🌸
        </span>
        <span
          className="absolute text-base"
          style={{ top: '16%', right: '31%' }}
        >
          🌸
        </span>
        <span
          className="absolute text-2xl"
          style={{ bottom: '10%', right: '26%' }}
        >
          🌸
        </span>
      </div>
    </header>
  )
}
