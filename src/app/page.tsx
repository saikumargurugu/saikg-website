"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import {
  FaArrowRight,
  FaCode,
  FaRocket,
  FaPalette,
  FaDatabase,
} from 'react-icons/fa';

function useScrollFadeIn() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el?.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.1 }
    );
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);
  return ref;
}

export default function Home() {
  const [greeting, setGreeting] = useState("Hi, I'm Sai 👋");

  useEffect(() => {
    const timer = setTimeout(() => {
      setGreeting("Welcome! Let's build something amazing together.");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const fade1 = useScrollFadeIn();
  const fade2 = useScrollFadeIn();
  const fade3 = useScrollFadeIn();
  const fade4 = useScrollFadeIn();
  const fade5 = useScrollFadeIn();

  return (
    <main className="min-h-screen px-6 sm:px-10 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">

      {/* Hero Section */}
      <section
        ref={fade1}
        className="text-center mt-24 px-4 opacity-0 translate-y-10 transition duration-1000 ease-out"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-blue-700 dark:text-blue-200 drop-shadow-md leading-tight">
          Sai Kumar Gurugubelli
        </h2>
        <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-16 text-gray-700 dark:text-gray-300 font-light">
          A developer skilled in building robust backend solutions. My key skills include:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>API Development (RESTful)</li>
          <li>Database Management (MSSQL)</li>
          <li>Cloud Services (AWS)</li>
          <li>Backend Frameworks (Django, Node.js)</li>
        </ul>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white rounded-full text-lg font-semibold shadow-lg hover:scale-105 transform transition duration-300"
          >
            {greeting} <FaArrowRight className="ml-2" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-200 rounded-full text-lg font-semibold shadow-md hover:scale-105 transform transition duration-300"
          >
            My Work <FaCode className="ml-2" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={fade5}
        className="mt-24 py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-md px-8 sm:px-12 opacity-0 translate-y-10 transition duration-1000 ease-out"
      >
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-200 mb-8 text-center">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-first md:order-last flex items-center justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-blue-100 dark:bg-blue-700 rounded-full" >
              <img
                src="https://avatars.githubusercontent.com/u/47783993?s=96&v=4"
                alt="Sai Kumar Gurugubelli"
                className="w-full h-full rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="order-last md:order-first">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I&apos;m a backend-focused full-stack developer with a passion for crafting efficient and scalable web solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              My stack includes: JavaScript, TypeScript, Python, Django, Node.js, React.js, and more.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 px-6 py-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-700 text-blue-700 dark:text-blue-200 rounded-full hover:scale-105 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section
        ref={fade2}
        className="mt-24 py-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg opacity-0 translate-y-10 transition duration-1000 ease-out"
      >
        <h3 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-200 mb-12">
          Why Choose Me?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
            <FaPalette size={48} className="text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-2 text-center">
              Tailored Solutions
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-base text-center">
              I focus on understanding your unique needs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
            <FaRocket size={48} className="text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-2 text-center">
              Performance-Driven
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-base text-center">
              I build fast-loading, scalable applications.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
            <FaDatabase size={48} className="text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-2 text-center">
              Reliable Backend
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-base text-center">
              I ensure robust APIs and efficient data management.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={fade3}
        className="mt-24 max-w-6xl mx-auto px-4 opacity-0 translate-y-10 transition duration-1000 ease-out"
      >
        <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-200 mb-10 text-center">
          What I Am Good At
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
            <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Custom Web Application Development
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
              I develop tailored web applications for your needs.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
              <li>Full-stack with JavaScript, TypeScript, Python</li>
              <li>React.js, Node.js, Django</li>
              <li>Database design</li>
            </ul>
            <Link
              href="/services"
              className="text-blue-500 hover:text-blue-700 dark:text-white-300 dark:hover:text-blue-200 hover:underline transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
            <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              API Development
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
              I design RESTful APIs for data exchange.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
              <li>RESTful API design</li>
              <li>API documentation</li>
              <li>Third-party integration</li>
            </ul>
            <Link
              href="/services"
              className="text-blue-500 hover:text-blue-700 dark:text-white-300 dark:hover:text-blue-200 hover:underline transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
            <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Cloud & DevOps
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
              I can manage cloud hosting and deployment.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
              <li>AWS deployment</li>
              <li>Docker</li>
              <li>CI/CD pipelines</li>
            </ul>
            <Link
              href="/services"
              className="text-blue-500 hover:text-blue-700 dark:text-white-300 dark:hover:text-blue-200 hover:underline transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
            <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Front-End Development
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
              I build interactive user interfaces.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
              <li>React.js, React Native</li>
              <li>Responsive design</li>
              <li>UI/UX</li>
            </ul>
            <Link
              href="/services"
              className="text-blue-500 hover:text-blue-700 dark:text-white-300 dark:hover:text-blue-200 hover:underline transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        ref={fade4}
        className="mt-24 bg-blue-600 py-16 px-8 text-white text-center rounded-2xl shadow-xl opacity-0 translate-y-10 transition duration-1000 ease-out"
      >
        <h3 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Elevate Your Web Presence?
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Let&apos;s build a powerful online solution for your business.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-700 px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 transition duration-300"
        >
          Lets Get In Touch <FaArrowRight className="ml-2" />
        </Link>
      </section>
    </main>
  );
}
