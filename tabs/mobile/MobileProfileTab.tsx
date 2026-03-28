'use client'

import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

import {
  Chip,
  ChipGroup,
  Entry,
  EntryBulletItem,
  EntryBullets,
  EntryContent,
  EntrySub,
  EntryTitle,
  SectionDivider,
  SectionTitle,
  SkillLabel,
  SkillLegend,
  SkillRow,
} from '@/components/resume/Resume.styled'
import {
  ABOUT_ME,
  AWARD,
  CERTIFICATES,
  COLORS,
  EDUCATION,
  SKILLS,
  WORK_EXPERIENCE,
} from '@/constants'
import { PixelStar } from '@/sections/profile/intro/IntroSection'

import { EntryDate } from './../../components/resume/ResumePrint.styled'

export default function MobileProfileTab() {
  return (
    <div className="flex flex-col gap-6 pb-6">
      {/* 1. 인트로 */}
      <IntroCard />

      <Card className="px-6 py-6">
        {/* 2. 업무경험 */}
        <section>
          <MobileSectionTitle>업무경험</MobileSectionTitle>
          {WORK_EXPERIENCE.map((exp) => (
            <MobileEntry key={exp.id}>
              <MobileEntryDate>{exp.period.replace('-', '~ ')}</MobileEntryDate>
              <EntryContent>
                <MobileEntryTitle>{exp.company}</MobileEntryTitle>
                <MobileEntrySub>{exp.role}</MobileEntrySub>
                <EntryBullets>
                  {exp.tasks?.map((task, i) => (
                    <MobileEntryBulletItem key={i}>
                      {task}
                    </MobileEntryBulletItem>
                  ))}
                </EntryBullets>
              </EntryContent>
            </MobileEntry>
          ))}
        </section>
        {/* 3. 교육이력 */}
        <section>
          <SectionDivider />
          <MobileSectionTitle>교육이력</MobileSectionTitle>
          {EDUCATION.filter((edu) => edu.tasks && edu.tasks.length > 0).map(
            (edu) => (
              <MobileEntry key={edu.id}>
                <MobileEntryDate>
                  {edu.period.replace('-', '~ ')}
                </MobileEntryDate>
                <EntryContent>
                  <MobileEntryTitle>{edu.school}</MobileEntryTitle>
                  <MobileEntrySub>{edu.course}</MobileEntrySub>
                  <EntryBullets>
                    {edu.tasks?.map((task, i) => (
                      <MobileEntryBulletItem key={i}>
                        {task}
                      </MobileEntryBulletItem>
                    ))}
                  </EntryBullets>
                </EntryContent>
              </MobileEntry>
            ),
          )}
        </section>

        {/* 4. 기술스택 */}
        <section>
          <SectionDivider />
          <MobileSectionTitle>기술스택</MobileSectionTitle>
          {SKILLS.map((category) => (
            <MobileSkillRow key={category.id}>
              <MobileSkillLabel>{category.label}</MobileSkillLabel>
              <MobileChipGroup>
                {category.skills.map((skill) => (
                  <MobileChip key={skill.name} $level={skill.level}>
                    {skill.name}
                  </MobileChip>
                ))}
              </MobileChipGroup>
            </MobileSkillRow>
          ))}
          <MobileSkillLegend>
            청록색: 주로 사용 &nbsp;·&nbsp; 회색: 사용 가능 &nbsp;·&nbsp;
            핑크색: 추가 예정
          </MobileSkillLegend>
        </section>
        {/* 5. 자격증 */}
        <section>
          <SectionDivider />
          <MobileSectionTitle>자격증</MobileSectionTitle>
          {CERTIFICATES.map((cert) => (
            <MobileEntry key={cert.id}>
              <MobileEntryDate>{cert.date.replace('.', '. ')}</MobileEntryDate>
              <MobileEntryContent>
                <MobileEntryTitle>{cert.name}</MobileEntryTitle>
                <MobileEntrySub>{cert.issuer}</MobileEntrySub>
              </MobileEntryContent>
            </MobileEntry>
          ))}
        </section>

        {/* 6. 수상이력 */}
        <section>
          <SectionDivider />
          <MobileSectionTitle>수상이력</MobileSectionTitle>
          {AWARD.map((award) => (
            <MobileEntry key={award.id}>
              <MobileEntryDate>{award.period}</MobileEntryDate>
              <EntryContent>
                <MobileEntryTitle>{award.title}</MobileEntryTitle>
                <MobileEntrySub>{award.issuer}</MobileEntrySub>
                {award.contents && (
                  <EntryBullets>
                    {award.contents.map((c, i) => (
                      <MobileEntryBulletItem key={i}>{c}</MobileEntryBulletItem>
                    ))}
                  </EntryBullets>
                )}
              </EntryContent>
            </MobileEntry>
          ))}
        </section>
      </Card>
    </div>
  )
}

