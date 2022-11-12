import { Team } from '../../@types/Team';

import { ButtonTeamCardContainer, TeamCardContainer } from './styles';

interface TeamCardProps {
  team: Team;
  setTeam?: (team: Team) => void;
}

export function TeamCard({ team, setTeam }: TeamCardProps) {
  if (setTeam === undefined) {
    return (
      <TeamCardContainer>
        <img src={team.logo} alt={team.name} />
        <span>{team.name}</span>
      </TeamCardContainer>
    );
  }

  return (
    <ButtonTeamCardContainer onClick={() => setTeam(team)}>
      <img src={team.logo} alt={team.name} />
      <span>{team.name}</span>
    </ButtonTeamCardContainer>
  );
}
