"use client";
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const AboutPage = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-blue-700 dark:text-blue-200 mb-4">
                        About Me
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        A passionate and results-driven freelance web developer dedicated to building robust and scalable web applications.
                    </p>
                    <div className="mt-8 flex justify-center space-x-6">
                        <a
                            href="https://github.com/saikumargurugu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <FaGithub size={32} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sai-kumar-gurugubelli/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <FaLinkedin size={32} />
                        </a>
                    </div>
                </div>


                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-4">
                            My Story
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            Driven by a passion for crafting efficient and scalable web solutions, I&apos;ve honed my skills in backend development and full-stack technologies.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            I specialize in building robust APIs, designing efficient databases, and leveraging cloud services to deliver high-performing applications.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            My goal is to help businesses establish a strong online presence and achieve their objectives through innovative web solutions.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-4">
                            Skills & Expertise
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                    Backend
                                </h4>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                    <li>JavaScript, TypeScript, Python, C++</li>
                                    <li>Django, Django Rest Framework, Node.js</li>
                                    <li>Database Design (MSSQL, MongoDB)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                    Frontend
                                </h4>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                    <li>React JS, React Native</li>
                                    <li>HTML, CSS, JavaScript</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                    Tools & Technologies
                                </h4>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                    <li>Git, Docker, Linux OS</li>
                                    <li>AWS (S3, EC2)</li>
                                    <li>CI/CD Pipelines</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-12 border-t border-gray-200 dark:border-gray-700 py-8">
                    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-4 text-center">
                        Education
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                Master of Information Technology
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                Griffith University, Australia (Graduated in June 2024)
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                Bachelor of Technology in Computer Science and Engineering
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                JNTU-K, India (Graduated in July 2019)
                            </p>
                        </div>
                    </div>
                </div>


                <div className="mt-12 border-t border-gray-200 dark:border-gray-700 py-8">
                    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-4 text-center">
                        Let&apos;s Connect
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
                        I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://github.com/saikumargurugu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <FaGithub size={32} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sai-kumar-gurugubelli/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <FaLinkedin size={32} />
                        </a>
                    </div>
                    <div className="mt-8 text-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default AboutPage;