function IntroCard() {
  const [isHovered, setIsHovered] = useState(false)
  const name = ['최', '효', '정']

  return (
    <Card className="mt-5 flex flex-col items-center gap-6 py-10">
      <div
        className="relative mb-3 flex items-center justify-center"
        style={{ width: '100px', height: '100px' }}
      >
        <Image src="/images/profile/profile2.png" alt="프로필이미지" fill />
        <PixelStar delay="0s" style={{ top: '-20px', left: '10px' }} />
        <PixelStar delay="0.3s" style={{ top: '-10px', right: '0px' }} />
        <PixelStar delay="0.6s" style={{ top: '20px', left: '-25px' }} />
        <PixelStar delay="0.9s" style={{ bottom: '0px', left: '-10px' }} />
        <PixelStar
          delay="1.2s"
          style={{ bottom: '-15px', right: '10px' }}
          size={10}
        />
        <PixelStar
          delay="1.5s"
          style={{ top: '50px', right: '-20px' }}
          size={8}
        />
      </div>
      <h3
        className="text-xl font-bold"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        안녕하세요, 개발자{' '}
        {name.map((char, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              color: COLORS.panelSubTitle,
              animation: isHovered
                ? `wave 0.6s ease-in-out 1 ${i * 0.15}s both`
                : 'none',
            }}
          >
            {char}
          </span>
        ))}{' '}
        입니다.
      </h3>
      <p className="text-center text-[16px] leading-[1.9] text-gray-600">
        {ABOUT_ME.introLines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </p>
    </Card>
  )
}

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`

const MobileEntry = styled(Entry)`
  flex-direction: column;
  gap: 4px;
  margin-left: -10px;
`

const MobileSectionTitle = styled(SectionTitle)`
  margin-left: -5px;
  font-size: 25px;
  font-weight: 700;

  &::before {
    margin-right: -5px;
    font-size: 25px;
  }
`

const MobileEntryDate = styled(EntryDate)`
  margin-top: -10px;
  font-size: 21px;
  color: ${COLORS.panelSubTitle};
`

const MobileEntryTitle = styled(EntryTitle)`
  margin-top: -5px;
  margin-bottom: 5px;
  font-size: 22px;
`

const MobileEntrySub = styled(EntrySub)`
  font-size: 15px;
`

const MobileEntryBulletItem = styled(EntryBulletItem)`
  margin-left: -12px;
  font-size: 16px;

  &::before {
    top: 8px;
    left: 7px;
    font-size: 7px;
  }
`

// 자격증에만 적용
const MobileEntryContent = styled(EntryContent)``

const MobileSkillRow = styled(SkillRow)`
  flex-direction: column;
`

const MobileSkillLabel = styled(SkillLabel)`
  min-width: 70px;
  font-size: 20px;
`
const MobileChipGroup = styled(ChipGroup)`
  gap: 5px;
  margin-top: -70px;
`

const MobileChip = styled(Chip)`
  font-size: 15px;
`

const MobileSkillLegend = styled(SkillLegend)`
  margin: -9px 0 16px;
  font-size: 12px;
`
