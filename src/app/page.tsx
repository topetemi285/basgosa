'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SquadSection from './components/SquadSection';
import FixturesSection from './components/FixturesSection';
import AcademySection from './components/AcademySection';
import PlayerModal from './components/PlayerModal';
import RegistrationModal from './components/RegistrationModal';
import Footer from './components/Footer';
import { Player } from '@/lib/types';

export default function Home() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isTryoutsOpen, setIsTryoutsOpen] = useState(false);

  const handleExploreSquads = () => {
    const squadElem = document.getElementById('squads');
    if (squadElem) {
      squadElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-bkfa-orange selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenTryouts={() => setIsTryoutsOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 bg-white">
        {/* Athletic Hero with Background Video & Next Match Counter */}
        <HeroSection
          onOpenTryouts={() => setIsTryoutsOpen(true)}
          onExploreSquads={handleExploreSquads}
        />

        {/* Squad Hub with Male and Female Category Selector & Player Cards */}
        <SquadSection
          onSelectPlayer={(player) => setSelectedPlayer(player)}
        />

        {/* Match Fixtures & Scores */}
        <FixturesSection />

        {/* Academy Hub, Award Night Gala in Jos & Pathways */}
        <AcademySection
          onOpenTryouts={() => setIsTryoutsOpen(true)}
        />
      </main>

      {/* Footer with Terms and Privacy Policy Links */}
      <Footer />

      {/* Interactive Full Player Profile Modal */}
      <PlayerModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
        onSelectPlayer={(player) => setSelectedPlayer(player)}
      />

      {/* Tryout / Academy Registration Modal */}
      <RegistrationModal
        isOpen={isTryoutsOpen}
        onClose={() => setIsTryoutsOpen(false)}
      />
    </div>
  );
}
