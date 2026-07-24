import { Bot, Boxes, BriefcaseBusiness, Globe2, Smartphone, Workflow } from "lucide-react";

export const company = {
  name: "주식회사 동행하기",
  representative: "[대표자명]",
  registration: "[사업자등록번호]",
  address: "[회사 주소]",
  email: "[이메일 주소]",
  phone: "[전화번호]",
};

export const services = [
  { icon: Globe2, title: "웹사이트 개발", description: "기업 홈페이지, 브랜드 사이트, 랜딩페이지, 쇼핑몰과 예약 사이트를 제작합니다." },
  { icon: Boxes, title: "웹 서비스 및 플랫폼", description: "회원, 결제, 예약, 매칭, 커뮤니티와 관리자 기능을 갖춘 서비스를 개발합니다." },
  { icon: Smartphone, title: "모바일 앱 개발", description: "Android와 iOS에서 편리하게 사용할 수 있는 모바일·하이브리드 앱을 개발합니다." },
  { icon: Bot, title: "AI 솔루션", description: "생성형 AI, 챗봇, 문서 분석, 데이터 분류와 추천 기능을 업무에 연결합니다." },
  { icon: Workflow, title: "업무 자동화", description: "반복 업무, 엑셀, 이메일, 데이터 수집과 보고서 작성 과정을 자동화합니다." },
  { icon: BriefcaseBusiness, title: "맞춤형 시스템", description: "ERP, CRM, 물류, 영업, 고객과 재고 관리 시스템을 업무에 맞춰 개발합니다." },
];

export const process = [
  ["01", "상담 및 요구사항 확인", "아이디어와 현재 문제, 필요한 기능과 목표를 확인합니다."],
  ["02", "기획 및 제안", "서비스 구조, 주요 기능, 개발 범위와 일정을 구체화합니다."],
  ["03", "디자인", "사용자 경험과 브랜드 방향을 반영해 화면을 설계합니다."],
  ["04", "개발 및 테스트", "필요한 기능을 개발하고 실제 사용 환경을 충분히 테스트합니다."],
  ["05", "오픈 및 운영지원", "안정적으로 오픈하고 유지보수와 기능 개선을 지원합니다."],
];

export const projects = [
  { field: "AI SOLUTION", name: "AI 고객상담 솔루션", features: "상담 자동화 · 지식 검색 · 관리자", tech: "Next.js · LLM · Vector DB" },
  { field: "BUSINESS SYSTEM", name: "기업 업무관리 시스템", features: "프로젝트 · 결재 · 통계", tech: "React · Node.js · PostgreSQL" },
  { field: "PLATFORM", name: "온라인 예약 플랫폼", features: "예약 · 결제 · 알림", tech: "Next.js · Payment API" },
  { field: "AUTOMATION", name: "물류 포장 관리 솔루션", features: "입출고 · 바코드 · 재고", tech: "Web App · Cloud" },
  { field: "CRM", name: "영업 파트너 관리 시스템", features: "파트너 · 계약 · 정산", tech: "TypeScript · Database" },
  { field: "WEBSITE", name: "브랜드 공식 홈페이지", features: "콘텐츠 · 문의 · SEO", tech: "Next.js · CMS" },
];

export const faqs = [
  ["아이디어만 있어도 상담할 수 있나요?", "네. 아이디어가 구체적이지 않아도 목적과 필요한 내용을 함께 정리하며 시작할 수 있습니다."],
  ["개발 비용은 어떻게 결정되나요?", "기능의 범위와 난이도, 디자인, 외부 시스템 연동 여부를 확인한 뒤 항목별로 투명하게 제안합니다."],
  ["기획이나 디자인도 함께 진행하나요?", "네. 서비스 구조를 정리하는 기획부터 화면 디자인, 개발과 오픈까지 함께 진행할 수 있습니다."],
  ["기존 시스템을 개선하는 것도 가능한가요?", "가능합니다. 현재 구조와 불편한 점을 분석해 전체 교체 또는 단계적 개선 방법을 제안합니다."],
  ["AI 기능만 별도로 개발할 수 있나요?", "네. 챗봇, 문서 분석, 분류, 요약 등 필요한 AI 기능만 기존 업무나 서비스에 연결할 수 있습니다."],
  ["개발 기간은 얼마나 걸리나요?", "기능, 난이도, 디자인과 외부 연동 범위에 따라 달라집니다. 상담 후 현실적인 일정과 단계를 안내합니다."],
  ["개발 후 유지보수도 가능한가요?", "네. 안정적인 운영을 위한 점검, 오류 대응, 기능 개선과 확장까지 지원합니다."],
];
