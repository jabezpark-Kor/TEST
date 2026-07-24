"use client";

import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { faqs, process, projects, services } from "@/data/content";

export function Values() {
  const values = [
    ["01", "아이디어를 현실로", "막연한 아이디어도 구체적인 서비스로 설계하고 개발합니다."],
    ["02", "필요한 것은 무엇이든", "웹, 앱, AI, 자동화, 플랫폼, 사내 시스템을 목적에 맞게 구현합니다."],
    ["03", "처음부터 끝까지", "상담, 기획, 디자인, 개발, 테스트, 오픈과 유지보수까지 함께합니다."],
  ];
  return <section id="about" className="values reveal">{values.map(([no, title, text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</section>;
}

export function Services() {
  return <section id="services" className="section"><Heading eyebrow="WHAT WE BUILD" title={<>필요한 기술을,<br />목적에 맞게.</>} text="정해진 형태에 아이디어를 맞추지 않습니다. 필요한 결과를 기준으로 가장 적합한 개발 방식을 설계합니다." />
    <div className="service-grid">{services.map(({ icon: Icon, title, description }) => <article className="service-card reveal" key={title}><div className="service-icon"><Icon /></div><span>DEVELOPMENT</span><h3>{title}</h3><p>{description}</p><ArrowRight className="arrow" /></article>)}</div>
  </section>;
}

export function Problems() {
  const items = ["아이디어는 있지만 어디서부터 시작할지 모르겠다.", "업무를 자동화하고 싶지만 적합한 방법을 모르겠다.", "엑셀이나 수작업으로 관리하는 업무가 너무 많다.", "기존 시스템이 불편하지만 새로 개발하기가 부담스럽다.", "AI를 업무에 적용하고 싶지만 방법을 모르겠다.", "여러 업체와 소통했지만 원하는 결과가 나오지 않았다."];
  return <section id="solutions" className="light-section"><div><span className="eyebrow dark">YOUR CHALLENGE</span><h2>이런 고민이<br />있으신가요?</h2></div><div className="problem-list">{items.map((item, i) => <p key={item}><span>0{i + 1}</span>{item}</p>)}<div className="problem-answer"><strong>기술을 몰라도 괜찮습니다.</strong><br />필요한 내용을 듣고 가장 적합한 개발 방법을 제안합니다.</div></div></section>;
}

export function Process() {
  return <section id="process" className="section"><Heading eyebrow="HOW WE WORK" title={<>아이디어가 서비스가<br />되는 과정.</>} text="어렵고 복잡한 개발 과정을 이해하기 쉬운 언어로 공유하며, 단계마다 함께 확인합니다." />
    <div className="timeline">{process.map(([no, title, text]) => <article key={no} className="reveal"><span>{no}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
  </section>;
}

export function Strengths() {
  const items = ["고객의 목적을 먼저 이해합니다.", "꼭 필요한 기능을 제안합니다.", "사용자가 편리하도록 설계합니다.", "향후 기능 확장을 고려합니다.", "진행 상황을 투명하게 공유합니다.", "운영과 유지보수까지 고려합니다."];
  return <section className="strength"><span className="eyebrow">OUR APPROACH</span><h2>단순히 코드를 만드는 것이 아니라<br />비즈니스를 이해하고 개발합니다.</h2><div>{items.map((item) => <p key={item}><Check />{item}</p>)}</div></section>;
}

export function Portfolio() {
  return <section id="portfolio" className="light portfolio"><Heading eyebrow="SELECTED WORK" title={<>가능성을 보여주는<br />프로젝트.</>} text="아래 프로젝트는 구성을 보여드리기 위한 예시이며, 실제 포트폴리오 데이터로 쉽게 교체할 수 있습니다." />
    <div className="project-grid">{projects.map((p, i) => <article key={p.name} className="project-card"><div className={`mockup mockup-${i + 1}`} aria-label={`${p.name} 추상 UI 목업`} role="img"><div className="mock-top"><i/><i/><i/></div><div className="mock-body"><i/><i/><i/><i/></div></div><div className="project-info"><span>{p.field}</span><h3>{p.name}</h3><dl><div><dt>주요 기능</dt><dd>{p.features}</dd></div><div><dt>적용 기술</dt><dd>{p.tech}</dd></div></dl><button type="button">자세히 보기 <ArrowRight /></button></div></article>)}</div>
  </section>;
}

export function FAQ() {
  return <section className="section faq"><Heading eyebrow="FAQ" title={<>궁금한 점을<br />미리 답합니다.</>} />
    <div>{faqs.map(([q, a], i) => <details key={q}><summary><span>0{i + 1}</span>{q}<ChevronDown /></summary><p>{a}</p></details>)}</div>
  </section>;
}

function Heading({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
  return <div className="section-heading reveal"><span className="eyebrow">{eyebrow}</span><div><h2>{title}</h2>{text && <p>{text}</p>}</div></div>;
}
