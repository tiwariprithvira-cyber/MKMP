import imgAvatar1 from "@/imports/MacBookPro161/4a56d454f235cd5c1971dead64a93dc4aaa9a014.png";
import imgAvatar2 from "@/imports/MacBookPro161/4ffde7165e260e2e279d043e1b6d943cb283c7a8.png";
import imgAvatar3 from "@/imports/MacBookPro161/48588321ff69f90e7d4eef1028e0f502f53fa5a6.png";
import imgAvatar4 from "@/imports/MacBookPro161/c2880a28770e9b4d669d837a65f88f0748c6911b.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useState } from "react";

/* ─── URL helpers ──────────────────────────────────────────────── */
const IMG = {
  hero: "https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
  training1: "https://images.unsplash.com/photo-1616674202799-054e7c831378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  training2: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  training3: "https://images.unsplash.com/photo-1642140076947-7d410aaaa911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  training4: "https://images.unsplash.com/photo-1735759588961-0436494399b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  cert: "https://images.unsplash.com/photo-1756885375450-65094876d21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  workshop: "https://images.unsplash.com/photo-1646369505413-216676fef89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  classroom: "https://images.unsplash.com/photo-1755548836775-39456093a0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  placement: "https://images.unsplash.com/photo-1601997973052-1e6f025ef04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
};

/* ─── Shared primitives ────────────────────────────────────────── */

function GreenArrow({ flip = false, size = 56 }: { flip?: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 73.5 74" fill="none" className={flip ? "rotate-180" : ""}>
      <path d="M2 0.5L71 71.5M71 71.5V10.5M71 71.5H10" stroke="url(#gag)" strokeLinecap="round" strokeWidth="5" />
      <defs>
        <linearGradient id="gag" x1="2" y1="0.5" x2="71" y2="71.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#55B000" /><stop offset="0.5" stopColor="white" stopOpacity="0.16" /><stop offset="1" stopColor="#50790B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 15 15" fill="#FFF84E">
          <path d="M7.5 0l1.93 5.46H15l-4.63 3.37 1.77 5.46L7.5 11.1l-4.64 3.19 1.77-5.46L0 5.46h5.57z" />
        </svg>
      ))}
    </div>
  );
}

function Glass({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/20 bg-white/[0.05] backdrop-blur-xl shadow-[0_9px_18px_rgba(0,0,0,0.25)] ${className}`}>
      {children}
    </div>
  );
}

function SectionHead({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-5 mb-14">
      <GreenArrow flip size={52} />
      <h2
        className="text-white font-bold text-center"
        style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: "clamp(1.8rem,3.5vw,3rem)",
          textShadow: "0 2px 1.6px rgba(0,0,0,.09),0 5px 3.6px rgba(0,0,0,.13),0 10px 6.3px rgba(0,0,0,.15),0 100px 80px rgba(0,0,0,.36)",
        }}
      >
        {title}
      </h2>
      <GreenArrow size={52} />
    </div>
  );
}

function Tag({ children, color = "green" }: { children: React.ReactNode; color?: "green" | "blue" | "amber" }) {
  const cls = color === "green"
    ? "bg-[#55B000]/20 border-[#55B000]/30 text-[#a8e063]"
    : color === "blue"
    ? "bg-blue-500/20 border-blue-400/30 text-blue-300"
    : "bg-amber-400/20 border-amber-300/30 text-amber-300";
  return (
    <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${cls}`}
      style={{ fontFamily: "'Inter',sans-serif" }}>
      {children}
    </span>
  );
}

function Pill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm">
      <span className="text-[#a8e063]">{icon}</span>
      <span className="text-white/80 text-sm font-medium" style={{ fontFamily: "'Inter',sans-serif" }}>{text}</span>
    </div>
  );
}

/* ─── Section 3 — ABOUT ────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionHead title="About the Programme" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative overflow-hidden rounded-3xl h-80 lg:h-[420px]">
          <img src={IMG.training1} alt="Training session" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b2316]/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <Tag>Government of India Initiative</Tag>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-white/50 font-semibold text-sm uppercase tracking-widest" style={{ fontFamily: "'Inter',sans-serif" }}>
            Mera Kaam Meri Pehchaan
          </p>
          <h3
            className="text-white font-bold leading-snug"
            style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(1.4rem,2.5vw,2rem)" }}
          >
            Empowering Youth Through<br />
            <span className="text-[#a8e063]">Free Vocational Training</span>
          </h3>
          <p className="text-white/65 text-base leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
            Mera Kaam Meri Pehchaan (MKMPC) is a flagship skill development and employment generation programme launched by the Government of India. It provides free, NSQF-aligned vocational training to unemployed youth across all states and union territories.
          </p>
          <p className="text-white/65 text-base leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
            Jointly implemented by the National Skill Development Corporation (NSDC) and State Skill Development Missions (SSDMs), the programme ensures that every trained candidate receives an industry-recognised certification via DigiLocker, along with post-placement support and social security coverage.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Tag>NSDC Certified</Tag>
            <Tag color="blue">Pan-India</Tag>
            <Tag color="amber">100% Free</Tag>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4 — VISION & MISSION ────────────────────────────── */
