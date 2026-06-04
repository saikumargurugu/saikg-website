"use client";

import React, { useState, useEffect, useRef } from 'react';
import './globals.css';
import Loader from './Loader';
import VideoBackground from './VideoBackground';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { navLinks } from './siteConfig';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      if (currentY > lastScrollY.current && currentY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = currentY;
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sai Kumar Gurugubelli — Full-Stack Engineer</title>
        <meta name="description" content="Full-Stack Engineer specializing in Node.js, Django, React, and AWS. Building scalable backend systems and modern web applications. Based in Brisbane, Australia." />
        <meta property="og:title" content="Sai Kumar Gurugubelli — Full-Stack Engineer" />
        <meta property="og:description" content="Building production-grade web applications and scalable backend systems." />
      </head>
      <body className="font-body text-slate-100 min-h-screen overflow-x-hidden" style={{ background: '#050c18' }}>
        <VideoBackground />
        {/* Strong overlay so content is always readable */}
        <div className="fixed inset-0 z-0" style={{ background: 'rgba(5,12,24,0.82)' }} />

        {loading && <Loader />}

        {/* ===== Navigation ===== */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            showNav ? 'translate-y-0' : '-translate-y-full'
          } ${
            scrolled
              ? 'border-b border-white/[0.06] shadow-2xl shadow-black/60'
              : ''
          }`}
          style={scrolled ? { background: 'rgba(5,12,24,0.92)', backdropFilter: 'blur(20px)' } : {}}
        >
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm font-display"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                SK
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-semibold text-slate-100 text-sm group-hover:text-indigo-400 transition-colors leading-none block">
                  Sai Kumar
                </span>
                <span className="text-slate-500 text-xs leading-none block">Full-Stack Engineer</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-indigo-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  style={pathname === link.href ? { background: 'rgba(99,102,241,0.08)' } : {}}
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="nav-active-dot" />
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-3 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 20px rgba(99,102,241,0.2)' }}
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-slate-400 hover:text-slate-200 transition-colors p-2 rounded-lg hover:bg-white/5"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            ref={mobileMenuRef}
            className={`md:hidden absolute top-full left-0 right-0 border-b border-white/[0.06] transition-all duration-300 overflow-hidden ${
              menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ background: 'rgba(5,12,24,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-indigo-400 bg-indigo-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-white text-center"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                Hire Me
              </Link>
            </div>
          </div>
        </header>

        {/* ===== Main Content ===== */}
        <main className="relative z-10 pt-16">
          {!loading && children}
        </main>

        {/* ===== Footer ===== */}
        <footer className="relative z-10 border-t mt-24" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs font-display"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  SK
                </div>
                <span className="text-slate-400 text-sm">
                  Sai Kumar Gurugubelli
                </span>
              </div>
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/saikumargurugu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-200 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-kumar-gurugubelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="mailto:saikumar.gurugu@gmail.com"
                  className="text-slate-500 hover:text-slate-200 transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>
            <p className="text-center text-slate-600 text-xs mt-6">
              © {new Date().getFullYear()} Sai Kumar Gurugubelli · All rights reserved
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
