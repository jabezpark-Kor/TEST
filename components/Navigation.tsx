"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/data/content";

const links = [
  ["회사소개", "about"], ["서비스", "services"], ["개발분야", "solutions"],
  ["진행절차", "process"], ["포트폴리오", "portfolio"], ["문의하기", "contact"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="nav">
      <a className="logo" href="#top" aria-label="홈으로">{company.name}</a>
      <nav className="desktop-nav" aria-label="주요 메뉴">
        {links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <a href="#contact" className="button small desktop-cta">프로젝트 문의 <span>↗</span></a>
      <button className="menu-btn" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav className="mobile-nav" aria-label="모바일 메뉴">
          {links.map(([label, id], index) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>)}
          <a className="button" href="#contact" onClick={() => setOpen(false)}>프로젝트 문의하기</a>
        </nav>
      )}
    </header>
  );
}
