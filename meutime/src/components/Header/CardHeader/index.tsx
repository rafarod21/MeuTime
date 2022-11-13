import { useContext } from 'react';
import { League } from '../../../@types/League';

import { FootballContext } from '../../../contexts/FootballContext';
import { translateCountryNameForCode } from '../../../utils/translateCountryName';

import { CardHeaderContainer, ButtonCard } from './styles';

interface CardHeaderProps {
  type: 'country' | 'league' | 'team' | 'season';
}

export function CardHeader({ type }: CardHeaderProps) {
  const {
    choicePhase,
    country,
    league,
    team,
    season,
    handleChoicePhase,
    setCountry,
    setLeague,
    setTeam,
    setSeason,
  } = useContext(FootballContext);

  return (
    <CardHeaderContainer>
      {type === 'country' && (
        <>
          <span>País</span>
          {country === null ? (
            <ButtonCard disabled>
              <span>Escolha um país</span>
            </ButtonCard>
          ) : (
            <ButtonCard onClick={() => handleChoicePhase('country')}>
              <div>
                <img src={country.flag} alt={country.name} />
              </div>
              <strong>{translateCountryNameForCode(country.code)}</strong>
            </ButtonCard>
          )}
        </>
      )}
      {type === 'league' && (
        <>
          <span>Liga</span>
          {league === null ? (
            <ButtonCard disabled>
              <span>
                {choicePhase === 'country' && 'Escolha um país antes'}
                {choicePhase === 'league' && 'Escolha uma liga'}
              </span>
            </ButtonCard>
          ) : (
            <ButtonCard
              onClick={() => handleChoicePhase('league')}
              disabled={choicePhase === 'country'}
            >
              <div>
                <img src={league.logo} alt={league.name} />
              </div>
              <strong>{league.name}</strong>
            </ButtonCard>
          )}
        </>
      )}
      {type === 'team' && (
        <>
          <span>Time</span>
          {team === null ? (
            <ButtonCard disabled>
              <span>
                {choicePhase === 'country' && 'Escolha um país antes'}
                {choicePhase === 'league' && 'Escolha uma liga antes'}
                {choicePhase === 'team' && 'Escolha um time'}
              </span>
            </ButtonCard>
          ) : (
            <ButtonCard
              onClick={() => handleChoicePhase('team')}
              disabled={choicePhase === 'country' || choicePhase === 'league'}
            >
              <div>
                <img src={team.logo} alt={team.name} />
              </div>
              <strong>{team.name}</strong>
            </ButtonCard>
          )}
        </>
      )}
      {type === 'season' && (
        <>
          <span>Temporada</span>
          {season === null ? (
            <ButtonCard disabled>
              <span>
                {choicePhase === 'country' && 'Escolha um país antes'}
                {choicePhase === 'league' && 'Escolha uma liga antes'}
                {choicePhase === 'team' && 'Escolha um time antes'}
                {choicePhase === 'season' && 'Escolha uma temporada'}
              </span>
            </ButtonCard>
          ) : (
            <ButtonCard
              onClick={() => handleChoicePhase('season')}
              disabled={
                choicePhase === 'country' ||
                choicePhase === 'league' ||
                choicePhase === 'team'
              }
            >
              <div>
                <strong>{season}</strong>
              </div>
            </ButtonCard>
          )}
        </>
      )}
    </CardHeaderContainer>
  );
}
