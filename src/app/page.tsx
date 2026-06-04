"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  FaArrowRight, FaGithub, FaLinkedin, FaEnvelope,
  FaServer, FaCode, FaCloud, FaMobileAlt, FaExternalLinkAlt, FaRobot,
} from 'react-icons/fa';
import { homeContent } from './homeContent';

/* ===== Scroll fade hook ===== */
function useFadeIn() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ===== Rotating title ===== */
function RotatingTitle({ titles }: { titles: string[] }) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % titles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(id);
  }, [titles.length]);

  return (
    <span
      className="gradient-text"
      style={{
        display: 'inline-block',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-8px)',
      }}
    >
      {titles[idx]}
    </span>
  );
}

/* ===== Icon helper ===== */
function ServiceIcon({ name }: { name: string }) {
  const cls = 'text-indigo-400';
  if (name === 'server')  return <FaServer    size={22} className={cls} />;
  if (name === 'code')    return <FaCode      size={22} className={cls} />;
  if (name === 'cloud')   return <FaCloud     size={22} className={cls} />;
  if (name === 'mobile')  return <FaMobileAlt size={22} className={cls} />;
  if (name === 'ai')      return <FaRobot     size={22} className="text-pink-400" />;
  return null;
}

/* ===== Category color ===== */
function categoryColor(cat: string): string {
  const map: Record<string, string> = {
    backend:  'rgba(99,102,241,0.12)',
    language: 'rgba(139,92,246,0.12)',
    frontend: 'rgba(56,189,248,0.12)',
    cloud:    'rgba(251,146,60,0.10)',
    devops:   'rgba(52,211,153,0.10)',
    database: 'rgba(251,191,36,0.10)',
    tools:    'rgba(148,163,184,0.08)',
    ai:       'rgba(244,114,182,0.12)',
  };
  return map[cat] ?? 'rgba(99,102,241,0.08)';
}

function categoryTextColor(cat: string): string {
  const map: Record<string, string> = {
    backend:  '#a5b4fc',
    language: '#c4b5fd',
    frontend: '#7dd3fc',
    cloud:    '#fdba74',
    devops:   '#6ee7b7',
    database: '#fde68a',
    tools:    '#cbd5e1',
    ai:       '#f9a8d4',
  };
  return map[cat] ?? '#a5b4fc';
}

export default function HomePage() {
  const s1 = useFadeIn();
  const s2 = useFadeIn();
  const s3 = useFadeIn();
  const s4 = useFadeIn();

  return (
    <div className="font-body">

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 dot-grid">
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="flex justify-center mb-6">
            <span className="status-badge">
              <span className="status-dot" />
              {homeContent.hero.badge}
            </span>
          </div>

          {/* Greeting */}
          <p
            className="text-lg sm:text-xl text-slate-400 font-medium mb-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {homeContent.hero.greeting}
          </p>

          {/* Name */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 mb-4 leading-tight"
            style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
          >
            {homeContent.hero.name}
          </h1>

          {/* Rotating title */}
          <div
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
            style={{ fontFamily: 'Sora, sans-serif', minHeight: '2.5rem' }}
          >
            <RotatingTitle titles={homeContent.hero.titles} />
          </div>

          {/* Tagline */}
          <p
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {homeContent.hero.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link href={homeContent.hero.cta.primary.href} className="btn-gradient text-base">
              {homeContent.hero.cta.primary.text}
              <FaArrowRight size={14} />
            </Link>
            <Link href={homeContent.hero.cta.secondary.href} className="btn-outline text-base">
              {homeContent.hero.cta.secondary.text}
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5">
            <a
              href={homeContent.hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-200 transition-colors text-sm font-medium"
            >
              <FaGithub size={17} /> GitHub
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={homeContent.hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-200 transition-colors text-sm font-medium"
            >
              <FaLinkedin size={17} /> LinkedIn
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={`mailto:${homeContent.hero.email}`}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-200 transition-colors text-sm font-medium"
            >
              <FaEnvelope size={17} /> Email
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {homeContent.stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-3xl sm:text-4xl font-extrabold gradient-text font-display mb-1"
              >
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== TECH STACK ========== */}
      <section
        ref={s1 as React.RefObject<HTMLElement>}
        className="fade-section py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              Technical Skills
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-display"
              style={{ letterSpacing: '-0.02em' }}
            >
              {homeContent.stack.heading}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {homeContent.stack.items.map((item) => (
              <span
                key={item.name}
                style={{
                  background: categoryColor(item.category),
                  color: categoryTextColor(item.category),
                  border: `1px solid ${categoryTextColor(item.category)}33`,
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif',
                  transition: 'transform 0.2s',
                  display: 'inline-block',
                }}
                className="hover:scale-105 cursor-default"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHAT I BUILD ========== */}
      <section
        ref={s2 as React.RefObject<HTMLElement>}
        className="fade-section py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              Services
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-display mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              What I Build
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed font-body">
              From idea to deployment — I cover the full lifecycle of modern web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {homeContent.services.map((service) => (
              <div key={service.title} className="glass-hover p-6 rounded-2xl flex flex-col gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: service.icon === 'ai' ? 'rgba(244,114,182,0.12)' : 'rgba(99,102,241,0.12)' }}
                >
                  <ServiceIcon name={service.icon} />
                </div>
                <div>
                  <h3 className="text-slate-100 font-semibold font-display text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-body">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-1 mt-auto">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-slate-500 text-xs font-body">
                      <span className="w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED PROJECT ========== */}
      <section
        ref={s3 as React.RefObject<HTMLElement>}
        className="fade-section py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              Portfolio
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-display"
              style={{ letterSpacing: '-0.02em' }}
            >
              Featured Work
            </h2>
          </div>

          <div className="glass rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div
                className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                <FaCode size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-slate-100 font-display">
                    Brisbane Badminton Center
                  </h3>
                  <a
                    href="https://www.badmintonbrisbane.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors flex-shrink-0"
                    aria-label="View project"
                  >
                    <FaExternalLinkAlt size={15} />
                  </a>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 font-body">
                  A full-stack court booking platform for a Brisbane sports center — featuring real-time
                  availability, user authentication, and a clean admin dashboard. Deployed on Vercel with
                  cloud-backed infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'TailwindCSS', 'Cloud', 'Booking System'].map((tag) => (
                    <span key={tag} className="skill-tag text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t px-6 sm:px-8 py-4 flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <span className="text-slate-500 text-xs font-body">Live & deployed</span>
              <Link
                href="/projects"
                className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors flex items-center gap-1.5 font-body"
              >
                View all projects <FaArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section
        ref={s4 as React.RefObject<HTMLElement>}
        className="fade-section py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="rounded-3xl p-10 sm:p-14 border relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.08) 100%)',
              borderColor: 'rgba(99,102,241,0.2)',
            }}
          >
            {/* Glow blob */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'rgba(99,102,241,0.06)', filter: 'blur(40px)' }}
            />
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4 block font-body">
              Let&apos;s Collaborate
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-display mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              {homeContent.cta.heading}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-8 font-body">
              {homeContent.cta.subheading}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={homeContent.cta.primary.href} className="btn-gradient text-base">
                {homeContent.cta.primary.text}
                <FaArrowRight size={14} />
              </Link>
              <Link href={homeContent.cta.secondary.href} className="btn-outline text-base">
                {homeContent.cta.secondary.text}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
