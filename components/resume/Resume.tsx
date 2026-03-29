'use client'

import { useEffect, useState } from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { FaSquareGithub } from 'react-icons/fa6'
import {
  FiCalendar,
  FiDownload,
  FiExternalLink,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi'
import { TbSmartHome } from 'react-icons/tb'

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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
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
  HeaderIcons,
  HeaderLeft,
  HeaderName,
  HeaderRight,
  HeaderTagline,
  HeaderTop,
  IconBtn,
  MobilePeriod,
  MobileProjTypeRow,
  ProjDesc,
  ProjHeader,
  ProjIconLink,
  ProjName,
  ProjPeriod,
  ProjRoleLabel,
  ProjRoleRow,
  ProjRoleVal,
  ProjTab,
  ProjTabs,
  ProjTitleLinks,
  ProjType,
  ResumeWrapper,
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
  SpecEntry,
} from './Resume.styled'

export default function Resume() {
  const projIds = PROJECTS.map((p) => p.id)
  const [activeTab, setActiveTab] = useState(projIds[0])
  const [isMobile, setIsMobile] = useState(false)

  const activeProject = PROJECTS.find((p) => p.id === activeTab)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <ResumeWrapper>
      {/* 헤더 */}
      <Header>
        <HeaderTop>
          <HeaderLeft>
            <HeaderName>{ABOUT_ME.name}</HeaderName>
            <HeaderTagline>{ABOUT_ME.tagline}</HeaderTagline>
          </HeaderLeft>
          <HeaderRight>
            <TooltipProvider>
              <HeaderIcons>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IconBtn href="/" title="포트폴리오">
                      <TbSmartHome
                        size={isMobile ? 40 : 70}
                        strokeWidth={1.5}
                        color="#3FB1D7"
                      />
                    </IconBtn>
                  </TooltipTrigger>
                  <TooltipContent
                    className="rounded-sm bg-[#3FB1D7]"
                    arrowClassName="fill-[#3FB1D7] bg-[#3FB1D7]"
                  >
                    홈으로 가기
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IconBtn
                      href={ABOUT_ME.contact.github}
                      target="_blank"
                      title="GitHub"
                    >
                      <FaSquareGithub size={isMobile ? 35 : 60} />
                    </IconBtn>
                  </TooltipTrigger>
                  <TooltipContent className="rounded-sm">GitHub</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IconBtn
                      as="button"
                      onClick={() => window.open('/resume/print', '_blank')}
                      title="PDF 다운로드"
                      style={{ display: isMobile ? 'none' : 'flex' }}
                    >
                      <FiDownload size={isMobile ? 33 : 55} />
                    </IconBtn>
                  </TooltipTrigger>
                  <TooltipContent className="rounded-sm">
                    PDF로 저장
                  </TooltipContent>
                </Tooltip>
              </HeaderIcons>
            </TooltipProvider>
          </HeaderRight>
        </HeaderTop>

        <ContactBar>
          <ContactItem>
            <FiMail size={20} strokeWidth={1.5} />
            {ABOUT_ME.contact.email}
          </ContactItem>
          <ContactItem>
            <FiPhone size={20} strokeWidth={1.5} />
            {ABOUT_ME.contact.phone}
          </ContactItem>
          <ContactItem>
            <FiCalendar size={20} strokeWidth={1.5} />
            {ABOUT_ME.contact.birth}
          </ContactItem>
          <ContactItem>
            <FiMapPin size={20} strokeWidth={1.5} />
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
          <SpecEntry key={cert.id}>
            <EntryDate>{cert.date.replace('.', '. ')}</EntryDate>
            <EntryContent>
              <EntryTitle>{cert.name}</EntryTitle>
              <EntrySub>{cert.issuer}</EntrySub>
            </EntryContent>
          </SpecEntry>
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
                {exp.tasks?.map((task, i) => (
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

      {/* Project */}
      <Section>
        <SectionDivider />
        <SectionTitle>Project</SectionTitle>
        <ProjTabs>
          {PROJECTS.map((p) => (
            <ProjTab
              key={p.id}
              $active={activeTab === p.id}
              onClick={() => setActiveTab(p.id)}
            >
              {p.id === 'portfolio'
                ? '포트폴리오'
                : p.id === 'iroomclass'
                  ? 'iRoomClass'
                  : p.id === 'globalgo'
                    ? 'GlobalGo'
                    : p.id === 'senimo'
                      ? 'Senimo'
                      : 'JJapJi'}
            </ProjTab>
          ))}
        </ProjTabs>

        {activeProject && (
          <div>
            <ProjHeader>
              <ProjName>{activeProject.title}</ProjName>
              <ProjTitleLinks>
                <ProjPeriod>
                  {activeProject.year}.
                  {String(activeProject.startMonth).padStart(2, '0')}
                  {' ~ '}
                  {activeProject.ongoing
                    ? ''
                    : `${activeProject.year}.${String(activeProject.endMonth).padStart(2, '0')}`}
                </ProjPeriod>
                {activeProject.deployUrl && (
                  <ProjIconLink
                    href={activeProject.deployUrl}
                    target="_blank"
                    title="배포 사이트"
                  >
                    <FiExternalLink size={27} />
                  </ProjIconLink>
                )}
                {activeProject.githubUrl && (
                  <ProjIconLink
                    href={activeProject.githubUrl}
                    target="_blank"
                    title="GitHub"
                  >
                    <FaGithubSquare size={27} />
                  </ProjIconLink>
                )}
              </ProjTitleLinks>
            </ProjHeader>

            {/* 모바일에서만 보이는 날짜 */}
            <MobilePeriod>
              {activeProject.year}.
              {String(activeProject.startMonth).padStart(2, '0')}
              {' ~ '}
              {activeProject.ongoing
                ? ''
                : `${activeProject.year}.${String(activeProject.endMonth).padStart(2, '0')}`}
            </MobilePeriod>

            {/* 팀/개인 + 아이콘 */}
            <MobileProjTypeRow>
              <ProjType>
                {activeProject.badge === 'team'
                  ? `팀 프로젝트 (${activeProject.type})`
                  : '개인 프로젝트'}
                {activeProject.award && ` · ${activeProject.award}`}
              </ProjType>
              <div className="mobile-icons">
                {activeProject.deployUrl && (
                  <ProjIconLink href={activeProject.deployUrl} target="_blank">
                    <FiExternalLink size={16} />
                  </ProjIconLink>
                )}
                {activeProject.githubUrl && (
                  <ProjIconLink href={activeProject.githubUrl} target="_blank">
                    <FaGithubSquare size={16} />
                  </ProjIconLink>
                )}
              </div>
            </MobileProjTypeRow>

            <ProjDesc>{activeProject.desc}</ProjDesc>

            <ProjRoleRow>
              <ProjRoleLabel>Role</ProjRoleLabel>
              <ProjRoleVal>{activeProject.role}</ProjRoleVal>
            </ProjRoleRow>

            <DetailBox>
              {activeProject.tasks.map((task, i) => (
                <DetailItem key={i}>{task}</DetailItem>
              ))}
            </DetailBox>

            {activeProject.skillKeywords &&
              activeProject.skillKeywords.length > 0 && (
                <SkillKeywordSection>
                  <SkillKeywordChips>
                    <SkillKeywordTitle>Skill</SkillKeywordTitle>
                    {activeProject.skillKeywords.map((kw) => (
                      <SkillKeywordChip key={kw.name}>
                        {kw.name}
                      </SkillKeywordChip>
                    ))}
                  </SkillKeywordChips>
                  <SkillKeywordBox>
                    {activeProject.skillKeywords.map((kw) => (
                      <SkillKeywordItem key={kw.name}>
                        {kw.name}: {kw.description}
                      </SkillKeywordItem>
                    ))}
                  </SkillKeywordBox>
                </SkillKeywordSection>
              )}
          </div>
        )}
      </Section>
    </ResumeWrapper>
  )
}
