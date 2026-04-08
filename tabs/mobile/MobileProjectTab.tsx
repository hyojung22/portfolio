'use client'

import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'

import { COLORS, PROJECTS } from '@/constants'
import { getDateLabel, useProjectFilter } from '@/hooks/useProjectFilter'
import ProjectModal from '@/sections/project/ProjectModal'

export default function MobileProjectTab() {
  const {
    years,
    curYear,
    direction,
    selectedProject,
    setSelectedProject,
    changeYear,
    filtered,
  } = useProjectFilter()
  return (
    <div className="flex flex-col gap-3 pb-6">
      {/* 연도 필터 카드 */}
      <YearCard>
        <YearLeftBox>
          <YearBig>{curYear}</YearBig>
          <YearSub>year</YearSub>
        </YearLeftBox>
        <div className="flex flex-col gap-3" style={{ flex: 1 }}>
          <div style={{ display: 'flex', flex: 1 }}>
            {years.map((y) => {
              const count = PROJECTS.filter((p) => p.year === y).length
              return (
                <YearTabWrapper
                  key={y}
                  onClick={() => changeYear(years.indexOf(y))}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: 1,
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontSize: 'clamp(10px, 2.5vw, 12px)',
                      color: y === curYear ? '#3FB1D7' : '#ccc',
                    }}
                  >
                    {count}개
                  </span>
                  <YearTab $isActive={y === curYear}>{y}</YearTab>
                </YearTabWrapper>
              )
            })}
          </div>
        </div>
      </YearCard>

      {/* 프로젝트 목록 */}
      <div className="cursor-pointer overflow-x-hidden">
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
  align-items: center;
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

const YearTabWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  cursor: pointer !important;

  * {
    cursor: pointer !important;
  }
`

const YearTab = styled.span<{ $isActive: boolean }>`
  font-size: clamp(14px, 4vw, 18px);
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 400)};
  color: ${({ $isActive }) => ($isActive ? COLORS.panelSubTitle : '#aaa')};
  cursor: pointer !important;
`

const ProjectCard = styled.div`
  padding: 16px;
  cursor: pointer !important;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  * {
    cursor: pointer !important;
  }

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
