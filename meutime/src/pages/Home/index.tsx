import { useContext, useEffect, useState } from 'react';

import { ChooseCountry } from '../../components/Country/ChooseCountry';
import { Header } from '../../components/Header';

import { FootballContext } from '../../contexts/FootballContext';

import { HomeContainer } from './styles';

export function Home() {
  const { country, league, team, season } = useContext(FootballContext);

  return (
    <HomeContainer>
      <Header />
      <ChooseCountry />
    </HomeContainer>
  );
}
