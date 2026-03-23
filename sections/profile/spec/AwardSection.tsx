'use client'

import { AWARD } from '@/constants'

import ExperienceCard from '../experience/ExperienceCard'

export default function AwardSection() {
  return (
    <div>
      {AWARD.map((award, index) => (
        <ExperienceCard
          key={award.id}
          no={award.id}
          title={award.title}
          period={award.period}
          image=""
          role={award.issuer}
          tasks={award.contents}
          isLast={index === AWARD.length - 1}
        />
      ))}
    </div>
  )
}
