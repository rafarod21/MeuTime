import { createContext, ReactNode, useEffect, useState } from 'react';

import { Country } from '../@types/Country';
import { League } from '../@types/League';
import { Team } from '../@types/Team';

import dataFake from '../../data.json';

type Phase = 'country' | 'league' | 'team' | 'season' | 'finish';

export interface FootballContextDataProps {
  choicePhase: Phase;
  country: Country | null;
  league: League | null;
  team: Team | null;
  season: number | null;
  handleChoicePhase: (phase: Phase) => void;
  setCountry: (country: Country | null) => void;
  setLeague: (league: League | null) => void;
  setTeam: (team: Team | null) => void;
  setSeason: (season: number | null) => void;
}

interface FootballProviderProps {
  children: ReactNode;
}

export const FootballContext = createContext({} as FootballContextDataProps);

export function FootballContextProvider({ children }: FootballProviderProps) {
  const [choicePhase, setChoicePhase] = useState<Phase>('country');
  const [country, setCountry] = useState<Country | null>(null);
  const [league, setLeague] = useState<League | null>(null);
  const [team, setTeam] = useState<Team | null>(null);
  const [season, setSeason] = useState<number | null>(null);

  function handleChoicePhase(phase: Phase) {
    switch (phase) {
      case 'country':
        setChoicePhase('country');
        setCountry(null);
        setLeague(null);
        setTeam(null);
        setSeason(null);
        return;
      case 'league':
        setChoicePhase('league');
        setLeague(null);
        setTeam(null);
        setSeason(null);
        return;
      case 'team':
        setChoicePhase('team');
        setTeam(null);
        setSeason(null);
        return;
      case 'season':
        setChoicePhase('season');
        setSeason(null);
        return;
      case 'finish':
        setChoicePhase('finish');
        return;
      default:
        return;
    }
  }

  return (
    <FootballContext.Provider
      value={{
        choicePhase,
        country,
        league,
        team,
        season,
        handleChoicePhase,
        setCountry,
        setLeague,
        setTeam,
        setSeason,
      }}
    >
      {children}
    </FootballContext.Provider>
  );
}
