import styled from 'styled-components'

const CYAN = '#3FB1D7'
const PINK = '#ff9ebc'

// 전체 레이아웃
export const ResumeWrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  padding: 80px 40px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.6;
  color: #111827;
  background: #fff;

  @media print {
    padding: 80px 40px;
  }

  @media (max-width: 767px) {
    padding: 30px 20px;
  }
`

// 헤더
export const Header = styled.header`
  margin-bottom: 32px;
`

export const HeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 14px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`

export const HeaderLeft = styled.div``

export const HeaderName = styled.h1`
  font-size: 70px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -1px;

  @media (max-width: 767px) {
    font-size: 36px;
  }
`

export const HeaderTagline = styled.p`
  margin-top: 8px;
  font-size: 18px;
  color: #6b7280;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`

export const HeaderRight = styled.div`
  text-align: right;

  @media (max-width: 767px) {
    text-align: left;
  }
`

export const HeaderIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`

export const IconBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  * {
    cursor: pointer !important;
  }

  &:hover {
    opacity: 0.6;
  }
`

// 연락처 바
export const ContactBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  padding: 10px 18px;
  background: #f0fbff;
  border-left: 4px solid ${CYAN};
  border-radius: 0 8px 8px 0;

  @media (max-width: 767px) {
    gap: 10px;
    padding: 8px 12px;
  }
`

export const ContactItem = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 18px;
  color: #6b7280;

  svg {
    flex-shrink: 0;
    color: ${CYAN};
  }

  @media (max-width: 767px) {
    width: 100%;
    font-size: 12px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`

// About Me
export const AboutBody = styled.div`
  margin: 24px 0 40px;
`

export const AboutText = styled.div`
  font-size: 22px;
  line-height: 1.8;
  color: #374151;

  p + p {
    margin-top: 14px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`

// 섹션 공통
export const Section = styled.section`
  margin-bottom: 20px;
`

export const SectionTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 6px;
  font-size: 33px;
  font-weight: 600;
  color: #111827;

  &::before {
    font-size: 16px;
    color: ${PINK};
    content: '✦';
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
`

export const SectionDivider = styled.hr`
  margin-bottom: 20px;
  border: none;
  border-top: 1.5px solid #e5e7eb;
`

// Entry
export const Entry = styled.div`
  display: flex;
  gap: 80px;
  padding: 0 20px 20px;
  margin: 20px 0;
  border-bottom: 2px dashed #e5e7eb;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    padding: 0 0 16px 20px;
  }
`

export const SpecEntry = styled.div`
  display: flex;
  gap: 80px;
  padding: 0 20px 20px;
  margin: 20px 0;
  border-bottom: 2px dashed #e5e7eb;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

  @media (max-width: 767px) {
    gap: 16px;
    padding: 0 0 16px 20px;
  }
`

export const EntryDate = styled.div`
  min-width: 110px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.6;
  color: #9ca3af;
  white-space: pre-wrap;

  @media (max-width: 767px) {
    min-width: unset;
    font-size: 14px;
    white-space: nowrap;
  }
`

export const EntryContent = styled.div`
  flex: 1;
`

export const EntryTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #111827;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const EntrySub = styled.div`
  margin-bottom: 6px;
  font-size: 18px;
  color: #6b7280;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const EntryBullets = styled.ul`
  padding-left: 20px;
  list-style: none;
`

export const EntryBulletItem = styled.li`
  position: relative;
  padding: 2px 0 2px 20px;
  font-size: 20px;
  line-height: 1.5;
  color: #6b7280;

  &::before {
    position: absolute;
    top: 10px;
    left: 0;
    font-size: 10px;
    color: ${CYAN};
    content: '●';
  }

  @media (max-width: 767px) {
    font-size: 13px;

    &::before {
      top: 6px;
      font-size: 8px;
    }
  }
`

// Skill
export const SkillRow = styled.div`
  display: flex;
  gap: 80px;
  align-items: flex-start;
  padding: 0 20px 20px;
  margin: 20px 0;
  border-bottom: 2px dashed #e5e7eb;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    padding: 0 0 16px 20px;
  }
`

export const SkillLabel = styled.div`
  min-width: 110px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.6;
  color: #9ca3af;
  white-space: pre-wrap;

  @media (max-width: 767px) {
    min-width: unset;
    font-size: 14px;
  }
`

export const ChipGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 767px) {
    margin-left: -2px;
  }
`

export const Chip = styled.span<{
  $level: '주로 사용' | '사용 가능' | '추가 예정'
}>`
  padding: 3px 10px;
  margin: 3px;
  font-size: 18px;
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

  @media (max-width: 767px) {
    font-size: 12px;
  }
`

export const SkillLegend = styled.p`
  margin-top: -10px;
  font-size: 16px;
  color: #9ca3af;

  @media (max-width: 767px) {
    font-size: 11px;
  }
`

