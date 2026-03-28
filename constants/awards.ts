export interface Award {
  id: number
  image: string
  title: string
  period: string
  issuer: string
  contents?: string[]
}

export const AWARD: Award[] = [
  {
    id: 1,
    image: '',
    title: '공공데이터 활용 경진대회',
    period: '2025.07',
    issuer: '관세청',
    contents: [
      '스마트인재개발원 교육 과정 중 팀 프로젝트로 관세청 공공데이터 활용 경진대회에 참여하여 장려상 수상',
      '소상공인 대상 AI 기반 수출 지원 웹 서비스(GlobalGo) 개발',
    ],
  },
]
