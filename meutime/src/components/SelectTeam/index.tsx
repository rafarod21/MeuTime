import { useState } from 'react';

import { TeamCard } from '../TeamCard';

import { Team } from '../../@types/Team';

import { TeamsWrapper, SelectTeamContainer } from './styles';

interface SelectTeamProps {
  selectedTeam: Team;
  teams: Team[];
  handleSelectTeam: (team: Team) => void;
}

export function SelectTeam({
  selectedTeam,
  teams,
  handleSelectTeam,
}: SelectTeamProps) {
  const [searchTeam, setSearchTeam] = useState('');

  const filteredTeams =
    searchTeam.length > 0
      ? teams.filter((team) =>
          team.name
            ?.toLocaleLowerCase()
            .includes(searchTeam.toLocaleLowerCase())
        )
      : [];

  function handleSetTeam(team: Team) {
    setSearchTeam(team.name || '');
    handleSelectTeam(team);
  }

  function resetSelectedTeam() {
    handleSelectTeam({} as Team);
  }

  return (
    <SelectTeamContainer>
      <input
        type='text'
        placeholder='Selecione uma liga...'
        value={searchTeam}
        onChange={(event) => setSearchTeam(event.target.value)}
        onFocus={resetSelectedTeam}
      />
      {selectedTeam?.name ? (
        <TeamCard team={selectedTeam} />
      ) : (
        <TeamsWrapper>
          {searchTeam.length > 0
            ? filteredTeams.map((team) => (
                <div key={team.name}>
                  <TeamCard team={team} setTeam={handleSetTeam} />
                </div>
              ))
            : teams.map((team) => (
                <div key={team.name}>
                  <TeamCard team={team} setTeam={handleSetTeam} />
                </div>
              ))}
        </TeamsWrapper>
      )}
    </SelectTeamContainer>
  );
}
