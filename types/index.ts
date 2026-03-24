import { PROFILE_MENU, PROJECT_MENU } from '@/constants'

export type Tab = '홈' | '프로필' | '프로젝트'

export type SubMenu = (typeof PROFILE_MENU)[number]['subMenu'][number]['id']
export interface ProfileLink {
  label: string
  value: string
}

export type ProjectMenu = (typeof PROJECT_MENU)[number]['id']

