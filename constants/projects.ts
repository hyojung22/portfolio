export type ProjectSlide =
  | { type: 'single'; src: string }
  | { type: 'group'; images: string[] }

export interface SkillCategories {
  Frontend?: string[]
  Backend?: string[]
  Database?: string[]
  AI?: string[]
  Mobile?: string[]
  Design?: string[]
}

export interface Project {
  id: string
  year: number
  startMonth: number
  endMonth: number | null
  ongoing: boolean
  title: string
  badge: 'team' | 'solo'
  award: string
  desc: string
  tasks: string[]
  skills: string[]
  skillCategories: SkillCategories
  mySkills: string[]
  type: string
  role: string
  platform: 'Web' | 'App' | 'Mobile'
  images?: ProjectSlide[]
  githubUrl?: string
  deployUrl?: string
  readmeUrl?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    year: 2026,
    startMonth: 3,
    endMonth: null,
    ongoing: true,
    title: '싸이월드 미니홈피 스타일 개발자 포트폴리오',
    badge: 'solo',
    award: '',
    desc: '싸이월드 미니홈피 디자인을 기반으로 한 개발자 포트폴리오 웹사이트. 레트로 감성 UI를 재현하면서도 Next.js 기반의 현대적인 프론트엔드 구조를 적용.',
    tasks: [
      'SVG 기반 미니홈피 프레임 구현',
      'Zustand 전역 상태관리 및 탭/서브메뉴 인터랙션 구현',
      'framer-motion 탭 전환 애니메이션 적용',
      'shadcn/ui Table 컴포넌트 커스터마이징',
      '스크롤 이벤트 기반 섹션 감지 및 하이라이트 동기화 구현',
    ],
    skills: [
      'Next.js',
      'TypeScript',
      'styled-components',
      'Zustand',
      'framer-motion',
      'Tailwind CSS',
    ],
    skillCategories: {
      Frontend: [
        'Next.js',
        'TypeScript',
        'styled-components',
        'Zustand',
        'framer-motion',
        'Tailwind CSS',
      ],
    },
    mySkills: [
      'Next.js',
      'TypeScript',
      'styled-components',
      'Zustand',
      'framer-motion',
      'Tailwind CSS',
    ],
    type: '개인',
    role: '개인 프로젝트',
    platform: 'Web',
    images: [],
    githubUrl: 'https://github.com/hyojung22/portfolio',
    deployUrl: '',
    readmeUrl: '',
  },
  {
    id: 'iroomclass',
    year: 2025,
    startMonth: 8,
    endMonth: 9,
    ongoing: false,
    title:
      'iRoomClass - 멀티모달 AI 기반 학원 시험 자동 채점 및 시험 관리 플랫폼',
    badge: 'team',
    award: '',
    desc: '반복적인 행정 업무에서 벗어나 학생 교육에 집중할 수 있는 시험 채점부터 성적 관리까지 자동화하는 웹 플랫폼.',
    tasks: [
      'Spring Boot 기반 API 흐름(Controller-Service-Repository-DTO) 설계 및 구현',
      '학생 시험·문항·결과 조회 비즈니스 로직 및 예외처리 구현',
      'JPA Repository 쿼리 메서드 및 Swagger 어노테이션으로 API 명세 문서화',
      'Cursor·ChatGPT 등 AI 코드 어시스턴트를 활용한 백엔드 구현',
    ],
    skills: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JPA',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Jotai',
      'MySQL',
      'Redis',
      'Python',
      'FastAPI',
      'LangChain',
      'Gemini 2.5 Pro',
      'Figma',
    ],
    skillCategories: {
      Frontend: ['TypeScript', 'React', 'Tailwind CSS', 'Jotai'],
      Backend: ['Java', 'Spring Boot', 'Spring Security', 'JPA'],
      Database: ['MySQL', 'Redis'],
      AI: ['Python', 'FastAPI', 'LangChain', 'Gemini 2.5 Pro'],
      Design: ['Figma'],
    },
    mySkills: ['Java', 'Spring Boot', 'JPA', 'Figma'],
    type: '팀 5명',
    role: 'PM · 백엔드 담당 · UI/UX 디자인 · 산출문서',
    platform: 'Web',
    images: [
      { type: 'single', src: '/images/project/iroomclass/iroomclass2.png' },
      { type: 'single', src: '/images/project/iroomclass/iroomclass5.png' },
      {
        type: 'group',
        images: [
          '/images/project/iroomclass/iroomclass7.png',
          '/images/project/iroomclass/iroomclass8.png',
          '/images/project/iroomclass/iroomclass9.png',
          '/images/project/iroomclass/iroomclass11.png',
        ],
      },
    ],
    githubUrl: 'https://github.com/brain1401/iroom-backend-springboot',
    deployUrl: '',
    readmeUrl: '',
  },
  {
    id: 'globalgo',
    year: 2025,
    startMonth: 5,
    endMonth: 7,
    ongoing: false,
    title: 'GlobalGo - 소상공인 AI 수출 어드바이저',
    badge: 'team',
    award: '🏆 공모전 장려상',
    desc: '소상공인이 쉽고 간편하게 해외 이커머스 시장에 상품을 등록하고 수출할 수 있도록 돕는 웹 기반 수출 지원 플랫폼.',
    tasks: [
      'React 기반 SPA 설계 및 홈페이지 구현',
      '디렉토리 구조 체계적 설계 및 Context API를 활용한 수출 가이드 폼 전역 상태 관리',
      'axios와 커스텀 훅을 사용하여 백엔드 REST API 연동 및 데이터 통신 로직 구현',
      'CSS Modules와 JSX를 활용한 재사용 가능한 컴포넌트 구현',
    ],
    skills: [
      'React',
      'JavaScript',
      'CSS Modules',
      'Vite',
      'Java',
      'Spring Boot',
      'Spring Security',
      'JPA',
      'JWT',
      'MySQL',
      'Redis',
      'Python',
      'FastAPI',
      'Figma',
    ],
    skillCategories: {
      Frontend: ['React', 'JavaScript', 'CSS Modules', 'Vite'],
      Backend: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'JWT'],
      Database: ['MySQL', 'Redis'],
      AI: ['Python', 'FastAPI'],
      Design: ['Figma'],
    },
    mySkills: ['React', 'JavaScript', 'CSS Modules', 'Vite', 'Figma'],
    type: '팀 4명',
    role: '프론트엔드 담당 · UI/UX 디자인 · 산출문서',
    platform: 'Web',
    images: [
      { type: 'single', src: '/images/project/globalgo/globalgo1.png' },
      { type: 'single', src: '/images/project/globalgo/globalgo2.png' },
      { type: 'single', src: '/images/project/globalgo/globalgo3.png' },
      { type: 'single', src: '/images/project/globalgo/globalgo4.png' },
      { type: 'single', src: '/images/project/globalgo/globalgo5.png' },
    ],
    githubUrl: 'https://github.com/2025-SMHRD-SW-FullStack/Aha_Aha_Proj',
    deployUrl: 'http://globalgo.it.com:5173/',
    readmeUrl: '',
  },
  {
    id: 'senimo',
    year: 2023,
    startMonth: 10,
    endMonth: 12,
    ongoing: false,
    title: 'Senimo - 액티브 시니어를 위한 모임 커뮤니티 플랫폼',
    badge: 'team',
    award: '',
    desc: '액티브 시니어층의 사회 참여와 건강한 여가 생활을 지원하는 커뮤니티 모임 앱 플랫폼.',
    tasks: [
      'ConstraintLayout·RecyclerView를 활용한 다양한 레이아웃 및 리스트 화면 구성',
      'Fragment·Navigation Component를 이용한 화면 전환 구조 체계적 설계 및 구현',
      'Retrofit 라이브러리로 Node.js 백엔드 REST API 연동 및 데이터 통신 로직 구현',
      '앱 리소스(아이콘·테마) 관리 및 상태에 따른 동적 UI 변경 구현',
    ],
    skills: [
      'Kotlin',
      'Retrofit',
      'Node.js',
      'Express',
      'Socket.io',
      'JWT',
      'MySQL',
      'Figma',
    ],
    skillCategories: {
      Mobile: ['Kotlin', 'Retrofit'],
      Backend: ['Node.js', 'Express', 'Socket.io', 'JWT'],
      Database: ['MySQL'],
      Design: ['Figma'],
    },
    mySkills: ['Kotlin', 'Figma'],
    type: '팀 5명',
    role: '프론트엔드 담당 · UI/UX 디자인',
    platform: 'App',
    images: [
      {
        type: 'group',
        images: [
          '/images/project/senimo/senimo1.png',
          '/images/project/senimo/senimo2.png',
          '/images/project/senimo/senimo3.png',
          '/images/project/senimo/senimo4.png',
        ],
      },
      {
        type: 'group',
        images: [
          '/images/project/senimo/senimo5.png',
          '/images/project/senimo/senimo6.png',
          '/images/project/senimo/senimo7.png',
          '/images/project/senimo/senimo8.png',
        ],
      },
    ],
    githubUrl: 'https://github.com/2023-AISCHOOL-APP/Senimo',
    deployUrl: '',
    readmeUrl: '',
  },
  {
    id: 'jjapji',
    year: 2023,
    startMonth: 7,
    endMonth: 8,
    ongoing: false,
    title: 'JJapJi - 텍스트 마이닝 기반 웹 매거진 서비스',
    badge: 'team',
    award: '',
    desc: '20~30대의 관심사를 중심으로 뉴스 기사, 관광 정보, 패션 트렌드 등 다양한 정보를 제공하는 웹 매거진 서비스.',
    tasks: [
      'useEffect·useState 훅을 활용한 백엔드 API 비동기 데이터 처리 및 맵 상태 관리',
      'react-kakao-maps-sdk·MarkerClusterer를 활용한 전국 축제 지도 구현',
      'CustomOverlayMap으로 마커 클릭 시 상세 정보 표시 및 외부 링크 연결 구현',
    ],
    skills: [
      'React',
      'KakaoMap Maps API',
      'Flask',
      'MariaDB',
      'Oracle',
      'Python',
      'Jupyter',
      'Illustrator',
    ],
    skillCategories: {
      Frontend: ['React', 'KakaoMap Maps API'],
      Backend: ['Flask'],
      Database: ['MariaDB', 'Oracle'],
      AI: ['Python', 'Jupyter'],
      Design: ['Illustrator'],
    },
    mySkills: ['React', 'KakaoMap Maps API', 'Illustrator'],
    type: '팀 5명',
    role: '프론트엔드 담당 · UI/UX 디자인',
    platform: 'Web',
    images: [
      {
        type: 'group',
        images: [
          '/images/project/jjapji/jjapji1.png',
          '/images/project/jjapji/jjapji2.jpg',
        ],
      },
      {
        type: 'group',
        images: [
          '/images/project/jjapji/jjapji3.png',
          '/images/project/jjapji/jjapji4.png',
          '/images/project/jjapji/jjapji5.png',
        ],
      },
      { type: 'single', src: '/images/project/jjapji/jjapji6.png' },
      {
        type: 'group',
        images: [
          '/images/project/jjapji/jjapji7.png',
          '/images/project/jjapji/jjapji8.png',
        ],
      },
      {
        type: 'group',
        images: [
          '/images/project/jjapji/jjapji9.png',
          '/images/project/jjapji/jjapji10.png',
        ],
      },
      {
        type: 'group',
        images: [
          '/images/project/jjapji/jjapji11.png',
          '/images/project/jjapji/jjapji12.png',
        ],
      },
    ],
    githubUrl: '',
    deployUrl: '',
    readmeUrl: '',
  },
]
