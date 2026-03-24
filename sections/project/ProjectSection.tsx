'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { Project, PROJECTS } from '@/constants'
import { useTabStore } from '@/store/useTabStore'

import ProjectModal from './ProjectModal'
import {
  Badge,
  DiaryBody,
  DiaryDateBar,
  DiaryDesc,
  DiaryEntry,
  DiaryFooter,
  DiaryTitle,
  NavBtn,
  NoProj,
  ProjBadge,
  SkillsText,
  YearBotRow,
  YearCurLabel,
  YearHeader,
  YearLeftBox,
  YearNum,
  YearRight,
  YearSepChar,
  YearsRow,
  YearSub,
  YearTab,
  YearTopRow,
} from './ProjectSection.styled'

const today = new Date()
const curY = today.getFullYear()
const curM = today.getMonth() + 1

function getEndMonth(p: Project) {
  if (!p.ongoing) return p.endMonth as number
  return p.year === curY ? curM : 12
}

function getDateLabel(p: Project) {
  const s = `${p.year}.${String(p.startMonth).padStart(2, '0')}`
  const e = p.ongoing
    ? '진행중'
    : `${p.year}.${String(getEndMonth(p)).padStart(2, '0')}`
  return `${s} ~ ${e}`
}

export default function ProjectSection() {
  const { activeProjectMenu } = useTabStore()

  const allYears = PROJECTS.map((p) => p.year)
  const minYear = Math.min(...allYears)
  const maxYear = Math.max(...allYears)
  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => minYear + i,
  )
  const [curIdx, setCurIdx] = useState(years.length - 1)
  const [direction, setDirection] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const curYear = years[curIdx]

  const changeYear = (nextId: number) => {
    setDirection(nextId > curIdx ? 1 : -1)
    setCurIdx(nextId)
  }

  const filtered = PROJECTS.filter((p) => {
    if (activeProjectMenu === 'team')
      return p.badge === 'team' && p.year === curYear
    if (activeProjectMenu === 'solo')
      return p.badge === 'solo' && p.year === curYear
    return p.year === curYear
  })

  const activeMonths = new Set<number>()
  filtered.forEach((p) => {
    for (let m = p.startMonth; m <= getEndMonth(p); m++) activeMonths.add(m)
  })
  const monthStr = [...activeMonths]
    .sort((a, b) => a - b)
    .map((m) => `${m}월`)
    .join(' · ')

  return (
    <div className="flex h-full flex-col gap-3 overflow-y-auto p-3 pr-0">
      {/* 연도헤더 */}
      <YearHeader>
        <YearLeftBox>
          <YearNum>{curYear}</YearNum>
          <YearSub>year</YearSub>
        </YearLeftBox>
        <YearRight>
          <YearTopRow>
            <div className="mt-0.5 flex items-center gap-2">
              <NavBtn onClick={() => changeYear(Math.max(0, curIdx - 1))}>
                ◀
              </NavBtn>
              <YearCurLabel>{curYear}</YearCurLabel>
              <NavBtn
                onClick={() =>
                  changeYear(Math.min(years.length - 1, curIdx + 1))
                }
              >
                ▶
              </NavBtn>
            </div>
            <YearsRow>
              {years.map((y, i) => (
                <span key={y}>
                  {i > 0 && <YearSepChar>|</YearSepChar>}
                  <YearTab
                    $isActive={y === curYear}
                    onClick={() => changeYear(years.indexOf(y))}
                  >
                    {y}
                  </YearTab>
                </span>
              ))}
            </YearsRow>
          </YearTopRow>
          <YearBotRow>
            <ProjBadge>{filtered.length}개</ProjBadge>
            {monthStr && <span>활동 : {monthStr}</span>}
          </YearBotRow>
        </YearRight>
      </YearHeader>

      {/* 애니메이션 적용 */}
      <div className="overflow-x-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={curYear}
            custom={direction}
            variants={{
              enter: (dir: number) => ({
                x: dir > 0 ? 60 : -60,
                opacity: 0,
              }),
              center: {
                x: 0,
                opacity: 1,
              },
              exit: (dir: number) => ({
                x: dir > 0 ? -60 : 60,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="flex flex-col gap-3"
          >
            {/* 프로젝트 목록 */}
            {filtered.length === 0 ? (
              <NoProj>해당 연도에 프로젝트가 없습니다.</NoProj>
            ) : (
              filtered.map((p) => (
                <DiaryEntry
                  key={p.id}
                  $hasProj={filtered.length === 1}
                  onClick={() => setSelectedProject(p)}
                >
                  <DiaryDateBar>{getDateLabel(p)}</DiaryDateBar>
                  <DiaryBody>
                    <DiaryTitle>{p.title}</DiaryTitle>
                    <DiaryDesc>{p.desc}</DiaryDesc>
                  </DiaryBody>
                  <DiaryFooter>
                    <Badge $badge={p.badge}>
                      {p.badge === 'team' ? '팀' : '개인'}
                    </Badge>
                    {/* {p.award && <AwardTag>{p.award}</AwardTag>} */}
                    <SkillsText>
                      {p.skills.slice(0, 4).join(' · ')}
                      {p.skills.length > 4 ? ' ...' : ''}
                    </SkillsText>
                  </DiaryFooter>
                </DiaryEntry>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 모달 */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
