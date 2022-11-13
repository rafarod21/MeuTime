import { useContext, useState } from 'react';

import logoImg from '../../assets/logo.svg';

import { FootballContext } from '../../contexts/FootballContext';

import { CardHeader } from './CardHeader';

import { HeaderContainer, ShowChoices } from './styles';

export function Header() {
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
  const [choicePhase, setChoicePhase] = useState<
    'country' | 'league' | 'team' | 'season'
  >('season');

  function handleChoicePhase(phase: 'country' | 'league' | 'team' | 'season') {
    switch (phase) {
      case 'country':
        setChoicePhase('country');
        setCountry(null);
        setLeague(null);
        setTeam(null);
        setSeason(null);
        return;
      case 'league':
        setChoicePhase('league');
        setLeague(null);
        setTeam(null);
        setSeason(null);
        return;
      case 'team':
        setChoicePhase('team');
        setTeam(null);
        setSeason(null);
        return;
      case 'season':
        setChoicePhase('season');
        setSeason(null);
        return;
      default:
        return;
    }
  }

  return (
    <HeaderContainer>
      <img src={logoImg} alt='Meu Time' />

      <ShowChoices>
        <CardHeader
          type='country'
          choicePhase={choicePhase}
          changeChoisePhase={handleChoicePhase}
        />
        <CardHeader
          type='league'
          choicePhase={choicePhase}
          changeChoisePhase={handleChoicePhase}
        />
        <CardHeader
          type='team'
          choicePhase={choicePhase}
          changeChoisePhase={handleChoicePhase}
        />
        <CardHeader
          type='season'
          choicePhase={choicePhase}
          changeChoisePhase={handleChoicePhase}
        />
      </ShowChoices>
    </HeaderContainer>
  );
}
