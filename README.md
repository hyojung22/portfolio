# 🌸 미니홈피 포트폴리오

> **싸이월드 미니홈피 감성을 담은 Next.js 기반 개발자 포트폴리오**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.7-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4.svg)](https://tailwindcss.com/)
[![styled-components](https://img.shields.io/badge/styled--components-6.3.11-DB7093.svg)](https://styled-components.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.x-orange.svg)](https://zustand-demo.pmnd.rs/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-purple.svg)](https://www.framer.com/motion/)

🌐 **라이브 보기**: [https://minihompy-portfolio.vercel.app/](https://minihompy-portfolio.vercel.app/)

---

## 🖥️ 프로젝트 소개

싸이월드 미니홈피 디자인을 기반으로 한 개발자 포트폴리오 웹사이트입니다.

레트로 감성의 UI를 구현하면서도 Next.js App Router 기반의 현대적인 프론트엔드 구조를 적용했습니다. 단순한 자기소개 페이지가 아닌, 미니홈피 인터페이스 자체를 구현하는 것을 목표로 했습니다.

### ✨ 주요 기능

- 🏠 **홈** — 프로필 카드 및 뮤직 플레이어
- 🧑‍💻 **프로필** — 자기소개, 업무경험, 교육이력, 기술 스택, 수상 이력
- 📂 **프로젝트** — 주요 개발 프로젝트 목록 및 상세 정보
- 📄 **이력서** — 웹 이력서 및 PDF 다운로드 기능
- 📱 **반응형 디자인** — 모바일 / 데스크톱 지원
- 🎵 **뮤직 플레이어** — 배경음악 재생 기능
- 🎨 **레트로 UI** — 싸이월드 감성의 스타일링

---

## 🛠️ 기술 스택

| 분류            | 기술                                             |
| --------------- | ------------------------------------------------ |
| **Framework**   | Next.js 16.1.7 (App Router)                      |
| **Language**    | TypeScript 5.x                                   |
| **Styling**     | Tailwind CSS 4.x + styled-components 6.3.11      |
| **상태 관리**   | Zustand 5.0.12                                   |
| **애니메이션**  | Framer Motion 12.38.0                            |
| **UI 컴포넌트** | Radix UI + shadcn/ui                             |
| **아이콘**      | lucide-react + react-icons                       |
| **유틸리티**    | clsx + tailwind-merge + class-variance-authority |
| **코드 분석**   | ESLint + Prettier + Stylelint                    |

### 🎨 스타일 작성 방식

**Tailwind CSS** — 반응형 레이아웃 및 기본 스타일링

```tsx
<div className="flex gap-4 p-4 md:gap-8 lg:p-8">
```

**styled-components** — 싸이월드 특유의 레트로 UI 디테일

```ts
const MinihomeBox = styled.div`
  border: 2px solid #000;
  box-shadow: 3px 3px 0 #999;
  background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
`
```

---

## 📁 프로젝트 폴더 구조

```
📦 portfolio
├── app/                # Next.js App Router
├── components/         # 재사용 가능한 UI 컴포넌트
│   ├── common/
│   ├── layout/
│   ├── resume/
│   └── ui/
├── sections/           # 페이지 섹션 컴포넌트
│   ├── profile/
│   └── project/
├── tabs/               # 탭 콘텐츠
├── constants/          # 데이터 상수
├── store/              # Zustand 상태 관리
├── hooks/              # 커스텀 React Hooks
└── lib/                # 유틸리티
```

### 폴더 책임 원칙

| 폴더         | 역할                  |
| ------------ | --------------------- |
| `components` | UI 렌더링             |
| `sections`   | 페이지 단위 영역 구성 |
| `store`      | 전역 상태 관리        |
| `hooks`      | UI 로직 분리          |
| `constants`  | 데이터 관리           |
| `lib`        | 유틸리티 함수         |

> 각 폴더는 **한 가지 역할**만 담당합니다. 프로젝트가 커져도 구조가 무너지지 않는 것을 목표로 합니다.

---

## 📄 이력서 페이지

`/resume` 경로에서 웹 이력서를 확인할 수 있습니다.

- **화면용** (`/resume`) — 탭 방식으로 프로젝트 전환, 툴팁 포함 아이콘 버튼
- **인쇄용** (`/resume/print`) — 모든 프로젝트 나열, PDF 저장에 최적화된 레이아웃

PDF 저장 버튼 클릭 시 `/resume/print` 페이지가 새 탭으로 열리며 인쇄 다이얼로그가 자동으로 실행됩니다.

---

## ⚡ 빠른 시작

### 사전 요구사항

- Node.js 20+
- npm 또는 yarn

### 1. 저장소 클론

```bash
git clone <repository-url>
cd minihompy-portfolio
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

### 4. 접속 확인

- **포트폴리오**: http://localhost:3000
- **이력서**: http://localhost:3000/resume

---

## 🗂️ 개발 규칙

### 컴포넌트 작성 원칙

- 시맨틱 태그 사용 (`<main>`, `<section>`, `<aside>`, `<header>`, `<footer>`)
- 컴포넌트는 가능한 **200줄 이하** 유지
- UI와 로직 분리, 재사용 컴포넌트 우선 작성

### 네이밍 규칙

| 대상        | 규칙       | 예시                                 |
| ----------- | ---------- | ------------------------------------ |
| 컴포넌트    | PascalCase | `ProfileCard`, `ProjectItem`         |
| 변수 / 함수 | camelCase  | `visibleProjects`, `handleTabChange` |

### 상태 관리 기준

| 상태 종류 | 도구       | 기준                     |
| --------- | ---------- | ------------------------ |
| 지역 상태 | `useState` | 컴포넌트 내부에서만 사용 |
| 전역 상태 | `Zustand`  | 여러 컴포넌트가 공유     |

### Server / Client Component 규칙

- 기본은 **Server Component**
- React 상태/훅 사용 시 → **Client Component**
- Zustand 사용 컴포넌트 → **Client Component**
- `layout`, `section` → **Server Component** 유지

### import 경로 Alias

```ts
import ProfileSection from '@/sections/profile/ProfileSection'
import { useTabStore } from '@/store/useTabStore'
```

---

_레트로 감성과 현대 기술의 만남, 싸이월드 미니홈피 포트폴리오_ 🌸
