export type TeamCategory = 'mens-first' | 'womens-first' | 'boys-academy' | 'girls-academy';

export type Position = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';

export interface PlayerAttributes {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}

export interface PlayerStats {
  appearances: number;
  goals: number;
  assists: number;
  cleanSheets?: number;
  minutesPlayed: number;
  yellowCards: number;
  redCards: number;
  playerOfTheMatch: number;
  passAccuracy: number; // percentage
}

export interface MatchLog {
  opponent: string;
  date: string;
  result: 'W' | 'D' | 'L';
  score: string;
  rating: number;
  goals: number;
  assists: number;
  minutes: number;
}

export interface Player {
  id: string;
  name: string;
  nickname?: string;
  jerseyNumber: number;
  category: TeamCategory;
  categoryName: string;
  gender: 'Male' | 'Female';
  position: Position;
  detailedPosition: string; // e.g. "Attacking Midfielder", "Right Winger", "Center Back"
  image: string;
  captain?: boolean;
  viceCaptain?: boolean;
  age: number;
  dateOfBirth: string;
  height: string; // e.g. "5' 11\" (180 cm)"
  weight: string; // e.g. "72 kg"
  preferredFoot: 'Right' | 'Left' | 'Both';
  nationality: string;
  stateOfOrigin: string;
  joinedYear: number;
  marketValueEstimate?: string;
  bio: string;
  scoutReport: string;
  achievements: string[];
  attributes: PlayerAttributes;
  seasonStats: PlayerStats;
  recentMatches: MatchLog[];
  quote?: string;
  socialHandle?: string;
}

export interface MatchFixture {
  id: string;
  competition: string;
  homeTeam: {
    name: string;
    logo?: string;
    isBKFA: boolean;
  };
  awayTeam: {
    name: string;
    logo?: string;
    isBKFA: boolean;
  };
  category: TeamCategory;
  date: string;
  time: string;
  venue: string;
  status: 'UPCOMING' | 'COMPLETED' | 'LIVE';
  score?: {
    home: number;
    away: number;
  };
  highlights?: string;
}

export interface ClubAward {
  year: number;
  title: string;
  recipient: string;
  category: string;
  description: string;
  image?: string;
}
