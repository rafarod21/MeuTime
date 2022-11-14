import { useEffect, useState } from 'react';

import { Search } from '../../Search';
import { LeagueCard } from '../LeagueCard';

import { League } from '../../../@types/League';

import { LeaguesWrapper, ChooseLeagueContainer } from './styles';

import dataFake from '../../../../data.json';

export function ChooseLeague() {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [searchLeague, setSearchLeague] = useState('');

  const filteredCountries =
    searchLeague.length > 0
      ? leagues.filter((leagues) =>
          leagues.name
            ?.toLocaleLowerCase()
            .includes(searchLeague.toLocaleLowerCase())
        )
      : [];

  useEffect(() => {
    setLeagues(dataFake.leagues);
  }, []);

  return (
    <ChooseLeagueContainer>
      <Search
        placeholder='Seleciona uma liga...'
        value={searchLeague}
        onChange={setSearchLeague}
      />

      <LeaguesWrapper>
        {searchLeague.length > 0
          ? filteredCountries.map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))
          : leagues.map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))}
        {searchLeague.length > 0
          ? filteredCountries.map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))
          : leagues.map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))}
        {searchLeague.length > 0
          ? filteredCountries.map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))
          : leagues.map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))}
      </LeaguesWrapper>
    </ChooseLeagueContainer>
  );
}
