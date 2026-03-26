'use client'

import Image from 'next/image'
import styled from 'styled-components'

import { COLORS } from '@/constants'

interface Props {
  no: number
  title: string
  period: string
  image?: string
  role: string
  tasks?: string[]
  skills?: readonly string[]
  isLast?: boolean
}

export default function ExperienceCard({
  no,
  title,
  period,
  image,
  role,
  tasks,
  skills,
  isLast = false,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <div>
          <No>NO.{no}</No>
          <Company className="ml-3">{title}</Company>
        </div>
        <Period>{period}</Period>
      </CardHeader>

      <CardBody $isLast={isLast}>
        {image && (
          <Image
            className="self-start"
            src={image}
            alt={title}
            width={80}
            height={80}
          />
        )}
        <div>
          <Role>{role}</Role>
          {skills && skills.length > 0 && (
            <SkillList>
              {skills.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </SkillList>
          )}
          <TaskList tasks={tasks} />
        </div>
      </CardBody>
    </Card>
  )
}

function TaskList({ tasks = [] }: { tasks?: string[] }) {
  return (
    <ul className="mt-2 flex flex-col gap-1">
      {tasks.map((task, i) => (
        <li key={i} className="flex gap-2 leading-relaxed">
          <span>•</span>
          {task}
        </li>
      ))}
    </ul>
  )
}

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
  font-size: 16px;
  font-weight: 700;
  color: ${COLORS.orange};
`

const Company = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${COLORS.rightPanelTitle};
`

const Period = styled.span`
  font-size: 13px;
  color: ${COLORS.gray500};
`

const CardBody = styled.div<{ $isLast?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 29px;
  justify-content: start;
  padding: 25px 40px;
  background-color: #ffffff;
  border-bottom: ${({ $isLast }) =>
    $isLast ? `2px solid ${COLORS.gray100}` : 'none'};
`

const Role = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: black;
`

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 5px 0;
`

const SkillBadge = styled.span`
  padding: 2px 8px;
  font-size: 10px;
  font-weight: 500;
  color: ${COLORS.white};
  background-color: ${COLORS.badge};
  border-radius: 5px;
`
