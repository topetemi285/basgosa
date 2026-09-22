'use client';

import React, { useState } from 'react';
import { FIXTURES_DATA } from '@/lib/footballData';
import { TeamCategory } from '@/lib/types';

export default function FixturesSection() {
  const [filter, setFilter] = useState<'ALL' | 'UPCOMING' | 'COMPLETED'>('ALL');

  const filteredFixtures = FIXTURES_DATA.filter((f) => {
    if (filter === 'UPCOMING') return f.status === 'UPCOMING';
    if (filter === 'COMPLETED') return f.status === 'COMPLETED';
    return true;
  });

  const categoryBadge: Record<TeamCategory, { label: string; color: string }> = {
    'mens-first': { label: "Men's First", color: 'bg-bkfa-navy/10 text-bkfa-navy border-bkfa-navy/30' },
    'womens-first': { label: "Women's Queens", color: 'bg-pink-100 text-pink-700 border-pink-300' },
    'boys-academy': { label: 'Boys U19', color: 'bg-bkfa-lemonBg text-bkfa-lemonDark border-bkfa-lemon/40' },
    'girls-academy': { label: 'Girls U19', color: 'bg-purple-100 text-purple-700 border-purple-300' },
  };

  return (
    <section id="fixtures" className="relative mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-bkfa-lemonDark">Match Center</span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-bkfa-navy mt-1">
            Fixtures & <span className="text-bkfa-orange">Recent Results</span>
          </h2>
        </div>

        {/* Filter Toggle Buttons */}
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 p-1">
          <button
            onClick={() => setFilter('ALL')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              filter === 'ALL' ? 'bg-bkfa-navy text-white shadow-xs' : 'text-slate-600 hover:text-bkfa-navy'
            }`}
          >
            All Matches
          </button>
          <button
            onClick={() => setFilter('UPCOMING')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              filter === 'UPCOMING' ? 'bg-bkfa-navy text-white shadow-xs' : 'text-slate-600 hover:text-bkfa-navy'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('COMPLETED')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              filter === 'COMPLETED' ? 'bg-bkfa-navy text-white shadow-xs' : 'text-slate-600 hover:text-bkfa-navy'
            }`}
          >
            Latest Results
          </button>
        </div>
      </div>

      {/* Match Cards List in Clean White Design */}
      <div className="grid gap-4">
        {filteredFixtures.map((fixture) => {
          const badge = categoryBadge[fixture.category];
          const isCompleted = fixture.status === 'COMPLETED';

          return (
            <div
              key={fixture.id}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 transition-all hover:border-bkfa-orange hover:shadow-cleanHover"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Left: Competition & Category */}
                <div className="flex items-center gap-2">
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${badge.color}`}>
                    {badge.label}
                  </span>
                  <span className="text-xs font-bold text-slate-800">{fixture.competition}</span>
                </div>

                {/* Center: Teams and Score / Time */}
                <div className="flex flex-1 items-center justify-center gap-4 sm:gap-8 my-2 lg:my-0">
                  {/* Home Team */}
                  <div className="flex flex-1 items-center justify-end gap-2 text-right">
                    <span className={`font-display text-sm sm:text-base font-bold ${fixture.homeTeam.isBKFA ? 'text-bkfa-orange' : 'text-slate-900'}`}>
                      {fixture.homeTeam.name}
                    </span>
                    {fixture.homeTeam.isBKFA && (
                      <span className="rounded bg-bkfa-navy text-bkfa-lemon border border-bkfa-lemon/40 px-1 py-0.5 text-[9px] font-black">
                        BKFA
                      </span>
                    )}
                  </div>

                  {/* Score or Match Time */}
                  <div className="shrink-0">
                    {isCompleted && fixture.score ? (
                      <div className="flex items-center gap-2 rounded-xl bg-slate-100 border border-slate-300 px-3.5 py-1.5 font-display text-base sm:text-lg font-black text-slate-900 shadow-xs">
                        <span className={fixture.homeTeam.isBKFA ? 'text-bkfa-orange' : ''}>{fixture.score.home}</span>
                        <span className="text-slate-400">-</span>
                        <span className={fixture.awayTeam.isBKFA ? 'text-bkfa-orange' : ''}>{fixture.score.away}</span>
                      </div>
                    ) : (
                      <div className="rounded-xl bg-bkfa-lemonBg border border-bkfa-lemon/40 px-3.5 py-1.5 text-center font-mono text-xs font-bold text-bkfa-lemonDark">
                        {fixture.time}
                      </div>
                    )}
                  </div>

                  {/* Away Team */}
                  <div className="flex flex-1 items-center justify-start gap-2 text-left">
                    {fixture.awayTeam.isBKFA && (
                      <span className="rounded bg-bkfa-navy text-bkfa-lemon border border-bkfa-lemon/40 px-1 py-0.5 text-[9px] font-black">
                        BKFA
                      </span>
                    )}
                    <span className={`font-display text-sm sm:text-base font-bold ${fixture.awayTeam.isBKFA ? 'text-bkfa-orange' : 'text-slate-900'}`}>
                      {fixture.awayTeam.name}
                    </span>
                  </div>
                </div>

                {/* Right: Date and Venue */}
                <div className="flex items-center justify-between lg:justify-end gap-3 text-xs text-slate-500 border-t border-slate-100 pt-2 lg:border-t-0 lg:pt-0 font-medium">
                  <span>📅 {fixture.date}</span>
                  <span>📍 {fixture.venue.split(',')[0]}</span>
                </div>
              </div>

              {/* Goal Highlights if completed */}
              {fixture.highlights && (
                <div className="mt-3 border-t border-slate-100 pt-2 text-[11px] text-slate-600 flex items-center gap-2">
                  <span className="text-bkfa-orange font-bold">⚽ Scorers:</span>
                  <span>{fixture.highlights}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
