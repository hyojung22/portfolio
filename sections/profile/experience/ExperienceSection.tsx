'use client'

import styled from 'styled-components'

import { COLORS, EDUCATION, WORK_EXPERIENCE } from '@/constants'
import { useScrollSection } from '@/hooks/useScrollSection'

import ExperienceCard from './ExperienceCard'

export default function ExperienceSection() {
  const { containerRef, eduRef } = useScrollSection()

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full flex-col gap-8 overflow-y-auto pr-4 pl-4"
    >
      {/* 업무 경험 */}
      <section className="mt-3">
        <Title className="mb-3">업무경험</Title>
        {WORK_EXPERIENCE.map((item, index) => (
          <ExperienceCard
            key={item.id}
            no={item.id}
            title={item.company}
            period={item.period}
            image={item.image}
            role={item.role}
            tasks={item.tasks}
            isLast={index === WORK_EXPERIENCE.length - 1}
          />
        ))}
      </section>

      {/* 교육 이력 */}
      <section ref={eduRef} className="mb-3">
        <Title className="mt-3 mb-3">교육이력</Title>
        {EDUCATION.filter((edu) => edu.tasks && edu.tasks.length > 0).map(
          (item, index, arr) => (
            <ExperienceCard
              key={item.id}
              no={item.id}
              title={item.course}
              period={item.period}
              image={item.image}
              role={item.school}
              tasks={item.tasks}
              isLast={index === arr.length - 1}
            />
          ),
        )}
      </section>
    </div>
  )
}

const Title = styled.h3`
  font-weight: 700;
  color: ${COLORS.panelSubTitle};
`
