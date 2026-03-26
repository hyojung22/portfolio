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
  tagline: '사용자 경험을 먼저 생각하는 개발자',
  introLines: [
    '사용자가 편리하게 쓸 수 있는',
    '서비스를 만드는 것이 목표입니다.',
    'React를 중심으로 화면을 설계하고 구현하며,',
    '꾸준히 성장하는 중입니다.',
  ],
  description: [
    '안녕하세요, 사용자가 편리하게 쓸 수 있는 서비스를 만들고 싶은 개발자 최효정입니다.',
    '프로젝트를 진행하며 기획부터 디자인, 프론트엔드, 백엔드까지 전 과정을 직접 경험해 왔고, 단순히 기능을 구현하는 것을 넘어 화면 설계 단계부터 사용자가 편리하게 느끼는 흐름을 고민하며 개발해왔습니다.',
    '현재는 React와 Next.js를 중심으로 개발하고 있으며, 매일 조금씩 성장하는 것을 즐기며 더 나은 코드를 작성하기 위해 노력하고 있습니다.',
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
  '💻 사용자 경험을 중심으로 생각하는 개발자입니다.',
  '✨ 작은 인터랙션 하나도 놓치지 않으려 노력합니다.',
  '🌱 매일 조금씩 성장하는 중입니다.',
] as const
