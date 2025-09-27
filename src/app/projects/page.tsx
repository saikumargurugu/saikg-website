
import React from "react";
import { THEME } from '../theme';

const projects = [
  {
    title: "Brisbane Badminton Center",
    description:
      "A modern web app for booking and managing badminton courts in Brisbane. Built with Next.js, React, and cloud technologies for a seamless user experience.",
    url: "https://brisbanebadmintoncenter.vercel.app/",
    tags: ["Next.js", "React", "Cloud", "Booking", "TailwindCSS"],
    image: "/globe.svg",
  },
  // Add more projects here as needed
];

export default function ProjectsPage() {
  return (
    <main className={`min-h-screen py-12 px-4 md:px-8 ${THEME.mainBg} ${THEME.mainText}`}>
      <section className={`mb-12 text-center`}>
        <h1 className={`text-4xl md:text-5xl font-display font-extrabold mb-2 ${THEME.headingText} drop-shadow-lg`}>
          <span className="inline-block animate-pulse">Projects</span>
        </h1>
        <p className={`text-base md:text-lg ${THEME.bodyText} max-w-xl mx-auto mb-2`}>
          A showcase of my best work, built with modern tech and a focus on user experience.
        </p>
        <span className={`inline-block text-xs uppercase tracking-widest ${THEME.badgeText} font-bold mb-4`}>Selected Work</span>
      </section>
      <section className="flex justify-center">
        {projects.length === 1 ? (
          <div className="flex justify-center w-full">
            <div
              key={projects[0].title}
              className={`group flex flex-col items-center justify-between p-6 ${THEME.cardBg} ${THEME.card} hover:shadow-2xl border-2 border-green-900 transition-all duration-300 min-h-[320px] max-w-md w-full`}
            >
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-14 h-14 mb-3 rounded-full border-2 border-indigo-700 bg-white/10 shadow group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className={`text-xl font-bold font-display ${THEME.headingText} mb-1 group-hover:text-green-100 transition-colors duration-300`}>
                {projects[0].title}
              </h3>
              <p className={`${THEME.bodyText} text-center mb-3 text-sm min-h-[48px]`}>{projects[0].description}</p>
              <div className="flex flex-wrap gap-1 mb-3 justify-center">
                {projects[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 rounded ${THEME.badge} text-[11px] font-semibold tracking-wide group-hover:bg-green-900 group-hover:text-green-100 transition-colors duration-300`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={projects[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-1.5 ${THEME.primaryBtn} rounded-full text-sm font-bold shadow-md hover:scale-105 transition-all duration-300 mt-auto`}
              >
                Visit Project
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group flex flex-col items-center justify-between p-6 ${THEME.cardBg} ${THEME.card} hover:shadow-2xl border-2 border-green-900 transition-all duration-300 min-h-[320px]`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-14 h-14 mb-3 rounded-full border-2 border-indigo-700 bg-white/10 shadow group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className={`text-xl font-bold font-display ${THEME.headingText} mb-1 group-hover:text-green-100 transition-colors duration-300`}>
                  {project.title}
                </h3>
                <p className={`${THEME.bodyText} text-center mb-3 text-sm min-h-[48px]`}>{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded ${THEME.badge} text-[11px] font-semibold tracking-wide group-hover:bg-green-900 group-hover:text-green-100 transition-colors duration-300`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-1.5 ${THEME.primaryBtn} rounded-full text-sm font-bold shadow-md hover:scale-105 transition-all duration-300 mt-auto`}
                >
                  Visit Project
                </a>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
