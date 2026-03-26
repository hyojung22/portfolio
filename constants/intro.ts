export interface AboutMe {
  name: string
  tagline: string
  introLines: string[]
  description: string[]
  contact: {
    email: string
    phone: string
    birth: string
    location: string
    github: string
  }
}

export const ABOUT_ME: AboutMe = {
  name: '최효정',
  tagline: '사용자를 위해 성장하는 개발자',
  introLines: [
    '사용자가 편리하게 쓸 수 있는',
    '서비스를 만드는 것이 목표입니다.',
    'React를 중심으로 화면을 설계하고 구현하며,',
    '꾸준히 성장하는 중입니다.',
  ],
  description: [
    '사용자가 편리하게 쓸 수 있는 서비스를 만드는 것이 목표인 개발자입니다.',
    'React와 Next.js를 중심으로 화면을 설계하고 구현하며, 디자인과 코드 사이에서 작은 인터랙션 하나도 놓치지 않으려 노력합니다.',
    '팀 프로젝트에서 PM 역할을 수행하며 일정 관리와 팀원 간 커뮤니케이션을 조율한 경험이 있으며, 백엔드(Spring Boot, JPA)와 모바일(Kotlin, Android) 개발도 경험했습니다.',
    '꾸준히 성장하는 것을 즐기며, 매일 조금씩 더 나은 코드를 작성하는 것을 목표로 합니다.',
  ],
  contact: {
    email: 'pushj22@naver.com',
    phone: '010-8441-7214',
    birth: '1995.07.21',
    location: '광주 북구 운암동',
    github: 'https://github.com/hyojung22',
  },
} as const

export const MY_WORDS = [
  '🎨 디자인과 코드 사이 어딘가에 삽니다.',
  '💻 사용자가 불편하지 않은 UI를 만들고 싶은 개발자',
  '✨ 작은 인터랙션 하나도 놓치지 않으려 노력합니다.',
  '🌱 매일 조금씩 성장하는 중입니다.',
] as const
