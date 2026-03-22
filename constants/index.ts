export const TABS = ['홈', '프로필', '프로젝트'] as const
export type Tab = (typeof TABS)[number]

export const PROFILE_LINKS = [
  { label: '★바로가기 --------', value: '' },
  { label: 'GitHub', value: 'https://github.com/hyojung22' },
  { label: '이력서', value: '/resume' },
] as const

export const COLORS = {
  border: '#A8A8A8',
  badge: '#54D29A',
  tabBorder: '#1D415F',
  tabInactive: '#268FAC',
  tabActive: '#FFFFFF',
  tabTextActive: '#000000',
  rightPanelTitle: '#486389',
  panelSubTitle: '#2290B2',
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

export const WORK_EXPERIENCE = [
  {
    id: 1,
    company: '팔칠구삼',
    period: '2024-08 - 2024.12 (5개월)',
    role: '개발부서 / 인턴(일경험드림)',
    skills: ['Java', 'Kotlin', 'Android Studio'],
    tasks: [
      '일경험드림 프로그램으로 기존 자사 서비스 Android 앱을 참고해  동일하게 구현해보는 과정을 진행',
      '요구사항에 맞춰 특정 페이지의 기능을 직접 구현',
      '화면설계서 작성부터 실제 화면 개발까지 앱 개발 전체 흐름을 경험',
    ],
  },
] as const

export const EDUCATION = [
  {
    id: 1,
    school: '스마트인재개발원',
    course: 'Full Stack SW 융합 실무 부트캠프',
    period: '2025.03 - 2025.09',
    tasks: [
      'React 기반 프론트엔드 웹 개발',
      'Node.js / Spring 기반 백엔드 연동 기초',
      '데이터베이스 및 REST API 기본 구조 학습',
    ],
  },
  {
    id: 2,
    school: '인공지능사관학교',
    course: 'AI 기반 웹 서비스 - 모바일 App 특화과정',
    period: '2023.06 - 2023.12',
    tasks: [
      'React 기반 프론트엔드 웹 개발 기초',
      'Kotlin 기반 Android 앱 개발 기초',
      '머신러닝/딥러닝 기초 교육',
    ],
  },
] as const
