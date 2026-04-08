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

export interface TroubleShooting {
  problem: string
  cause: string
  solution: string
  result: string
}

export interface Feature {
  title: string
  desc: string[]
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
  features?: Feature[]
  troubleShooting?: TroubleShooting[]
}

export const PROJECTS: Project[] = [
  // QuickJob
  {
    id: 'quickjob',
    year: 2026,
    startMonth: 4,
    endMonth: 4,
    ongoing: false,
    title: 'QuickJob: 구인구직 매칭 플랫폼',
    badge: 'solo',
    award: '',
    desc: 'React Native 모바일 앱 개발을 학습하기 위해 제작한 구인구직 매칭 플랫폼입니다. Firebase 인증 및 Firestore 연동, Zustand 전역 상태관리, 역할 기반 화면 분기 등 실무에서 사용하는 모바일 앱 개발 흐름을 직접 구현하며 익혔습니다.',
    tasks: [
      'Firebase Authentication으로 이메일 로그인 및 자동로그인을 구현했습니다.',
      'Firestore 실시간 데이터 연동과 복합 인덱스를 활용해 공고 목록 및 지원 현황을 구현했습니다.',
      'Zustand로 인증 상태와 공고 목록을 전역 관리하고 역할(구직자/업체)에 따라 화면을 분기했습니다.',
    ],
    skills: ['React Native', 'TypeScript', 'Zustand', 'Firebase', 'Expo'],
    skillCategories: {
      Mobile: ['React Native', 'TypeScript', 'Zustand', 'Firebase', 'Expo'],
    },
    mySkills: ['React Native', 'TypeScript', 'Zustand', 'Firebase', 'Expo'],
    type: '개인',
    role: '프론트엔드 · 모바일',
    platform: 'Mobile',
    images: [
      {
        type: 'group',
        images: [
          '/images/project/quickjob/quickjob1.jpg',
          '/images/project/quickjob/quickjob2.jpg',
          '/images/project/quickjob/quickjob3.jpg',
        ],
      },
      {
        type: 'group',
        images: [
          '/images/project/quickjob/quickjob4.jpg',
          '/images/project/quickjob/quickjob5.jpg',
          '/images/project/quickjob/quickjob6.jpg',
        ],
      },
      {
        type: 'group',
        images: [
          '/images/project/quickjob/quickjob7.jpg',
          '/images/project/quickjob/quickjob8.jpg',
          '/images/project/quickjob/quickjob9.jpg',
        ],
      },
    ],
    githubUrl: 'https://github.com/hyojung22/QuickJob',
    deployUrl: '',
    readmeUrl: '',
    skillKeywords: [
      {
        name: 'Zustand',
        description:
          '인증 상태와 공고 목록을 전역으로 관리하고 역할에 따라 화면을 분기했습니다.',
      },
      {
        name: 'Firebase Firestore',
        description:
          'Firestore 실시간 데이터 연동과 복합 인덱스로 공고 필터링 및 정렬을 구현했습니다.',
      },
      {
        name: 'useFocusEffect',
        description:
          '탭 포커스 시마다 최신 데이터를 불러와 실시간으로 화면을 갱신했습니다.',
      },
    ],
    features: [
      {
        title: '1. 회원가입 및 로그인',
        desc: [
          '구직자/업체 역할을 선택해 가입하며, 역할에 따라 진입하는 화면이 분기됩니다.',
        ],
      },
      {
        title: '2. 공고 등록 및 관리',
        desc: [
          '업체 회원은 구인 공고를 등록하고, 본인이 올린 공고 목록을 확인·관리할 수 있습니다.',
          'Firestore에 실시간으로 저장되며 등록 즉시 목록에 반영됩니다.',
        ],
      },
      {
        title: '3. 공고 목록 및 검색',
        desc: [
          '구직자 회원은 등록된 공고 전체를 목록으로 확인 가능합니다.',
          'Firestore 복합 인덱스를 활용한 필터링과 정렬로 원하는 공고를 찾을 수 있습니다.',
        ],
      },
      {
        title: '4. 지원 현황 확인',
        desc: [
          '구직자는 본인이 지원한 공고 현황을 한눈에 확인할 수 있습니다.',
          'useFocusEffect로 탭 포커스 시마다 최신 데이터를 불러와 화면이 실시간으로 갱신됩니다.',
        ],
      },
    ],
    troubleShooting: [
      {
        problem:
          '지원현황 화면에서 where + orderBy를 동시에 사용했을 때 FirebaseError: The query requires an index 오류가 발생했습니다.',
        cause:
          'Firestore는 where와 orderBy를 동시에 사용하는 복합 쿼리의 경우 반드시 복합 인덱스가 필요한데, 인덱스가 생성되어 있지 않았습니다.',
        solution:
          '에러 메시지 안에 포함된 Firebase 콘솔 링크를 클릭해 복합 인덱스를 자동 생성했습니다.',
        result:
          '인덱스 생성 후 쿼리가 정상 동작하여 공고 필터링 및 정렬 기능이 의도한 대로 구현되었습니다.',
      },
    ],
  },
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
      'Zustand와 커스텀 훅으로 스크롤과 메뉴 클릭 이벤트를 양방향으로 동기화했습니다.',
      'framer-motion custom variants로 탭 전환 방향에 따른 슬라이드 애니메이션을 구현했습니다.',
      'Tailwind CSS와 styled-components를 역할에 따라 분리해 레이아웃과 레트로 UI 디테일을 구분해서 작업했습니다.',
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
    images: [
      {
        type: 'group',
        images: [
          '/images/project/portfolio/portfolio1.jpg',
          '/images/project/portfolio/portfolio2.jpg',
          '/images/project/portfolio/portfolio3.jpg',
        ],
      },
      { type: 'single', src: '/images/project/portfolio/portfolio4.png' },
      { type: 'single', src: '/images/project/portfolio/portfolio5.png' },
      { type: 'single', src: '/images/project/portfolio/portfolio6.png' },
    ],
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
          'isScrollingRef로 스크롤과 메뉴 클릭 이벤트 충돌을 방지해 UX를 개선했습니다.',
      },
    ],
    features: [
      {
        title: '1. 미니홈피 탭 네비게이션',
        desc: [
          '홈, 프로필, 프로젝트 탭으로 콘텐츠를 구분하며, 탭 전환 방향에 따라 슬라이드 애니메이션이 적용됩니다.',
        ],
      },
      {
        title: '2. 홈ㅡ프로필 카드 & 뮤직 플레이어',
        desc: [
          '프로필 카드, 배경음악 재생 기능을 포함한 싸이월드 감성의 홈 화면입니다.',
        ],
      },
      {
        title: '3. 프로필 페이지',
        desc: [
          '자기소개, 경험(업무경험, 교육이력), 스펙(기술스택, 자격증, 수상이력)을 확인할 수 있습니다.',
        ],
      },
      {
        title: '4. 프로젝트 페이지',
        desc: [
          '프로젝트 목록과 기술 스택, 담당 역할, 구현 내용을 확인할 수 있습니다.',
          '해당 목록 클릭 시 모달 창이 띄워지고 상세 내용을 확인할 수 있습니다.',
        ],
      },
      {
        title: '5. 이력서 페이지',
        desc: [
          '화면용과 인쇄용 레이아웃을 분리해 제공하며, PDF 저장 시 인쇄 다이얼로그가 자동 실행됩니다.',
        ],
      },
    ],
    troubleShooting: [
      {
        problem:
          '스크롤과 메뉴 클릭 이벤트를 동시에 처리할 때 충돌이 발생하여 같은 메뉴에 있는 카테고리를 클릭할 때 해당 내용으로 스크롤이 이동하지 않는 문제가 있었습니다.',
        cause:
          'IntersectionObserver 기반으로 스크롤 위치를 감지하다 보니, 메뉴 클릭으로 스크롤이 이동하는 도중 Observer가 반응해 메뉴 상태를 덮어쓰는 충돌이 발생했습니다.',
        solution:
          'Observer를 제거하고 스크롤 이벤트 기반으로 변경했습니다. isScrollingRef로 이벤트 충돌을 제어하고, scrollTrigger로 연속 클릭 시에도 스크롤이 이동하도록 처리했습니다.',
        result:
          '스크롤과 메뉴 클릭 이벤트가 충돌 없이 양방향으로 동기화되었습니다.',
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
    features: [
      {
        title: '1. 시험지 생성 및 관리',
        desc: [
          '단원별 조건에 맞춰 시험지를 자동 생성하고 문항을 자유롭게 교체할 수 있습니다. ',
          '시험지 등록 시 생성되는 QR코드로 학생들의 원격 답안 제출이 가능합니다.',
        ],
      },
      {
        title: '2. 답안 제출',
        desc: [
          '학생 정보 입력 후 객관식 선택 및 주관식 답안 촬영으로 간편하게 응시할 수 있습니다.',
          '실시간 재촬영이 가능하며 클릭 한 번으로 최종 제출됩니다.',
        ],
      },
      {
        title: '3. AI 자동 채점',
        desc: [
          'Gemini 멀티모달 API로 별도 OCR 없이 주관식 답안을 실시간 인식하고, 이미지 분석과 채점을 동시에 수행해 빠른 자동 채점을 제공합니다.',
        ],
      },
      {
        title: '4. 성적 리포트 및 통계',
        desc: [
          '평균 점수·정답률을 차트로 시각화해 학년·단원별 성적 추이를 한눈에 파악할 수 있습니다.',
          '자동 집계로 학생별 정오답 결과와 피드백을 실시간 제공합니다.',
        ],
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
    deployUrl: '',
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
    features: [
      {
        title: '1. AI 기반 수출 유망 국가 추천',
        desc: [
          '사용자가 제품 키워드를 입력하면 AI가 관세청 및 무역 데이터를 분석하여 수출 유망 국가 TOP 20과 각 국가를 추천하는 이유, 예상 성공 확률을 제공합니다.',
        ],
      },
      {
        title: '2. 상품 등록 가이드 및 상품 자동 게시',
        desc: [
          '글로벌 주요 프랫폼인 아마존과 쇼피에 최적화된 단계별 상품 등록 가이드를 제공합니다.',
          '번역 기능으로 해외 플랫폼 등록 과정을 원활하게 돕고, 번역된 내용은 상품 페이지에 자동 게시됩니다.',
        ],
      },
      {
        title: '3. 등록된 상품 리스트 제공',
        desc: [
          '사용자가 작성한 상품 등록 내용은 한국어와 영어로 각각 게시됩니다.',
          '게시글의 구매하기 버튼을 통해 해당 플랫폼으로 바로 연결됩니다.',
        ],
      },
      {
        title: '4. 챗봇 기능',
        desc: [
          '챗봇으로 품목 검색부터 수출 유망 국가 추천, 판매 등록 가이드, 게시물 작성까지 한 번에 가능합니다.',
        ],
      },
    ],
    troubleShooting: [
      {
        problem:
          '아마존/쇼피 상품 등록 시, 사용자가 페이지나 단계를 이동하면 입력한 값이 초기화되어 다시 작성해야 하는 불편함이 발생했습니다.',
        cause:
          '폼 상태를 각 컴포넌트의 useState로만 관리해 전역에서 유지되지 않아 화면 전환 시 데이터가 사라졌습니다.',
        solution:
          'Context API로 전역 상태를 관리하고, updateField로 입력값을 갱신하며 플랫폼별 Provider로 독립 관리했습니다.',
        result:
          '페이지 이동에도 입력값이 유지되어 재입력 불편이 사라지고, 사용자 경험과 유지보수성이 향상되었습니다.',
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
    readmeUrl:
      'https://www.notion.so/Senimo-3338ff037f4e8003840be8f767032287?source=copy_link',
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
          'FragmentManager의 beginTransaction으로 Fragment를 직접 교체해 화면 전환을 구현했습니다.',
      },
    ],
    features: [
      {
        title: '1. 모임 검색 기능',
        desc: [
          '사용자가 직접 키워드를 입력하여 현재 시니모에 개설되어 있는 모임을 검색합니다.',
        ],
      },
      {
        title: '2. 모임 생성 / 관리',
        desc: [
          '카테고리별 모임 개설 권한에 따라 사용할 수 있는 관리 기능이 존재합니다.',
          '1) 모임장 : 운영진 설정 / 모임 해체',
          '2) 모임장 & 운영진: 일정 등록(장소, 일시, 회비 등), 공지사항 등록 / 수정 / 삭제, 사진첩 등록 / 삭제',
        ],
      },
      {
        title: '3. 게시판 기능',
        desc: [
          '모임 회원들이 작성한 게시물과 업로드한 사진들을  확인할 수 있습니다.',
          '1) 게시물 작성 / 수정 / 삭제 : 일반회원',
          '2) 댓글 : 작성 / 삭제',
          '3) 사진첩 : 운영진 이상 등록, 삭제',
        ],
      },
      {
        title: '4. 알림 및 채팅 기능',
        desc: [
          '사용자가 가입한 모임의 근접 일정을 알려주는 알림 기능을 제공합니다.',
          '모임 회원끼리 메시지를 전송하여 소통할 수 있는 채팅방입니다.',
        ],
      },
    ],
    troubleShooting: [
      {
        problem:
          'BottomNavigation 아이콘이 단일 색상으로 표시되고, 카테고리 클릭 시 뒤 화면에 보라색 highlight가 겹쳐 보이는 UI 문제가 발생했습니다.',
        cause:
          'itemIconTintList 기본 적용으로 아이콘 색상이 덮어씌워졌고, 카테고리 클릭 시 포커스 상태 처리 오류로 보라색 영역이 표시되었습니다.',
        solution:
          'itemIconTintList = null을 적용해 원래 색상대로 표시되도록 수정하고, 클릭 이벤트 및 뷰 상태를 점검해 highlight가 발생하지 않도록 처리했습니다.',
        result:
          '아이콘이 본래 색상으로 정상 표시되고, 카테고리 클릭 시 보라색 영역이 사라져 UI가 깔끔하게 유지되었습니다.',
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
    features: [
      {
        title: '1. 메인 페이지',
        desc: [
          '스크롤에 따라 표지 이미지·로고·아이콘이 변화하며, 아이콘 클릭 시 각 페이지로 이동합니다.',
        ],
      },
      {
        title: '2. 요리 페이지',
        desc: [
          '재료나 음식명으로 레시피를 검색하고, 이미지 클릭 시 재료 목록과 조리 과정을 확인할 수 있습니다.',
        ],
      },
      {
        title: '3. 도서 페이지',
        desc: [
          '카테고리별 도서를 추천받을 수 있으며, 이미지 클릭 시 판매 페이지로 이동합니다.',
        ],
      },
      {
        title: '4. 패션 페이지',
        desc: [
          '모자·상의·하의·신발 등 패션 아이템을 드래그로 탐색하고, 클릭 시 상세 팝업을 확인할 수 있습니다.',
        ],
      },
      {
        title: '5. 축제 페이지',
        desc: [
          '전국 지도 기반으로 지역별 축제 정보를 제공하며, 마커 클릭 시 행사 내용과 URL을 확인할 수 있습니다.',
        ],
      },
      {
        title: '6. 뉴스 페이지',
        desc: [
          '텍스트 마이닝으로 분류된 최신 뉴스와 실시간 핵심 키워드를 제공하며, 클릭 시 구글 검색으로 이동합니다.',
        ],
      },
    ],
  },
]
