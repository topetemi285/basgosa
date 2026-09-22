'use client';

import React, { useState, useMemo } from 'react';
import { Player, TeamCategory, Position } from '@/lib/types';
import { PLAYERS_DATA } from '@/lib/footballData';
import PlayerCard from './PlayerCard';

interface SquadSectionProps {
  onSelectPlayer: (player: Player) => void;
  initialCategory?: TeamCategory;
}

export default function SquadSection({ onSelectPlayer, initialCategory = 'mens-first' }: SquadSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<TeamCategory>(initialCategory);
  const [selectedPosition, setSelectedPosition] = useState<Position | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: TeamCategory; label: string; gender: 'Male' | 'Female'; badge: string }[] = [
    { id: 'mens-first', label: "Men's Senior Team", gender: 'Male', badge: 'Senior First' },
    { id: 'womens-first', label: "Women's Team (Queens)", gender: 'Female', badge: 'Senior Queens' },
    { id: 'boys-academy', label: "Boys Academy (U19)", gender: 'Male', badge: 'Youth Elite' },
    { id: 'girls-academy', label: "Girls Academy (U19)", gender: 'Female', badge: 'Youth Elite' },
  ];

  const positions: (Position | 'All')[] = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

  // Filter players
  const filteredPlayers = useMemo(() => {
    return PLAYERS_DATA.filter((p) => {
      const matchCategory = p.category === selectedCategory;
      const matchPosition = selectedPosition === 'All' || p.position === selectedPosition;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.nickname && p.nickname.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.detailedPosition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(p.jerseyNumber).includes(searchQuery);

      return matchCategory && matchPosition && matchSearch;
    });
  }, [selectedCategory, selectedPosition, searchQuery]);

  const categoryTotal = PLAYERS_DATA.filter((p) => p.category === selectedCategory).length;

  return (
    <section id="squads" className="relative mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 bg-white">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-bkfa-lemonDark/30 bg-bkfa-lemonBg px-4 py-1 text-xs font-bold uppercase tracking-widest text-bkfa-lemonDark mb-3">
          <span>Official BKFA Roster</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-bkfa-navy tracking-tight">
          Explore Our <span className="text-bkfa-orange">Teams & Players</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
          Click any player to explore their in-depth match stats, career performance, scout assessments, and attributes.
        </p>
      </div>

      {/* Team Category Switcher (Male & Female categories) */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const isFemale = cat.gender === 'Female';
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSelectedPosition('All');
              }}
              className={`group relative flex items-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold transition-all shadow-xs ${
                isSelected
                  ? isFemale
                    ? 'bg-pink-600 text-white shadow-md border-2 border-pink-500'
                    : 'bg-bkfa-navy text-white shadow-md border-2 border-bkfa-lemon'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-bkfa-navy'
              }`}
            >
              <span className={`h-2.5 w-2.5 rounded-full ${isSelected ? 'bg-bkfa-lemon' : isFemale ? 'bg-pink-400' : 'bg-slate-400'}`} />
              <span>{cat.label}</span>
              <span
                className={`rounded-md px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {cat.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Controls Bar: Position Pills & Search Input in Clean White Style */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4 mb-8 shadow-xs">
        {/* Position Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto">
          {positions.map((pos) => {
            const isPosSelected = selectedPosition === pos;
            return (
              <button
                key={pos}
                onClick={() => setSelectedPosition(pos)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                  isPosSelected
                    ? 'bg-bkfa-orange text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-bkfa-navy'
                }`}
              >
                {pos === 'All' ? 'All Roles' : pos}
              </button>
            );
          })}
        </div>

        {/* Search Input and Count */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input
              type="text"
              placeholder="Search by name, jersey, role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 pl-9 text-xs text-slate-900 placeholder-slate-400 focus:border-bkfa-orange focus:outline-none focus:ring-1 focus:ring-bkfa-orange"
            />
            <svg
              className="absolute left-3 top-2.5 h-4 w-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 1114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-900 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          <span className="shrink-0 rounded-lg bg-white px-3 py-2 text-xs font-mono text-slate-700 border border-slate-200 font-semibold">
            <strong className="text-bkfa-orange font-bold">{filteredPlayers.length}</strong> / {categoryTotal} Players
          </span>
        </div>
      </div>

      {/* Players Cards Grid */}
      {filteredPlayers.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredPlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onSelectPlayer={onSelectPlayer}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center">
          <p className="text-lg font-bold text-slate-700">No players match the selected filters.</p>
          <p className="mt-1 text-sm text-slate-500">Try clearing the search query or selecting a different position tab.</p>
          <button
            onClick={() => {
              setSelectedPosition('All');
              setSearchQuery('');
            }}
            className="mt-4 rounded-lg bg-bkfa-orange text-white px-4 py-2 text-xs font-bold hover:bg-bkfa-orangeDeep shadow-xs"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
