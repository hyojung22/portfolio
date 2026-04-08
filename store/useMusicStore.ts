'use client'

import { create } from 'zustand'

import { PLAYLIST } from '@/constants'

interface MusicStore {
  currentIndex: number
  isPlaying: boolean
  volume: number
  isListOpen: boolean
  isDevMode: boolean
  setCurrentIndex: (index: number) => void
  setIsPlaying: (playing: boolean) => void
  setVolume: (volume: number) => void
  toggleList: () => void
  nextTrack: () => void
  prevTrack: () => void
  setIsDevMode: (value: boolean) => void
  setIsListOpen: (value: boolean) => void
}

export const useMusicStore = create<MusicStore>((set) => ({
  currentIndex: 0,
  isPlaying: false,
  volume: 50,
  isListOpen: false,
  isDevMode: false,
  setCurrentIndex: (index) => set({ currentIndex: index }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setVolume: (volume) => set({ volume }),
  toggleList: () => set((state) => ({ isListOpen: !state.isListOpen })),
  nextTrack: () =>
    set((state) => ({
      currentIndex: (state.currentIndex + 1) % PLAYLIST.length,
      isPlaying: true,
    })),
  prevTrack: () =>
    set((state) => ({
      currentIndex:
        (state.currentIndex - 1 + PLAYLIST.length) % PLAYLIST.length,
      isPlaying: true,
    })),
  setIsDevMode: (value: boolean) => set({ isDevMode: value }),
  setIsListOpen: (value) => set({ isListOpen: value }),
}))
