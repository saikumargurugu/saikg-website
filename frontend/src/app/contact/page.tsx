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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const fade = useScrollFadeIn();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);


    try {
      const response = await fetch('http://localhost:5001/send-email', { // Ensure this matches your backend route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });


      if (!response.ok) {
        const errorData = await response.json();
        console.error('Submission failed:', errorData);
        setSubmissionError(errorData?.errors?.[0]?.msg || 'Failed to send message. Please try again.');
      } else {
        console.log('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        alert('Thank you for your message!'); // Replace with a better UI notification
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmissionError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-6 sm:px-10 transition-colors duration-300">
      <section ref={fade} className="max-w-2xl mx-auto mt-24 py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-md px-8 sm:px-12 opacity-0 translate-y-10 transition duration-1000 ease-out">
        <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-200 mb-8">
          Contact Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
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
              disabled={isSubmitting}
            >
              Send Message
              {isSubmitting ? (
                <span className="ml-2 animate-spin">
                  {/* You can use a loading spinner component here */}
                  ...
                </span>
              ) : (
                <FaPaperPlane className="ml-2" />
              )}
            </button>
            {submissionError && (
              <p className="mt-4 text-red-500">{submissionError}</p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
};


export default ContactPage;