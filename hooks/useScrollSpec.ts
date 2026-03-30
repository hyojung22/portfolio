'use client'

import { useEffect, useRef } from 'react'

import { useTabStore } from '@/store/useTabStore'

export function useScrollSpec() {
  const { scrollTrigger, setHighlightedSubMenu } = useTabStore()
  const containerRef = useRef<HTMLDivElement>(null)
  const certRef = useRef<HTMLElement>(null)
  const awardRef = useRef<HTMLElement>(null)
  const isScrollingRef = useRef(false)

  // 탭 클릭 시 스크롤 이동
  useEffect(() => {
    if (!scrollTrigger) return

    // 아코디언 애니메이션 끝날 때까지 대기 후 스크롤
    const timer = setTimeout(() => {
      if (scrollTrigger.target === 'skills') {
        isScrollingRef.current = true
        containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
        setTimeout(() => {
          isScrollingRef.current = false
        }, 600)
      }
      if (scrollTrigger.target === 'certificate') {
        isScrollingRef.current = true
        certRef.current?.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
          isScrollingRef.current = false
        }, 600)
      }
      if (scrollTrigger.target === 'award') {
        isScrollingRef.current = true
        awardRef.current?.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
          isScrollingRef.current = false
        }, 600)
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [scrollTrigger])

  useEffect(() => {
    const container = containerRef.current
    const certEl = certRef.current
    if (!container || !certEl) return

    const handleScroll = () => {
      if (isScrollingRef.current) return

      const { scrollTop, scrollHeight, clientHeight } = container

      // 맨 위 근처 -> skills
      if (scrollTop < 50) {
        setHighlightedSubMenu('skills')
        return
      }

      // 맨 아래 근처 -> award
      if (Math.ceil(scrollTop + clientHeight) >= scrollHeight - 100) {
        setHighlightedSubMenu('award')
        return
      }

      // 자격증 섹션 위치 기준으로 certificate
      const certTop = certEl.offsetTop
      if (scrollTop >= certTop - 200) {
        setHighlightedSubMenu('certificate')
        return
      }

      setHighlightedSubMenu('skills')
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [setHighlightedSubMenu])

  return { containerRef, certRef, awardRef }
}
