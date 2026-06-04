"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import aboutContent from './aboutContent.json';

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

const categoryStyles: Record<string, { bg: string; text: string; border: string }> = {
  indigo:  { bg: 'rgba(99,102,241,0.1)',  text: '#a5b4fc', border: 'rgba(99,102,241,0.25)'  },
  sky:     { bg: 'rgba(56,189,248,0.1)',  text: '#7dd3fc', border: 'rgba(56,189,248,0.25)'  },
  emerald: { bg: 'rgba(52,211,153,0.1)',  text: '#6ee7b7', border: 'rgba(52,211,153,0.25)'  },
  amber:   { bg: 'rgba(251,191,36,0.1)',  text: '#fde68a', border: 'rgba(251,191,36,0.25)'  },
  pink:    { bg: 'rgba(244,114,182,0.1)', text: '#f9a8d4', border: 'rgba(244,114,182,0.25)' },
};

export default function AboutPage() {
  const s1 = useFadeIn();
  const s2 = useFadeIn();
  const s3 = useFadeIn();
  const s4 = useFadeIn();

  return (
    <div className="font-body min-h-screen">

      {/* ===== Hero / Intro ===== */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 dot-grid">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,102,241,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Bio */}
            <div>
              <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
                About Me
              </span>
              <h1
                className="text-4xl sm:text-5xl font-extrabold text-slate-100 font-display mb-3"
                style={{ letterSpacing: '-0.02em', lineHeight: 1.15 }}
              >
                {aboutContent.profile.name}
              </h1>
              <p className="text-indigo-400 font-medium text-lg mb-6 font-body">
                {aboutContent.profile.title}
              </p>
              <p className="text-slate-400 leading-relaxed mb-4 font-body">
                {aboutContent.profile.bio}
              </p>
              <p className="text-slate-400 leading-relaxed mb-8 font-body">
                {aboutContent.profile.bio2}
              </p>

              {/* Quick info chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="flex items-center gap-1.5 text-slate-400 text-sm font-body">
                  <FaMapMarkerAlt size={13} className="text-indigo-400" />
                  {aboutContent.profile.location}
                </span>
                <span className="flex items-center gap-1.5 text-slate-400 text-sm font-body">
                  <FaBriefcase size={13} className="text-indigo-400" />
                  {aboutContent.profile.availability}
                </span>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <a
                  href={aboutContent.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-slate-100 transition-all hover:-translate-y-0.5 font-body"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <FaGithub size={16} /> GitHub
                </a>
                <a
                  href={aboutContent.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-slate-100 transition-all hover:-translate-y-0.5 font-body"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <FaLinkedin size={16} /> LinkedIn
                </a>
                <a
                  href={`mailto:${aboutContent.profile.email}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-slate-100 transition-all hover:-translate-y-0.5 font-body"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <FaEnvelope size={16} /> Email
                </a>
              </div>
            </div>

            {/* Right: Avatar + highlights */}
            <div className="flex flex-col items-center lg:items-end gap-6">
              {/* Avatar */}
              <div
                className="w-40 h-40 rounded-3xl flex items-center justify-center text-5xl font-extrabold text-white font-display shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 0 60px rgba(99,102,241,0.25)',
                }}
              >
                {aboutContent.profile.avatarInitials}
              </div>

              {/* Highlights grid */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                {aboutContent.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-xl p-4"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1 font-body">{h.label}</div>
                    <div className="text-slate-100 text-sm font-semibold font-body">{h.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section
        ref={s1 as React.RefObject<HTMLElement>}
        className="fade-section py-20 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              What I Know
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-display"
              style={{ letterSpacing: '-0.02em' }}
            >
              {aboutContent.skills.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {aboutContent.skills.categories.map((cat) => {
              const styles = categoryStyles[cat.color] ?? categoryStyles.indigo;
              return (
                <div
                  key={cat.title}
                  className="rounded-2xl p-5"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <h3
                    className="text-sm font-bold uppercase tracking-wider mb-4 font-display"
                    style={{ color: styles.text }}
                  >
                    {cat.title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          background: styles.bg,
                          color: styles.text,
                          border: `1px solid ${styles.border}`,
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Values ===== */}
      <section
        ref={s2 as React.RefObject<HTMLElement>}
        className="fade-section py-20 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              How I Work
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-display"
              style={{ letterSpacing: '-0.02em' }}
            >
              My Engineering Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {aboutContent.values.map((v) => (
              <div
                key={v.title}
                className="glass-hover rounded-2xl p-6 text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl"
                  style={{ background: 'rgba(99,102,241,0.12)' }}
                >
                  {v.icon === 'shield' && '🛡️'}
                  {v.icon === 'zap'    && '⚡'}
                  {v.icon === 'users'  && '🤝'}
                </div>
                <h3 className="text-slate-100 font-semibold font-display text-base mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-body">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Education ===== */}
      <section
        ref={s3 as React.RefObject<HTMLElement>}
        className="fade-section py-20 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              Background
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-display"
              style={{ letterSpacing: '-0.02em' }}
            >
              {aboutContent.education.heading}
            </h2>
          </div>

          <div className="relative pl-10">
            <div className="timeline-line" />
            <div className="flex flex-col gap-8">
              {aboutContent.education.degrees.map((deg, i) => (
                <div key={i} className="relative">
                  <div className="timeline-dot" />
                  <div
                    className="rounded-2xl p-6"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                      <h3 className="text-slate-100 font-bold font-display text-base leading-snug">
                        {deg.title}
                      </h3>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 font-body"
                        style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc' }}
                      >
                        {deg.date}
                      </span>
                    </div>
                    <p className="text-indigo-400 text-sm font-medium mb-2 font-body">
                      {deg.institution} · {deg.location}
                    </p>
                    <p className="text-slate-500 text-sm font-body">{deg.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        ref={s4 as React.RefObject<HTMLElement>}
        className="fade-section py-20 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-display mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8 font-body">
            Whether you need a backend architect, a full-stack engineer, or someone who can own a product
            end-to-end — I&apos;m ready to contribute.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-gradient text-base">
              Get In Touch <FaArrowRight size={14} />
            </Link>
            <Link href="/projects" className="btn-outline text-base">
              View My Projects
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
