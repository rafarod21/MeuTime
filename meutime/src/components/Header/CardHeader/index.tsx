import { useContext } from 'react';
import { League } from '../../../@types/League';

import { FootballContext } from '../../../contexts/FootballContext';
import { translateCountryName } from '../../../utils/translateCountryName';

import { CardHeaderContainer, ButtonCard } from './styles';

interface CardHeaderProps {
  type: 'country' | 'league' | 'team' | 'season';
  choicePhase: 'country' | 'league' | 'team' | 'season';
  changeChoisePhase: (phase: 'country' | 'league' | 'team' | 'season') => void;
}

export function CardHeader({
  type,
  choicePhase,
  changeChoisePhase,
}: CardHeaderProps) {
  const {
    country,
    league,
    team,
    season,
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
            <ButtonCard onClick={() => changeChoisePhase('country')}>
              <div>
                <img src={country.flag} alt={country.name} />
              </div>
              <strong>{translateCountryName(country.code)}</strong>
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
              onClick={() => changeChoisePhase('league')}
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
              onClick={() => changeChoisePhase('team')}
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
              onClick={() => changeChoisePhase('season')}
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
