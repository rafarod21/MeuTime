import { createContext, ReactNode, useEffect, useState } from 'react';

import { Country } from '../@types/Country';
import { League } from '../@types/League';
import { Team } from '../@types/Team';

import dataFake from '../../data.json';

const TEST_FIXED_COUNTRY: Country = {
  code: 'GB',
  flag: 'https://media.api-sports.io/flags/gb.svg',
  name: 'England',
};
const TEST_FIXED_LEAGUE: League = {
  league: {
    id: 39,
    name: 'Premier League',
    type: 'League',
    logo: 'https://media.api-sports.io/football/leagues/39.png',
  },
  country: {
    name: 'England',
    code: 'GB',
    flag: 'https://media.api-sports.io/flags/gb.svg',
  },
  seasons: [
    {
      year: 2010,
      start: '2010-08-14',
      end: '2011-05-17',
      current: false,
    },
    {
      year: 2011,
      start: '2011-08-13',
      end: '2012-05-13',
      current: false,
    },
    {
      year: 2012,
      start: '2012-08-18',
      end: '2013-05-19',
      current: false,
    },
    {
      year: 2013,
      start: '2013-08-17',
      end: '2014-05-11',
      current: false,
    },
    {
      year: 2014,
      start: '2014-08-16',
      end: '2015-05-24',
      current: false,
    },
    {
      year: 2015,
      start: '2015-08-08',
      end: '2016-05-17',
      current: false,
    },
    {
      year: 2016,
      start: '2016-08-13',
      end: '2017-05-21',
      current: false,
    },
    {
      year: 2017,
      start: '2017-08-11',
      end: '2018-05-13',
      current: false,
    },
    {
      year: 2018,
      start: '2018-08-10',
      end: '2019-05-12',
      current: false,
    },
    {
      year: 2019,
      start: '2019-08-09',
      end: '2020-07-26',
      current: false,
    },
    {
      year: 2020,
      start: '2020-09-12',
      end: '2021-05-23',
      current: false,
    },
    {
      year: 2021,
      start: '2021-08-13',
      end: '2022-05-22',
      current: false,
    },
    {
      year: 2022,
      start: '2022-08-05',
      end: '2023-05-28',
      current: true,
    },
  ],
};
const TEST_FIXED_SEASON = 2020;
const TEST_FIXED_TEAM: Team = {
  id: 33,
  name: 'Manchester United',
  code: 'MUN',
  country: 'England',
  founded: 1878,
  national: false,
  logo: 'https://media.api-sports.io/football/teams/33.png',
};

type Phase = 'country' | 'league' | 'season' | 'team' | 'finish';

export interface FootballContextDataProps {
  choicePhase: Phase;
  country: Country | null;
  listCountries: Country[] | null;
  league: League | null;
  season: number | null;
  team: Team | null;
  handleChoicePhase: (phase: Phase) => void;
  setCountry: (country: Country | null) => void;
  setListCountries: (countries: Country[] | null) => void;
  setLeague: (league: League | null) => void;
  setSeason: (season: number | null) => void;
  setTeam: (team: Team | null) => void;
}

interface FootballProviderProps {
  children: ReactNode;
}

export const FootballContext = createContext({} as FootballContextDataProps);

export function FootballContextProvider({ children }: FootballProviderProps) {
  const [choicePhase, setChoicePhase] = useState<Phase>('country');
  const [country, setCountry] = useState<Country | null>(null);
  const [listCountries, setListCountries] = useState<Country[] | null>(null);
  const [league, setLeague] = useState<League | null>(null);
  const [season, setSeason] = useState<number | null>(null);
  const [team, setTeam] = useState<Team | null>(null);

  // const [choicePhase, setChoicePhase] = useState<Phase>('finish');
  // const [country, setCountry] = useState<Country | null>(TEST_FIXED_COUNTRY);
  // const [listCountries, setListCountries] = useState<Country[] | null>([
  //   TEST_FIXED_COUNTRY,
  //   TEST_FIXED_COUNTRY,
  // ]);
  // const [league, setLeague] = useState<League | null>(TEST_FIXED_LEAGUE);
  // const [season, setSeason] = useState<number | null>(TEST_FIXED_SEASON);
  // const [team, setTeam] = useState<Team | null>(TEST_FIXED_TEAM);

  function handleChoicePhase(phase: Phase) {
    switch (phase) {
      case 'country':
        setChoicePhase('country');
        setCountry(null);
        setLeague(null);
        setSeason(null);
        setTeam(null);
        return;
      case 'league':
        setChoicePhase('league');
        setLeague(null);
        setSeason(null);
        setTeam(null);
        return;
      case 'season':
        setChoicePhase('season');
        setSeason(null);
        setTeam(null);
        return;
      case 'team':
        setChoicePhase('team');
        setTeam(null);
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
        listCountries,
        league,
        season,
        team,
        handleChoicePhase,
        setCountry,
        setListCountries,
        setLeague,
        setSeason,
        setTeam,
      }}
    >
      {children}
    </FootballContext.Provider>
  );
}
