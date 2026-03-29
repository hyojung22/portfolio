'use client'

import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'

import { COLORS } from '@/constants'
import { getDateLabel, useProjectFilter } from '@/hooks/useProjectFilter'
import ProjectModal from '@/sections/project/ProjectModal'

export default function MobileProjectTab() {
  const {
    years,
    curIdx,
    curYear,
    direction,
    selectedProject,
    setSelectedProject,
    changeYear,
    filtered,
    monthStr,
  } = useProjectFilter()
  return (
    <div className="flex flex-col gap-3 pb-6">
      {/* 연도 필터 카드 */}
      <YearCard>
        <YearLeftBox>
          <YearBig>{curYear}</YearBig>
          <YearSub>year</YearSub>
        </YearLeftBox>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <NavBtn onClick={() => changeYear(Math.max(0, curIdx - 1))}>
              ◀
            </NavBtn>
            <YearLabel>{curYear}</YearLabel>
            <NavBtn
              onClick={() => changeYear(Math.min(years.length - 1, curIdx + 1))}
            >
              ▶
            </NavBtn>
          </div>
          <div className="flex items-center gap-5">
            {years.map((y) => (
              <span key={y} className="flex items-center gap-1">
                <YearTab
                  $isActive={y === curYear}
                  onClick={() => changeYear(years.indexOf(y))}
                >
                  {y}
                </YearTab>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <CountBadge>{filtered.length}개</CountBadge>
            {monthStr && (
              <span className="text-xs text-gray-400">활동 : {monthStr}</span>
            )}
          </div>
        </div>
      </YearCard>

      {/* 프로젝트 목록 */}
      <div className="overflow-x-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={curYear}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="flex flex-col gap-5"
          >
            {filtered.length === 0 ? (
              <div className="py-8 text-center text-sm text-gray-400">
                해당 연도에 프로젝트가 없습니다.
              </div>
            ) : (
              filtered.map((p) => (
                <ProjectCard key={p.id} onClick={() => setSelectedProject(p)}>
                  <DateBar>{getDateLabel(p)}</DateBar>
                  <div className="px-3 py-2.5">
                    <h3 className="mt-1 text-base font-bold">{p.title}</h3>
                    <p
                      className="mt-1 line-clamp-2 text-sm text-gray-500"
                      style={{ lineHeight: 1.6 }}
                    >
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-2 bg-[#fafafa] px-3 py-1.5">
                    <Badge $badge={p.badge} className="mr-2 line-clamp-1 w-10">
                      {p.badge === 'team' ? '팀' : '개인'}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      {p.skills.slice(0, 4).join(' · ')}
                      {p.skills.length > 4 ? ' ...' : ''}
                    </span>
                  </div>
                </ProjectCard>
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

const YearCard = styled.div`
  display: flex;
  gap: 20px;
  align-items: ceneter;
  padding: 16px;
  margin: 20px 0 10px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`

const YearLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  padding: 8px 15px 8px 0;
  border-right: 1.5px dashed #c8c8c8;
`

const YearBig = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${COLORS.panelSubTitle};
`

const YearSub = styled.div`
  font-size: 13px;
  color: #aaa;
`

const YearLabel = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${COLORS.panelSubTitle};
`

const NavBtn = styled.button`
  padding: 1px 3px;
  font-size: 7px;
  color: #939391;
  cursor: pointer !important;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;

  &:hover {
    color: ${COLORS.panelSubTitle};
    background: #e0f4f9;
  }
`
const YearTab = styled.span<{ $isActive: boolean }>`
  font-size: 15.5px;
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 400)};
  color: ${({ $isActive }) => ($isActive ? COLORS.panelSubTitle : '#aaa')};
  cursor: pointer !important;

  &:not(:last-child)::after {
    margin-left: 10px;
    content: '|';
  }
`

const CountBadge = styled.span`
  padding: 1px 6px;
  font-size: 11px;
  font-weight: 700;
  color: #e07800;
  white-space: nowrap;
  background: #fff3e0;
  border-radius: 4px;
`

const ProjectCard = styled.div`
  padding: 16px;
  cursor: pointer !important;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  &:active {
    opacity: 0.8;
  }
`

const DateBar = styled.div`
  padding: 0 12px 12px;
  font-family: var(--font-pixel);
  font-size: 15px;
  font-weight: 600;
  color: ${COLORS.panelSubTitle};
  border-bottom: 1.5px dashed #eee;
`

const Badge = styled.span<{ $badge: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 2px;
  font-size: 11px;
  font-weight: 600;
  color: ${({ $badge }) => ($badge === 'team' ? '#0e7490' : '#7c3aed')};
  text-align: center;
  white-space: nowrap;
  background: ${({ $badge }) => ($badge === 'team' ? '#e0f5fb' : '#ede9fe')};
  border-radius: 4px;
`
