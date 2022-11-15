import { useContext } from 'react';

import { Team } from '../../../@types/Team';

import { FootballContext } from '../../../contexts/FootballContext';

import { ButtonTeamCardContainer } from './styles';

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  const { setTeam, handleChoicePhase } = useContext(FootballContext);

  function handleChooseTeam(team: Team) {
    setTeam(team);
    handleChoicePhase('finish');
  }

  return (
    <ButtonTeamCardContainer onClick={() => handleChooseTeam(team)}>
      <div>
        <img src={team.logo} alt={team.name} />
      </div>
      <strong>{team.name}</strong>
    </ButtonTeamCardContainer>
  );
}
