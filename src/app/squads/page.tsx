'use client';

import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import SquadSection from '@/app/components/SquadSection';
import PlayerModal from '@/app/components/PlayerModal';
import RegistrationModal from '@/app/components/RegistrationModal';
import { Player } from '@/lib/types';

export default function SquadsPage() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isTryoutsOpen, setIsTryoutsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar onOpenTryouts={() => setIsTryoutsOpen(true)} />

      <main className="flex-1 py-10 bg-white">
        {/* Page Top Header */}
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-bkfa-lemonDark">
            Squad Directory
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-bkfa-navy mt-2">
            BKFA <span className="text-bkfa-orange">Teams & Rosters</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Browse our full active roster across the Men's Senior Team, Women's First Team (Queens), and Elite Youth Academy divisions. Click any athlete to view their complete stats profile.
          </p>
        </div>

        {/* Reusable Filterable Squads Hub */}
        <SquadSection onSelectPlayer={(player) => setSelectedPlayer(player)} />
      </main>

      <Footer />

      {/* Player Detail Modal */}
      <PlayerModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
        onSelectPlayer={(player) => setSelectedPlayer(player)}
      />

      {/* Tryouts Modal */}
      <RegistrationModal
        isOpen={isTryoutsOpen}
        onClose={() => setIsTryoutsOpen(false)}
      />
    </div>
  );
}
