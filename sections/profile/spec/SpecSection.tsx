import styled from 'styled-components'

import { COLORS } from '@/constants'
import { useScrollSpec } from '@/hooks/useScrollSpec'

import AwardSection from './AwardSection'
import CertificateSection from './CertificateSection'
import SkillSection from './SkillSection'

export default function SpecSection() {
  const { containerRef, certRef, awardRef } = useScrollSpec()

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full flex-col gap-15 overflow-y-auto pr-4 pl-4"
    >
      {/* 기술스택 */}
      <section className="mt-3">
        <Title className="mb-3">기술스택</Title>
        <DashedDivider />
        <SkillSection />
      </section>
      {/* 자격증 */}
      <section ref={certRef}>
        <Title className="mt-4 mb-3">자격증</Title>
        <CertificateSection />
      </section>
      {/* 수상이력 */}
      <section ref={awardRef} className="mb-3">
        <Title className="mb-3">수상이력</Title>
        <AwardSection />
      </section>
    </div>
  )
}

const Title = styled.h3`
  font-weight: 700;
  color: ${COLORS.panelSubTitle};
`
const DashedDivider = styled.hr`
  width: 100%;
  margin: 0;
  border: none;
  border-top: 1px dashed ${COLORS.gray100};
`
