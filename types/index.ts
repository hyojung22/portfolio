export type Tab = '홈' | '프로필' | '프로젝트'

export type SubMenu =
  | 'personal'
  | 'work'
  | 'education'
  | 'skills'
  | 'certificate'
  | 'award'
export interface ProfileLink {
  label: string
  value: string
}
