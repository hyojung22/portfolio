import styled from 'styled-components'

import { COLORS } from '@/constants'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 220px;
  background: rgba(0, 0, 0, 0.8);
`

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 67%;
  min-width: 600px;
  max-height: 88%;
  overflow: hidden;
  overflow-y: auto;
  background: #fff;
  border: 2px solid ${COLORS.panelSubTitle};
  border-radius: 10px;
`

export const CloseBtn = styled.span`
  position: absolute;
  top: 12px;
  right: 16px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  cursor: pointer !important;
  background: none;
  border: none;

  * {
    cursor: pointer !important;
  }

  &:hover {
    color: #555;
  }
`

export const ModalHeader = styled.div`
  flex-shrink: 0;
  padding: 40px 20px 30px;
  margin: 0 40px;
  text-align: center;
  /* border-bottom: 2px dashed #e0e0e0; */
`

export const ModalDate = styled.div`
  margin-bottom: 15px;
  font-family: var(--font-pixel);
  font-size: 28px;
  font-weight: 900;
  color: ${COLORS.panelSubTitle};
  letter-spacing: 2px;
`

export const ModalMeta = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #585858;
`

export const Carousel = styled.div`
  position: relative;
  flex-shrink: 0;
  height: 290px;
  overflow: hidden;
`

export const CarouselSlide = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  display: ${({ $active }) => ($active ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 0 40px 0 20px;
  overflow-y: hidden;
  background: #eee;
  border: 1px solid #e0e0e0;

  /* img {
    width: 100%;
    height: 85%;
    object-fit: contain;
    object-position: '';
    border-radius: 10px;
  } */
`

export const CarouselBtn = styled.button<{ $pos: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  width: 26px;
  height: 26px;
  font-size: 11px;
  color: #555;
  cursor: pointer !important;
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 20%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  transform: translateY(-50%);
  ${({ $pos }) => ($pos === 'left' ? 'left: 30px' : 'right: 50px')}
`

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  display: flex;
  gap: 5px;
  transform: translateX(-50%);
`

export const Dot = styled.div<{ $active: boolean }>`
  width: 6px;
  height: 6px;
  cursor: pointer !important;
  background: ${({ $active }) =>
    $active ? COLORS.panelSubTitle : 'rgba(0,0,0,0.2)'};
  border-radius: 50%;
`

export const ModalBody = styled.div`
  flex: 1;
  margin: 0 0 0 20px;
  /* overflow-y: auto; */
`

export const ModalContent = styled.div`
  padding: 30px 22px;
`

export const ModalTitle = styled.div`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.4;
  color: #222;
`

export const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 10px;
`

export const LinkBtn = styled.a`
  padding: 3px 10px;
  font-size: 13px;
  color: ${COLORS.panelSubTitle};
  text-decoration: none;
  cursor: pointer !important;
  background: #f0f9ff;
  border: 1px solid #b8dff0;
  border-radius: 2px;

  &:hover {
    background: #e0f4f9;
  }
`

export const ReadmeBtn = styled.a`
  padding: 3px 10px;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  cursor: pointer !important;
  background: ${COLORS.panelSubTitle};
  border: 1px solid ${COLORS.panelSubTitle};
  border-radius: 2px;

  &:hover {
    opacity: 0.85;
  }
`

export const ModalDesc = styled.div`
  font-size: 16px;
  line-height: 1.7;
  color: #666;
`

export const Divider = styled.hr`
  margin: 25px 0;
  border: none;
  border-top: 1px dashed #eee;
`

export const SectionLabel = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${COLORS.panelSubTitle};
`

export const SkillTable = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2px;
`

export const SkillRow = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 4px 0;
  border-bottom: 1px dashed #f5f5f5;

  &:last-child {
    border-bottom: none;
  }
`

export const SkillCat = styled.div`
  min-width: 80px;
  padding-top: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #888;
`

export const SkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 4px 0;
`

export const Chip = styled.span<{ $active: boolean }>`
  padding: 3px 8px;
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 500 : 400)};
  color: ${({ $active }) => ($active ? '#2a8aaa' : '#ccc')};
  background: ${({ $active }) => ($active ? '#e0f4f9' : '#f5f5f5')};
  border: 1px solid ${({ $active }) => ($active ? '#b8dff0' : '#ebebeb')};
  border-radius: 2px;
`

export const Legend = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-top: 15px;
  margin-left: 2px;
  font-size: 13px;
  color: #aaa;
`

export const LegendItem = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const LegendDot = styled.span<{ $active: boolean }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: ${({ $active }) => ($active ? '#e0f4f9' : '#f5f5f5')};
  border: 1px solid ${({ $active }) => ($active ? '#b8dff0' : '#ebebeb')};
  border-radius: 1px;
`

export const InfoTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 2px;
`

export const InfoRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 8px 0 0;
  /* border-bottom: 1px dashed #f5f5f5;

  &:last-child {
    border-bottom: none;
  } */
`

export const InfoLabel = styled.span`
  min-width: 72px;
  font-size: 13px;
  font-weight: 700;
  color: #888;
`

export const InfoValue = styled.span`
  font-size: 16px;
  line-height: 1.5;
  color: #444;
`

export const DetailTitle = styled.div`
  margin-bottom: 14px;
  font-size: 18px;
  font-weight: 700;
  color: #222;
`

export const TaskItem = styled.div`
  display: flex;
  gap: 6px;
  padding-top: 6px;
  padding-left: 4px;
  font-size: 16px;
  line-height: 1.9;
  color: #555;
`
