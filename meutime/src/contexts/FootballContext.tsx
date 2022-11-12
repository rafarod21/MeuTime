import { createContext, ReactNode, useEffect, useState } from 'react';

import { Country } from '../@types/Country';
import { League } from '../@types/League';
import { Team } from '../@types/Team';

export interface FootballContextDataProps {
  country: Country;
  league: League;
  team: Team;
  season: number;
  setCountry: (country: Country) => void;
  setLeague: (league: League) => void;
  setTeam: (team: Team) => void;
  setSeason: (season: number) => void;
}

interface FootballProviderProps {
  children: ReactNode;
}

export const FootballContext = createContext({} as FootballContextDataProps);

export function FootballContextProvider({ children }: FootballProviderProps) {
  const [country, setCountry] = useState<Country>({} as Country);
  const [league, setLeague] = useState<League>({} as League);
  const [team, setTeam] = useState<Team>({} as Team);
  const [season, setSeason] = useState(9999);

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
