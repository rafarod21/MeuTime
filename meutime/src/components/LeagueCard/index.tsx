import { League } from '../../@types/League';

import { ButtonLeagueCardContainer, LeagueCardContainer } from './styles';

interface LeagueCardProps {
  league: League;
  setLeague?: (league: League) => void;
}

export function LeagueCard({ league, setLeague }: LeagueCardProps) {
  if (setLeague === undefined) {
    return (
      <LeagueCardContainer>
        <img src={league.logo} alt={league.name} />
        <span>{league.name}</span>
      </LeagueCardContainer>
    );
  }

  return (
    <ButtonLeagueCardContainer onClick={() => setLeague(league)}>
      <img src={league.logo} alt={league.name} />
      <span>{league.name}</span>
    </ButtonLeagueCardContainer>
  );
}
