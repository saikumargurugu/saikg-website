"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaLinkedin } from 'react-icons/fa';
import { THEME } from '../theme';


function useScrollFadeIn() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el?.classList?.add('opacity-100', 'translate-y-0');
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


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <main className={`min-h-screen py-12 px-6 sm:px-10 ${THEME.mainBg} ${THEME.mainText} transition-colors duration-300`}>
      <section ref={fade} className={`max-w-2xl mx-auto mt-24 py-16 ${THEME.cardBg} ${THEME.card} shadow-md px-8 sm:px-12 opacity-0 translate-y-10 transition duration-1000 ease-out`}>
        <h2 className={`text-3xl font-bold text-center ${THEME.headingText} mb-8 drop-shadow-lg`}>
          Contact Me
        </h2>
        <p className={`text-lg text-green-100 mb-6`}>
          I am always open to discussing new projects, ideas, or opportunities. Feel free to reach out using the form below, or connect with me on LinkedIn.
        </p>
        <div className="mb-6 text-center">
          <a
            href="https://www.linkedin.com/in/sai-kumar-gurugubelli/"
            target="_blank"
            rel="noopener noreferrer"
            className={THEME.link}
          >
            Connect on LinkedIn <FaLinkedin className="inline-block ml-1" />
          </a>
          <p className={`${THEME.bodyText} mt-2`}>
            Or you can directly email me at: saikumar.gurugu@gmail.com
          </p>
        </div>
  <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-base font-semibold text-green-200 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border-2 border-green-700 bg-green-950 text-green-100 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 placeholder-green-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-base font-semibold text-green-200 mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border-2 border-green-700 bg-green-950 text-green-100 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 placeholder-green-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-base font-semibold text-green-200 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1 block w-full py-2 px-3 border-2 border-green-700 bg-green-950 text-green-100 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 placeholder-green-300"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-green-700 hover:bg-green-600 text-green-100 rounded-full font-bold shadow-lg hover:scale-105 transition duration-300 border-2 border-green-900"
              disabled={isSubmitting}
            >
              Send Message
              {isSubmitting ? (
                <span className="ml-2 animate-spin">
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