'use client'

import styled from 'styled-components'

import { COLORS, SkillLevel, SKILLS } from '@/constants'

export default function SkillSection() {
  return (
    <div>
      {SKILLS.map((category) => (
        <CategoryRow key={category.id}>
          <CategoryName>{category.label}</CategoryName>
          <ChipList>
            {category.skills.map((skill) => (
              <SkillChip key={skill.name} $level={skill.level}>
                {skill.name}
              </SkillChip>
            ))}
          </ChipList>
        </CategoryRow>
      ))}
      <Legend>
        <LegendItem>
          <LegendDot $color={COLORS.orange} />
          주로 사용
        </LegendItem>
        <LegendItem>
          <LegendDot $color={COLORS.gray200} />
          사용 가능
        </LegendItem>
      </Legend>
    </div>
  )
}

const CategoryRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px 0;
  border-bottom: 1px dashed ${COLORS.gray100};

  &:last-of-type {
    border-bottom: none;
  }
`
const CategoryName = styled.span`
  flex-shrink: 0;
  min-width: 68px;
  padding-top: 3px;
  font-size: 13px;
  font-weight: 600;
  color: black;
`
const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
const SkillChip = styled.span<{ $level: SkillLevel }>`
  padding: 4px 9px;
  font-size: 12px;
  cursor: default;
  border-radius: 4px;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0px);
  }

  ${({ $level }) => {
    if ($level === '주로 사용') {
      return `
        font-weight: 500;
        background-color: #fff3e0;
        color: #e07800;
        border: 1px solid #ffe0b2;
      `
    }
    if ($level === '사용 가능') {
      return `
        font-weight: 400;
        background-color: #f5f5f5;
        color: #999999;
        border: 1px solid #ebebeb;
      `
    }
    return `
      font-weight: 400;
      background-color: #ffffff;
      color: #cccccc;
      border: 1px dashed #dddddd;
    `
  }};
`
const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  margin-top: 16px;
`
const LegendItem = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 14px;
  color: ${COLORS.gray500};
`
const LegendDot = styled.span<{ $color: string }>`
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
`
