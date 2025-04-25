"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaLinkedin } from 'react-icons/fa';


function useScrollFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0');
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


const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const fade = useScrollFadeIn();


  const handleSubmit = (e) => {
    e.preventDefault();
    //  In a real app, you'd handle form submission here (e.g., send to an API)
    console.log('Form submitted:', { name, email, message });
    //  Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    alert('Thank you for your message!'); //  Replace with a better UI notification
  };


  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-6 sm:px-10 transition-colors duration-300">
      <section ref={fade} className="max-w-2xl mx-auto mt-24 py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-md px-8 sm:px-12 opacity-0 translate-y-10 transition duration-1000 ease-out">
        <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-200 mb-8">
          Contact Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          I'm always open to discussing new projects, ideas, or opportunities. Feel free to reach out using the form below, or connect with me on LinkedIn.
        </p>
        <div className="mb-6 text-center">
          <a
            href="https://www.linkedin.com/in/sai-kumar-gurugubelli/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100"
          >
            Connect on LinkedIn <FaLinkedin className="inline-block ml-1" />
          </a>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Or you can directly email me at: saikumar.gurugu@gmail.com
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-100"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white rounded-full font-semibold shadow-md hover:scale-105 transition duration-300"
            >
              Send Message
              <FaPaperPlane className="ml-2" />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};


export default ContactPage;