export const TABS = ['홈', '프로필', '프로젝트'] as const
export type Tab = (typeof TABS)[number]

export interface ProfileLink {
  label: string
  value: string
}

export const PROFILE_LINKS: ProfileLink[] = [
  { label: '★바로가기 --------', value: '' },
  { label: 'GitHub', value: 'https://github.com/hyojung22' },
  { label: '이력서', value: '/resume' },
]

export const PROFILE_MENU = [
  {
    id: 'intro',
    label: '내 소개',
    subMenu: [{ id: 'personal', label: '자기소개' }],
  },
  {
    id: 'experience',
    label: '내 경험',
    subMenu: [
      { id: 'work', label: '업무경험' },
      { id: 'education', label: '교육이력' },
    ],
  },
  {
    id: 'spec',
    label: '내 스펙',
    subMenu: [
      { id: 'skills', label: '기술스택' },
      { id: 'certificate', label: '자격증' },
      { id: 'award', label: '수상이력' },
    ],
  },
] as const

export const PROJECT_MENU = [
  { id: 'all', label: '전체 프로젝트' },
  { id: 'team', label: '팀 프로젝트' },
  { id: 'solo', label: '개인 프로젝트' },
] as const

export type SubMenu = (typeof PROFILE_MENU)[number]['subMenu'][number]['id']
export type ProjectMenu = (typeof PROJECT_MENU)[number]['id']
