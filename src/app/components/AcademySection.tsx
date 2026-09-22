'use client';

import React from 'react';
import { CLUB_AWARDS, CLUB_INFO } from '@/lib/footballData';

interface AcademySectionProps {
  onOpenTryouts: () => void;
}

export default function AcademySection({ onOpenTryouts }: AcademySectionProps) {
  const pathways = [
    {
      title: 'Youth Discovery (U13 - U15)',
      description: 'Foundational ball mastery, physical coordination, agility, and tactical football fundamentals.',
      color: 'border-bkfa-navy/30 bg-slate-50 text-bkfa-navy',
    },
    {
      title: 'Elite Academy (U17 - U19)',
      description: 'Competitive tournament training, position-specific mastery, video analytics, and scouting preparation.',
      color: 'border-bkfa-lemonDark/30 bg-bkfa-lemonBg text-bkfa-lemonDark',
    },
    {
      title: 'Senior First Teams (Male & Female)',
      description: 'Championship league campaigns, national exposure, and professional club transfer pathways.',
      color: 'border-bkfa-orange/30 bg-bkfa-orangeBg text-bkfa-orange',
    },
  ];

  return (
    <section id="academy" className="relative mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      {/* Top Banner: Award Night in Jos Highlight */}
      <div className="relative overflow-hidden rounded-3xl border border-bkfa-orange/30 bg-gradient-to-r from-bkfa-navy via-bkfa-navySoft to-bkfa-navy p-6 sm:p-10 mb-16 shadow-xl text-white">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-bkfa-lemon/40 bg-bkfa-lemon/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-bkfa-lemon mb-4">
            <span>🎉 BKFA 2024 Award Night & Gala</span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-black text-white leading-tight">
            Celebrating <span className="text-bkfa-lemon">Excellence & Community</span> in Jos
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
            The annual BKFA Award Night brought together Plateau State sports dignitaries, grassroots coaches, scouts, and players at the Science Day School Hall, Cele Bridge, Jos. We celebrate the tireless dedication of our young athletes and coaches.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={CLUB_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-bkfa-orange px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-glowOrange hover:bg-bkfa-orangeDeep transition-all"
            >
              <span>View Gala on Instagram</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <button
              onClick={onOpenTryouts}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition-colors"
            >
              Join Next Intake
            </button>
          </div>
        </div>
      </div>

      {/* Pathways Grid */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-bkfa-lemonDark">Development Pathway</span>
        <h2 className="font-display text-3xl sm:text-4xl font-black text-bkfa-navy mt-1">
          How We Build <span className="text-bkfa-orange">Tomorrow's Stars</span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {pathways.map((path, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1.5 hover:border-bkfa-orange hover:shadow-cleanHover"
          >
            <div className={`inline-flex rounded-xl border px-3 py-1 text-xs font-bold uppercase ${path.color} mb-4`}>
              Phase 0{idx + 1}
            </div>
            <h4 className="font-display text-xl font-bold text-bkfa-navy mb-2">{path.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">{path.description}</p>
          </div>
        ))}
      </div>

      {/* Trophies & Honors Shelf */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <h3 className="font-display text-2xl font-bold text-bkfa-navy mb-6 flex items-center gap-2">
          <span>🏆</span>
          <span>Honors & Plateau State Recognitions</span>
        </h3>

        <div className="grid gap-4 md:grid-cols-3">
          {CLUB_AWARDS.map((award, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
              <span className="font-mono text-xs font-bold text-bkfa-orange">{award.year}</span>
              <h5 className="font-display text-base font-bold text-bkfa-navy mt-1">{award.title}</h5>
              <p className="text-xs text-bkfa-lemonDark font-semibold mt-0.5">{award.recipient}</p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
