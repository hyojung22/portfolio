import { COLORS, EDUCATION, WORK_EXPERIENCE } from '@/constants'
import { useTabStore } from '@/store/useTabStore'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

export default function ExperienceSection() {
  const { activeSubMenu } = useTabStore()
  const containerRef = useRef<HTMLDivElement>(null)
  const eduRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (activeSubMenu === 'work') {
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    }
    if (activeSubMenu === 'education') {
      eduRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [activeSubMenu])

  return (
    // 업무경험
    <div
      ref={containerRef}
      className="flex h-full w-full flex-col gap-8 overflow-y-auto pr-4 pl-4"
    >
      <section className="mt-3">
        <Title className="mb-3">업무경험</Title>
        {WORK_EXPERIENCE.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div>
                <No>NO.{item.id}</No>
                <Company className="ml-3">{item.company}</Company>
              </div>
              <Period>{item.period}</Period>
            </CardHeader>

            <CardBody>
              <Role>{item.role}</Role>
              <SkillList>
                {item.skills.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </SkillList>
              <TaskList tasks={item.tasks} />
            </CardBody>
          </Card>
        ))}
      </section>

      <section ref={eduRef} className="mb-4">
        <Title className="mb-3">교육이력</Title>
        {EDUCATION.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div>
                <No>NO.{item.id}</No>
                <Company className="ml-3">{item.course}</Company>
              </div>
              <Period>{item.period}</Period>
            </CardHeader>

            <CardBody style={{ border: 'none' }}>
              <Role>{item.school}</Role>
              <TaskList tasks={item.tasks} />
            </CardBody>
          </Card>
        ))}
      </section>
    </div>
  )
}

const Title = styled.h3`
  color: ${COLORS.panelSubTitle};
  font-weight: 700;
`

const Card = styled.div`
  overflow: hidden;
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  background-color: ${COLORS.cardHeaderBg};
  border-top: 2px solid ${COLORS.gray100};
`
const No = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${COLORS.orange};
`

const Company = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${COLORS.rightPanelTitle};
`

const Period = styled.span`
  font-size: 13px;
  color: ${COLORS.gray500};
`

const CardBody = styled.div`
  padding: 20px 55px;
  background-color: #ffffff;
  border-bottom: 2px solid ${COLORS.gray100};
`

const Role = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: black;
`

const SkillList = styled.div`
  margin: 8px 0;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`

const SkillBadge = styled.span`
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 5px;
  background-color: ${COLORS.badge};
  color: ${COLORS.white};
  font-weight: 500;
`

function TaskList({ tasks }: { tasks: readonly string[] }) {
  return (
    <ul className="mt-3 flex flex-col gap-1">
      {tasks.map((task, i) => (
        <li key={i} className="flex gap-2 text-sm leading-relaxed">
          <span>•</span>
          {task}
        </li>
      ))}
    </ul>
  )
}
