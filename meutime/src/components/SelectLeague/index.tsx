import { useState } from 'react';

import { LeagueCard } from '../LeagueCard';

import { League } from '../../@types/League';

import { LeaguesWrapper, SelectLeagueContainer } from './styles';

interface SelectLeagueProps {
  selectedLeague: League;
  leagues: League[];
  handleSelectLeague: (league: League) => void;
}

export function SelectLeague({
  selectedLeague,
  leagues,
  handleSelectLeague,
}: SelectLeagueProps) {
  const [searchLeague, setSearchLeague] = useState('');

  const filteredLeagues =
    searchLeague.length > 0
      ? leagues.filter((league) =>
          league.name
            ?.toLocaleLowerCase()
            .includes(searchLeague.toLocaleLowerCase())
        )
      : [];

  function handleSetLeague(league: League) {
    setSearchLeague(league.name || '');
    handleSelectLeague(league);
  }

  function resetSelectedLeague() {
    handleSelectLeague({} as League);
  }

  return (
    <SelectLeagueContainer>
      <input
        type='text'
        placeholder='Selecione uma liga...'
        value={searchLeague}
        onChange={(event) => setSearchLeague(event.target.value)}
        onFocus={resetSelectedLeague}
      />
      {selectedLeague?.name ? (
        <LeagueCard league={selectedLeague} />
      ) : (
        <LeaguesWrapper>
          {searchLeague.length > 0
            ? filteredLeagues.map((league) => (
                <div key={league.name}>
                  <LeagueCard league={league} setLeague={handleSetLeague} />
                </div>
              ))
            : leagues.map((league) => (
                <div key={league.name}>
                  <LeagueCard league={league} setLeague={handleSetLeague} />
                </div>
              ))}
        </LeaguesWrapper>
      )}
    </SelectLeagueContainer>
  );
}
