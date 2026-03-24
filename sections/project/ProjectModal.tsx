'use client'

import Image from 'next/image'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'

import { Project } from '@/constants'

import {
  Carousel,
  CarouselBtn,
  CarouselDots,
  CarouselSlide,
  Chip,
  CloseBtn,
  DetailTitle,
  Divider,
  Dot,
  InfoLabel,
  InfoRow,
  InfoTable,
  InfoValue,
  Legend,
  LegendDot,
  LegendItem,
  LinkBtn,
  LinkRow,
  Modal,
  ModalBody,
  ModalContent,
  ModalDate,
  ModalDesc,
  ModalHeader,
  ModalMeta,
  ModalTitle,
  Overlay,
  ReadmeBtn,
  SectionLabel,
  SkillCat,
  SkillChips,
  SkillRow,
  SkillTable,
  TaskItem,
} from './ProjectModal.styled'

interface Props {
  project: Project
  onClose: () => void
}

const today = new Date()
const curY = today.getFullYear()
const curM = today.getMonth() + 1

function getEndMonth(p: Project) {
  if (!p.ongoing) return p.endMonth as number
  return p.year === curY ? curM : 12
}

function getDateLabel(p: Project) {
  const s = `${p.year} . ${String(p.startMonth).padStart(2, '0')}`
  const e = p.ongoing ? '진행중' : String(getEndMonth(p)).padStart(2, '0')
  return `${s} ~ ${e}`
}

const SKILL_CATEGORY_KEYS: (keyof Project['skillCategories'])[] = [
  'Frontend',
  'Backend',
  'Database',
  'AI',
  'Mobile',
  'Design',
]

export default function ProjectModal({ project: p, onClose }: Props) {
  const [curIdx, setCurIdx] = useState(0)

  const images = p.images ?? []
  const hasImages = images.length > 0

  const move = (dir: number) => {
    setCurIdx((i) => (i + dir + images.length) % images.length)
  }

  const skillRows = SKILL_CATEGORY_KEYS.map((key) => {
    const skills = p.skillCategories[key]
    if (!skills || skills.length === 0) return null
    return { label: key, skills }
  }).filter(Boolean)

  return createPortal(
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>
          <IoClose size={25} />
        </CloseBtn>
        {/* 1. 헤더 */}
        <ModalHeader>
          <ModalDate>{getDateLabel(p)}</ModalDate>
          <ModalMeta>
            <span>
              {p.badge === 'team' ? '💻 팀 프로젝트' : '💻 개인 프로젝트'}
            </span>

            {p.award && (
              <span className="flex items-center gap-1">
                <span
                  className="mr-2 ml-2 text-sm text-gray-300"
                  style={{ marginBottom: '0.5px' }}
                >
                  |
                </span>
                {p.award}
              </span>
            )}
          </ModalMeta>
        </ModalHeader>

        <ModalBody>
          {/* 2. 이미지 캐러셀 */}
          {hasImages && (
            <Carousel>
              {images.map((slide, i) => (
                <CarouselSlide key={i} $active={i === curIdx}>
                  {slide.type === 'single' ? (
                    <Image
                      src={slide.src}
                      alt={`${p.title} 스크린샷 ${i + 1}`}
                      fill={p.id !== 'jjapji'}
                      width={p.id === 'jjapji' ? 400 : undefined}
                      height={p.id === 'jjapji' ? 250 : undefined}
                      style={{ objectFit: 'contain', padding: '10px 0 10px' }}
                    />
                  ) : (
                    <div className="flex justify-center gap-2">
                      {slide.images.map((src, j) => (
                        <Image
                          key={j}
                          src={src}
                          alt={`${p.title} 스크린샷 ${i + 1}-${j + 1}`}
                          width={500}
                          height={300}
                          style={{
                            width:
                              p.id === 'jjapji'
                                ? slide.images.length === 2
                                  ? '52%'
                                  : '35%'
                                : '20%',
                            height: 'auto',
                          }}
                        />
                      ))}
                    </div>
                  )}
                </CarouselSlide>
              ))}
              {images.length > 1 && (
                <>
                  <CarouselBtn $pos="left" onClick={() => move(-1)}>
                    ◀
                  </CarouselBtn>
                  <CarouselBtn $pos="right" onClick={() => move(1)}>
                    ▶
                  </CarouselBtn>
                  <CarouselDots>
                    {images.map((_, i) => (
                      <Dot
                        key={i}
                        $active={i === curIdx}
                        onClick={() => setCurIdx(i)}
                      />
                    ))}
                  </CarouselDots>
                </>
              )}
            </Carousel>
          )}

          <ModalContent>
            {/* 3. 제목 + 링크 + 설명 */}
            <ModalTitle>{p.title}</ModalTitle>
            <LinkRow>
              {p.deployUrl && (
                <LinkBtn href={p.deployUrl} target="_blank">
                  사이트
                </LinkBtn>
              )}
              {p.githubUrl && (
                <LinkBtn href={p.githubUrl} target="_blank">
                  GitHub
                </LinkBtn>
              )}
              {p.readmeUrl && (
                <ReadmeBtn href={p.readmeUrl} target="_blank">
                  &gt;&gt; ReadMe
                </ReadmeBtn>
              )}
            </LinkRow>
            <ModalDesc>{p.desc}</ModalDesc>

            <Divider />

            {/* 4. 기술 스택 */}
            <SectionLabel>기술 스택</SectionLabel>
            <SkillTable>
              {skillRows.map((row) => (
                <SkillRow key={row!.label}>
                  <SkillCat>{row!.label}</SkillCat>
                  <SkillChips>
                    {row!.skills.map((skill) => (
                      <Chip key={skill} $active={p.mySkills.includes(skill)}>
                        {skill}
                      </Chip>
                    ))}
                  </SkillChips>
                </SkillRow>
              ))}
            </SkillTable>

            <Legend>
              <LegendItem>
                <LegendDot $active={true} />
                내가 담당
              </LegendItem>
              <LegendItem>
                <LegendDot $active={false} />팀 전체 스택
              </LegendItem>
            </Legend>

            <Divider />

            {/* 5. 참여 정보 */}
            <SectionLabel>참여 정보</SectionLabel>
            <InfoTable>
              <InfoRow>
                <InfoLabel>참여 인원</InfoLabel>
                <InfoValue>{p.type}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>담당 역할</InfoLabel>
                <InfoValue>{p.role}</InfoValue>
              </InfoRow>
            </InfoTable>

            <Divider />

            {/* 7. 상세 내용 */}
            <DetailTitle>상세 내용</DetailTitle>
            {p.tasks.map((task, i) => (
              <TaskItem key={i}>
                <span>{i + 1}.</span>
                <span>{task}</span>
              </TaskItem>
            ))}
          </ModalContent>
        </ModalBody>
      </Modal>
    </Overlay>,
    document.body,
  )
}
