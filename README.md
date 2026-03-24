# 🌸 미니홈피 포트폴리오

> **싸이월드 미니홈피 감성을 담은 Next.js 기반 개발자 포트폴리오**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.7-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4.svg)](https://tailwindcss.com/)
[![styled-components](https://img.shields.io/badge/styled--components-6.3.11-DB7093.svg)](https://styled-components.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.x-orange.svg)](https://zustand-demo.pmnd.rs/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-purple.svg)](https://www.framer.com/motion/)

---

## 🖥️ 프로젝트 소개

2000년대 감성의 **싸이월드 미니홈피** 디자인을 현대적인 기술로 재해석한 개발자 포트폴리오입니다.

레트로 UI의 감성은 그대로 살리면서, Next.js App Router 기반의 구조적인 아키텍처를 적용하여 개발하였습니다.  
단순한 자기소개 페이지가 아니라, 미니홈피 인터페이스 자체를 구현하는 것을 목표로 합니다.

### ✨ 주요 콘텐츠

- 🧑‍💻 **프로필** — 자기소개 및 경력 소개
- 🛠️ **기술 스택** — 사용 가능한 기술 시각화
- 📂 **프로젝트** — 주요 개발 프로젝트 목록

---

## 🛠️ 기술 스택

| 분류            | 기술                                             |
| --------------- | ------------------------------------------------ |
| **Framework**   | Next.js 16.1.7 (App Router)                      |
| **Language**    | TypeScript 5.x                                   |
| **Styling**     | Tailwind CSS 4.x + styled-components 6.x         |
| **상태 관리**   | Zustand 5.x                                      |
| **애니메이션**  | Framer Motion 12.x                               |
| **UI 컴포넌트** | Radix UI + shadcn                                |
| **아이콘**      | lucide-react + react-icons                       |
| **유틸리티**    | clsx + tailwind-merge + class-variance-authority |

### 스타일 작성 방식

레이아웃 및 기본 스타일 → **Tailwind CSS**

```tsx
<div className="flex gap-4 p-4">
```

싸이월드 특유의 레트로 UI 디테일 → **styled-components**

```ts
const MinihomeBox = styled.div`
  border: 2px solid #000;
  box-shadow: 3px 3px 0 #999;
`
```

---

## 📁 프로젝트 폴더 구조

`src` 폴더 없이 루트(root) 기준 구조를 사용합니다.

```
📦 minihompy-portfolio
├── app/                      # Next.js App Router 페이지 & 레이아웃
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/               # 재사용 가능한 UI 컴포넌트
│   ├── common/               # 공통 UI (Button, Avatar, Card, Badge)
│   └── layout/               # 레이아웃 (Header, Sidebar, MainLayout)
│
├── sections/                 # 페이지를 구성하는 콘텐츠 영역
│   ├── profile/
│   ├── projects/
│   ├── guestbook/
│   └── diary/
│
├── constants/                # 하드코딩 데이터 분리 관리
│   ├── menu.ts
│   ├── skills.ts
│   └── profile.ts
│
├── store/                    # Zustand 전역 상태 관리
│   ├── useTabStore.ts
│   ├── useVisitorStore.ts
│   └── useMinihomeStore.ts
│
├── tabs/                     # 미니홈피 탭 메뉴 구조
│   ├── homeTab.ts
│   ├── profileTab.ts
│   └── guestbookTab.ts
│
├── types/                    # TypeScript 타입 정의
│   ├── profile.ts
│   ├── project.ts
│   └── guestbook.ts
│
└── hooks/                    # 재사용 가능한 커스텀 훅
    ├── useScroll.ts
    ├── useLocalStorage.ts
    └── useVisitorCount.ts
```

### 폴더 책임 원칙

| 폴더         | 역할                  |
| ------------ | --------------------- |
| `components` | UI 렌더링             |
| `sections`   | 페이지 단위 영역 구성 |
| `store`      | 전역 상태 관리        |
| `hooks`      | UI 로직 분리          |
| `constants`  | 데이터 관리           |
| `types`      | 타입 정의             |

> 각 폴더는 **한 가지 역할**만 담당합니다. 프로젝트가 커져도 구조가 무너지지 않는 것을 목표로 합니다.

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
# 또는
yarn install
```

### 3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

### 4. 접속 확인

- **포트폴리오**: http://localhost:3000

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

| 상태 종류 | 도구       | 기준                                    |
| --------- | ---------- | --------------------------------------- |
| 지역 상태 | `useState` | 컴포넌트 내부에서만 사용                |
| 전역 상태 | `Zustand`  | 여러 컴포넌트가 공유 (탭, 방문자 수 등) |

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
