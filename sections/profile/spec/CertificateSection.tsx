'use client'

import styled from 'styled-components'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CERTIFICATES, COLORS } from '@/constants'

export default function CertificateSection() {
  return (
    <Wrapper>
      <TableWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-9 text-center text-[14px]">
                번호
              </TableHead>
              <TableHead className="w-30 text-[14px]">자격증명</TableHead>
              <TableHead className="w-30 text-center text-[14px]">
                발급기관
              </TableHead>
              <TableHead className="w-20 text-center text-[14px]">
                취득일
              </TableHead>
              <TableHead className="w-15 text-center text-[14px]">
                분류
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <NoticeRow>
              <TableCell className="text-center">📢</TableCell>
              <TableCell colSpan={4}>
                <NoticeText>성실하게 취득한 자격증들입니다. 🙂</NoticeText>
              </TableCell>
            </NoticeRow>
            {CERTIFICATES.map((cert) => (
              <TableRow key={cert.id} className="text-[14px]">
                <TableCell className="text-center text-[12px] text-[#343434]">
                  {cert.id}
                </TableCell>
                <TableCell style={{ color: COLORS.rightPanelTitle }}>
                  {cert.name}
                </TableCell>
                <TableCell
                  className="text-center text-gray-500"
                  style={{ color: COLORS.rightPanelTitle }}
                >
                  {cert.issuer}
                </TableCell>
                <TableCell className="text-center text-[12px] text-[#343434]">
                  {cert.date}
                </TableCell>
                <TableCell className="text-center">
                  <CategoryBadge $category={cert.category}>
                    {cert.category}
                  </CategoryBadge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>

      <Footer>
        <div className="flex gap-1">
          <ArrowBtn>▲</ArrowBtn>
          <ArrowBtn>▼</ArrowBtn>
        </div>
        <PageIndicator className="self-center">1</PageIndicator>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const TableWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-top: 1px solid ${COLORS.gray200};
  border-bottom: 1px solid ${COLORS.gray200};
`
const NoticeRow = styled(TableRow)`
  background-color: #fffbe6;
`
const NoticeText = styled.span`
  font-size: 14px;
  color: ${COLORS.rightPanelTitle};
`
type Category = '개발' | '디자인' | '기타'
const CategoryBadge = styled.span<{ $category: Category }>`
  padding: 3px 5px;
  font-size: 11px;
  font-weight: 500;
  cursor: default;
  border-radius: 3px;
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

  ${({ $category }) => {
    if ($category === '개발') {
      return `
        background-color: #e8f4fd;
        color: #2a8aaa;
        border: 1px solid #b8dff0;
      `
    }
    if ($category === '디자인') {
      return `
        background-color: #f3e8fd;
        color: #8a4aaa;
        border: 1px solid #d9b8f0;
      `
    }
    return `
      background-color: #f5f5f5;
      color: #999;
      border: 1px solid #ddd;
    `
  }}
`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 9px;
`
const ArrowBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 10px;
  color: #eaeaea;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
  cursor: default;
  background: #ffffff;
  border: 1px solid ${COLORS.gray500};
  border-radius: 3px;
`

const PageIndicator = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${COLORS.orange};
  letter-spacing: 6px;

  &::before {
    font-weight: 200;
    color: ${COLORS.gray200};
    content: '|';
  }

  &::after {
    font-weight: 200;
    color: ${COLORS.gray200};
    content: '|';
  }
`
