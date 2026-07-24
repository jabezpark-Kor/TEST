import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "주식회사 동행하기 | 상상하는 모든 것을 개발합니다",
  description: "웹사이트, 웹서비스, 모바일 앱, AI 솔루션, 업무 자동화와 기업 맞춤형 시스템을 기획부터 개발, 운영까지 제공합니다.",
  openGraph: {
    title: "주식회사 동행하기 | 상상하는 모든 것을 개발합니다",
    description: "아이디어를 실제 사용할 수 있는 서비스로 구현하는 개발 파트너",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "주식회사 동행하기",
    description: "웹, 앱, AI, 자동화와 기업 맞춤형 시스템 개발",
  };
  return (
    <html lang="ko">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
