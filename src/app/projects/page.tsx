"use client";

import React, { useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaGithub, FaCode, FaServer, FaCloud } from 'react-icons/fa';

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

const projects = [
  {
    title: 'Brisbane Badminton Center',
    subtitle: 'Full-Stack Web Application',
    description:
      'A production-grade court booking platform built for a Brisbane sports facility. Users can view real-time court availability, book time slots, and manage their bookings — all through a clean, responsive interface. The system is backed by cloud storage and deployed on Vercel for global performance.',
    url: 'https://www.badmintonbrisbane.com.au/',
    github: null,
    tags: ['Next.js', 'React', 'TailwindCSS', 'Cloud Storage', 'Vercel'],
    highlights: [
      'Real-time court availability & booking management',
      'Mobile-responsive with optimised performance',
      'Cloud-backed infrastructure, Vercel deployment',
    ],
    icon: 'code',
    status: 'Live',
    year: '2024',
  },
];

const IconMap: Record<string, React.ReactNode> = {
  code:   <FaCode   size={22} className="text-white" />,
  server: <FaServer size={22} className="text-white" />,
  cloud:  <FaCloud  size={22} className="text-white" />,
};

export default function ProjectsPage() {
  const s1 = useFadeIn();

  return (
    <div className="font-body min-h-screen">

      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 dot-grid">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-slate-100 font-display mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Projects & Work
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed font-body">
            A curated selection of projects I&apos;ve built — from full-stack web applications
            to cloud-deployed services.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        ref={s1 as React.RefObject<HTMLElement>}
        className="fade-section py-16 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-hover rounded-2xl overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-5 mb-5">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                  >
                    {IconMap[project.icon]}
                  </div>

                  {/* Title block */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center flex-wrap gap-3 mb-1">
                      <h2 className="text-xl font-bold text-slate-100 font-display">
                        {project.title}
                      </h2>
                      <span
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full font-body"
                        style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399' }}
                      >
                        {project.status}
                      </span>
                      <span
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full font-body"
                        style={{ background: 'rgba(148,163,184,0.08)', color: '#94a3b8' }}
                      >
                        {project.year}
                      </span>
                    </div>
                    <p className="text-indigo-400 text-sm font-medium font-body">{project.subtitle}</p>
                  </div>

                  {/* External links */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-slate-200 transition-colors"
                        aria-label="GitHub repository"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                      aria-label="View live project"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-5 font-body text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-slate-400 font-body">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#6366f1' }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Footer action */}
              <div
                className="px-6 sm:px-8 py-4 border-t flex items-center justify-between"
                style={{ borderColor: 'rgba(255,255,255,0.04)' }}
              >
                <span className="text-slate-500 text-xs font-body">Deployed & live</span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors font-body"
                >
                  Visit Live Site <FaExternalLinkAlt size={11} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* More projects note */}
        <div className="max-w-5xl mx-auto mt-10 text-center">
          <p className="text-slate-500 text-sm font-body">
            More projects in progress · Visit{' '}
            <a
              href="https://github.com/saikumargurugu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              GitHub
            </a>{' '}
            to see all repositories
          </p>
        </div>
      </section>
    </div>
  );
}
