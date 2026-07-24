"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";

async function submitInquiry(data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Object.fromEntries(data.entries());
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    await submitInquiry(new FormData(event.currentTarget));
    setLoading(false);
    setSent(true);
    event.currentTarget.reset();
  }
  if (sent) return (
    <div className="success" role="status">
      <CheckCircle2 />
      <h3>문의가 접수되었습니다.</h3>
      <p>남겨주신 내용을 확인한 뒤 연락드리겠습니다.</p>
      <button className="text-button" onClick={() => setSent(false)}>새 문의 작성하기</button>
    </div>
  );
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <Field label="이름 또는 담당자명" name="name" required />
        <Field label="회사명" name="company" />
        <Field label="이메일" name="email" type="email" required />
        <Field label="연락처" name="phone" type="tel" required />
        <Select label="개발 유형" name="type" options={["기업 홈페이지", "웹 서비스", "모바일 앱", "AI 솔루션", "업무 자동화", "맞춤형 시스템", "기타"]} />
        <Select label="예상 예산" name="budget" options={["아직 정해지지 않음", "500만 원 미만", "500만 원 이상", "1,000만 원 이상", "3,000만 원 이상", "협의 필요"]} />
        <Field label="희망 일정" name="schedule" placeholder="예: 2026년 10월 오픈" />
      </div>
      <label className="field textarea-field">문의 내용 <textarea name="message" rows={6} required placeholder="아이디어, 필요한 기능 또는 해결하고 싶은 문제를 편하게 적어주세요." /></label>
      <label className="consent"><input type="checkbox" name="privacy" required /> <span>문의 처리를 위한 개인정보 수집 및 이용에 동의합니다. (필수)</span></label>
      <button className="submit" type="submit" disabled={loading}>{loading ? "접수 중..." : "프로젝트 문의 보내기"} <span>↗</span></button>
    </form>
  );
}

function Field({ label, name, type = "text", required = false, placeholder = "" }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return <label className="field">{label}{required && <em> *</em>}<input name={name} type={type} required={required} placeholder={placeholder} /></label>;
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return <label className="field">{label}<select name={name} defaultValue=""><option value="" disabled>선택해 주세요</option>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}
