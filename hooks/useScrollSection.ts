import { useEffect, useRef } from 'react'

import { useTabStore } from '@/store/useTabStore'

export function useScrollSection() {
  const { activeSubMenu, setActiveSubMenu } = useTabStore()
  const containerRef = useRef<HTMLDivElement>(null)
  const eduRef = useRef<HTMLElement>(null)

  // 탭 클릭 시 스크롤 이동
  useEffect(() => {
    if (activeSubMenu === 'work') {
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    }
    if (activeSubMenu === 'education') {
      eduRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [activeSubMenu])

  // 스크롤 위치에 따라 activeSubMenu 자동 변경
  useEffect(() => {
    const eduEl = eduRef.current
    if (!eduEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 교육이력 섹션이 화면에 50% 이상 보이면 education으로
        if (entry.isIntersecting) {
          setActiveSubMenu('education')
        } else {
          setActiveSubMenu('work')
        }
      },
      {
        root: containerRef.current, // 스크롤 컨테이너 기준
        threshold: 0.85,
      },
    )

    observer.observe(eduEl)

    return () => observer.disconnect()
  }, [setActiveSubMenu])

  return { containerRef, eduRef }
}
