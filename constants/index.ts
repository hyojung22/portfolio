export const TABS = ['홈', '프로필', '프로젝트'] as const
export type Tab = (typeof TABS)[number]
export * from './awards'
export * from './certificates'
export * from './experience'
export * from './skills'

export const PROFILE_LINKS = [
  { label: '★바로가기 --------', value: '' },
  { label: 'GitHub', value: 'https://github.com/hyojung22' },
  { label: '이력서', value: '/resume' },
] as const

export const COLORS = {
  border: '#A8A8A8',
  badge: '#54D29A',
  homeTitle: '#3DA4E8',
  tabBorder: '#1D415F',
  tabInactive: '#268FAC',
  tabActive: '#FFFFFF',
  tabTextActive: '#000000',
  rightPanelTitle: '#486389',
  // panelSubTitle: '#2290B2',
  panelSubTitle: '#3FB1D7',
  panelBg: '#EBEBE9',
  selectBg: '#9DE0F5',
  orange: '#FF9551',
  gray100: '#D4D4D4',
  gray200: '#C8C8C8',
  gray500: '#666666',
  cardHeaderBg: '#F1F1F1',
  white: '#FFFFFF',
} as const

export const MY_WORDS = [
  '🎨 디자인과 코드 사이 어딘가에 삽니다.',
  '💻 사용자가 불편하지 않은 UI를 만들고 싶은 개발자',
  '✨ 작은 인터랙션 하나도 놓치지 않으려 노력합니다.',
  '🌱 매일 조금씩 성장하는 중입니다.',
] as const

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
