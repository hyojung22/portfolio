export interface WorkExperience {
  id: number
  image?: string
  company: string
  period: string
  role: string
  skills: string[]
  tasks?: string[]
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 1,
    image: '/images/profile/company.svg',
    company: '팔칠구삼',
    period: '2024.08 - 2024.12',
    role: '개발부서 / 인턴(일경험드림)',
    skills: ['Java', 'Kotlin', 'Android Studio'],
    tasks: [
      '일경험드림 프로그램으로 기존 자사 서비스 Android 앱을 참고해  동일하게 구현해보는 과정을 진행',
      '요구사항에 맞춰 특정 페이지의 기능을 직접 구현',
      '화면설계서 작성부터 실제 화면 개발까지 앱 개발 전체 흐름을 경험',
    ],
  },
]

export interface Education {
  id: number
  image?: string
  school: string
  course: string
  period: string
  tasks?: string[]
}

export const EDUCATION: Education[] = [
  {
    id: 1,
    image: '/images/profile/smart.svg',
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
    image: '/images/profile/ai.svg',
    school: '인공지능사관학교',
    course: 'AI 기반 웹 서비스 - 모바일 App 특화과정',
    period: '2023.06 - 2023.12',
    tasks: [
      'React 기반 프론트엔드 웹 개발 기초',
      'Kotlin 기반 Android 앱 개발 기초',
      '머신러닝/딥러닝 기초 교육',
    ],
  },
  {
    id: 3,
    school: '을지대학교(성남)',
    course: '피부관리학과',
    period: '2014.03 - 2018.02',
  },
]