function VisionSection() {
  return (
    <section id="vision" className="py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHead title="Vision & Mission" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Glass className="p-10 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#55B000]/20 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a8e063" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" />
                <line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-2xl" style={{ fontFamily: "'Inter',sans-serif" }}>Our Vision</h3>
            <p className="text-white/65 text-base leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
              To create a skilled, self-reliant workforce where every Indian youth has access to quality vocational education that matches industry demand — so that work becomes not just a livelihood, but an identity.
            </p>
            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-[#a8e063] font-semibold text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>
                "Har Haath Ko Kaam, Har Kaam Ko Sammaan"
              </p>
            </div>
          </Glass>
          <Glass className="p-10 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-2xl" style={{ fontFamily: "'Inter',sans-serif" }}>Our Mission</h3>
            <p className="text-white/65 text-base leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
              To mobilise, train, and place unemployed youth aged 18–35 across India through NSQF-aligned short-term skill programmes, industry partnerships, and last-mile delivery mechanisms — ensuring no youth is left behind.
            </p>
            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-blue-300 font-semibold text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>
                Target: 10 Lakh beneficiaries by 2026
              </p>
            </div>
          </Glass>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5 — KEY BENEFITS ────────────────────────────────── */
function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a8e063" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Free Skill Training",
      desc: "Fully sponsored NSQF Level 3–5 training across 30+ job roles. No fees, no hidden charges — completely government-funded.",
      tag: "100% Free",
      tagColor: "green" as const,
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
        </svg>
      ),
      title: "Monthly Stipend",
      desc: "Trainees receive ₹1,000–₹1,500 per month during training, plus transport and accommodation allowances where applicable.",
      tag: "Up to ₹1,500/mo",
      tagColor: "blue" as const,
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "NSQF Certification",
      desc: "Earn industry-recognised NSQF-aligned certificates stored on DigiLocker — accepted by employers across India and recognised internationally.",
      tag: "DigiLocker Verified",
      tagColor: "amber" as const,
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a8e063" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Placement Support",
      desc: "Dedicated placement cells with tie-ups across 500+ companies. 85%+ of trained candidates secured employment within 90 days of certification.",
      tag: "85% Placement Rate",
      tagColor: "green" as const,
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Social Security",
      desc: "All enrolled trainees receive accident insurance, ESIC health coverage, and EPFO provident fund registration upon placement.",
      tag: "Insurance Included",
      tagColor: "blue" as const,
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "RPL Recognition",
      desc: "Recognition of Prior Learning (RPL) for existing workers and artisans. Get your experience officially certified without a full training course.",
      tag: "Prior Learning",
      tagColor: "amber" as const,
    },
  ];

  return (
    <section id="benefits" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionHead title="Key Benefits" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <Glass key={i} className="p-8 flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              {b.icon}
            </div>
            <h4 className="text-white font-semibold text-lg" style={{ fontFamily: "'Inter',sans-serif" }}>{b.title}</h4>
            <p className="text-white/60 text-sm leading-relaxed flex-1" style={{ fontFamily: "'Inter',sans-serif" }}>{b.desc}</p>
            <Tag color={b.tagColor}>{b.tag}</Tag>
          </Glass>
        ))}
      </div>
    </section>
  );
}

