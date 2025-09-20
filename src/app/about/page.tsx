"use client";
import React from 'react';
import aboutContent from './aboutContent.json';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { THEME } from '../theme';




// --- NEW LAYOUT ---
                        // Removed unused AboutPage function


// Removed duplicate default export

// --- NEW LAYOUT ---


const About = () => (
        <main className={`min-h-screen px-2 sm:px-0 py-8 md:py-16 ${THEME.mainBg} ${THEME.mainText} font-body flex flex-col items-center justify-center`}>
            {/* Top: Two-column intro/profile with card and highlight */}
            <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24">
                <div className={`bg-white/5 rounded-2xl shadow-lg p-10 md:p-14 flex flex-col items-start border border-neutral-800 md:mt-10`}>
                    <h2 className={`text-4xl md:text-5xl font-extrabold font-display ${THEME.headingText} mb-4 tracking-tight`}>
                        {aboutContent.profile.introHeading}
                    </h2>
                    <p className={`text-xl md:text-2xl ${THEME.bodyText} leading-relaxed mb-6`}>
                        {aboutContent.profile.introText}
                    </p>
                    <div className="flex space-x-4 mt-2">
                        <a href={aboutContent.profile.github} target="_blank" rel="noopener noreferrer" className={THEME.link}><FaGithub size={32} /></a>
                        <a href={aboutContent.profile.linkedin} target="_blank" rel="noopener noreferrer" className={THEME.link}><FaLinkedin size={32} /></a>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-end w-full md:-mt-10">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#6d3b2c] to-[#bfae9e] border-4 border-white/20 shadow-2xl flex items-center justify-center text-7xl font-bold text-white mb-6">
                        {aboutContent.profile.avatarInitials}
                    </div>
                    <div className="text-center md:text-right">
                        <p className={`text-lg ${THEME.bodyText}`}>{aboutContent.profile.location}</p>
                        <p className={`text-lg ${THEME.bodyText}`}>{aboutContent.profile.availability}</p>
                    </div>
                </div>
            </section>
    <div className="w-full max-w-5xl mx-auto border-t border-neutral-800 my-16" />

            {/* Middle: Story & Skills as staggered cards */}
            <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                <div className={`${THEME.cardBg} ${THEME.card} p-10 md:p-14 rounded-2xl shadow-lg border border-neutral-800 flex flex-col min-h-[340px] md:mt-10`}>
                    <h3 className={`text-2xl font-bold ${THEME.headingText} mb-4`}>
                        {aboutContent.story.heading}
                    </h3>
                    {aboutContent.story.paragraphs.map((para, idx) => (
                        <p key={idx} className={`text-lg md:text-xl ${THEME.bodyText} mb-6 last:mb-0`}>
                            {para}
                        </p>
                    ))}
                </div>
                <div className={`${THEME.cardBg} ${THEME.card} p-10 md:p-14 rounded-2xl shadow-lg border border-neutral-800 flex flex-col min-h-[340px] md:-mt-10`}>
                    <h3 className={`text-2xl md:text-3xl font-bold ${THEME.headingText} mb-4`}>
                        {aboutContent.skills.heading}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {aboutContent.skills.categories.map((cat) => (
                                        <div key={cat.title}>
                                <h4 className={`font-semibold ${THEME.subheadingText} mb-2`}>{cat.title}</h4>
                                <ul className={`list-disc list-inside ${THEME.bodyText}`}>
                                    {cat.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom: Education & Connect in grid with card backgrounds */}
            <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                <div className={`${THEME.sectionNarrow} flex flex-col items-center justify-center bg-white/5 rounded-2xl shadow-lg border border-neutral-800 p-10 md:p-14 md:mt-10`}>
                    <h3 className={`text-2xl md:text-3xl font-bold ${THEME.headingText} mb-4 text-center`}>
                        {aboutContent.education.heading}
                    </h3>
                    <div className="w-full grid grid-cols-1 gap-6">
                                    {aboutContent.education.degrees.map((deg) => (
                                        <div key={deg.title}>
                                <h4 className={`font-semibold ${THEME.subheadingText} mb-2`}>{deg.title}</h4>
                                <p className={`${THEME.bodyText}`}>{deg.institution} ({deg.date})</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${THEME.sectionNarrow} flex flex-col items-center justify-center ${THEME.ctaBg} rounded-2xl shadow-lg border border-neutral-800 p-10 md:p-14 md:-mt-10`}>
                    <h3 className={`text-2xl md:text-3xl font-bold ${THEME.subheadingText} mb-4 text-center`}>
                        {aboutContent.contact.heading}
                    </h3>
                    <p className={`text-lg ${THEME.bodyText} mb-6 text-center`}>
                        {aboutContent.contact.text}
                    </p>
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href={aboutContent.contact.github} target="_blank" rel="noopener noreferrer" className={THEME.link}><FaGithub size={32} /></a>
                        <a href={aboutContent.contact.linkedin} target="_blank" rel="noopener noreferrer" className={THEME.link}><FaLinkedin size={32} /></a>
                    </div>
                    <Link href={aboutContent.contact.contactButton.href} className={`inline-block px-6 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105 ${THEME.ctaBtn}`}>
                        {aboutContent.contact.contactButton.label}
                    </Link>
                </div>
            </section>
    </main>
);

export default About;