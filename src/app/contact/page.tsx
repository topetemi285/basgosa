'use client';

import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { CLUB_INFO } from '@/lib/footballData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Scouting / Academy Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 py-10 bg-white">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-bkfa-lemonDark">
            Get In Touch
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-bkfa-navy mt-2">
            Contact <span className="text-bkfa-orange">Blessed KAA FA</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Whether you are a scout, sponsor, player looking for trials, or fan wanting to attend our matches in Jos, reach out to our team.
          </p>
        </div>

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-6 shadow-xs">
                <h3 className="font-display text-2xl font-bold text-bkfa-navy">
                  Club Secretariat & Grounds
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="flex items-start gap-3">
                    <span className="text-xl text-bkfa-orange">📍</span>
                    <div>
                      <strong className="block text-bkfa-navy font-bold">Academy Ground & Arena:</strong>
                      <span>Science Day School Hall & Pitch, Cele Bridge, Jos, Plateau State, Nigeria</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl text-bkfa-navy">🏟️</span>
                    <div>
                      <strong className="block text-bkfa-navy font-bold">Match Day Stadium:</strong>
                      <span>Rwang Pam Township Stadium, Jos</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl text-bkfa-orange">📸</span>
                    <div>
                      <strong className="block text-bkfa-navy font-bold">Official Instagram:</strong>
                      <a
                        href={CLUB_INFO.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bkfa-orange hover:underline font-bold"
                      >
                        {CLUB_INFO.instagramHandle}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl text-bkfa-lemonDark">✉️</span>
                    <div>
                      <strong className="block text-bkfa-navy font-bold">Email Address:</strong>
                      <span>{CLUB_INFO.email}</span>
                    </div>
                  </div>
                </div>

                {/* Training Schedule */}
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                  <h4 className="font-bold text-bkfa-navy text-xs uppercase tracking-wider mb-2">
                    Weekly Training Hours (Jos)
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    <li>• <strong>Men's First Team:</strong> Tue, Thu, Sat (7:00 AM - 10:00 AM)</li>
                    <li>• <strong>Women's Queens:</strong> Mon, Wed, Fri (4:00 PM - 6:30 PM)</li>
                    <li>• <strong>Youth Academies:</strong> Sat & Sun (8:00 AM - 11:30 AM)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-clean">
                <h3 className="font-display text-2xl font-bold text-bkfa-navy mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6 font-medium">
                  Fill out the form below and our club administrator will reply within 24 hours.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Coach Luka"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-bkfa-orange focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Email / Phone *</label>
                        <input
                          type="text"
                          required
                          placeholder="your.email@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-bkfa-orange focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Purpose of Inquiry</label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-bkfa-orange focus:outline-none"
                        >
                          <option value="Scouting / Academy Inquiry">Scouting / Player Interest</option>
                          <option value="Player Trial Application">Player Trial Application</option>
                          <option value="Match Friendly / Tournament">Friendly Match / Tournament</option>
                          <option value="Sponsorship & Partnership">Sponsorship & Partnership</option>
                          <option value="Media & Press">Media & Press</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Message *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Write your message or inquiry here..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-bkfa-orange focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="rounded-xl bg-bkfa-orange px-8 py-3 text-xs sm:text-sm font-bold text-white shadow-glowOrange hover:bg-bkfa-orangeDeep transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-bkfa-lemonBg border-2 border-bkfa-lemon text-bkfa-lemonDark text-2xl mb-3 font-bold">
                      ✓
                    </div>
                    <h4 className="font-display text-xl font-bold text-bkfa-navy">Message Sent Successfully!</h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600">
                      Thank you, {form.name}. Our administrative desk in Jos has received your message regarding "{form.subject}".
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-5 rounded-lg bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
