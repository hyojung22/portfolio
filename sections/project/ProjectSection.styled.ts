import styled from 'styled-components'

import { COLORS } from '@/constants'

export const YearHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: stretch;
  margin-right: 20px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #c8c8c8;
  border-radius: 4px 4px 0 0;
`

export const YearLeftBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 72px;
  padding: 8px 14px;
  margin-right: 10px;

  &::after {
    position: absolute;
    top: 8px;
    right: 0;
    bottom: 8px;
    content: '';
    border-right: 1.5px dashed #c8c8c8;
  }
`
export const YearNum = styled.div`
  font-size: 26px;
  font-weight: 900;
  line-height: 1;
  color: ${COLORS.panelSubTitle};
`

export const YearSub = styled.div`
  margin-top: 2px;
  font-size: 13px;
  color: #aaa;
`

export const YearsRow = styled.div`
  display: flex;
  flex: 1;
  gap: 6px;
  align-items: center;
  padding-right: 12px;
`
export const YearTab = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 7px 0 5px;
  cursor: pointer !important;
  background: ${({ $isActive }) => ($isActive ? COLORS.panelSubTitle : '#fff')};
  border-radius: 8px;
  transition: all 0.15s;

  * {
    cursor: pointer !important;
  }

  &:hover {
    background: ${({ $isActive }) =>
      $isActive ? COLORS.panelSubTitle : '#f0f9ff'};
  }
`

export const YearTabCount = styled.span<{ $isActive: boolean }>`
  font-size: 11px;
  color: ${({ $isActive }) => ($isActive ? 'rgba(255,255,255,0.8)' : '#ccc')};
`

export const YearTabLabel = styled.span<{ $isActive: boolean }>`
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 400)};
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#aaa')};
`

export const DiaryEntry = styled.div<{ $hasProj: boolean }>`
  flex-shrink: 0;
  padding: 15px;
  margin-top: 10px;
  margin-right: ${({ $hasProj }) => ($hasProj ? '20px' : '5px')};
  overflow: hidden;
  cursor: pointer !important;
  border: 1px solid #ddd;
  transition: border-color 0.15s;

  * {
    cursor: pointer !important;
  }

  &:hover {
    border-color: ${COLORS.panelSubTitle};
  }
`
export const DiaryDateBar = styled.div`
  padding: 0 12px 12px;
  font-family: var(--font-pixel);
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.panelSubTitle};
  border-bottom: 1.5px dashed #eee;
`
export const DiaryBody = styled.div`
  padding: 20px 12px;
  margin-bottom: 10px;
`
export const DiaryTitle = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 700;
  color: #222;
`
export const DiaryDesc = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  line-height: 1.6;
  color: #666;
`
export const DiaryFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  padding: 6px 12px;
  background: #fafafa;
  border-top: 1px dashed #eee;
`
export const Badge = styled.span<{ $badge: 'team' | 'solo' }>`
  padding: 2px 7px;
  margin-right: 5px;
  font-size: 11px;
  font-weight: 700;
  color: ${({ $badge }) => ($badge === 'team' ? '#0e7490' : '#7c3aed')};
  background: ${({ $badge }) => ($badge === 'team' ? '#e0f5fb' : '#ede9fe')};

  border-radius: 2px;
`

export const SkillsText = styled.span`
  font-size: 13px;
  color: #888;
`
export const NoProj = styled.div`
  padding: 30px 0;
  padding-right: 10px;
  margin-top: 10px;
  font-size: 14px;
  color: #bbb;
  text-align: center;
`
