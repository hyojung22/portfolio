'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import {
  IoPause,
  IoPlay,
  IoPlayBack,
  IoPlayForward,
  IoStop,
  IoVolumeHigh,
} from 'react-icons/io5'
import YouTube, { YouTubeEvent, YouTubePlayer } from 'react-youtube'

import { PLAYLIST } from '@/constants/music'
import { useMusicStore } from '@/store/useMusicStore'

import {
  ButtonGroup,
  Controls,
  CtrlBtn,
  HiddenPlayer,
  ListBtn,
  PlayList,
  PlayListItem,
  TitleBar,
  TitleIcon,
  TitleText,
  TitleTextWrapper,
  VolumeGroup,
  VolumeIcon,
  VolumeSlider,
  Wrapper,
} from './MusicPlayer.styled'

export default function MusicPlayer() {
  const playerRef = useRef<YouTubePlayer>(null)
  const {
    currentIndex,
    isPlaying,
    volume,
    isListOpen,
    setCurrentIndex,
    setIsPlaying,
    setVolume,
    toggleList,
    nextTrack,
    prevTrack,
  } = useMusicStore()

  const currentTrack = PLAYLIST[currentIndex]

  // 재생 상태 변경 시 플레이어 제어
  useEffect(() => {
    if (!playerRef.current) return
    if (isPlaying) {
      playerRef.current.playVideo()
    } else {
      playerRef.current.pauseVideo()
    }
  }, [isPlaying])

  // 볼륨 변경 시 플레이어 제어
  useEffect(() => {
    if (!playerRef.current) return
    playerRef.current.setVolume(volume)
  }, [volume])

  const onReady = (e: YouTubeEvent) => {
    playerRef.current = e.target
    e.target.setVolume(volume)
    if (isPlaying) {
      e.target.playVideo()
    }
  }

  const onStateChange = (e: YouTubeEvent) => {
    // 영상 끝나면 다음 곡
    if (e.data === 0) {
      nextTrack()
    }
  }

  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)
  const handleStop = () => {
    setIsPlaying(false)
    playerRef.current?.seekTo(0, true)
  }

  return (
    <Wrapper $listOpen={isListOpen}>
      {/* 유튜브 플레이어 숨김 */}
      <HiddenPlayer>
        <YouTube
          key={currentTrack.videoId}
          videoId={currentTrack.videoId}
          onReady={onReady}
          onStateChange={onStateChange}
          opts={{
            width: '1',
            height: '1',
            playerVars: {
              autoplay: isPlaying ? 1 : 0,
            },
          }}
        />
      </HiddenPlayer>

      {/* 현재 곡 제목 */}
      <TitleBar>
        <TitleIcon>
          <Image
            src="/images/music/cd.png"
            alt="CD 이미지"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
              border: '1px solid #999',
              borderRadius: '50px',
            }}
          />
        </TitleIcon>
        <TitleTextWrapper>
          <TitleText>
            {currentTrack.artist} - {currentTrack.title}
          </TitleText>
        </TitleTextWrapper>
      </TitleBar>

      {/* 컨트롤 */}
      <Controls>
        <ButtonGroup>
          {isPlaying ? (
            <CtrlBtn onClick={handlePause} title="일시정지">
              <IoPause size={13} color="ff6600" />
            </CtrlBtn>
          ) : (
            <CtrlBtn onClick={handlePlay} title="재생">
              <IoPlay size={13} color="ff6600" />
            </CtrlBtn>
          )}
          <CtrlBtn onClick={handleStop} title="정지">
            <IoStop size={13} />
          </CtrlBtn>
          <CtrlBtn onClick={prevTrack} title="이전">
            <IoPlayBack size={13} />
          </CtrlBtn>
          <CtrlBtn onClick={nextTrack} title="다음">
            <IoPlayForward size={13} className="ml-0.5" />
          </CtrlBtn>
        </ButtonGroup>

        <VolumeGroup>
          <VolumeIcon>
            <IoVolumeHigh size={13} />
          </VolumeIcon>
          <VolumeSlider
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, #ff6600 ${volume}%, #999 ${volume}%)`,
            }}
          />
        </VolumeGroup>

        <ListBtn onClick={toggleList}>LIST</ListBtn>
      </Controls>

      {/* 플레이리스트 */}
      {isListOpen && (
        <PlayList>
          {PLAYLIST.map((track, i) => (
            <PlayListItem
              key={track.id}
              $active={i === currentIndex}
              onClick={() => {
                setCurrentIndex(i)
                setIsPlaying(true)
              }}
            >
              {i === currentIndex}
              <div className="flex items-center justify-center rounded-xs border border-gray-500 p-[1px]">
                <IoPlay size={7} color="#ff6600" />
              </div>
              {track.artist} - {track.title}
            </PlayListItem>
          ))}
        </PlayList>
      )}
    </Wrapper>
  )
}
