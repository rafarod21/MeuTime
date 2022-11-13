import { useContext, useEffect, useState } from 'react';

import { ChooseCountry } from '../../components/Country/ChooseCountry';
import { Header } from '../../components/Header';

import { FootballContext } from '../../contexts/FootballContext';

import { HomeContainer } from './styles';

export function Home() {
  const { choicePhase } = useContext(FootballContext);

  return (
    <HomeContainer>
      <Header />
      {choicePhase === 'country' && <ChooseCountry />}
      {choicePhase === 'league' && <ChooseCountry />}
      {choicePhase === 'team' && <ChooseCountry />}
      {choicePhase === 'season' && <ChooseCountry />}
    </HomeContainer>
  );
}
