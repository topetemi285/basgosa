'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import PlayerCard from '@/app/components/PlayerCard';
import { PLAYERS_DATA } from '@/lib/footballData';

interface PlayerPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function PlayerDetailPage({ params }: PlayerPageProps) {
  const resolvedParams = use(params);
  const player = PLAYERS_DATA.find((p) => p.id === resolvedParams.id);

  if (!player) {
    notFound();
  }

  const isFemale = player.gender === 'Female';

  const attributesList = [
    { label: 'Pace (PAC)', value: player.attributes.pace, color: 'bg-bkfa-lemon' },
    { label: 'Shooting (SHO)', value: player.attributes.shooting, color: 'bg-bkfa-orange' },
    { label: 'Passing (PAS)', value: player.attributes.passing, color: 'bg-sky-500' },
    { label: 'Dribbling (DRI)', value: player.attributes.dribbling, color: 'bg-amber-500' },
    { label: 'Defending (DEF)', value: player.attributes.defending, color: 'bg-bkfa-navy' },
    { label: 'Physicality (PHY)', value: player.attributes.physical, color: 'bg-emerald-600' },
  ];

  // Teammates in same squad
  const teammates = PLAYERS_DATA.filter(
    (p) => p.category === player.category && p.id !== player.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-bkfa-orange transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/squads" className="hover:text-bkfa-orange transition-colors">
              Squads
            </Link>
            <span>/</span>
            <span className="text-bkfa-orange font-semibold">{player.categoryName}</span>
            <span>/</span>
            <span className="text-slate-900 font-bold">{player.name}</span>
          </nav>

          {/* Hero Profile Card in Clean White Theme */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-cleanHover mb-10">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-bkfa-lemon via-bkfa-orange to-bkfa-navy" />

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left: Player Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bkfa-navy via-transparent to-transparent opacity-85" />
                  <div className="absolute top-4 left-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bkfa-navy border-2 border-bkfa-lemon font-display text-2xl font-black text-bkfa-lemon shadow-lg backdrop-blur-md">
                      #{player.jerseyNumber}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Player Bio & Key Info */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={`rounded-full border px-3 py-0.5 text-xs font-bold uppercase tracking-wider ${
                      isFemale
                        ? 'bg-pink-100 text-pink-700 border-pink-300'
                        : 'bg-bkfa-navy/10 text-bkfa-navy border-bkfa-navy/20'
                    }`}
                  >
                    {player.categoryName}
                  </span>
                  <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-0.5 text-xs font-bold text-slate-700">
                    {player.position}
                  </span>
                  {player.captain && (
                    <span className="rounded-full bg-bkfa-orange px-2.5 py-0.5 text-xs font-black uppercase text-white shadow-xs">
                      Team Captain (C)
                    </span>
                  )}
                </div>

                <span className="text-sm font-bold uppercase tracking-widest text-bkfa-orange">
                  {player.detailedPosition}
                </span>

                <h1 className="font-display text-3xl sm:text-5xl font-black text-bkfa-navy mt-1">
                  {player.name}
                </h1>

                {player.nickname && (
                  <p className="font-display text-lg italic text-bkfa-orange mt-1">
                    "{player.nickname}"
                  </p>
                )}

                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-medium">
                  {player.bio}
                </p>

                {/* Key Metrics Grid */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                    <span className="text-[10px] font-bold uppercase text-slate-400">Age</span>
                    <span className="block font-display text-xl font-bold text-bkfa-navy">{player.age} yrs</span>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                    <span className="text-[10px] font-bold uppercase text-slate-400">Height</span>
                    <span className="block font-display text-sm font-bold text-bkfa-navy mt-1">{player.height}</span>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                    <span className="text-[10px] font-bold uppercase text-slate-400">Foot</span>
                    <span className="block font-display text-lg font-bold text-bkfa-orange">{player.preferredFoot}</span>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                    <span className="text-[10px] font-bold uppercase text-slate-400">Origin</span>
                    <span className="block font-display text-xs font-bold text-bkfa-navy mt-1">{player.stateOfOrigin}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Data Sections */}
          <div className="grid gap-8 lg:grid-cols-12 mb-16">
            {/* Left: Attributes & Scouting Report */}
            <div className="lg:col-span-6 space-y-6">
              {/* FIFA Attributes */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-clean">
                <h3 className="font-display text-xl font-bold text-bkfa-navy mb-4 flex items-center justify-between">
                  <span>Player Attributes</span>
                  <span className="text-xs font-mono font-bold text-bkfa-orange uppercase">BKFA Analytics</span>
                </h3>
                <div className="space-y-3.5">
                  {attributesList.map((attr) => (
                    <div key={attr.label} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-700">{attr.label}</span>
                        <span className="font-mono font-bold text-bkfa-navy">{attr.value} / 99</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200">
                        <div
                          className={`h-full rounded-full ${attr.color}`}
                          style={{ width: `${attr.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scout Report */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-clean">
                <h3 className="font-display text-xl font-bold text-bkfa-navy mb-3">
                  Technical Scouting Report
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {player.scoutReport}
                </p>
                {player.achievements?.length > 0 && (
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Honors & Key Milestones
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {player.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-bkfa-orange">🏆</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Season Stats & Match Log */}
            <div className="lg:col-span-6 space-y-6">
              {/* Season Performance Overview */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-clean">
                <h3 className="font-display text-xl font-bold text-bkfa-navy mb-4">
                  Season 2024 - 2026 Statistics
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                    <span className="text-[10px] font-bold uppercase text-slate-500">Appearances</span>
                    <span className="block font-display text-3xl font-black text-bkfa-navy mt-1">
                      {player.seasonStats.appearances}
                    </span>
                  </div>
                  <div className="rounded-2xl border border-bkfa-orange/30 bg-bkfa-orangeBg p-4 text-center">
                    <span className="text-[10px] font-bold uppercase text-bkfa-orange">
                      {player.position === 'Goalkeeper' ? 'Clean Sheets' : 'Goals'}
                    </span>
                    <span className="block font-display text-3xl font-black text-bkfa-orange mt-1">
                      {player.position === 'Goalkeeper' ? player.seasonStats.cleanSheets ?? 0 : player.seasonStats.goals}
                    </span>
                  </div>
                  <div className="rounded-2xl border border-bkfa-lemonDark/30 bg-bkfa-lemonBg p-4 text-center">
                    <span className="text-[10px] font-bold uppercase text-bkfa-lemonDark">
                      {player.position === 'Goalkeeper' ? 'Pass %' : 'Assists'}
                    </span>
                    <span className="block font-display text-3xl font-black text-bkfa-lemonDark mt-1">
                      {player.position === 'Goalkeeper' ? `${player.seasonStats.passAccuracy}%` : player.seasonStats.assists}
                    </span>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                    <span className="text-[10px] font-bold uppercase text-slate-500">MOTM Awards</span>
                    <span className="block font-display text-3xl font-black text-bkfa-navy mt-1">
                      {player.seasonStats.playerOfTheMatch}
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-center text-xs text-slate-700 font-medium">
                  <div>
                    <span className="text-slate-500">Minutes:</span> {player.seasonStats.minutesPlayed}'
                  </div>
                  <div>
                    <span className="text-slate-500">Pass Accuracy:</span> {player.seasonStats.passAccuracy}%
                  </div>
                  <div>
                    <span className="text-slate-500">Cards (Y/R):</span> {player.seasonStats.yellowCards} / {player.seasonStats.redCards}
                  </div>
                </div>
              </div>

              {/* Match Log Table */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-clean">
                <h3 className="font-display text-xl font-bold text-bkfa-navy mb-4">
                  Recent Match Appearances
                </h3>
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
                  <p className="text-xs text-slate-500">No match records logged yet.</p>
                )}
              </div>
            </div>
          </div>

          {/* Teammates Showcase */}
          {teammates.length > 0 && (
            <div className="border-t border-slate-200 pt-12 mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl font-bold text-bkfa-navy">
                  Other {player.categoryName} Players
                </h3>
                <Link
                  href="/squads"
                  className="text-xs font-bold text-bkfa-orange hover:underline"
                >
                  View All Teammates →
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
                {teammates.map((mate) => (
                  <Link key={mate.id} href={`/players/${mate.id}`}>
                    <PlayerCard player={mate} onSelectPlayer={() => {}} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
