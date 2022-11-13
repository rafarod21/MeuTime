import { createContext, ReactNode, useEffect, useState } from 'react';

import { Country } from '../@types/Country';
import { League } from '../@types/League';
import { Team } from '../@types/Team';

import dataFake from '../../data.json';

export interface FootballContextDataProps {
  country: Country | null;
  league: League | null;
  team: Team | null;
  season: number | null;
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
  // const [country, setCountry] = useState<Country | null>(null);
  // const [league, setLeague] = useState<League | null>(null);
  // const [team, setTeam] = useState<Team | null>(null);
  // const [season, setSeason] = useState<number | null>(null);
  const [country, setCountry] = useState<Country | null>(dataFake.countries[0]);
  const [league, setLeague] = useState<League | null>(dataFake.leagues[0]);
  const [team, setTeam] = useState<Team | null>(dataFake.teams[0]);
  const [season, setSeason] = useState<number | null>(2018);

  return (
    <FootballContext.Provider
      value={{
        country,
        league,
        team,
        season,
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
