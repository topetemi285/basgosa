'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CLUB_INFO } from '@/lib/footballData';

interface HeroSectionProps {
  onOpenTryouts: () => void;
  onExploreSquads: () => void;
}

export default function HeroSection({ onOpenTryouts, onExploreSquads }: HeroSectionProps) {
  // Countdown timer to next big match
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 12,
    minutes: 35,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:py-20 border-b border-slate-200">
      {/* Background Video Container with Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-45">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1920&q=80"
          className="h-full w-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-soccer-player-kicking-a-ball-in-a-stadium-41132-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-playing-football-4217/1080p.mp4"
            type="video/mp4"
          />
        </video>
        {/* Lemon Green, Orange & Navy Soft Overlay to blend perfectly with white background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-bkfa-lemon/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-bkfa-orange/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Prominent Large Logo & Motto Badge */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 drop-shadow-2xl">
                <img
                  src="/images/bkfa-crest.svg"
                  alt="Blessed KAA Football Academy Official Crest"
                  className="h-full w-full object-contain filter drop-shadow-xl transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2 rounded-full border border-bkfa-lemonDark/30 bg-bkfa-lemonBg px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-bkfa-lemonDark shadow-xs w-fit mb-1.5">
                  <span className="flex h-2 w-2 rounded-full bg-bkfa-lemon animate-ping" />
                  <span>The Conquerors • Est. 2014</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-bkfa-navy italic">
                  "{CLUB_INFO.motto}"
                </span>
              </div>
            </div>

            {/* Main Headline with Navy, Lemon & Orange */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-bkfa-navy leading-[1.05]">
              BLESSED KAA <br />
              <span className="text-bkfa-orange">FOOTBALL</span>{' '}
              <span className="text-bkfa-lemonDark">ACADEMY</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-medium">
              Nurturing world-class male and female football talents from the heart of Plateau State. Discover our senior first teams, elite youth academy squads, and award-winning development system.
            </p>

            {/* Category Callouts */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-bkfa-navy/20 bg-bkfa-navy/5 px-3.5 py-1 text-xs font-bold text-bkfa-navy">
                <span className="h-2 w-2 rounded-full bg-bkfa-navy" />
                Men's Senior Team
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-bkfa-orange/30 bg-bkfa-orangeBg px-3.5 py-1 text-xs font-bold text-bkfa-orange">
                <span className="h-2 w-2 rounded-full bg-bkfa-orange" />
                Women's Team (Queens)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-bkfa-lemonDark/30 bg-bkfa-lemonBg px-3.5 py-1 text-xs font-bold text-bkfa-lemonDark">
                <span className="h-2 w-2 rounded-full bg-bkfa-lemon" />
                Elite Youth Academy
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreSquads}
                className="inline-flex items-center gap-2 rounded-xl bg-bkfa-navy px-6 py-3.5 text-sm font-bold text-white shadow-clean hover:bg-bkfa-navyDeep hover:scale-105 active:scale-95 transition-all"
              >
                <span>Explore Squads</span>
                <svg className="w-4 h-4 text-bkfa-lemon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <button
                onClick={onOpenTryouts}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-bkfa-orange bg-bkfa-orange px-6 py-3.5 text-sm font-bold text-white shadow-glowOrange hover:bg-bkfa-orangeDeep hover:border-bkfa-orangeDeep transition-all"
              >
                <span>Register for Trials</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Club Key Numbers */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-6 w-full max-w-lg">
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-black text-bkfa-navy">45+</span>
                <span className="text-xs uppercase font-semibold tracking-wider text-slate-500">Active Players</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-black text-bkfa-orange">14</span>
                <span className="text-xs uppercase font-semibold tracking-wider text-slate-500">Trophies & Honors</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-black text-bkfa-lemonDark">100%</span>
                <span className="text-xs uppercase font-semibold tracking-wider text-slate-500">Grassroots Pride</span>
              </div>
            </div>
          </div>

          {/* Hero Right Widget: Next Match Center Card & Fixture Countdown */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-cleanHover">
              {/* Top Accent Bar: Lemon Green to Orange */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-bkfa-lemon via-bkfa-orange to-bkfa-navy" />

              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bkfa-orange">
                  <span className="h-2 w-2 rounded-full bg-bkfa-lemon animate-pulse" />
                  Upcoming Next Clash
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-700">
                  Plateau State League
                </span>
              </div>

              {/* Match Head-to-Head Banner */}
              <div className="my-6 grid grid-cols-3 items-center text-center">
                {/* Home: BKFA */}
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bkfa-navy text-white border-2 border-bkfa-lemon shadow-md">
                    <span className="font-display font-black text-bkfa-lemon text-lg">BKFA</span>
                  </div>
                  <span className="mt-2 text-xs font-bold text-bkfa-navy">Blessed KAA</span>
                  <span className="text-[10px] font-semibold text-bkfa-orange">Home Team</span>
                </div>

                {/* VS Badge */}
                <div className="flex flex-col items-center">
                  <span className="rounded-full bg-bkfa-orange px-3 py-1 font-display text-xs font-black text-white uppercase shadow-glowOrange">
                    VS
                  </span>
                  <span className="mt-2 font-mono text-[11px] font-semibold text-slate-500">15:30 GMT+1</span>
                </div>

                {/* Away: Mighty Jets Feeders */}
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 border border-slate-300 shadow-sm">
                    <span className="font-display font-black text-slate-700 text-sm">MJF</span>
                  </div>
                  <span className="mt-2 text-xs font-bold text-slate-800">Mighty Jets</span>
                  <span className="text-[10px] text-slate-500">Feeders FC</span>
                </div>
              </div>

              {/* Venue */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center text-xs text-slate-700 mb-6">
                <span className="font-bold text-bkfa-navy">📍 Science Day School Arena</span>, Cele Bridge, Jos
              </div>

              {/* Match Countdown */}
              <div>
                <span className="block text-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Kickoff Countdown
                </span>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                    <span className="block font-display text-xl font-black text-bkfa-navy">{timeLeft.days}</span>
                    <span className="text-[10px] font-semibold uppercase text-slate-500">Days</span>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                    <span className="block font-display text-xl font-black text-bkfa-navy">{timeLeft.hours}</span>
                    <span className="text-[10px] font-semibold uppercase text-slate-500">Hours</span>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                    <span className="block font-display text-xl font-black text-bkfa-navy">{timeLeft.minutes}</span>
                    <span className="text-[10px] font-semibold uppercase text-slate-500">Mins</span>
                  </div>
                  <div className="rounded-xl border border-bkfa-orange/30 bg-bkfa-orangeBg p-2">
                    <span className="block font-display text-xl font-black text-bkfa-orange">{timeLeft.seconds}</span>
                    <span className="text-[10px] font-semibold uppercase text-bkfa-orange">Secs</span>
                  </div>
                </div>
              </div>

              {/* Match Link */}
              <div className="mt-5 text-center">
                <Link
                  href="/fixtures"
                  className="text-xs font-bold text-bkfa-orange hover:text-bkfa-orangeDeep inline-flex items-center gap-1"
                >
                  View Full Fixture Schedule & Recent Results
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
