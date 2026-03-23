import { useEffect, useRef } from 'react'

import { useTabStore } from '@/store/useTabStore'

export function useScrollSection() {
  const { scrollTrigger, setHighlightedSubMenu } = useTabStore()
  const containerRef = useRef<HTMLDivElement>(null)
  const eduRef = useRef<HTMLElement>(null)
  const isScrollingRef = useRef(false)

  // 탭 클릭 시 스크롤 이동
  useEffect(() => {
    if (!scrollTrigger) return

    const timer = setTimeout(() => {
      if (scrollTrigger.target === 'work') {
        isScrollingRef.current = true
        containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
        setTimeout(() => {
          isScrollingRef.current = false
        }, 600)
      }
      if (scrollTrigger.target === 'education') {
        isScrollingRef.current = true
        eduRef.current?.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
          isScrollingRef.current = false
        }, 600)
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [scrollTrigger])

  // 스크롤 위치에 따라 왼쪽 패널 표시 변경
  useEffect(() => {
    const container = containerRef.current
    const eduEl = eduRef.current
    if (!container || !eduEl) return

    const handleScroll = () => {
      if (isScrollingRef.current) return

      const { scrollTop } = container

      // 교육이력 섹션 위치 기준
      const eduTop = eduEl.offsetTop
      if (scrollTop >= eduTop - 200) {
        setHighlightedSubMenu('education')
        return
      }

      // 맨 위 -> work
      setHighlightedSubMenu('work')
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [setHighlightedSubMenu])

  return { containerRef, eduRef }
}