// Project 탭
export const ProjTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media print {
    display: none;
  }

  @media (max-width: 767px) {
    gap: 6px;
  }
`

export const ProjTab = styled.button<{ $active: boolean }>`
  padding: 5px 16px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  color: ${({ $active }) => ($active ? '#fff' : '#6b7280')};
  cursor: pointer !important;
  background: ${({ $active }) => ($active ? CYAN : '#fff')};
  border: 1.5px solid ${({ $active }) => ($active ? CYAN : '#e5e7eb')};
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    color: ${({ $active }) => ($active ? '#fff' : CYAN)};
    border-color: ${CYAN};
  }

  @media (max-width: 767px) {
    padding: 4px 10px;
    font-size: 13px;
  }
`

// Project 카드
export const ProjHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const ProjName = styled.div`
  flex: 1;
  margin-right: 12px;
  font-size: 24px;
  font-weight: 600;
  color: #111827;

  @media (max-width: 767px) {
    margin-right: 0;
    font-size: 16px;
  }
`

export const ProjTitleLinks = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 8px;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`

export const ProjPeriod = styled.div`
  margin-right: 20px;
  font-size: 24px;
  font-weight: 500;
  color: #9ca3af;
  white-space: nowrap;

  @media (max-width: 767px) {
    display: none;
  }
`

export const ProjIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  text-decoration: none;
  transition: all 0.2s;

  * {
    cursor: pointer !important;
  }

  &:hover {
    opacity: 0.5;
  }
`

export const ProjType = styled.div`
  margin-bottom: 0;
  font-size: 18px;
  color: #6b7280;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const ProjDesc = styled.div`
  max-width: 70%;
  margin-bottom: 12px;
  font-size: 20px;
  line-height: 1.75;

  @media (max-width: 767px) {
    max-width: 100%;
    font-size: 13px;
  }
`

export const ProjRoleRow = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    gap: 12px;
    margin-top: 16px;
  }
`

export const ProjRoleLabel = styled.span`
  min-width: 36px;
  font-size: 22px;
  font-weight: 600;
  color: ${CYAN};

  @media (max-width: 767px) {
    font-size: 14px;
  }
`

export const ProjRoleVal = styled.span`
  font-size: 18px;
  color: #111827;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const DetailBox = styled.ul`
  padding: 15px 15px 15px 30px;
  margin-bottom: 16px;
  list-style: none;
  background: #fafafa;
  border-left: 5px solid #e5e7eb;
  border-radius: 0 4px 4px 0;
`

export const DetailItem = styled.li`
  position: relative;
  padding: 3px 0 3px 20px;
  font-size: 20px;
  line-height: 1.7;
  color: #374151;

  &::before {
    position: absolute;
    top: 12px;
    left: 0;
    font-size: 10px;
    color: #9ca3af;
    content: '●';
  }

  @media (max-width: 767px) {
    font-size: 13px;

    &::before {
      top: 8.5px;
      font-size: 8px;
    }
  }
`

// Skill Keywords
export const SkillKeywordSection = styled.div`
  margin-top: 40px;
  margin-bottom: 0;
`

export const SkillKeywordTitle = styled.div`
  margin-right: 30px;
  font-size: 22px;
  font-weight: 600;
  color: #111827;

  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    font-size: 14px;
  }
`

export const SkillKeywordChips = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 15px;

  @media (max-width: 767px) {
    position: relative;
    flex-wrap: wrap;
    padding-left: 50px;
  }
`

export const SkillKeywordChip = styled.span`
  padding: 2px 9px;
  margin-top: 2.5px;
  font-size: 16px;
  font-weight: 600;
  color: #0e7490;
  white-space: nowrap;
  background: #e0f5fb;
  border: 1px solid #7dd3e8;
  border-radius: 3px;

  @media (max-width: 767px) {
    padding: 2px 6px;
    font-size: 11px;
  }
`

export const SkillKeywordBox = styled.ul`
  padding: 15px 15px 15px 30px;
  list-style: none;
  background: #fafafa;
  border-left: 5px solid #7dd3e8;
  border-radius: 0 4px 4px 0;
`

export const SkillKeywordItem = styled.li`
  position: relative;
  padding: 3px 0 3px 20px;
  font-size: 20px;
  line-height: 1.7;
  color: #374151;

  &::before {
    position: absolute;
    top: 12px;
    left: 0;
    font-size: 10px;
    color: ${CYAN};
    content: '●';
  }

  @media (max-width: 767px) {
    font-size: 13px;

    &::before {
      top: 8.5px;
      font-size: 8px;
    }
  }
`

export const MobilePeriod = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
    margin-bottom: 4px;
    font-size: 13px;
    font-weight: 500;
    color: #9ca3af;
  }
`

export const MobileProjTypeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  .mobile-icons {
    display: none;

    @media (max-width: 767px) {
      display: flex;
      gap: 8px;
    }
  }
`
