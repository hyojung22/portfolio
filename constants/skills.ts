export type SkillLevel = '주로 사용' | '사용 가능'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  id: string
  label: string
  skills: Skill[]
}

export const SKILLS: SkillCategory[] = [
  {
    id: 'frontend',
    label: '프론트엔드',
    skills: [
      { name: 'HTML', level: '주로 사용' },
      { name: 'CSS', level: '주로 사용' },
      { name: 'JavaScript', level: '주로 사용' },
      { name: 'TypeScript', level: '주로 사용' },
      { name: 'React', level: '주로 사용' },
      { name: 'Next.js', level: '주로 사용' },
      { name: 'Tailwind CSS', level: '주로 사용' },
      { name: 'styled-components', level: '주로 사용' },
      { name: 'Zustand', level: '주로 사용' },
      { name: 'framer-motion', level: '주로 사용' },
      { name: 'Sass', level: '사용 가능' },
      { name: 'CSS Modules', level: '사용 가능' },
      { name: 'Vite', level: '사용 가능' },
    ],
  },
  {
    id: 'mobile',
    label: '모바일',
    skills: [
      { name: 'Kotlin', level: '사용 가능' },
      { name: 'Android Studio', level: '사용 가능' },
      { name: 'React Native', level: '사용 가능' },
      { name: 'Firebase', level: '사용 가능' },
    ],
  },
  {
    id: 'backend',
    label: '백엔드',
    skills: [
      { name: 'Java', level: '사용 가능' },
      { name: 'Spring Boot', level: '사용 가능' },
      { name: 'Node.js', level: '사용 가능' },
      { name: 'MySQL', level: '사용 가능' },
    ],
  },
  {
    id: 'tools',
    label: '툴',
    skills: [
      { name: 'GitHub', level: '주로 사용' },
      { name: 'Figma', level: '주로 사용' },
      { name: 'Photoshop', level: '사용 가능' },
      { name: 'Illustrator', level: '사용 가능' },
      { name: 'Vercel', level: '사용 가능' },
    ],
  },
]
