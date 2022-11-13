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
    handleChoicePhase('team');
  }

  return (
    <ButtonLeagueCardContainer onClick={() => handleChooseLeague(league)}>
      <div>
        <img src={league.logo} alt={league.name} />
      </div>
      <strong>{league.name}</strong>
    </ButtonLeagueCardContainer>
  );
}
