import styled from 'styled-components'

import { COLORS } from '@/constants'

export const YearHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin-right: 20px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #c8c8c8;
  border-radius: 4px 4px 0 0;
`
export const YearLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 72px;
  padding: 8px 14px;
  border-right: 1px dashed #c8c8c8;
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
export const YearRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
export const YearTopRow = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 6px 10px;
  border-bottom: 1px dashed #d4d4d4;
`
export const NavBtn = styled.span`
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
export const YearCurLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #939391;
`
export const YearsRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`
export const YearSepChar = styled.span`
  margin: 0 10px;
  font-size: 10px;
  color: #ddd;
`
export const YearTab = styled.span<{ $isActive: boolean }>`
  padding: 2px 4px;
  font-size: 13px;
  font-weight: ${({ $isActive }) => ($isActive ? 900 : 400)};
  color: ${({ $isActive }) => ($isActive ? COLORS.panelSubTitle : '#aaa')};
  cursor: pointer !important;

  &:hover {
    color: ${COLORS.panelSubTitle};
  }
`
export const YearBotRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 5px 10px;
  font-size: 11px;
  color: #aaa;
`
export const ProjBadge = styled.span`
  padding: 1px 5px;
  font-size: 11px;
  font-weight: 700;
  color: #e07800;
  background: #fff3e0;
  border: 1px solid #ffe0b2;
  border-radius: 2px;
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
  color: ${({ $badge }) => ($badge === 'team' ? '#2a8aaa' : '#e07800')};
  background: ${({ $badge }) => ($badge === 'team' ? '#e0f4f9' : '#fff3e0')};
  border: 1px solid
    ${({ $badge }) => ($badge === 'team' ? '#b8dff0' : '#ffe0b2')};
  border-radius: 2px;
`
export const AwardTag = styled.span`
  font-size: 12px;
  color: #e07800;
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
