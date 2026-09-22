'use client';

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import FixturesSection from '@/app/components/FixturesSection';

export default function FixturesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 py-10 bg-white">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-bkfa-lemonDark">
            Match Schedule & League Standings
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-bkfa-navy mt-2">
            Match <span className="text-bkfa-orange">Center</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Stay updated with all matchday fixtures, kick-off timings, venues in Jos, and recent tournament results for our Senior Men's, Women's Queens, and Youth Academy teams.
          </p>
        </div>

        <FixturesSection />

        {/* Stadium & Matchday Guide Info */}
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 mt-12 mb-12">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-bkfa-navy mb-4">
              Matchday Fan Guide & Pitch Location
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2 text-sm text-slate-700 font-medium">
                <p>
                  <strong className="text-bkfa-orange">Primary Academy Pitch:</strong> Science Day School Arena, Cele Bridge, Jos, Plateau State.
                </p>
                <p>
                  <strong className="text-bkfa-navy">Championship Venue:</strong> Rwang Pam Township Stadium, Jos.
                </p>
                <p className="text-slate-600">
                  All fans and scouts are welcome to watch our home league clashes. Gates open 1 hour before scheduled kickoff.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-700 shadow-xs">
                <h4 className="font-bold text-bkfa-navy uppercase tracking-wider mb-2">Media & Scouting Accreditations</h4>
                <p className="leading-relaxed">
                  Professional scouts, sports journalists, and club representatives looking for VIP pitchside seating or match footage can contact our media office at <span className="text-bkfa-orange font-bold">media@blessedkaafa.com</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
