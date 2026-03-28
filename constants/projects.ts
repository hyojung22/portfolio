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

// 이력서에 들어갈 내용
export interface SkillKeyword {
  name: string
  description: string
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
  skillKeywords?: SkillKeyword[]
}

export const PROJECTS: Project[] = [
  // 포트폴리오
  {
    id: 'portfolio',
    year: 2026,
    startMonth: 3,
    endMonth: null,
    ongoing: true,
    title: '싸이월드 미니홈피 ver. 포트폴리오',
    badge: 'solo',
    award: '',
    desc: '싸이월드 미니홈피 디자인을 기반으로 한 개발자 포트폴리오 웹사이트입니다. 레트로 감성 UI를 구현하면서도 Next.js 기반의 현대적인 프론트엔드 구조를 적용했습니다.',
    tasks: [
      'Zustand와 커스텀 훅으로 스크롤이랑 메뉴 클릭을 양방향으로 동기화했습니다.',
      'framer-motion custom variants로 방향성 있는 탭 전환 애니메이션을 구현했습니다.',
      'Tailwind CSS와 styled-components를 함께 사용해 레이아웃과 레트로 UI 디테일을 분리해서 작업했습니다.',
      'constants와 types를 파일별로 분리해 확장하기 쉬운 구조로 설계했습니다.',
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
    role: '프론트엔드 · UI/UX 디자인',
    platform: 'Web',
    images: [],
    githubUrl: 'https://github.com/hyojung22/portfolio',
    deployUrl: 'https://minihompy-portfolio.vercel.app/',
    readmeUrl: '',
    skillKeywords: [
      {
        name: 'Zustand',
        description:
          '탭이나 서브메뉴처럼 여러 컴포넌트에서 같이 쓰는 상태를 전역으로 관리했습니다.',
      },
      {
        name: 'useRef',
        description:
          'isScrollingRef로 스크롤이랑 메뉴 클릭 이벤트가 서로 충돌하는 문제를 잡았습니다.',
      },
      {
        name: 'constants/types 구조 설계',
        description:
          '데이터와 타입을 파일별로 분리해 수정이나 확장이 필요할 때 영향 범위를 최소화했습니다.',
      },
    ],
  },
  // iRoomClass
  {
    id: 'iroomclass',
    year: 2025,
    startMonth: 8,
    endMonth: 9,
    ongoing: false,
    title:
      'iRoomClass: 멀티모달 AI 기반 학원 시험 자동 채점 및 시험 관리 플랫폼',
    badge: 'team',
    award: '',
    desc: '반복적인 행정 업무 대신 학생 교육에 집중할 수 있도록, 시험 채점부터 성적 관리까지 자동화한 웹 플랫폼입니다.',
    tasks: [
      'Spring Boot 기반으로 Controller-Service-Repository-DTO 흐름에 맞게 API를 설계하고 구현했습니다.',
      'JPA 쿼리 메서드와 Swagger 어노테이션으로 API 명세를 문서화했습니다.',
      'Cursor·ChatGPT 등 AI 도구를 활용해 백엔드 개발 속도를 높였습니다.',
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
    role: 'PM · 백엔드 · UI/UX 디자인 · 산출문서',
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
    skillKeywords: [
      {
        name: 'JPA Repository 쿼리 메서드',
        description:
          '메서드 이름으로 쿼리를 자동 생성해 반복적인 SQL 작성을 줄였습니다.',
      },
      {
        name: 'Swagger',
        description:
          'API 명세를 코드와 함께 관리해 팀원 간 연동 오류를 최소화했습니다.',
      },
      {
        name: 'DTO 패턴',
        description:
          'Entity를 직접 노출하지 않고 DTO로 변환해 API 응답 구조를 분리했습니다.',
      },
    ],
  },
  // GlobalGo
  {
    id: 'globalgo',
    year: 2025,
    startMonth: 5,
    endMonth: 7,
    ongoing: false,
    title: 'GlobalGo: 소상공인 AI 수출 어드바이저',
    badge: 'team',
    award: '🏆 공모전 장려상',
    desc: '소상공인이 해외 이커머스 시장에 쉽게 진입할 수 있도록 수출 절차를 안내하고 지원하는 웹 플랫폼입니다.',
    tasks: [
      'React 기반 SPA로 구조를 설계하고 홈페이지를 구현했습니다.',
      '디렉토리 구조를 체계적으로 잡고 Context API로 수출 가이드 폼 상태를 관리했습니다.',
      'axios와 커스텀 훅으로 백엔드 REST API 연동 로직을 구현했습니다.',
      'CSS Modules로 재사용 가능한 컴포넌트를 만들었습니다.',
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
    role: '프론트엔드 · UI/UX 디자인 · 산출문서',
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
    skillKeywords: [
      {
        name: 'Context API',
        description:
          '수출 가이드 폼의 상태를 전역으로 관리해 prop drilling을 방지했습니다.',
      },
      {
        name: '커스텀 훅',
        description:
          'API 호출 로직을 훅으로 분리해 컴포넌트에서 UI 로직에만 집중할 수 있게 했습니다.',
      },
    ],
  },
  // Senimo
  {
    id: 'senimo',
    year: 2023,
    startMonth: 10,
    endMonth: 12,
    ongoing: false,
    title: 'Senimo: 액티브 시니어를 위한 모임 커뮤니티 플랫폼',
    badge: 'team',
    award: '',
    desc: '액티브 시니어층의 사회 참여와 건강한 여가 생활을 지원하는 커뮤니티 모임 앱입니다.',
    tasks: [
      'ConstraintLayout·RecyclerView로 다양한 레이아웃과 리스트 화면을 구성했습니다.',
      'Fragment·Navigation Component로 화면 전환 구조를 설계하고 구현했습니다.',
      'Node.js 백엔드 REST API를 연동해 데이터 통신 로직을 구현했습니다.',
      '앱 리소스(아이콘·테마)를 관리하고 상태에 따라 UI가 바뀌도록 구현했습니다.',
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
    mySkills: ['Kotlin', 'Retrofit', 'Figma'],
    type: '팀 5명',
    role: '프론트엔드 · UI/UX 디자인',
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
    skillKeywords: [
      {
        name: 'Retrofit',
        description:
          'REST API 통신을 인터페이스로 정의해 서버와 데이터를 주고받았습니다.',
      },
      {
        name: 'RecyclerView',
        description:
          'ViewHolder 패턴으로 모임 목록을 효율적으로 렌더링하고 스크롤 성능을 개선했습니다.',
      },
      {
        name: 'Navigation Component',
        description:
          'NavGraph로 Fragment 전환을 관리해 화면 흐름을 일관되게 유지했습니다.',
      },
    ],
  },
  // JJapJi
  {
    id: 'jjapji',
    year: 2023,
    startMonth: 7,
    endMonth: 8,
    ongoing: false,
    title: 'JJapJi - 텍스트 마이닝 기반 웹 매거진 서비스',
    badge: 'team',
    award: '',
    desc: '20~30대의 관심사를 중심으로 뉴스 기사, 관광 정보, 패션 트렌드 등 다양한 정보를 제공하는 웹 매거진 서비스입니다.',
    tasks: [
      'useEffect·useState로 백엔드 API 데이터를 비동기로 불러오고 지도 상태를 관리했습니다.',
      'react-kakao-maps-sdk와 MarkerClusterer로 전국 축제 지도를 구현했습니다.',
      'CustomOverlayMap으로 마커 클릭 시 상세 정보와 외부 링크를 말풍선으로 표시했습니다.',
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
    role: '프론트엔드 · UI/UX 디자인',
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
    skillKeywords: [
      {
        name: 'MarkerClusterer',
        description:
          '마커가 많을 때 자동으로 클러스터링해 지도 가독성과 성능을 개선했습니다.',
      },
      {
        name: 'CustomOverlayMap',
        description:
          '마커 클릭 시 커스텀 말풍선으로 상세 정보와 외부 링크를 표시했습니다.',
      },
    ],
  },
]
