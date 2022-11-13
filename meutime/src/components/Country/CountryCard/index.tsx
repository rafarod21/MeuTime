import { useContext } from 'react';

import { Country } from '../../../@types/Country';

import { FootballContext } from '../../../contexts/FootballContext';

import { DefaultCardList } from '../../DefaultCardList';

import { ButtonCountryCardContainer } from './styles';

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  const { setCountry } = useContext(FootballContext);

  return (
    <ButtonCountryCardContainer onClick={() => setCountry(country)}>
      {/* <DefaultCardList name={country.brazilianName} image={country.flag} /> */}
    </ButtonCountryCardContainer>
  );
}
