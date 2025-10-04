"use client"; // Ensure this is a client-side component FaMoon, FaSun,

import React, { useState, useEffect, useRef } from 'react';
import caGif from './assets/ca.gif';
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
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  // Draggable GIF state and handlers
  const [gifPos, setGifPos] = useState({ x: 16, y: 16 });
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  function handleGifMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    setDragging(true);
    dragOffset.current = {
      x: e.clientX - gifPos.x,
      y: e.clientY - gifPos.y,
    };
    document.body.style.userSelect = 'none';
  }
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!dragging) return;
      setGifPos({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    }
    function handleMouseUp() {
      setDragging(false);
      document.body.style.userSelect = '';
    }
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  // Hide nav on scroll down, show on scroll up
  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = currentY;
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        {/* Galaxy Starfield Background */}
        <div className="absolute top-0 left-0 w-full h-64 z-40 pointer-events-none">
          <div className="galaxy-starfield" />
        </div>
        {/* Brand GIF always visible in top left, draggable and grows on hover */}
        <div
          className={`fixed z-[100] cursor-move transition-transform duration-200 ${dragging ? 'pointer-events-none' : ''}`}
          style={{
            left: gifPos.x,
            top: gifPos.y,
            width: '10vw',
            height: '10vw',
            minWidth: 68,
            minHeight: 68,
            maxWidth: 226,
            maxHeight: 226,
            transform: dragging ? 'scale(1.15)' : undefined,
          }}
          onMouseDown={handleGifMouseDown}
        >
          <img
            src={caGif.src ?? caGif}
            alt="Brand"
            style={{ width: '100%', height: '100%' }}
            className="object-contain rounded-full shadow-md transition-transform duration-200 hover:scale-125"
            draggable={false}
          />
        </div>
  <header className={`sticky top-0 z-50 shadow-xl rounded-b-2xl transition-transform duration-300 bg-gradient-to-br from-[#0a0a23] via-[#1a1a40] to-[#2d0036] backdrop-blur-md border-b border-purple-900/60 w-[90vw] max-w-6xl mx-auto ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
          <nav className="h-auto flex justify-between items-center w-full py-3 px-2 sm:px-6 bg-transparent galaxy-stars-move">
            <div className="hidden md:flex space-x-4 md:space-x-6 text-lg font-medium items-center w-full justify-center backdrop-blur-sm rounded-xl px-2 py-1 bg-transparent relative">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 px-4 rounded-lg transition-all duration-300 font-bold relative overflow-hidden
                    ${pathname === link.href
                      ? 'text-pink-300 border-b-4 border-pink-400'
                      : 'text-pink-200 hover:text-pink-300 hover:border-b-4 hover:border-pink-400'}
                  `}
                >
                  <span className="relative z-10">{link.name}</span>
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
                    {/* Mobile Menu Items */}
            <div
              ref={mobileMenuRef}
              className={`md:hidden rounded-t-3xl  border-purple-900 animate-bounceIn 
                absolute left-0 right-0 top-full w-full z-50 overflow-hidden 
                transition-[max-height,opacity] duration-500 
                ${menuOpen ? 'max-h-96 opacity-100 animate-bounceIn bg-gradient-to-br from-[#0a0a23] via-[#1a1a40] to-[#2d0036]' : 'max-h-0 opacity-0 bg-[#3b0764]'}`}
            >
              <div className="flex flex-col items-center space-y-5 text-xl font-bold rounded-b-2xl shadow-2xl py-6 w-full bg-gradient-to-br from-[#0a0a23] via-[#1a1a40] to-[#2d0036]">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 px-6 rounded-2xl transition-all duration-300 font-bold w-full text-center relative overflow-hidden tracking-widest
                      ${pathname === link.href
                        ? 'text-pink-300 border-b-4 border-pink-400'
                        : 'text-pink-200 hover:text-pink-300 hover:border-b-4 hover:border-pink-400'}
                    `}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="relative z-10 ">{link.name}</span>
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