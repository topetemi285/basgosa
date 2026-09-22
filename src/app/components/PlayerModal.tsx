'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Player } from '@/lib/types';
import { PLAYERS_DATA } from '@/lib/footballData';

interface PlayerModalProps {
  player: Player | null;
  onClose: () => void;
  onSelectPlayer: (player: Player) => void;
}

export default function PlayerModal({ player, onClose, onSelectPlayer }: PlayerModalProps) {
  const [activeTab, setActiveTab] = useState<'stats' | 'bio' | 'matches'>('stats');

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!player) return null;

  // Find index in current category for next/prev navigation
  const categoryPlayers = PLAYERS_DATA.filter((p) => p.category === player.category);
  const currentIndex = categoryPlayers.findIndex((p) => p.id === player.id);
  const prevPlayer = currentIndex > 0 ? categoryPlayers[currentIndex - 1] : categoryPlayers[categoryPlayers.length - 1];
  const nextPlayer = currentIndex < categoryPlayers.length - 1 ? categoryPlayers[currentIndex + 1] : categoryPlayers[0];

  const isFemale = player.gender === 'Female';

  const attributesList = [
    { label: 'Pace (PAC)', value: player.attributes.pace, color: 'bg-bkfa-lemon' },
    { label: 'Shooting (SHO)', value: player.attributes.shooting, color: 'bg-bkfa-orange' },
    { label: 'Passing (PAS)', value: player.attributes.passing, color: 'bg-sky-500' },
    { label: 'Dribbling (DRI)', value: player.attributes.dribbling, color: 'bg-amber-500' },
    { label: 'Defending (DEF)', value: player.attributes.defending, color: 'bg-bkfa-navy' },
    { label: 'Physicality (PHY)', value: player.attributes.physical, color: 'bg-emerald-600' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 lg:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Card in Clean White Style */}
      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl my-auto">
        {/* Top Lemon Green to Orange Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-bkfa-lemon via-bkfa-orange to-bkfa-navy" />

        {/* Modal Header Controls */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3.5 sm:px-6 bg-slate-50">
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${
                isFemale ? 'bg-pink-100 text-pink-700 border border-pink-300' : 'bg-bkfa-navy/10 text-bkfa-navy border border-bkfa-navy/20'
              }`}
            >
              {player.categoryName}
            </span>
            <span className="text-slate-400 text-xs hidden sm:inline">•</span>
            <span className="text-slate-600 font-bold text-xs hidden sm:inline">Squad #{player.jerseyNumber}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Page Link */}
            <Link
              href={`/players/${player.id}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-bkfa-navy hover:text-bkfa-orange hover:border-bkfa-orange transition-colors shadow-xs"
            >
              <span>Full Page</span>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              aria-label="Close dialog"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body Grid */}
        <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-12 max-h-[78vh] overflow-y-auto">
          {/* Left Column: Player Photo & Quick Bio Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <Image
                src={player.image}
                alt={player.name}
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bkfa-navy via-transparent to-transparent" />

              {/* Number Overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-bkfa-lemon">
                    {player.detailedPosition}
                  </span>
                  <h2 className="font-display text-2xl font-black text-white">
                    {player.name}
                  </h2>
                  {player.nickname && (
                    <p className="text-xs italic text-bkfa-orange">"{player.nickname}"</p>
                  )}
                </div>
                <span className="font-display text-4xl font-black text-bkfa-lemon">
                  #{player.jerseyNumber}
                </span>
              </div>
            </div>

            {/* Quick Profile Parameters in Clean Style */}
            <div className="grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs">
              <div className="flex flex-col">
                <span className="text-slate-500 font-medium">Age / DOB</span>
                <span className="font-bold text-slate-800">{player.age} yrs ({player.dateOfBirth})</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 font-medium">Height / Weight</span>
                <span className="font-bold text-slate-800">{player.height} • {player.weight}</span>
              </div>
              <div className="flex flex-col mt-2">
                <span className="text-slate-500 font-medium">Preferred Foot</span>
                <span className="font-bold text-bkfa-orange">{player.preferredFoot}</span>
              </div>
              <div className="flex flex-col mt-2">
                <span className="text-slate-500 font-medium">Origin / State</span>
                <span className="font-bold text-slate-800">{player.stateOfOrigin}</span>
              </div>
              <div className="flex flex-col mt-2 col-span-2">
                <span className="text-slate-500 font-medium">Estimated Market Valuation</span>
                <span className="font-black text-bkfa-lemonDark text-sm">{player.marketValueEstimate || 'Academy Prospect'}</span>
              </div>
            </div>

            {/* Teammate Navigator */}
            <div className="flex items-center justify-between gap-2 border-t border-slate-200 pt-3">
              <button
                onClick={() => onSelectPlayer(prevPlayer)}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-bkfa-navy transition-colors"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Prev #{prevPlayer.jerseyNumber}</span>
              </button>
              <button
                onClick={() => onSelectPlayer(nextPlayer)}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-bkfa-navy transition-colors"
              >
                <span>Next #{nextPlayer.jerseyNumber}</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Tabbed Content (Performance Stats, Bio & Scout, Recent Matches) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Tabs Header */}
            <div className="flex border-b border-slate-200 gap-2 mb-4">
              <button
                onClick={() => setActiveTab('stats')}
                className={`pb-2.5 px-3 text-xs sm:text-sm font-bold transition-colors border-b-2 ${
                  activeTab === 'stats'
                    ? 'border-bkfa-orange text-bkfa-orange'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Season Stats & Attributes
              </button>
              <button
                onClick={() => setActiveTab('bio')}
                className={`pb-2.5 px-3 text-xs sm:text-sm font-bold transition-colors border-b-2 ${
                  activeTab === 'bio'
                    ? 'border-bkfa-orange text-bkfa-orange'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Biography & Scout Report
              </button>
              <button
                onClick={() => setActiveTab('matches')}
                className={`pb-2.5 px-3 text-xs sm:text-sm font-bold transition-colors border-b-2 ${
                  activeTab === 'matches'
                    ? 'border-bkfa-orange text-bkfa-orange'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Match Log ({player.recentMatches?.length || 0})
              </button>
            </div>

            {/* TAB 1: STATS & ATTRIBUTES */}
            {activeTab === 'stats' && (
              <div className="space-y-5">
                {/* Season Key Stat Boxes */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Matches</span>
                    <span className="mt-1 block font-display text-2xl font-black text-bkfa-navy">
                      {player.seasonStats.appearances}
                    </span>
                  </div>
                  <div className="rounded-xl border border-bkfa-orange/30 bg-bkfa-orangeBg p-3 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-bkfa-orange">
                      {player.position === 'Goalkeeper' ? 'Clean Sheets' : 'Goals'}
                    </span>
                    <span className="mt-1 block font-display text-2xl font-black text-bkfa-orange">
                      {player.position === 'Goalkeeper' ? player.seasonStats.cleanSheets ?? 0 : player.seasonStats.goals}
                    </span>
                  </div>
                  <div className="rounded-xl border border-bkfa-lemonDark/30 bg-bkfa-lemonBg p-3 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-bkfa-lemonDark">
                      {player.position === 'Goalkeeper' ? 'Pass Accuracy' : 'Assists'}
                    </span>
                    <span className="mt-1 block font-display text-2xl font-black text-bkfa-lemonDark">
                      {player.position === 'Goalkeeper' ? `${player.seasonStats.passAccuracy}%` : player.seasonStats.assists}
                    </span>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">MOTM Awards</span>
                    <span className="mt-1 block font-display text-2xl font-black text-bkfa-navy">
                      {player.seasonStats.playerOfTheMatch}
                    </span>
                  </div>
                </div>

                {/* Additional Stats Micro Row */}
                <div className="grid grid-cols-3 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-center text-xs">
                  <div>
                    <span className="text-slate-500">Minutes:</span>{' '}
                    <span className="font-bold text-slate-800">{player.seasonStats.minutesPlayed}'</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Yellow/Red:</span>{' '}
                    <span className="font-bold text-amber-600">{player.seasonStats.yellowCards}</span> /{' '}
                    <span className="font-bold text-rose-600">{player.seasonStats.redCards}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Pass Accuracy:</span>{' '}
                    <span className="font-bold text-bkfa-lemonDark">{player.seasonStats.passAccuracy}%</span>
                  </div>
                </div>

                {/* Skill Attribute Bars */}
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-bkfa-navy mb-3">
                    Attribute Breakdown
                  </h4>
                  <div className="grid gap-2.5">
                    {attributesList.map((attr) => (
                      <div key={attr.label} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-700">{attr.label}</span>
                          <span className="font-bold text-bkfa-navy font-mono">{attr.value} / 99</span>
                        </div>
                        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200">
                          <div
                            className={`h-full rounded-full ${attr.color} transition-all duration-700`}
                            style={{ width: `${attr.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: BIOGRAPHY & SCOUT REPORT */}
            {activeTab === 'bio' && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-bkfa-orange mb-1">
                    Player Story & Background
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-700">{player.bio}</p>
                </div>

                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-bkfa-navy mb-1">
                    Technical Scouting Assessment
                  </h4>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {player.scoutReport}
                  </div>
                </div>

                {player.achievements?.length > 0 && (
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-bkfa-navy mb-2">
                      Honors & Awards
                    </h4>
                    <ul className="space-y-1.5">
                      {player.achievements.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                          <span className="text-bkfa-orange">🏆</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {player.quote && (
                  <div className="rounded-xl border border-bkfa-lemon/40 bg-bkfa-lemonBg p-3 italic text-xs sm:text-sm text-bkfa-lemonDark font-semibold">
                    "{player.quote}"
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: RECENT MATCHES LOG */}
            {activeTab === 'matches' && (
              <div className="space-y-3">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-bkfa-navy">
                  Recent Match Appearances
                </h4>
                {player.recentMatches && player.recentMatches.length > 0 ? (
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 uppercase text-[10px] tracking-wider text-slate-600 font-bold">
                        <tr>
                          <th className="px-3 py-2">Opponent</th>
                          <th className="px-3 py-2">Date</th>
                          <th className="px-3 py-2">Score</th>
                          <th className="px-3 py-2">Mins</th>
                          <th className="px-3 py-2">G / A</th>
                          <th className="px-3 py-2 text-right">Rating</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                        {player.recentMatches.map((m, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="px-3 py-2.5 font-bold text-slate-900">{m.opponent}</td>
                            <td className="px-3 py-2.5 text-slate-500">{m.date}</td>
                            <td className="px-3 py-2.5 font-mono">
                              <span
                                className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-bold ${
                                  m.result === 'W'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : m.result === 'D'
                                    ? 'bg-amber-100 text-amber-800'
                                    : 'bg-rose-100 text-rose-800'
                                }`}
                              >
                                {m.score} ({m.result})
                              </span>
                            </td>
                            <td className="px-3 py-2.5">{m.minutes}'</td>
                            <td className="px-3 py-2.5 font-mono font-semibold">
                              {m.goals}G / {m.assists}A
                            </td>
                            <td className="px-3 py-2.5 text-right font-mono font-bold text-bkfa-orange">
                              ★ {m.rating.toFixed(1)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-xs text-slate-500">No recent match log recorded for this player yet.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
