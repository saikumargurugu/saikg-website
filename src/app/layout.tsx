"use client"; // Ensure this is a client-side component
 

 import './globals.css';
 import { useState, useEffect } from 'react';
 import Link from 'next/link';
 import { usePathname } from 'next/navigation';
 import { FaGithub, FaLinkedin, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'; // Added FaBars and FaTimes
 

 export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility
 

  useEffect(() => {
  if (typeof window !== 'undefined') {
  const storedTheme = localStorage.getItem('theme');
  let initialDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
 

  if (storedTheme === 'dark') {
  initialDarkMode = true;
  } else if (storedTheme === 'light') {
  initialDarkMode = false;
  }
 

  setDarkMode(initialDarkMode);
 

  if (initialDarkMode) {
  document.documentElement.classList.add('dark');
  } else {
  document.documentElement.classList.remove('dark');
  }
  }
  }, []);
 

  useEffect(() => {
  if (typeof window !== 'undefined') {
  if (darkMode) {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  } else {
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');
  }
  }
  }, [darkMode]);
 

  const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  };
 

  const toggleMenu = () => {
  setMenuOpen(!menuOpen);
  };
 

  return (
  <html lang="en" className={darkMode ? 'dark' : ''}>
  <head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sai Kumar Gurugubelli - Freelance Web Developer</title>
  </head>
  <body className="bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-50 transition-colors duration-300">
  <header className="sticky top-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur dark:backdrop-blur-xl z-50 shadow-md dark:shadow-lg py-4 px-6 rounded-b-2xl transition-colors duration-300">
  <nav className="flex justify-between items-center max-w-6xl mx-auto">
  <Link
  href="/"
  className="text-2xl md:text-3xl font-extrabold text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors duration-300"
  >
  Sai Kumar Gurugubelli
  </Link>
  <div className="hidden md:flex space-x-4 md:space-x-6 text-lg font-medium items-center">
  <Link
  href="/"
  className={`py-2 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300 ${pathname === '/' ? 'text-blue-700 dark:text-blue-200' : ''
  }`}
  >
  Home
  </Link>
  <Link
  href="/about"
  className={`py-2 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300 ${pathname === '/about' ? 'text-blue-700 dark:text-blue-200' : ''
  }`}
  >
  About
  </Link>
  <Link
  href="/services"
  className={`py-2 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300 ${pathname === '/services' ? 'text-blue-700 dark:text-blue-200' : ''
  }`}
  >
  Services
  </Link>
  <Link
  href="/contact"
  className={`py-2 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300 ${pathname === '/contact' ? 'text-blue-700 dark:text-blue-200' : ''
  }`}
  >
  Contact
  </Link>
  <button
  onClick={toggleDarkMode}
  className="flex items-center py-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none transition-colors duration-300"
  >
  {darkMode ? <FaSun size={20} className="inline-block align-middle" /> : <FaMoon size={20} className="inline-block align-middle" />}
  </button>
  </div>
  {/* Mobile Menu Button */}
  <div className="md:hidden">
  <button onClick={toggleMenu} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none transition-colors duration-300">
  {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
  </button>
  </div>
  </nav>
  {/* Mobile Menu */}
  <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-800 py-4 rounded-b-2xl shadow-md dark:shadow-lg transition-all duration-300`}>
  <div className="flex flex-col items-center space-y-4 text-lg font-medium">
  <Link
  href="/"
  className={`py-2 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300 ${pathname === '/' ? 'text-blue-700 dark:text-blue-200' : ''
  }`}
  >
  Home
  </Link>
  <Link
  href="/about"
  className={`py-2 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300 ${pathname === '/about' ? 'text-blue-700 dark:text-blue-200' : ''
  }`}
  >
  About
  </Link>
  <Link
  href="/services"
  className={`py-2 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300 ${pathname === '/services' ? 'text-blue-700 dark:text-blue-200' : ''
  }`}
  >
  Services
  </Link>
  <Link
  href="/contact"
  className={`py-2 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300 ${pathname === '/contact' ? 'text-blue-700 dark:text-blue-200' : ''
  }`}
  >
  Contact
  </Link>
  <button
  onClick={toggleDarkMode}
  className="flex items-center py-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none transition-colors duration-300"
  >
  {darkMode ? <FaSun size={20} className="inline-block align-middle" /> : <FaMoon size={20} className="inline-block align-middle" />}
  </button>
  </div>
  </div>
  </header>
 

  <main className="min-h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
  {children}
  </div>
  </main>
 

  <footer className="bg-white dark:bg-gray-800 text-center py-4 text-gray-600 dark:text-gray-400 transition-colors duration-300">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="border-t border-gray-200 dark:border-gray-700 py-4 mt-8">
  <p className="text-sm">© {new Date().getFullYear()} Sai Kumar Gurugubelli. All rights reserved.</p> {/* Reduced font size on mobile */}
  </div>
  <div className="flex justify-center space-x-4 mt-4"> {/* Added mt-4 for spacing */}
  <a
  href="https://github.com/saikumargurugu"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
  >
  <FaGithub size={24} /> {/* Slightly smaller icons on mobile */}
  </a>
  <a
  href="https://www.linkedin.com/in/sai-kumar-gurugubelli/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
  >
  <FaLinkedin size={24} /> {/* Slightly smaller icons on mobile */}
  </a>
  </div>
  </div>
  </footer>
  </body>
  </html>
  );
 }