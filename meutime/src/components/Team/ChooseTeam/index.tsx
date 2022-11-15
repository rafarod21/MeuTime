import { useContext, useEffect, useState } from 'react';

import { Search } from '../../Search';
import { TeamCard } from '../TeamCard';

import { Team } from '../../../@types/Team';

import { FootballContext } from '../../../contexts/FootballContext';

import { apiFootball } from '../../../lib/apiFootball';

import { TeamsWrapper, ChooseTeamContainer } from './styles';

export function ChooseTeam() {
  const { league, season } = useContext(FootballContext);
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
    async function getTeamsByLeagueAndSeason() {
      if (league) {
        try {
          const { data } = await apiFootball.get('/teams', {
            params: {
              league: league.league.id,
              season,
            },
          });

          if (data.response.length > 0) {
            const teamResponse: Team[] = data.response.map(
              (value: { team: Team }) => value.team
            );
            setTeams(teamResponse);
          } else {
            console.log(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    getTeamsByLeagueAndSeason();
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
