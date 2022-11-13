import { useContext } from 'react';

import { FootballContext } from '../../../contexts/FootballContext';

import { ButtonSeasonCardContainer } from './styles';

interface SeasonCardProps {
  season: number;
}

export function SeasonCard({ season }: SeasonCardProps) {
  const { setSeason, handleChoicePhase } = useContext(FootballContext);

  function handleChooseSeason(season: number) {
    setSeason(season);
    handleChoicePhase('finish');
  }

  return (
    <ButtonSeasonCardContainer onClick={() => handleChooseSeason(season)}>
      <strong>{season}</strong>
    </ButtonSeasonCardContainer>
  );
}
