'use client'

import { useState } from 'react'

import { Project, PROJECTS } from '@/constants'

const today = new Date()
const curY = today.getFullYear()
const curM = today.getMonth() + 1

export function getEndMonth(p: Project) {
  if (!p.ongoing) return p.endMonth as number
  return p.year === curY ? curM : 12
}

export function getDateLabel(p: Project) {
  const s = `${p.year}.${String(p.startMonth).padStart(2, '0')}`

  if (p.ongoing) return `${s} ~`
  if (p.startMonth === p.endMonth) return s

  const e = `${p.year}.${String(getEndMonth(p)).padStart(2, '0')}`
  return `${s} ~ ${e}`
}

export function useProjectFilter(activeProjectMenu?: string) {
  const years = [...new Set(PROJECTS.map((p) => p.year))].sort((a, b) => a - b)

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

  return {
    years,
    curIdx,
    curYear,
    direction,
    selectedProject,
    setSelectedProject,
    changeYear,
    filtered,
  }
}
