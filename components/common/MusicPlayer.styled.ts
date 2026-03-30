import styled from 'styled-components'

export const Wrapper = styled.div<{ $listOpen: boolean }>`
  width: 205px;
  padding: 0 5px ${({ $listOpen }) => ($listOpen ? '5px' : '0')};
  margin-left: 10px;
  font-size: 11px;
  user-select: none;
  background: #d0d0d0;
  border: 1px solid #999;
  border-radius: 6px;

  @media (max-width: 720px) {
    display: none;
  }
`

export const HiddenPlayer = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  pointer-events: none;
  opacity: 0;
`

export const TitleBar = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: start;
  padding: 5px 6px;
  margin-top: 5px;
  overflow: hidden;
  background: #fefefe;
  border-bottom: 1px solid #999;
  border-radius: 3px;
`

export const TitleIcon = styled.span`
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  align-items: center;
  width: 13px;
  height: 13px;
  color: #666;
`

export const TitleTextWrapper = styled.div<{ $isPlaying: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  -webkit-mask-image: ${({ $isPlaying }) =>
    $isPlaying
      ? 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
      : 'none'};
  mask-image: ${({ $isPlaying }) =>
    $isPlaying
      ? 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
      : 'none'};
`

export const TitleText = styled.span<{ $isPlaying: boolean }>`
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 11px;
  color: #333;
  white-space: nowrap;
  animation: ${({ $isPlaying }) =>
    $isPlaying ? 'marquee 8s linear infinite' : 'none'};

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

export const Controls = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 4px 6px;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`

export const CtrlBtn = styled.button`
  color: #333;
  cursor: pointer !important;
  background: #d0d0d0;

  * {
    cursor: pointer !important;
  }

  &:hover {
    background: #c0c0c0;
  }

  &:active {
    background: #b0b0b0;
  }
`

export const VolumeGroup = styled.div`
  display: flex;
  flex: 1;
  gap: 2px;
  align-items: center;
  justify-content: right;
`

export const VolumeIcon = styled.span``

export const VolumeSlider = styled.input`
  width: 50px;
  height: 3px;
  appearance: none;
  cursor: pointer !important;
  outline: none;
  background: #999;
  border-radius: 2px;

  &::-webkit-slider-thumb {
    width: 8px;
    height: 8px;
    appearance: none;
    cursor: pointer;
    background: #ff6600;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 8px;
    height: 8px;
    cursor: pointer;
    background: #ff6600;
    border: none;
    border-radius: 50%;
  }
`

export const ListBtn = styled.button`
  flex-shrink: 0;
  padding: 0 2px;
  font-size: 9px;
  font-weight: bold;
  color: #d0d0d0;
  cursor: pointer !important;
  background: #828282;
  border: 1px solid #999;
  border-radius: 2px;

  &:hover {
    background: #c0c0c0;
  }
`

export const PlayList = styled.ul`
  list-style: none;
  background: #f5f5f5;
  border-top: 1px solid #999;
  border-radius: 0 0 3px 3px;
`

export const PlayListItem = styled.li<{ $active: boolean }>`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 4px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  color: ${({ $active }) => ($active ? '#ff6600' : '#333')};
  white-space: nowrap;
  cursor: pointer !important;

  &:hover {
    background: #e0e0e0;
  }
`
