'use client'

import { FaGithubSquare } from 'react-icons/fa'
import {
  FiCalendar,
  FiExternalLink,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi'

import {
  ABOUT_ME,
  AWARD,
  CERTIFICATES,
  EDUCATION,
  PROJECTS,
  SKILLS,
  WORK_EXPERIENCE,
} from '@/constants'

import {
  AboutBody,
  AboutText,
  Chip,
  ChipGroup,
  ContactBar,
  ContactItem,
  DetailBox,
  DetailItem,
  Entry,
  EntryBulletItem,
  EntryBullets,
  EntryContent,
  EntryDate,
  EntrySub,
  EntryTitle,
  Header,
  HeaderLeft,
  HeaderName,
  HeaderTagline,
  HeaderTop,
  PrintWrapper,
  ProjDesc,
  ProjHeader,
  ProjIconLink,
  ProjItem,
  ProjName,
  ProjPeriod,
  ProjRoleLabel,
  ProjRoleRow,
  ProjRoleVal,
  ProjTitleLinks,
  ProjType,
  Section,
  SectionDivider,
  SectionTitle,
  SkillKeywordBox,
  SkillKeywordChip,
  SkillKeywordChips,
  SkillKeywordItem,
  SkillKeywordSection,
  SkillKeywordTitle,
  SkillLabel,
  SkillLegend,
  SkillRow,
} from './ResumePrint.styled'

export default function ResumePrint() {
  return (
    <PrintWrapper>
      {/* 헤더 */}
      <Header>
        <HeaderTop>
          <HeaderLeft>
            <HeaderName>{ABOUT_ME.name}</HeaderName>
            <HeaderTagline>{ABOUT_ME.tagline}</HeaderTagline>
          </HeaderLeft>
        </HeaderTop>

        <ContactBar>
          <ContactItem>
            <FiMail size={16} strokeWidth={1.5} />
            {ABOUT_ME.contact.email}
          </ContactItem>
          <ContactItem>
            <FiPhone size={16} strokeWidth={1.5} />
            {ABOUT_ME.contact.phone}
          </ContactItem>
          <ContactItem>
            <FiCalendar size={16} strokeWidth={1.5} />
            {ABOUT_ME.contact.birth}
          </ContactItem>
          <ContactItem>
            <FiMapPin size={16} strokeWidth={1.5} />
            {ABOUT_ME.contact.location}
          </ContactItem>
        </ContactBar>
      </Header>

      {/* About Me */}
      <AboutBody>
        <AboutText>
          {ABOUT_ME.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </AboutText>
      </AboutBody>

      {/* Spec */}
      <Section>
        <SectionDivider />
        <SectionTitle>Spec</SectionTitle>
        {CERTIFICATES.map((cert) => (
          <Entry key={cert.id}>
            <EntryDate>{cert.date.replace('.', '. ')}</EntryDate>
            <EntryContent>
              <EntryTitle>{cert.name}</EntryTitle>
              <EntrySub>{cert.issuer}</EntrySub>
            </EntryContent>
          </Entry>
        ))}
      </Section>

      {/* Award */}
      <Section>
        <SectionDivider />
        <SectionTitle>Award</SectionTitle>
        {AWARD.map((award) => (
          <Entry key={award.id}>
            <EntryDate>{award.period}</EntryDate>
            <EntryContent>
              <EntryTitle>{award.title}</EntryTitle>
              <EntrySub>{award.issuer}</EntrySub>
              {award.contents && (
                <EntryBullets>
                  {award.contents.map((c, i) => (
                    <EntryBulletItem key={i}>{c}</EntryBulletItem>
                  ))}
                </EntryBullets>
              )}
            </EntryContent>
          </Entry>
        ))}
      </Section>

      {/* Education */}
      <Section>
        <SectionDivider />
        <SectionTitle>Education</SectionTitle>
        {EDUCATION.map((edu) => (
          <Entry key={edu.id}>
            <EntryDate>{edu.period.replace('-', '\n~ ')}</EntryDate>
            <EntryContent>
              <EntryTitle>{edu.school}</EntryTitle>
              <EntrySub>{edu.course}</EntrySub>
              {edu.tasks && edu.tasks.length > 0 && (
                <EntryBullets>
                  {edu.tasks.map((task, i) => (
                    <EntryBulletItem key={i}>{task}</EntryBulletItem>
                  ))}
                </EntryBullets>
              )}
            </EntryContent>
          </Entry>
        ))}
      </Section>

      {/* Experience */}
      <Section>
        <SectionDivider />
        <SectionTitle>Experience</SectionTitle>
        {WORK_EXPERIENCE.map((exp) => (
          <Entry key={exp.id}>
            <EntryDate>{exp.period.replace('-', '\n~ ')}</EntryDate>
            <EntryContent>
              <EntryTitle>{exp.company}</EntryTitle>
              <EntrySub>{exp.role}</EntrySub>
              <EntryBullets>
                {exp.tasks.map((task, i) => (
                  <EntryBulletItem key={i}>{task}</EntryBulletItem>
                ))}
              </EntryBullets>
            </EntryContent>
          </Entry>
        ))}
      </Section>

      {/* Skill */}
      <Section>
        <SectionDivider />
        <SectionTitle>Skill</SectionTitle>
        {SKILLS.map((category) => (
          <SkillRow key={category.id}>
            <SkillLabel>{category.label}</SkillLabel>
            <ChipGroup>
              {category.skills.map((skill) => (
                <Chip key={skill.name} $level={skill.level}>
                  {skill.name}
                </Chip>
              ))}
            </ChipGroup>
          </SkillRow>
        ))}
        <SkillLegend>
          청록색: 주로 사용 &nbsp;·&nbsp; 회색: 사용 가능 &nbsp;·&nbsp; 핑크색:
          추가 예정
        </SkillLegend>
      </Section>

      {/* Project - 모든 프로젝트 나열 */}
      <Section>
        <SectionDivider />
        <SectionTitle>Project</SectionTitle>
        {PROJECTS.map((p) => (
          <ProjItem key={p.id}>
            <ProjHeader>
              <ProjName>{p.title}</ProjName>
              <ProjTitleLinks>
                <ProjPeriod>
                  {p.year}.{String(p.startMonth).padStart(2, '0')}
                  {' ~ '}
                  {p.ongoing
                    ? '진행중'
                    : `${p.year}.${String(p.endMonth).padStart(2, '0')}`}
                </ProjPeriod>
                {p.deployUrl && (
                  <ProjIconLink href={p.deployUrl} target="_blank">
                    <FiExternalLink size={16} />
                  </ProjIconLink>
                )}
                {p.githubUrl && (
                  <ProjIconLink href={p.githubUrl} target="_blank">
                    <FaGithubSquare size={18} />
                  </ProjIconLink>
                )}
              </ProjTitleLinks>
            </ProjHeader>

            <ProjType>
              {p.badge === 'team' ? `팀 프로젝트 (${p.type})` : '개인 프로젝트'}
              {p.award && ` · ${p.award}`}
            </ProjType>

            <ProjDesc>{p.desc}</ProjDesc>

            <ProjRoleRow>
              <ProjRoleLabel>Role</ProjRoleLabel>
              <ProjRoleVal>{p.role}</ProjRoleVal>
            </ProjRoleRow>

            <DetailBox>
              {p.tasks.map((task, i) => (
                <DetailItem key={i}>{task}</DetailItem>
              ))}
            </DetailBox>

            {p.skillKeywords && p.skillKeywords.length > 0 && (
              <SkillKeywordSection>
                <SkillKeywordChips>
                  <SkillKeywordTitle>Skill</SkillKeywordTitle>
                  {p.skillKeywords.map((kw) => (
                    <SkillKeywordChip key={kw.name}>{kw.name}</SkillKeywordChip>
                  ))}
                </SkillKeywordChips>
                <SkillKeywordBox>
                  {p.skillKeywords.map((kw) => (
                    <SkillKeywordItem key={kw.name}>
                      {kw.name}: {kw.description}
                    </SkillKeywordItem>
                  ))}
                </SkillKeywordBox>
              </SkillKeywordSection>
            )}
          </ProjItem>
        ))}
      </Section>
    </PrintWrapper>
  )
}
