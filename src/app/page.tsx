    "use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaCode, FaRocket, FaPalette, FaDatabase } from 'react-icons/fa';
import { homeContent } from './homeContent';
import { THEME } from './theme';

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
  const [greeting, setGreeting] = useState(homeContent.hero.greeting);
  const [typedName, setTypedName] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setGreeting(homeContent.hero.altGreeting);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const name = homeContent.hero.name || '';
    if (!name) return;
    setTypedName('');
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedName(name.slice(0, i));
      if (i >= name.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [homeContent.hero.name]);

  const fade1 = useScrollFadeIn();
  const fade2 = useScrollFadeIn();
  const fade3 = useScrollFadeIn();
  const fade4 = useScrollFadeIn();
  const fade5 = useScrollFadeIn();
  return (
    <main className="min-h-screen px-2 sm:px-0 py-0 bg-transparent text-gray-900 dark:text-gray-100 font-body flex flex-col items-center justify-center">
      {/* HERO */}
  <section ref={fade1} className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-6 px-4 sm:px-0 mb-16 w-full flex-1">
  <h1 className="text-5xl sm:text-7xl font-extrabold font-display mb-2" style={{letterSpacing: '0.04em'}}>
    {typedName}
    <span className="inline-block w-2 h-8 bg-green-200 align-middle animate-pulse ml-1" style={{verticalAlign: '0.1em'}}></span>
  </h1>
  <p className={`text-xl sm:text-2xl max-w-2xl mx-auto font-body mb-4 ${THEME.bodyText}`}>
          {homeContent.hero.title}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link href={homeContent.hero.cta.href} className={`inline-flex items-center px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition duration-300 ${THEME.primaryBtn}`}>
            {greeting} <FaArrowRight className="ml-2" />
          </Link>
          <Link href={homeContent.hero.github.href} className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-bold shadow-md hover:scale-105 transition duration-300 ${THEME.secondaryBtn}`}>
            {homeContent.hero.github.text} <FaCode className="ml-2" />
          </Link>
        </div>
      </section>

      {/* ABOUT */}
  <section ref={fade5} className="max-w-3xl mx-auto mb-16 px-4 py-10 rounded-2xl shadow-2xl w-full flex flex-col items-center">
  <h2 className={`text-3xl sm:text-4xl font-extrabold font-display ${THEME.headingText} mb-4 text-center`}>{homeContent.about.heading}</h2>
  <p className={`text-lg ${THEME.bodyText} leading-relaxed mb-4 text-center`}>
          {homeContent.about.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {homeContent.about.skills.map((skill) => (
            <span key={skill} className={THEME.badge}>{skill}</span>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE ME */}
  <section ref={fade2} className="max-w-6xl mx-auto mb-16 px-4 w-full flex flex-col items-center">
    <h2 className={`text-3xl sm:text-4xl font-extrabold font-display ${THEME.headingText} mb-10 text-center`}>Why Choose Me?</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-fit mx-auto">
          {homeContent.whyChooseMe.map((item) => (
            <div key={item.title} className="rounded-2xl shadow-xl flex flex-col items-center justify-center p-8">
              {item.icon === 'palette' && <FaPalette size={48} className="text-green-300 mb-4" />}
              {item.icon === 'rocket' && <FaRocket size={48} className="text-green-300 mb-4" />}
              {item.icon === 'database' && <FaDatabase size={48} className="text-green-300 mb-4" />}
              <h3 className={`text-xl font-bold font-display ${THEME.subheadingText} mb-2`}>{item.title}</h3>
              <p className={`${THEME.bodyText} text-center mb-2`}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS / SERVICES */}
  <section ref={fade3} className="max-w-6xl mx-auto mb-16 px-4 w-full flex flex-col items-center">
    <h2 className={`text-3xl sm:text-4xl font-extrabold font-display ${THEME.headingText} mb-10 text-center`}>What I Am Good At</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-fit mx-auto">
          {homeContent.skills.map((skill) => (
            <div key={skill.title} className="rounded-2xl shadow-xl flex flex-col items-center justify-center p-8">
              <h3 className={`text-xl font-bold font-display ${THEME.subheadingText} mb-2`}>{skill.title}</h3>
              <p className={`${THEME.bodyText} text-center mb-2`}>{skill.description}</p>
              <ul className="list-disc list-inside text-green-200 mb-4">
                {skill.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <Link href={skill.link} className={THEME.link}>Learn More</Link>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT/CTA */}
  <section ref={fade4} className="max-w-3xl mx-auto mb-16 px-4 py-10 rounded-2xl shadow-2xl text-center w-full flex flex-col items-center">
  <h2 className={`text-3xl sm:text-4xl font-extrabold font-display ${THEME.subheadingText} mb-4`}>Let&apos;s Work Together</h2>
  <p className={`text-lg ${THEME.badgeText} mb-8`}>Ready to elevate your web presence? Let&apos;s build something powerful for your business.</p>
        <Link href={homeContent.hero.cta.href} className={`inline-flex items-center px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition duration-300 ${THEME.ctaBtn}`}>
          {homeContent.hero.cta.text} <FaArrowRight className="ml-2" />
        </Link>
      </section>
    </main>
  );
}
