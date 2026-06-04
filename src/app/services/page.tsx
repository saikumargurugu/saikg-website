"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaServer, FaCode, FaCloud, FaMobileAlt, FaRobot, FaArrowRight, FaCheck } from 'react-icons/fa';

function useFadeIn() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const services = [
  {
    icon: FaServer,
    label: 'Backend & APIs',
    title: 'Backend Development & API Architecture',
    description:
      'I design and build robust, scalable server-side systems that power production applications. My APIs are clean, well-documented, and built for performance — from design through deployment.',
    bullets: [
      'RESTful API design with Node.js & Django',
      'JWT / OAuth2 authentication systems',
      'Efficient database schema design',
      'Third-party API integrations',
      'API documentation (Swagger / Postman)',
    ],
    accentColor: '#6366f1',
    bgColor: 'rgba(99,102,241,0.08)',
  },
  {
    icon: FaCode,
    label: 'Full-Stack Web',
    title: 'Full-Stack Web Application Development',
    description:
      'End-to-end development of web applications — from UI/UX implementation in React & Next.js to the backend services and database layer. I own the full stack and deliver production-ready products.',
    bullets: [
      'React.js & Next.js with TypeScript',
      'Responsive, accessible UI design',
      'Performance optimisation & code splitting',
      'Server-side rendering & static generation',
      'SEO-friendly architecture',
    ],
    accentColor: '#38bdf8',
    bgColor: 'rgba(56,189,248,0.08)',
  },
  {
    icon: FaCloud,
    label: 'Cloud & DevOps',
    title: 'Cloud Deployment & DevOps',
    description:
      'I set up and manage cloud infrastructure on AWS, automate deployments with CI/CD pipelines, and containerise applications with Docker — ensuring your product ships fast and stays reliable.',
    bullets: [
      'AWS infrastructure (EC2, S3, Lambda, RDS)',
      'Docker containerisation & orchestration',
      'CI/CD pipeline setup (GitHub Actions)',
      'Environment management & secrets',
      'Monitoring & incident response',
    ],
    accentColor: '#34d399',
    bgColor: 'rgba(52,211,153,0.08)',
  },
  {
    icon: FaMobileAlt,
    label: 'Mobile Apps',
    title: 'Cross-Platform Mobile Development',
    description:
      'Building cross-platform mobile applications with React Native that deliver a native-quality experience on both iOS and Android — sharing a codebase while maintaining platform conventions.',
    bullets: [
      'React Native development',
      'iOS & Android compatible',
      'Native APIs & device features',
      'State management (Redux / Zustand)',
      'App Store & Play Store deployment',
    ],
    accentColor: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.08)',
  },
  {
    icon: FaRobot,
    label: 'AI-Assisted Dev',
    title: 'AI-Powered Development & LLM Integration',
    description:
      'I use Claude and GitHub Copilot as core tools in my daily workflow — accelerating feature delivery, improving code quality, and shipping smarter. I also integrate LLM APIs (Anthropic, OpenAI) to build AI-powered features into products.',
    bullets: [
      'Claude & GitHub Copilot workflows',
      'LLM API integration (Anthropic / OpenAI)',
      'Prompt engineering & fine-tuning',
      'AI-assisted code review & testing',
      'Faster delivery with higher quality',
    ],
    accentColor: '#f9a8d4',
    bgColor: 'rgba(244,114,182,0.08)',
  },
];

const process = [
  { step: '01', title: 'Discovery',    desc: 'Understand your requirements, tech constraints, and business goals.' },
  { step: '02', title: 'Architecture', desc: 'Design the system architecture, data models, and technology choices.' },
  { step: '03', title: 'Development',  desc: 'Iterative development with clean code, tests, and regular updates.' },
  { step: '04', title: 'Delivery',     desc: 'Deploy to production, document everything, and hand over with confidence.' },
];

export default function ServicesPage() {
  const s1 = useFadeIn();
  const s2 = useFadeIn();
  const s3 = useFadeIn();

  return (
    <div className="font-body min-h-screen">

      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 dot-grid">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            What I Offer
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-slate-100 font-display mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Services
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed font-body">
            Full-lifecycle web engineering — from architecture to deployment.
            I work as a collaborative partner, not just a code vendor.
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        ref={s1 as React.RefObject<HTMLElement>}
        className="fade-section py-16 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="glass-hover rounded-2xl p-7"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: svc.bgColor }}
                >
                  <Icon size={20} style={{ color: svc.accentColor }} />
                </div>

                <span
                  className="text-xs font-bold uppercase tracking-wider mb-2 block font-body"
                  style={{ color: svc.accentColor }}
                >
                  {svc.label}
                </span>

                <h2 className="text-xl font-bold text-slate-100 font-display mb-3 leading-snug">
                  {svc.title}
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed mb-5 font-body">
                  {svc.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-slate-400 font-body">
                      <FaCheck size={11} style={{ color: svc.accentColor, marginTop: '3px', flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section
        ref={s2 as React.RefObject<HTMLElement>}
        className="fade-section py-20 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              How I Work
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-display"
              style={{ letterSpacing: '-0.02em' }}
            >
              My Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <div
                key={p.step}
                className="rounded-2xl p-6 relative"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span
                  className="absolute top-5 right-5 text-4xl font-extrabold font-display opacity-10"
                  style={{ color: '#6366f1' }}
                >
                  {p.step}
                </span>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white mb-4 font-body"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  {i + 1}
                </div>
                <h3 className="text-slate-100 font-semibold font-display text-base mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-body">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={s3 as React.RefObject<HTMLElement>}
        className="fade-section py-20 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div
          className="max-w-3xl mx-auto text-center rounded-3xl p-10 sm:p-14 border"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))',
            borderColor: 'rgba(99,102,241,0.2)',
          }}
        >
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-display mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Ready to Start a Project?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-8 font-body">
            Whether you need a complete web application, a scalable API, or cloud infrastructure —
            let&apos;s talk about how I can help.
          </p>
          <Link href="/contact" className="btn-gradient text-base">
            Get In Touch <FaArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
