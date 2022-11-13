import { useContext, useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { ChooseCountry } from '../../components/Country/ChooseCountry';
import { ChooseLeague } from '../../components/League/ChooseLeague';
import { ChooseTeam } from '../../components/Team/ChooseTeam';
import { ChooseSeason } from '../../components/Season/ChooseSeason';
import { InformationsTeam } from '../../components/InformationsTeam';

import { FootballContext } from '../../contexts/FootballContext';

import { HomeContainer } from './styles';

export function Home() {
  const { choicePhase } = useContext(FootballContext);

  return (
    <HomeContainer>
      <Header />
      {choicePhase === 'country' && <ChooseCountry />}
      {choicePhase === 'league' && <ChooseLeague />}
      {choicePhase === 'team' && <ChooseTeam />}
      {choicePhase === 'season' && <ChooseSeason />}
      {choicePhase === 'finish' && <InformationsTeam />}
    </HomeContainer>
  );
}
