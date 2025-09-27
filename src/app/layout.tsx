"use client"; // Ensure this is a client-side component FaMoon, FaSun,

import React, { useState } from 'react';
import './globals.css';
import ThemeSwitcher from './ThemeSwitcher';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from './siteConfig';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Sai Kumar Gurugubelli - Freelance Web Developer</title>
            </head>
            <body className="bg-transparent text-white transition-colors duration-300 flex flex-col min-h-screen items-center justify-center">
        <header className="sticky top-0 z-50 shadow-xl rounded-b-2xl transition-colors duration-300 bg-green-900 backdrop-blur-md border-b border-green-700 w-[90vw] max-w-6xl mx-auto">
          <nav className="flex justify-between items-center w-full py-3 px-2 sm:px-6">
                        {/* Brand and theme switcher removed as requested */}
                        <div className="hidden md:flex space-x-4 md:space-x-6 text-lg font-medium items-center w-full justify-center">
                          {navLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className={`py-2 px-3 rounded-lg transition-colors duration-200 font-bold ${pathname === link.href ? 'bg-green-900 text-white' : 'text-green-300 hover:bg-green-800 hover:text-white'}`}
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
                        <div className={`md:hidden absolute left-0 right-0 top-full w-full z-50 ${menuOpen ? 'block' : 'hidden'} bg-green-900 py-4 rounded-b-2xl shadow-md transition-all duration-300`}>
                            <div className="flex flex-col items-center space-y-4 text-lg font-medium">
                              {navLinks.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className={`py-2 px-3 rounded-lg transition-colors duration-200 font-bold w-full text-center ${pathname === link.href ? 'bg-green-800 text-white' : 'text-green-300 hover:bg-green-800 hover:text-white'}`}
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                        </div>
                </header>
                    <main className="w-full max-w-4xl flex flex-col items-center justify-center px-4 py-8 font-body">
                    {children}
                </main>
            </body>
        </html>
    );

  }