/* ─── Section 6 — PHASES OVERVIEW TIMELINE ─────────────────────── */
function PhasesOverviewSection() {
  const phases = [
    { num: "01", year: "2020–21", title: "Foundation", color: "#55B000", reach: "50,000+", states: "15" },
    { num: "02", year: "2021–22", title: "Expansion", color: "#3b82f6", reach: "1,50,000+", states: "22" },
    { num: "03", year: "2022–23", title: "Consolidation", color: "#f59e0b", reach: "3,00,000+", states: "28" },
    { num: "04", year: "2023–25", title: "Scale & Sustain", color: "#a855f7", reach: "5,00,000+", states: "All UTs" },
  ];

  return (
    <section id="phases-overview" className="py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHead title="Programme Phases" />
        {/* Timeline row */}
        <div className="relative flex flex-col md:flex-row gap-0">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-white/10" />
          {phases.map((ph, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center px-4 mb-8 md:mb-0">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-2xl relative z-10 border-2"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  background: `${ph.color}22`,
                  borderColor: `${ph.color}66`,
                  boxShadow: `0 0 30px ${ph.color}33`,
                }}
              >
                {ph.num}
              </div>
              <div className="mt-5 flex flex-col gap-1">
                <p className="text-white/40 text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "'Inter',sans-serif" }}>{ph.year}</p>
                <p className="text-white font-bold text-lg" style={{ fontFamily: "'Inter',sans-serif" }}>{ph.title}</p>
                <p className="font-black text-2xl mt-1" style={{ color: ph.color, fontFamily: "'Inter',sans-serif" }}>{ph.reach}</p>
                <p className="text-white/50 text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>Beneficiaries</p>
                <p className="text-white/40 text-xs mt-1" style={{ fontFamily: "'Inter',sans-serif" }}>{ph.states} States / UTs</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Sections 7–10 — PHASE DETAILS ───────────────────────────── */
function PhaseDetailSection({
  num, title, period, img, tag, tagColor, description, points, highlight,
}: {
  num: string; title: string; period: string; img: string; tag: string;
  tagColor: "green" | "blue" | "amber"; description: string; points: string[];
  highlight: { value: string; label: string }[];
}) {
  const flip = parseInt(num) % 2 === 0;
  return (
    <section className="py-14 px-6 md:px-16 max-w-7xl mx-auto">
      <Glass className="overflow-hidden">
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${flip ? "" : ""}`}>
          <div className={`relative overflow-hidden h-64 lg:h-auto ${flip ? "lg:order-2" : ""}`}>
            <img src={img} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1b2316]/70 lg:hidden" />
            <div className="absolute top-5 left-5 flex items-center gap-3">
              <div className="rounded-full bg-black/40 backdrop-blur-sm px-4 py-2">
                <span className="text-white font-black text-xl" style={{ fontFamily: "'Inter',sans-serif" }}>Phase {num}</span>
              </div>
            </div>
          </div>
          <div className={`p-8 lg:p-12 flex flex-col gap-5 ${flip ? "lg:order-1" : ""}`}>
            <div className="flex items-center gap-3">
              <Tag color={tagColor}>{tag}</Tag>
              <span className="text-white/40 text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>{period}</span>
            </div>
            <h3 className="text-white font-bold text-2xl leading-snug" style={{ fontFamily: "'Inter',sans-serif" }}>{title}</h3>
            <p className="text-white/65 text-sm leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>{description}</p>
            <ul className="flex flex-col gap-2">
              {points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-white/65 text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>
                  <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="#55B000">
                    <circle cx="7" cy="7" r="7" opacity="0.25" /><path d="M3.5 7l2.5 2.5 5-5" stroke="#55B000" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-2 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
              {highlight.map((h, i) => (
                <div key={i} className="text-center">
                  <p className="text-white font-black text-xl" style={{ fontFamily: "'Inter',sans-serif" }}>{h.value}</p>
                  <p className="text-white/45 text-xs mt-1" style={{ fontFamily: "'Inter',sans-serif" }}>{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Glass>
    </section>
  );
}

/* ─── Section 11 — TRAINING SECTORS ───────────────────────────── */
function SectorsSection() {
  const sectors = [
    { icon: "💻", name: "IT & ITeS", roles: "12 Job Roles" },
    { icon: "🏥", name: "Healthcare", roles: "8 Job Roles" },
    { icon: "🚗", name: "Automotive", roles: "10 Job Roles" },
    { icon: "🏗️", name: "Construction", roles: "15 Job Roles" },
    { icon: "🌾", name: "Agriculture", roles: "7 Job Roles" },
    { icon: "🛍️", name: "Retail & Sales", roles: "6 Job Roles" },
    { icon: "🏨", name: "Tourism & Hospitality", roles: "9 Job Roles" },
    { icon: "⚡", name: "Electronics", roles: "11 Job Roles" },
    { icon: "🧵", name: "Apparel & Textiles", roles: "8 Job Roles" },
    { icon: "🏭", name: "Manufacturing", roles: "14 Job Roles" },
    { icon: "💰", name: "Banking & Finance", roles: "5 Job Roles" },
    { icon: "🌊", name: "Plumbing & Sanitation", roles: "4 Job Roles" },
  ];

  return (
    <section id="sectors" className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHead title="Training Sectors" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {sectors.map((s, i) => (
            <Glass key={i} className="p-6 flex flex-col items-center gap-3 text-center hover:bg-white/[0.08] transition-colors cursor-pointer">
              <span className="text-4xl">{s.icon}</span>
              <p className="text-white font-semibold text-sm leading-snug" style={{ fontFamily: "'Inter',sans-serif" }}>{s.name}</p>
              <p className="text-white/40 text-xs" style={{ fontFamily: "'Inter',sans-serif" }}>{s.roles}</p>
            </Glass>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 12 — ELIGIBILITY & ENROLLMENT ───────────────────── */
function EligibilitySection() {
  const steps = [
    { step: "01", title: "Check Eligibility", desc: "Age 18–35 years, Indian citizen, minimum Class 8 pass. No fees required." },
    { step: "02", title: "Register Online", desc: "Visit the MKMPC portal or nearest Common Service Centre (CSC) to fill your application form." },
    { step: "03", title: "Centre Allocation", desc: "Receive SMS/email with your assigned training centre, batch date, and course details." },
    { step: "04", title: "Attend Training", desc: "Complete the prescribed training hours. Receive monthly stipend during training." },
    { step: "05", title: "Assessment & Certification", desc: "Pass the NSQF assessment exam. Certificate issued via DigiLocker within 30 days." },
    { step: "06", title: "Placement", desc: "Placement cell connects you with employers. Track your application on the MKMPC dashboard." },
  ];

  return (
    <section id="eligibility" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionHead title="Eligibility & Enrollment" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Eligibility card */}
        <Glass className="p-8 flex flex-col gap-5">
          <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'Inter',sans-serif" }}>Who Can Apply?</h3>
          {[
            ["Age", "18 to 35 years"],
            ["Education", "Minimum Class 8 pass (varies by course)"],
            ["Nationality", "Indian Citizen / OCI Cardholder"],
            ["Employment Status", "Unemployed or seeking skill upgrade"],
            ["Special Provisions", "SC/ST, OBC, Women, PwD — priority enrolment"],
            ["Aadhaar", "Mandatory for registration and stipend transfer"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center gap-4 py-3 border-b border-white/10 last:border-0">
              <span className="text-white/40 text-sm w-36 shrink-0" style={{ fontFamily: "'Inter',sans-serif" }}>{label}</span>
              <span className="text-white font-medium text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>{value}</span>
            </div>
          ))}
          <a href="#apply" className="mt-4 self-start rounded-2xl border-2 border-white/60 px-7 py-3 text-white font-semibold text-sm hover:bg-white/10 transition-colors" style={{ fontFamily: "'Inter',sans-serif" }}>
            Apply Now →
          </a>
        </Glass>
        {/* Steps */}
        <div className="flex flex-col gap-4">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full bg-[#55B000]/20 border border-[#55B000]/40 flex items-center justify-center shrink-0 mt-1">
                <span className="text-[#a8e063] font-black text-xs" style={{ fontFamily: "'Inter',sans-serif" }}>{s.step}</span>
              </div>
              <div>
                <p className="text-white font-semibold text-base" style={{ fontFamily: "'Inter',sans-serif" }}>{s.title}</p>
                <p className="text-white/55 text-sm mt-1 leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 13 — IMPACT STATS ───────────────────────────────── */
function ImpactSection() {
  const stats = [
    { value: "5L+", label: "Beneficiaries Trained", sub: "Across all 4 phases" },
    { value: "28", label: "States & UTs", sub: "Pan-India coverage" },
    { value: "500+", label: "Training Partners", sub: "NSDC-affiliated centres" },
    { value: "85%", label: "Placement Rate", sub: "Within 90 days" },
    { value: "30+", label: "Job Roles", sub: "NSQF Levels 3–5" },
    { value: "₹1,500", label: "Monthly Stipend", sub: "Per enrolled trainee" },
    { value: "12", label: "Sectors Covered", sub: "High-growth industries" },
    { value: "100%", label: "Free Training", sub: "No fee, no charge" },
  ];

  return (
    <section id="impact" className="py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#55B000]/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHead title="Programme Impact" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <Glass key={i} className="p-7 flex flex-col items-center text-center gap-2">
              <p
                className="text-white font-black"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "clamp(2rem,4vw,2.8rem)",
                  textShadow: "0 0 40px rgba(85,176,0,0.5)",
                }}
              >
                {s.value}
              </p>
              <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>{s.label}</p>
              <p className="text-white/40 text-xs" style={{ fontFamily: "'Inter',sans-serif" }}>{s.sub}</p>
            </Glass>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 14 — BENEFICIARY STORIES ────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      avatar: imgAvatar1,
      name: "Ramesh Sharma",
      location: "Jaipur, Rajasthan",
      trade: "IT & ITeS",
      outcome: "Software Developer at Infosys",
      text: "Pehle main unemployed tha aur ghar ka kharch uthana mushkil tha. MKMPC ke IT course ne mujhe ek nayi pehchaan di. Aaj main Infosys mein kaam karta hoon. Yeh programme meri zindagi ka turning point raha.",
    },
    {
      avatar: imgAvatar2,
      name: "Sunita Devi",
      location: "Lucknow, Uttar Pradesh",
      trade: "Healthcare (GDA)",
      outcome: "General Duty Assistant, KGMU",
      text: "As a woman from a rural area, I never thought I would have a professional career. MKMPC's General Duty Assistant course trained me at no cost and got me placed at KGMU hospital. I now earn ₹18,000 per month.",
    },
    {
      avatar: imgAvatar3,
      name: "Arvind Meena",
      location: "Kota, Rajasthan",
      trade: "Automotive",
      outcome: "Service Technician, Maruti Suzuki",
      text: "Maine RPL ke through apna purana mechanical experience certify karaya. MKMPC ne mujhe Maruti Suzuki ke authorized service centre mein placement dilai. Ab mere paas ek stable job aur EPFO account bhi hai.",
    },
    {
      avatar: imgAvatar4,
      name: "Priya Patil",
      location: "Pune, Maharashtra",
      trade: "Banking & Finance",
      outcome: "Loan Officer, Bandhan Bank",
      text: "The banking and finance module was comprehensive and industry-aligned. The placement cell arranged interviews with 5 banks. I got selected by Bandhan Bank within 2 months of certification. MKMPC is a life-changing programme.",
    },
  ];

  return (
    <section id="stories" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionHead title="Beneficiary Success Stories" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <Glass key={i} className="p-8 flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                <ImageWithFallback src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-white font-semibold text-lg" style={{ fontFamily: "'Inter',sans-serif" }}>{t.name}</p>
                <p className="text-white/50 text-xs" style={{ fontFamily: "'Inter',sans-serif" }}>{t.location}</p>
                <Stars />
              </div>
              <div className="flex flex-col items-end gap-1">
                <Tag color="green">{t.trade}</Tag>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed italic" style={{ fontFamily: "'Inter',sans-serif" }}>
              "{t.text}"
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="#55B000"><circle cx="7" cy="7" r="7" opacity="0.25" /><path d="M3.5 7l2.5 2.5 5-5" stroke="#55B000" strokeWidth="1.5" strokeLinecap="round" fill="none" /></svg>
              <p className="text-[#a8e063] text-xs font-semibold" style={{ fontFamily: "'Inter',sans-serif" }}>{t.outcome}</p>
            </div>
          </Glass>
        ))}
      </div>
      <div className="flex justify-center mt-8 gap-3">
        <div className="w-8 h-3 rounded-full bg-white/60" />
        <div className="w-3 h-3 rounded-full bg-white/30" />
        <div className="w-3 h-3 rounded-full bg-white/30" />
      </div>
    </section>
  );
}

/* ─── Section 15 — PARTNER ORGANISATIONS ──────────────────────── */
function PartnersSection() {
  const partners = [
    { name: "NSDC", full: "National Skill Development Corporation", type: "Implementing Agency" },
    { name: "MoSDE", full: "Ministry of Skill Development & Entrepreneurship", type: "Nodal Ministry" },
    { name: "SSDMs", full: "State Skill Development Missions", type: "State Partners — 28 States" },
    { name: "CSC SPV", full: "Common Service Centres", type: "Enrolment & Outreach" },
    { name: "NSDA", full: "National Skill Development Agency", type: "Quality Assurance" },
    { name: "DigiLocker", full: "MeitY Digital Document Platform", type: "Certificate Issuance" },
  ];

  return (
    <section id="partners" className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHead title="Implementation Partners" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <Glass key={i} className="p-7 flex flex-col gap-3">
              <p
                className="font-black text-3xl text-white/20"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                {p.name}
              </p>
              <div className="w-8 h-0.5 bg-[#55B000]/60 rounded-full" />
              <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>{p.full}</p>
              <Tag color="green">{p.type}</Tag>
            </Glass>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 16 — FAQ ─────────────────────────────────────────── */
function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Is the training completely free?", a: "Yes. All training under MKMPC is 100% government-funded. Trainees pay no tuition fees, examination fees, or registration charges. Additionally, eligible trainees receive monthly stipends during the training period." },
    { q: "What is the age limit to enroll?", a: "The programme is open to Indian citizens between 18 and 35 years of age. Relaxations of up to 5 years are available for SC/ST candidates, women, and persons with disabilities." },
    { q: "What is NSQF and why does it matter?", a: "The National Skills Qualifications Framework (NSQF) is an official classification of qualifications (Levels 1–10). MKMPC courses are certified at Levels 3–5, making your certificate recognised by employers and educational institutions across India." },
    { q: "Can I enroll if I am already employed?", a: "The programme is primarily for unemployed youth. However, the RPL (Recognition of Prior Learning) track is available for currently employed or self-employed individuals who want their existing skills certified." },
    { q: "How long does each training programme last?", a: "Course duration varies by job role — typically 200 to 500 hours (2 to 6 months). Short-duration RPL assessments can be completed in 3 to 7 days." },
    { q: "Where can I find a training centre near me?", a: "Visit the official MKMPC portal or your nearest Common Service Centre (CSC) to locate a NSDC-affiliated training partner in your district. You can also call the MKMPC helpline: 1800-123-9626 (toll-free)." },
  ];

  return (
    <section id="faq" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionHead title="Frequently Asked Questions" />
      <div className="flex flex-col gap-3 max-w-3xl mx-auto">
        {faqs.map((f, i) => (
          <Glass key={i} className="overflow-hidden">
            <button
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-white font-semibold text-base" style={{ fontFamily: "'Inter',sans-serif" }}>{f.q}</span>
              <svg
                width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="2"
                className={`shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`}
              >
                <line x1="9" y1="2" x2="9" y2="16" /><line x1="2" y1="9" x2="16" y2="9" />
              </svg>
            </button>
            {open === i && (
              <div className="px-6 pb-6">
                <p className="text-white/60 text-sm leading-relaxed border-t border-white/10 pt-4" style={{ fontFamily: "'Inter',sans-serif" }}>
                  {f.a}
                </p>
              </div>
            )}
          </Glass>
        ))}
      </div>
    </section>
  );
}

/* ─── Section 17 — APPLY NOW CTA ──────────────────────────────── */
function ApplySection() {
  return (
    <section id="apply" className="py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] border-2 border-white/20 bg-white/5 backdrop-blur-xl">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#55B000]/15 via-transparent to-[#3b82f6]/10 pointer-events-none" />
          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 flex flex-col gap-5">
              <Tag color="green">Free Enrollment Open</Tag>
              <h2
                className="text-white font-black leading-tight"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                  textShadow: "0 4px 40px rgba(0,0,0,.4)",
                }}
              >
                Start Your Journey Today —<br />
                <span className="text-[#a8e063]">Apply for Free Training</span>
              </h2>
              <p className="text-white/65 text-base leading-relaxed max-w-lg" style={{ fontFamily: "'Inter',sans-serif" }}>
                Seats are limited per batch. Register now to secure your spot in the next training cycle. All you need is your Aadhaar and Class 8 marksheet.
              </p>
              <div className="flex flex-wrap gap-3">
                <Pill icon="✓" text="No Fees" />
                <Pill icon="✓" text="Stipend Provided" />
                <Pill icon="✓" text="Placement Support" />
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full lg:w-auto">
              <div className="flex flex-col gap-3 w-full lg:w-80">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full rounded-xl border border-white/30 bg-transparent text-white placeholder:text-white/40 px-5 py-3.5 text-sm focus:outline-none focus:border-white/60"
                  style={{ fontFamily: "'Inter',sans-serif" }}
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full rounded-xl border border-white/30 bg-transparent text-white placeholder:text-white/40 px-5 py-3.5 text-sm focus:outline-none focus:border-white/60"
                  style={{ fontFamily: "'Inter',sans-serif" }}
                />
                <select
                  className="w-full rounded-xl border border-white/30 bg-[#1b2316] text-white/70 px-5 py-3.5 text-sm focus:outline-none focus:border-white/60 appearance-none"
                  style={{ fontFamily: "'Inter',sans-serif" }}
                >
                  <option value="">Select Training Sector</option>
                  <option>IT & ITeS</option>
                  <option>Healthcare</option>
                  <option>Automotive</option>
                  <option>Construction</option>
                  <option>Agriculture</option>
                  <option>Retail & Sales</option>
                </select>
                <button className="w-full rounded-xl bg-[#55B000] hover:bg-[#4a9900] text-white font-bold py-4 text-base transition-colors" style={{ fontFamily: "'Inter',sans-serif" }}>
                  Submit Application
                </button>
              </div>
              <p className="text-white/30 text-xs text-center" style={{ fontFamily: "'Inter',sans-serif" }}>
                Helpline: 1800-123-9626 (Toll-Free)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: "#1b2316", fontFamily: "'Inter',sans-serif" }}>

      {/* ── SECTION 1: NAVBAR ──────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 backdrop-blur-md bg-[#1b2316]/80 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#55B000]/30 border border-[#55B000]/40 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a8e063" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-white font-black text-lg opacity-85" style={{ fontFamily: "'Inter',sans-serif" }}>
            Mera Kaam<span className="text-[#a8e063]">.</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[["Home","#home"],["About","#about"],["Phases","#phases-overview"],["Sectors","#sectors"],["Stories","#stories"],["Apply","#apply"]].map(([label, href]) => (
            <a key={label} href={href} className="text-white/70 font-medium text-sm hover:text-white transition-colors" style={{ fontFamily: "'Inter',sans-serif" }}>
              {label}
            </a>
          ))}
        </div>
        <a href="#apply" className="hidden md:block rounded-xl border border-white/50 px-5 py-2 text-white font-semibold text-sm hover:bg-white/10 transition-colors" style={{ fontFamily: "'Inter',sans-serif" }}>
          Apply Free →
        </a>
        <button className="md:hidden flex flex-col gap-[5px]" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-0.5 bg-white/70 rounded-full" />
          <span className="block w-4 h-0.5 bg-white/70 rounded-full" />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-[#1b2316]/95 backdrop-blur-md border-b border-white/10 px-8 py-6 flex flex-col gap-4 md:hidden">
          {[["Home","#home"],["About","#about"],["Phases","#phases-overview"],["Sectors","#sectors"],["Stories","#stories"],["Apply","#apply"]].map(([label, href]) => (
            <a key={label} href={href} className="text-white/80 font-medium text-base" onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Inter',sans-serif" }}>
              {label}
            </a>
          ))}
        </div>
      )}

      {/* ── SECTION 2: HERO ────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMG.hero} alt="Skill training session" className="w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b2316] via-[#1b2316]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b2316] via-transparent to-[#1b2316]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#55B000] animate-pulse" />
              <span className="text-[#a8e063] font-semibold text-sm tracking-wider uppercase" style={{ fontFamily: "'Inter',sans-serif" }}>
                Government of India — Skill India Mission
              </span>
            </div>
            <h1
              className="text-white font-black leading-[1.05]"
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "clamp(2.8rem,6vw,5.5rem)",
                textShadow: "0 4px 40px rgba(0,0,0,0.5)",
              }}
            >
              Mera Kaam<br />
              <span className="text-[#a8e063]">Meri Pehchaan</span>
            </h1>
            <p className="text-white/70 font-medium text-lg leading-relaxed max-w-xl" style={{ fontFamily: "'Inter',sans-serif" }}>
              My Work is My Identity. A flagship Government of India skill development and employment generation programme — providing free vocational training, monthly stipends, NSQF certification, and placement support to unemployed youth across all 28 states.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#apply" className="rounded-2xl border-2 border-white/70 px-8 py-4 text-white font-semibold text-base hover:bg-white/10 transition-colors" style={{ fontFamily: "'Inter',sans-serif" }}>
                Enroll Free
              </a>
              <a href="#phases-overview" className="flex items-center gap-3 text-white/70 font-medium text-base hover:text-white transition-colors" style={{ fontFamily: "'Inter',sans-serif" }}>
                <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">▶</span>
                View Phases
              </a>
            </div>
            {/* Stats strip */}
            <div className="flex flex-wrap gap-0 divide-x divide-white/10 mt-2 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl overflow-hidden self-start">
              {[["5L+","Beneficiaries"],["28","States"],["85%","Placement"],["100%","Free"]].map(([val, lbl]) => (
                <div key={lbl} className="px-6 py-4 text-center">
                  <p className="text-white font-black text-xl" style={{ fontFamily: "'Inter',sans-serif" }}>{val}</p>
                  <p className="text-white/50 text-xs mt-0.5" style={{ fontFamily: "'Inter',sans-serif" }}>{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero side card */}
          <div className="flex justify-center lg:justify-end">
            <Glass className="w-full max-w-sm overflow-hidden">
              <div className="relative h-52 overflow-hidden rounded-t-3xl">
                <img src={IMG.cert} alt="Certification ceremony" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2316]/60 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-[#55B000]/80 backdrop-blur-sm px-3 py-1">
                  <span className="text-white text-xs font-semibold">NSQF Certified</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "'Inter',sans-serif" }}>Phase IV — 2023–2025</p>
                <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Inter',sans-serif" }}>Scale & Sustain Initiative</h3>
                <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>Pan-India rollout targeting 5 Lakh+ beneficiaries. DigiLocker-based digital certification and enhanced placement linkages.</p>
                <div className="mt-2 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[#a8e063] font-semibold text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>5,00,000+ Target</span>
                  <a href="#apply" className="rounded-xl border border-white/50 px-4 py-2 text-white text-xs font-semibold hover:bg-white/10 transition-colors">Apply →</a>
                </div>
              </div>
            </Glass>
          </div>
        </div>
      </section>

      {/* ── SECTIONS 3–4: ABOUT + VISION ──────────────────────── */}
      <AboutSection />
      <VisionSection />

      {/* ── SECTION 5: KEY BENEFITS ────────────────────────────── */}
      <BenefitsSection />

      {/* ── SECTION 6: PHASES OVERVIEW ─────────────────────────── */}
      <PhasesOverviewSection />

      {/* ── SECTIONS 7–10: PHASE DETAILS ───────────────────────── */}
      <PhaseDetailSection
        num="01"
        title="Phase I — Foundation: Building the Groundwork"
        period="2020 – 2021"
        img={IMG.workshop}
        tag="Foundation Phase"
        tagColor="green"
        description="Phase I established the operational framework of MKMPC with pilot training centres across 15 states. The focus was on mobilising unemployed youth through CSC outreach and establishing tie-ups with NSDC-affiliated training partners."
        points={[
          "100+ training centres operationalised across 15 states",
          "Core sectors: IT, Construction, Healthcare, and Retail",
          "Minimum 200-hour NSQF-aligned curricula standardised",
          "Aadhaar-based enrollment and DBT stipend disbursement introduced",
          "Assessment conducted by NSDC-empanelled Assessment Agencies",
        ]}
        highlight={[
          { value: "50,000+", label: "Beneficiaries" },
          { value: "15", label: "States" },
          { value: "4", label: "Sectors" },
        ]}
      />
      <PhaseDetailSection
        num="02"
        title="Phase II — Expansion: Reaching Every District"
        period="2021 – 2022"
        img={IMG.training2}
        tag="Expansion Phase"
        tagColor="blue"
        description="Phase II significantly scaled the programme — extending to 22 states, adding 6 new sectors, and integrating State Skill Development Missions as co-implementing agencies. Placement linkages with major corporates were formalised."
        points={[
          "Coverage expanded to 22 states and 4 union territories",
          "6 new sectors added: Automotive, Agriculture, Tourism, Electronics, Apparel, Plumbing",
          "Dedicated placement cells established at each training centre",
          "Women & SC/ST candidates given priority batch allocation",
          "Monthly stipend increased to ₹1,500 with transport allowance",
        ]}
        highlight={[
          { value: "1.5L+", label: "Beneficiaries" },
          { value: "22", label: "States" },
          { value: "10", label: "Sectors" },
        ]}
      />
      <PhaseDetailSection
        num="03"
        title="Phase III — Consolidation: Quality & Placement"
        period="2022 – 2023"
        img={IMG.classroom}
        tag="Consolidation Phase"
        tagColor="amber"
        description="Phase III focussed on quality improvement, placement outcomes, and introduction of Recognition of Prior Learning (RPL). An 85%+ placement rate was achieved, with post-placement tracking introduced for 12 months."
        points={[
          "RPL (Recognition of Prior Learning) launched for existing workers",
          "85%+ placement rate achieved within 90 days of certification",
          "Post-placement support team introduced for 12-month tracking",
          "ESIC health coverage and EPFO registration mandatory for placed candidates",
          "DigiLocker-based digital certificate issuance piloted",
        ]}
        highlight={[
          { value: "3L+", label: "Beneficiaries" },
          { value: "28", label: "States" },
          { value: "85%", label: "Placed" },
        ]}
      />
      <PhaseDetailSection
        num="04"
        title="Phase IV — Scale & Sustain: Pan-India Impact"
        period="2023 – 2025"
        img={IMG.training4}
        tag="Scale & Sustain"
        tagColor="green"
        description="Phase IV achieves full national scale with 500+ training partners, enhanced focus on women empowerment, SC/ST inclusion, and digital-first delivery. DigiLocker certificates are now universally issued to all successful candidates."
        points={[
          "500+ NSDC-affiliated training partners across all 28 states + UTs",
          "DigiLocker-based digital certification for all successful candidates",
          "30% seats reserved for women; 25% for SC/ST candidates",
          "Entrepreneurship pathway introduced alongside employment placement",
          "Real-time monitoring dashboard for state governments and NSDC",
        ]}
        highlight={[
          { value: "5L+", label: "Target" },
          { value: "500+", label: "Centres" },
          { value: "30+", label: "Job Roles" },
        ]}
      />

      {/* ── SECTION 11: SECTORS ─────────────────────────────────── */}
      <SectorsSection />

      {/* ── SECTION 12: ELIGIBILITY ─────────────────────────────── */}
      <EligibilitySection />

      {/* ── SECTION 13: IMPACT ──────────────────────────────────── */}
      <ImpactSection />

      {/* ── SECTION 14: TESTIMONIALS ────────────────────────────── */}
      <TestimonialsSection />

      {/* ── SECTION 15: PARTNERS ────────────────────────────────── */}
      <PartnersSection />

      {/* ── SECTION 16: FAQ ─────────────────────────────────────── */}
      <FaqSection />

      {/* ── SECTION 17: APPLY CTA ───────────────────────────────── */}
      <ApplySection />

      {/* ── SECTION 18: FOOTER ──────────────────────────────────── */}
      <footer className="pt-16 pb-10 px-6 md:px-16" style={{ backgroundColor: "#151d11" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
            {/* Brand */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#55B000]/30 border border-[#55B000]/40 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a8e063" strokeWidth="2.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-white font-black text-2xl" style={{ fontFamily: "'Inter',sans-serif" }}>
                  Mera Kaam Meri Pehchaan<span className="text-[#a8e063]">.</span>
                </span>
              </div>
              <p className="text-white font-medium text-sm leading-relaxed max-w-sm" style={{ fontFamily: "'Inter',sans-serif" }}>
                A Government of India flagship programme for free vocational skill training and employment generation. Jointly implemented by NSDC and State Skill Development Missions.
              </p>
              <div className="flex gap-5 mt-1">
                {["FB","TW","YT"].map(s => (
                  <a key={s} href="#" className="text-white font-extrabold text-base hover:text-[#a8e063] transition-colors" style={{ fontFamily: "'Inter',sans-serif" }}>{s}</a>
                ))}
              </div>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-extrabold text-base mb-2" style={{ fontFamily: "'Inter',sans-serif" }}>Quick Links</h4>
              {["Home","About","Programme Phases","Training Sectors","Eligibility","Contact Us","Privacy Policy"].map(l => (
                <a key={l} href="#" className="text-white/60 font-medium text-sm hover:text-white transition-colors" style={{ fontFamily: "'Inter',sans-serif" }}>{l}</a>
              ))}
            </div>
            {/* Newsletter */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-extrabold text-base mb-2" style={{ fontFamily: "'Inter',sans-serif" }}>Stay Updated</h4>
              <p className="text-white/50 text-xs leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
                Get notified about new training batches, sectors, and enrolment deadlines.
              </p>
              <div className="relative mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border-2 border-white/30 bg-transparent text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60"
                  style={{ fontFamily: "'Inter',sans-serif" }}
                />
                <button className="mt-2 w-full rounded-xl bg-[#55B000] hover:bg-[#4a9900] text-white font-semibold text-sm py-3 transition-colors" style={{ fontFamily: "'Inter',sans-serif" }}>
                  Subscribe
                </button>
              </div>
              <p className="text-white/30 text-xs" style={{ fontFamily: "'Inter',sans-serif" }}>Helpline: 1800-123-9626 (Toll-Free)</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-white/30 text-xs" style={{ fontFamily: "'Inter',sans-serif" }}>
              © 2025 Mera Kaam Meri Pehchaan. Government of India. All Rights Reserved.
            </p>
            <p className="text-white/20 text-xs" style={{ fontFamily: "'Inter',sans-serif" }}>
              Implemented by NSDC | Quality by NSDA | Certificates via DigiLocker
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
