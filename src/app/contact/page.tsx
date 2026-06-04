"use client";

import React, { useState } from 'react';
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

const contactMeta = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'saikumar.gurugu@gmail.com',
    href: 'mailto:saikumar.gurugu@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: '/in/sai-kumar-gurugubelli',
    href: 'https://www.linkedin.com/in/sai-kumar-gurugubelli/',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: '/saikumargurugu',
    href: 'https://github.com/saikumargurugu',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Brisbane, Australia · Remote OK',
    href: null,
  },
];

export default function ContactPage() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]       = useState(false);
  const [error, setError]           = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('http://localhost:5001/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.msg ?? 'Failed to send message.');
      }

      setSuccess(true);
      setName(''); setEmail(''); setSubject(''); setMessage('');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl text-slate-200 text-sm font-body placeholder-slate-600 outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/50';
  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
  };

  return (
    <div className="font-body min-h-screen">

      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 dot-grid">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Let&apos;s Talk
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-slate-100 font-display mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Get In Touch
          </h1>
          <p className="text-slate-400 text-lg max-w-lg mx-auto leading-relaxed font-body">
            Have a project in mind or want to discuss opportunities?
            I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <h2 className="text-xl font-bold text-slate-100 font-display mb-2">Contact Details</h2>
              <p className="text-slate-400 text-sm leading-relaxed font-body">
                I&apos;m currently open to full-time roles and freelance contracts.
                Response time is typically within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactMeta.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl transition-all"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(99,102,241,0.12)' }}
                    >
                      <Icon size={15} className="text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider font-body">{item.label}</div>
                      <div className="text-slate-200 text-sm font-medium font-body">{item.value}</div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>

            <div
              className="rounded-xl p-5 mt-2"
              style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)' }}
            >
              <div className="status-badge mb-3 inline-flex">
                <span className="status-dot" />
                Available for opportunities
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-body">
                Currently open to full-time positions in Brisbane or remote roles globally.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(52,211,153,0.12)' }}
                  >
                    <FaCheck size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 font-display">Message sent!</h3>
                  <p className="text-slate-400 text-sm font-body max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors font-body"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2 font-body">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClass}
                        style={inputStyle}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2 font-body">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                        style={inputStyle}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2 font-body">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Project inquiry / Job opportunity / Collaboration"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2 font-body">
                      Message *
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Tell me about your project, role, or what you'd like to discuss..."
                      required
                    />
                  </div>

                  {error && (
                    <div
                      className="px-4 py-3 rounded-xl text-sm text-red-400 font-body"
                      style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gradient text-base w-full justify-center mt-1"
                    style={submitting ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                  >
                    {submitting ? (
                      <>Sending…</>
                    ) : (
                      <>Send Message <FaPaperPlane size={14} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
