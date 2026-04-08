'use client'

import Image from 'next/image'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'

import { Project } from '@/constants'
import { getDateLabel } from '@/hooks/useProjectFilter'

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
  FeatureDesc,
  FeatureItem,
  FeatureTitle,
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
  ModalWrapper,
  Overlay,
  ReadmeBtn,
  SectionLabel,
  SkillCat,
  SkillChips,
  SkillRow,
  SkillTable,
  TaskItem,
  TaskList,
  TroubleItem,
  TroubleLabel,
  TroubleText,
} from './ProjectModal.styled'

interface Props {
  project: Project
  onClose: () => void
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
    <>
      <Overlay onClick={onClose} />
      <ModalWrapper>
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
                <span className="flex items-center gap-1">{p.award}</span>
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
                                  : slide.images.length === 3
                                    ? '19%'
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

              {/* 7. 구현 내용 */}
              <DetailTitle>구현 내용</DetailTitle>
              <TaskList>
                {p.tasks.map((task, i) => (
                  <TaskItem key={i}>{task}</TaskItem>
                ))}
              </TaskList>

              {/* 8. 기능 소개 */}
              {p.features && p.features.length > 0 && (
                <>
                  <Divider />
                  <SectionLabel>기능 소개</SectionLabel>
                  {p.features.map((feature, i) => (
                    <FeatureItem key={i}>
                      <FeatureTitle>{feature.title}</FeatureTitle>
                      <FeatureDesc>
                        {feature.desc.map((d, j) => (
                          <FeatureDesc key={j}>• {d}</FeatureDesc>
                        ))}
                      </FeatureDesc>
                    </FeatureItem>
                  ))}
                </>
              )}
              {/* 9. Trouble Shooting */}
              {p.troubleShooting && p.troubleShooting.length > 0 && (
                <>
                  <Divider />
                  <SectionLabel>Trouble Shooting</SectionLabel>
                  {p.troubleShooting.map((ts, i) => (
                    <div key={i} className="mt-5">
                      <TroubleItem $type="problem">
                        <TroubleLabel>문제 상황</TroubleLabel>
                        <TroubleText>{ts.problem}</TroubleText>
                      </TroubleItem>
                      <TroubleItem $type="cause">
                        <TroubleLabel>원인 분석</TroubleLabel>
                        <TroubleText>{ts.cause}</TroubleText>
                      </TroubleItem>
                      <TroubleItem $type="solution">
                        <TroubleLabel>해결 방안</TroubleLabel>
                        <TroubleText>{ts.solution}</TroubleText>
                      </TroubleItem>
                      <TroubleItem $type="result">
                        <TroubleLabel>결과</TroubleLabel>
                        <TroubleText>{ts.result}</TroubleText>
                      </TroubleItem>
                    </div>
                  ))}
                </>
              )}
            </ModalContent>
          </ModalBody>
        </Modal>
      </ModalWrapper>
    </>,
    document.body,
  )
}
