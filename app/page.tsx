import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { FAQ, Portfolio, Problems, Process, Services, Strengths, Values } from "@/components/Sections";
import { company } from "@/data/content";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="top">
        <section className="hero">
          <div className="hero-meta"><span>DEVELOPMENT PARTNER</span><span>WEB · APP · AI · SYSTEM</span></div>
          <div className="hero-content">
            <p className="hero-kicker"><i /> Ideas into reality</p>
            <h1>상상하는 모든 것을<br /><span>개발합니다.</span></h1>
            <p className="hero-copy">아이디어만 있어도 괜찮습니다. 웹사이트, 모바일 앱, AI 솔루션, 업무 자동화와 맞춤형 시스템까지 고객의 생각을 실제 사용할 수 있는 서비스로 구현합니다.</p>
            <div className="hero-actions"><a href="#contact" className="button white">프로젝트 문의하기 <ArrowUpRight /></a><a href="#services" className="button ghost">개발 서비스 보기 <ArrowDown /></a></div>
          </div>
          <div className="hero-bottom"><div><Code2 /><p>기획부터 디자인, 개발, 구축,<br />운영까지 함께합니다.</p></div><span>SCROLL TO EXPLORE ↓</span></div>
        </section>
        <Values />
        <Services />
        <Problems />
        <Process />
        <Strengths />
        <Portfolio />
        <FAQ />
        <section className="cta">
          <span className="eyebrow">START A PROJECT</span>
          <h2>만들고 싶은 것이<br />있으신가요?</h2>
          <p>아직 구체적이지 않아도 괜찮습니다.<br />아이디어와 필요한 내용을 알려주시면 구현 방법부터 함께 고민하겠습니다.</p>
          <a href="#contact" className="button white">지금 프로젝트 문의하기 <ArrowUpRight /></a>
        </section>
        <section id="contact" className="contact">
          <div className="contact-copy"><span className="eyebrow dark">CONTACT</span><h2>이야기를<br />들려주세요.</h2><p>간단한 내용만 남겨주셔도 충분합니다.<br />확인 후 프로젝트에 맞는 다음 단계를 안내해 드립니다.</p><div className="contact-line"><span>EMAIL</span><b>{company.email}</b></div><div className="contact-line"><span>PHONE</span><b>{company.phone}</b></div></div>
          <ContactForm />
        </section>
      </main>
      <footer>
        <div className="footer-top"><div><strong>{company.name}</strong><p>아이디어를 현실로 만드는 개발 파트너</p></div><a href="#top">BACK TO TOP ↑</a></div>
        <div className="footer-info"><p>대표자 {company.representative}　 사업자등록번호 {company.registration}<br />주소 {company.address}<br />이메일 {company.email}　 전화 {company.phone}</p><div><a href="#">개인정보처리방침</a><a href="#">이용약관</a></div></div>
        <p className="copyright">© {new Date().getFullYear()} {company.name}. ALL RIGHTS RESERVED.</p>
      </footer>
    </>
  );
}
