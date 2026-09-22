'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Player } from '@/lib/types';

interface PlayerCardProps {
  player: Player;
  onSelectPlayer: (player: Player) => void;
}

export default function PlayerCard({ player, onSelectPlayer }: PlayerCardProps) {
  const [imageError, setImageError] = useState(false);

  // Position color styles (using lemon green, orange, and navy themes)
  const positionBadgeColors: Record<string, string> = {
    Goalkeeper: 'bg-amber-100 text-amber-800 border-amber-300',
    Defender: 'bg-bkfa-lemonBg text-bkfa-lemonDark border-bkfa-lemon/40',
    Midfielder: 'bg-sky-100 text-sky-800 border-sky-300',
    Forward: 'bg-bkfa-orangeBg text-bkfa-orange border-bkfa-orange/30',
  };

  const isFemale = player.gender === 'Female';

  return (
    <div
      onClick={() => onSelectPlayer(player)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:border-bkfa-orange hover:shadow-cleanHover cursor-pointer"
    >
      {/* Top Header Row: Jersey Number, Gender/Category pill, Position */}
      <div className="flex items-center justify-between z-10 mb-3">
        <div className="flex items-center gap-2">
          {/* Jersey Badge in Navy & Lemon */}
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-bkfa-navy border-2 border-bkfa-lemon font-display text-lg font-black text-bkfa-lemon shadow-sm">
            #{player.jerseyNumber}
          </span>
          {player.captain && (
            <span className="rounded-md bg-bkfa-orange px-2 py-0.5 text-[10px] font-black uppercase text-white font-display tracking-wider">
              Captain (C)
            </span>
          )}
          {player.viceCaptain && (
            <span className="rounded-md bg-bkfa-lemonBg border border-bkfa-lemon/40 px-1.5 py-0.5 text-[10px] font-black uppercase text-bkfa-lemonDark font-display tracking-wider">
              VC
            </span>
          )}
        </div>

        {/* Position Tag */}
        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-bold tracking-wide ${
            positionBadgeColors[player.position] || 'bg-slate-100 text-slate-700 border-slate-300'
          }`}
        >
          {player.position}
        </span>
      </div>

      {/* Player Image Showcase Area */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
        {!imageError ? (
          <Image
            src={player.image}
            alt={player.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-108"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-bkfa-navy to-slate-900 text-center">
            <span className="font-display text-3xl font-black text-bkfa-lemon">
              #{player.jerseyNumber}
            </span>
          </div>
        )}

        {/* Bottom Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-bkfa-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Gender Category Stamp */}
        <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1.5">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md ${
              isFemale
                ? 'bg-pink-600/90 text-white'
                : 'bg-bkfa-navy/90 text-bkfa-lemon'
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${isFemale ? 'bg-white' : 'bg-bkfa-lemon'}`} />
            {player.gender === 'Female' ? 'Queens' : 'Men'}
          </span>
          <span className="rounded-full bg-black/60 border border-white/20 px-2 py-0.5 text-[10px] text-white font-medium backdrop-blur-md">
            {player.age} yrs
          </span>
        </div>

        {/* Hover Click Action Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-bkfa-navy/60 opacity-0 backdrop-blur-xs transition-all duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-bkfa-orange px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-glowOrange transform translate-y-2 group-hover:translate-y-0 transition-transform">
            View Full Stats
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>

      {/* Player Meta Info */}
      <div className="mt-3 flex flex-col">
        <span className="text-[11px] font-bold uppercase tracking-wider text-bkfa-orange">
          {player.detailedPosition}
        </span>
        <h3 className="font-display text-lg font-bold text-bkfa-navy transition-colors group-hover:text-bkfa-orange">
          {player.name}
        </h3>

        {player.nickname && (
          <p className="text-xs italic text-slate-500">"{player.nickname}"</p>
        )}

        {/* Mini Performance Highlights in Clean White Style */}
        <div className="mt-3 grid grid-cols-3 gap-1.5 rounded-lg border border-slate-200 bg-slate-50 p-2 text-center">
          <div>
            <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">Apps</span>
            <span className="font-display font-bold text-bkfa-navy">{player.seasonStats.appearances}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
              {player.position === 'Goalkeeper' ? 'Cleans' : 'Goals'}
            </span>
            <span className="font-display font-bold text-bkfa-orange">
              {player.position === 'Goalkeeper' ? player.seasonStats.cleanSheets ?? 0 : player.seasonStats.goals}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
              {player.position === 'Goalkeeper' ? 'Pass %' : 'Assists'}
            </span>
            <span className="font-display font-bold text-bkfa-lemonDark">
              {player.position === 'Goalkeeper' ? `${player.seasonStats.passAccuracy}%` : player.seasonStats.assists}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
