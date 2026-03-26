export type CertCategory = '개발' | '디자인' | '기타'

export interface Certificates {
  id: number
  name: string
  issuer: string
  date: string
  category: CertCategory
}

export const CERTIFICATES: Certificates[] = [
  {
    id: 1,
    name: '정보처리기사',
    issuer: '한국산업인력공단',
    date: '2025.12',
    category: '개발',
  },
  {
    id: 2,
    name: '웹디자인개발기능사',
    issuer: '한국산업인력공단',
    date: '2025.09',
    category: '개발',
  },
  {
    id: 3,
    name: 'GTQ 일러스트 1급',
    issuer: '한국생산성본부(KPC)',
    date: '2022.01',
    category: '디자인',
  },
  {
    id: 4,
    name: 'GTQ 인디자인 1급',
    issuer: '한국생산성본부(KPC)',
    date: '2021.12',
    category: '디자인',
  },
  {
    id: 5,
    name: '컴퓨터그래픽스운용기능사',
    issuer: '한국산업인력공단',
    date: '2020.12',
    category: '디자인',
  },
  {
    id: 6,
    name: '컴퓨터활용능력 2급',
    issuer: '대한상공회의소',
    date: '2020.11',
    category: '기타',
  },
  {
    id: 7,
    name: '그래픽기술자격(GTQ) 1급',
    issuer: '한국생산성본부(KPC)',
    date: '2020.10',
    category: '디자인',
  },
]
