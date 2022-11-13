import { useEffect, useState } from 'react';

import { Search } from '../../Search';
import { TeamCard } from '../TeamCard';

import { Team } from '../../../@types/Team';

import { TeamsWrapper, ChooseTeamContainer } from './styles';

import dataFake from '../../../../data.json';

export function ChooseTeam() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [searchTeam, setSearchTeam] = useState('');

  const filteredCountries =
    searchTeam.length > 0
      ? teams.filter((teams) =>
          teams.name
            ?.toLocaleLowerCase()
            .includes(searchTeam.toLocaleLowerCase())
        )
      : [];

  useEffect(() => {
    setTeams(dataFake.teams);
  }, []);

  return (
    <ChooseTeamContainer>
      <Search
        placeholder='Seleciona um time...'
        value={searchTeam}
        onChange={setSearchTeam}
      />

      <TeamsWrapper>
        {searchTeam.length > 0
          ? filteredCountries.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))
          : teams.map((team) => <TeamCard key={team.id} team={team} />)}
      </TeamsWrapper>
    </ChooseTeamContainer>
  );
}
