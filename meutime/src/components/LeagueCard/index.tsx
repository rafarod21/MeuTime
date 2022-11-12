import { League } from '../../@types/League';

import { LeagueCardContainer } from './styles';

interface LeagueCardProps {
  league: League;
}

export function LeagueCard({ league }: LeagueCardProps) {
  return (
    <LeagueCardContainer>
      <img src={league.logo} alt={league.name} />
      <span>{league.name}</span>
    </LeagueCardContainer>
  );
}
