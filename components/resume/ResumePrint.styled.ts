import styled from 'styled-components'

const CYAN = '#3FB1D7'
const PINK = '#ff9ebc'

// 전체 레이아웃
export const PrintWrapper = styled.div`
  max-width: 900px;
  padding: 40px 30px 0;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.6;
  color: #111827;
  background: #fff;
`

// 헤더
export const Header = styled.header`
  margin-bottom: 20px;
`

export const HeaderTop = styled.div`
  margin-bottom: 12px;
`

export const HeaderLeft = styled.div``

export const HeaderName = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -1px;
`

export const HeaderTagline = styled.p`
  margin-top: 6px;
  font-size: 14px;
  color: #6b7280;
`

// 연락처 바
export const ContactBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  padding: 8px 14px;
  background: #f0fbff;
  border-left: 4px solid ${CYAN};
  border-radius: 0 6px 6px 0;
`

export const ContactItem = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 13px;
  color: #6b7280;

  svg {
    flex-shrink: 0;
    color: ${CYAN};
  }
`

// About Me
export const AboutBody = styled.div`
  margin: 16px 0 20px;
`

export const AboutText = styled.div`
  padding: 5px 0;
  font-size: 16px;
  line-height: 1.8;
  color: #374151;

  p + p {
    margin-top: 10px;
  }
`

// 섹션 공통
export const Section = styled.section`
  margin-bottom: 16px;
`

export const SectionTitle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 6px;
  font-size: 22px;
  font-weight: 600;
  color: #111827;

  &::before {
    font-size: 12px;
    color: ${PINK};
    content: '✦';
  }
`

export const SectionDivider = styled.hr`
  margin-bottom: 14px;
  border: none;
  border-top: 1.5px solid #e5e7eb;
`

// Entry
export const Entry = styled.div`
  display: flex;
  gap: 50px;
  padding: 0 14px 14px;
  margin: 14px 0;
  border-bottom: 1.5px dashed #e5e7eb;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`

export const EntryDate = styled.div`
  min-width: 80px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.6;
  color: #9ca3af;
  white-space: pre-wrap;
`

export const EntryContent = styled.div`
  flex: 1;
`

export const EntryTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`

export const EntrySub = styled.div`
  margin-bottom: 4px;
  font-size: 13px;
  color: #6b7280;
`

export const EntryBullets = styled.ul`
  padding-left: 14px;
  list-style: none;
`

export const EntryBulletItem = styled.li`
  position: relative;
  padding: 2px 0 2px 14px;
  font-size: 13px;
  line-height: 1.6;
  color: #6b7280;

  &::before {
    position: absolute;
    top: 8px;
    left: 0;
    font-size: 7px;
    color: ${CYAN};
    content: '●';
  }
`

// Skill
export const SkillRow = styled.div`
  display: flex;
  gap: 50px;
  align-items: flex-start;
  padding: 0 14px 14px;
  margin: 14px 0;
  border-bottom: 1.5px dashed #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`

export const SkillLabel = styled.div`
  min-width: 80px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.6;
  color: #9ca3af;
  white-space: pre-wrap;
`

export const ChipGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const Chip = styled.span<{
  $level: '주로 사용' | '사용 가능'
}>`
  padding: 2px 8px;
  margin: 2px;
  font-size: 12px;
  border-radius: 4px;

  ${({ $level }) => {
    if ($level === '주로 사용')
      return `
        background: #e0f5fb;
        color: #0e7490;
        border: 1px solid #7dd3e8;
      `
    if ($level === '사용 가능')
      return `
        background: #f3f4f6;
        color: #6b7280;
        border: 1px solid #e5e7eb;
      `
    return `
        background: #fff0f5;
        color: #9d174d;
        border: 1px solid #fbb6ce;
      `
  }}
`

export const SkillLegend = styled.p`
  margin-top: -8px;
  font-size: 12px;
  color: #9ca3af;
`

// Project
export const ProjItem = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1.5px dashed #e5e7eb;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`

export const ProjHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 4px;
`

export const ProjName = styled.div`
  flex: 1;
  margin-right: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`

export const ProjTitleLinks = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 6px;
  align-items: center;
`

export const ProjPeriod = styled.div`
  margin-right: 14px;
  font-size: 16px;
  font-weight: 500;
  color: #9ca3af;
  white-space: nowrap;
`

export const ProjIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`

export const ProjType = styled.div`
  margin-bottom: 6px;
  font-size: 13px;
  color: #6b7280;
`

export const ProjDesc = styled.div`
  max-width: 80%;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 1.75;
`

export const ProjRoleRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 8px;
`

export const ProjRoleLabel = styled.span`
  min-width: 30px;
  font-size: 14px;
  font-weight: 600;
  color: ${CYAN};
`

export const ProjRoleVal = styled.span`
  font-size: 13px;
  color: #111827;
`

export const DetailBox = styled.ul`
  padding: 10px 10px 10px 24px;
  margin-bottom: 10px;
  list-style: none;
  background: #fafafa;
  border-left: 4px solid #e5e7eb;
  border-radius: 0 4px 4px 0;
`

export const DetailItem = styled.li`
  position: relative;
  padding: 2px 0 2px 14px;
  font-size: 13px;
  line-height: 1.7;
  color: #374151;

  &::before {
    position: absolute;
    top: 8px;
    left: 0;
    font-size: 7px;
    color: #9ca3af;
    content: '●';
  }
`

// Skill Keywords
export const SkillKeywordSection = styled.div`
  margin-top: 20px;
  margin-bottom: 0;
`

export const SkillKeywordTitle = styled.div`
  margin-right: 16px;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #111827;
`

export const SkillKeywordChips = styled.div`
  display: flex;
  gap: 6px;
  align-items: flex-start;
  margin-bottom: 6px;
`

export const SkillKeywordChip = styled.span`
  padding: 2px 7px;
  margin-top: 2px;
  font-size: 11px;
  font-weight: 600;
  color: #0e7490;
  background: #e0f5fb;
  border: 1px solid #7dd3e8;
  border-radius: 3px;
`

export const SkillKeywordBox = styled.ul`
  padding: 10px 10px 10px 24px;
  list-style: none;
  background: #fafafa;
  border-left: 4px solid #7dd3e8;
  border-radius: 0 4px 4px 0;
`

export const SkillKeywordItem = styled.li`
  position: relative;
  padding: 2px 0 2px 14px;
  font-size: 13px;
  line-height: 1.7;
  color: #374151;

  &::before {
    position: absolute;
    top: 8px;
    left: 0;
    font-size: 7px;
    color: ${CYAN};
    content: '●';
  }
`
