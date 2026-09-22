'use client';

import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import AcademySection from '@/app/components/AcademySection';
import RegistrationModal from '@/app/components/RegistrationModal';
import { CLUB_INFO } from '@/lib/footballData';

export default function AcademyPage() {
  const [isTryoutsOpen, setIsTryoutsOpen] = useState(false);

  const coaches = [
    {
      name: 'Coach Danladi Pam',
      role: 'Head of Academy & Technical Director',
      license: 'CAF B Coaching License',
      experience: '12+ Years Youth Development',
    },
    {
      name: 'Coach Fatima Musa',
      role: "Head Coach, Women's Queens Team",
      license: 'NIS Certified & Grassroots Specialist',
      experience: '8+ Years Female Football Coaching',
    },
    {
      name: 'Coach Samuel Gyang',
      role: 'Head Coach, Elite Youth (U17/U19)',
      license: 'Plateau FA Elite Coach Award',
      experience: '10+ Years Grassroots Scouting',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar onOpenTryouts={() => setIsTryoutsOpen(true)} />

      <main className="flex-1 py-10 bg-white">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-bkfa-lemonDark">
            Excellence & Development
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-bkfa-navy mt-2">
            The BKFA <span className="text-bkfa-orange">Academy Experience</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Discover our comprehensive training programs, coaching leadership, annual Award Night in Jos, and how we empower young athletes on and off the pitch.
          </p>
        </div>

        {/* Academy Section Component */}
        <AcademySection onOpenTryouts={() => setIsTryoutsOpen(true)} />

        {/* Coaching Leadership Section in Clean White Style */}
        <section className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-bkfa-lemonDark">
              Technical Staff
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-bkfa-navy mt-1">
              Experienced Mentors & <span className="text-bkfa-orange">Coaches</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {coaches.map((coach, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center hover:border-bkfa-orange hover:shadow-cleanHover transition-all shadow-xs"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-bkfa-navy border-2 border-bkfa-lemon text-2xl font-display font-black text-bkfa-lemon mb-4 shadow-sm">
                  {coach.name.charAt(6)}
                </div>
                <h4 className="font-display text-lg font-bold text-bkfa-navy">{coach.name}</h4>
                <p className="text-xs font-bold text-bkfa-orange mt-0.5">{coach.role}</p>
                <div className="mt-4 space-y-1 text-xs text-slate-600 border-t border-slate-100 pt-3 font-medium">
                  <p>🏅 {coach.license}</p>
                  <p>⏱️ {coach.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gala Night Invitation Details from Instagram */}
        <section className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 pb-12">
          <div className="rounded-3xl border border-bkfa-orange/30 bg-gradient-to-r from-bkfa-navy to-bkfa-navySoft p-8 sm:p-10 text-center relative overflow-hidden text-white shadow-xl">
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
              Join Our Next Annual Award of Excellence Night
            </h3>
            <p className="mt-3 text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
              Every year, Blessed Kaa Football Academy hosts special dignitaries, coaches, and sports supporters at Science Day School Hall, Cele Bridge, Jos, celebrating our male and female superstars.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href={CLUB_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-bkfa-orange px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-glowOrange hover:bg-bkfa-orangeDeep transition-all"
              >
                Follow Updates on Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <RegistrationModal
        isOpen={isTryoutsOpen}
        onClose={() => setIsTryoutsOpen(false)}
      />
    </div>
  );
}
