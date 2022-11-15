import { useContext, useEffect, useState } from 'react';

import { Search } from '../../Search';
import { LeagueCard } from '../LeagueCard';

import { League } from '../../../@types/League';

import { FootballContext } from '../../../contexts/FootballContext';

import { apiFootball } from '../../../lib/apiFootball';

import { LeaguesWrapper, ChooseLeagueContainer } from './styles';

export function ChooseLeague() {
  const { country } = useContext(FootballContext);
  const [leagues, setLeagues] = useState<League[]>([]);
  const [searchLeague, setSearchLeague] = useState('');

  const filteredCountries =
    searchLeague.length > 0
      ? leagues.filter((league) =>
          league.league.name
            ?.toLocaleLowerCase()
            .includes(searchLeague.toLocaleLowerCase())
        )
      : [];

  useEffect(() => {
    async function getLeaguesByCountry() {
      if (country?.code) {
        try {
          const { data } = await apiFootball.get('/leagues', {
            params: {
              code: country.code,
            },
          });
          console.log(data);
          console.log(data.response.length);

          if (data.response.length > 0) {
            setLeagues(data.response as League[]);
          } else {
            console.log(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    getLeaguesByCountry();
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
              <LeagueCard key={league.league.id} league={league} />
            ))
          : leagues.map((league) => (
              <LeagueCard key={league.league.id} league={league} />
            ))}
      </LeaguesWrapper>
    </ChooseLeagueContainer>
  );
}
