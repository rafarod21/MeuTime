import { useContext } from 'react';

import { League } from '../../../@types/League';

import { FootballContext } from '../../../contexts/FootballContext';

import { ButtonLeagueCardContainer } from './styles';

interface LeagueCardProps {
  league: League;
}

export function LeagueCard({ league }: LeagueCardProps) {
  const { setLeague, handleChoicePhase } = useContext(FootballContext);

  function handleChooseLeague(league: League) {
    setLeague(league);
    handleChoicePhase('season');
  }

  return (
    <ButtonLeagueCardContainer onClick={() => handleChooseLeague(league)}>
      <div>
        <img src={league.league.logo} alt={league.league.name} />
      </div>
      <strong>{league.league.name}</strong>
    </ButtonLeagueCardContainer>
  );
}
