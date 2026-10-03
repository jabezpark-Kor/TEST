# 주식회사 동행하기 공식 홈페이지

Next.js App Router, TypeScript, Tailwind CSS로 제작한 반응형 개발회사 홈페이지입니다.

## 실행

Node.js 20.9 이상을 설치한 뒤 프로젝트 폴더에서 실행합니다.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다. 배포 전 검증은 다음 명령을 사용합니다.

```bash
npm run build
npm run start
```

## 주요 구조

```text
app/
  globals.css       전역 디자인, 반응형, 애니메이션
  layout.tsx        SEO 메타데이터, 구조화 데이터
  page.tsx          홈페이지 구성
  robots.ts         검색엔진 접근 설정
  sitemap.ts        사이트맵
components/
  ContactForm.tsx   문의 검증 및 제출 흐름
  Navigation.tsx    데스크톱/모바일 내비게이션
  Sections.tsx      서비스, 절차, 포트폴리오, FAQ
data/
  content.ts        회사 정보와 반복 콘텐츠
```

## 내용 수정

- 회사명, 대표자, 연락처: `data/content.ts`의 `company`
- 서비스, 진행 절차, 포트폴리오, FAQ: `data/content.ts`의 각 배열
- 메인 문구와 섹션 문구: `app/page.tsx`
- SEO 제목과 설명: `app/layout.tsx`
- 실제 도메인: `app/sitemap.ts`의 `https://example.com`
- 파비콘: `app/favicon.ico` 파일을 추가하거나 교체

문의 폼은 현재 브라우저에서 검증 후 완료 상태를 표시합니다. 실제 이메일 또는 CRM 연동 시 `components/ContactForm.tsx`의 `submitInquiry` 함수만 API 호출로 교체하면 됩니다.

Claude Code 연습 완료
