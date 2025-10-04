"use client"; // Ensure this is a client-side component FaMoon, FaSun,

import React, { useState, useEffect, useRef } from 'react';
import './globals.css';
import Loader from './Loader';
import VideoBackground from './VideoBackground';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from './siteConfig';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  // Close mobile menu on click outside
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
    // Simulate loading for 1.2s or until video is ready
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sai Kumar Gurugubelli - Freelance Web Developer</title>
      </head>
      <body className="bg-transparent text-white transition-colors duration-300 flex flex-col min-h-screen items-center justify-center relative overflow-x-hidden">
        <VideoBackground />
        {loading && <Loader />}
  <header className="sticky top-0 z-50 shadow-xl rounded-b-2xl transition-colors duration-300 bg-red-900 backdrop-blur-md border-b border-red-700 w-[90vw] max-w-6xl mx-auto">
          <nav className="flex justify-between items-center w-full py-3 px-2 sm:px-6 bg-transparent">
                        {/* Brand and theme switcher removed as requested */}
                        <div className="hidden md:flex space-x-4 md:space-x-6 text-lg font-medium items-center w-full justify-center !bg-transparent backdrop-blur-sm rounded-xl px-2 py-1" style={{background: 'transparent'}}>
                          {navLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className={`py-2 px-3 rounded-lg transition-colors duration-200 font-bold ${pathname === link.href ? 'bg-red-900 text-red-300' : 'text-red-300 hover:bg-red-800 hover:text-white'}`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                        {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-end w-full">
              <button onClick={toggleMenu} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none transition-colors duration-300">
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
                    </nav>
                    {/* Mobile Menu */}
            <div
              ref={mobileMenuRef}
              className={`md:hidden rounded-t-3xl border-4 border-red-800 animate-bounceIn 
                absolute left-0 right-0 top-full w-full z-50 overflow-hidden 
                transition-[max-height,opacity] duration-500 
                ${menuOpen ? 'max-h-96 opacity-100 animate-bounceIn bg-red-700/90' : 'max-h-0 opacity-0 bg-red-700/90'}`}
            >
              <div className="flex flex-col items-center space-y-4 text-lg font-medium rounded-b-2xl shadow-md py-4 w-full">
                              {navLinks.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className={`py-2 px-3 rounded-lg transition-colors duration-200 font-bold w-full text-center ${pathname === link.href ? 'bg-red-800 text-red-300' : 'text-red-300 hover:bg-red-800 hover:text-white'}`}
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                        </div>
                </header>
          <main className="w-[90vw] max-w-4xl flex flex-col items-center justify-center px-4 py-8 font-body relative z-10 bg-transparent">
          {!loading && children}
        </main>
            </body>
        </html>
    );

  }