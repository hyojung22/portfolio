'use client'

import { COLORS, PROFILE_LINKS } from '@/constants'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import styled from 'styled-components'

export default function LeftHomeTab() {
  const router = useRouter()

  const handleLinkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (!value) return

    if (value.startsWith('http')) {
      window.open(value, '_blank')
    } else {
      router.push(value)
    }

    e.target.value = ''
  }

  return (
    <div className="flex h-full flex-col items-center justify-between gap-2 rounded-md bg-white p-3">
      <div className="mb-2 flex-1">
        <Image
          className="rounded-xl"
          src="/images/profile.png"
          alt="프로필사진"
          width={150}
          height={150}
        />
      </div>

      <DashedDivider />

      <div className="flex-2">
        <ul>
          <li className="text-xs">광주광역시 북구 운암동</li>
          <li className="text-xs">010-8441-7214</li>
        </ul>
      </div>

      <DashedDivider />

      <div className="flex-3 flex-col">
        <div className="flex w-full items-center gap-1 overflow-hidden whitespace-nowrap">
          <span
            className="text-base font-bold"
            style={{ color: COLORS.rightPanelTitle }}
          >
            최효정
          </span>
          <GenderSvg className="shrink-0" />
          <span className="text-xs font-bold" style={{ color: COLORS.gray }}>
            1995.07.21
          </span>
          <span className="text-xs font-bold" style={{ color: COLORS.orange }}>
            (+)
          </span>
        </div>

        <p
          className="w-full text-xs font-bold"
          style={{ fontFamily: 'var(--font-pixel)', color: COLORS.orange }}
        >
          pusj22@naver.com
        </p>

        {/* 이력서 / GitHub 이동 선택창 */}
        <nav>
          <LinkSelect onChange={handleLinkChange} defaultValue="">
            {PROFILE_LINKS.map((link) => (
              <option key={link.value} value={link.value}>
                {link.label}
              </option>
            ))}
          </LinkSelect>
        </nav>
      </div>
    </div>
  )
}

const DashedDivider = styled.hr`
  width: 100%;
  margin: 0;
  border: none;
  border-top: 1px dashed ${COLORS.border};
`

const LinkSelect = styled.select`
  margin-top: 8px;
  width: 100%;
  font-size: 12px;
  border: 1px solid ${COLORS.border};
  border-radius: 3px;
  padding: 2px 4px;
  background-color: #f5f5f5;
  cursor: pointer;
`

function GenderSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="13"
      height="13"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="18" height="18" rx="4.5" stroke="#808593" />
      <path
        d="M9.59082 4.0625C10.502 4.0625 11.3084 4.33973 11.875 4.76465C12.4415 5.18949 12.7451 5.73871 12.7451 6.30273C12.7451 6.86679 12.4415 7.41595 11.875 7.84082C11.3084 8.26578 10.502 8.54297 9.59082 8.54297C8.67982 8.54288 7.87416 8.26569 7.30762 7.84082C6.74113 7.41595 6.4375 6.86679 6.4375 6.30273C6.43754 5.73871 6.74116 5.18949 7.30762 4.76465C7.87416 4.33982 8.67987 4.06259 9.59082 4.0625Z"
        stroke="#FF9551"
      />
      <line
        x1="9.63452"
        y1="9.04346"
        x2="9.63452"
        y2="15.4376"
        stroke="#FF9551"
      />
      <line
        x1="13.3975"
        y1="11.6743"
        x2="5.93766"
        y2="11.6743"
        stroke="#FF9551"
      />
    </svg>
  )
}
