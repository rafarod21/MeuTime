import { useContext } from 'react';

import { Country } from '../../../@types/Country';

import { FootballContext } from '../../../contexts/FootballContext';
import { translateCountryNameForCode } from '../../../utils/translateCountryName';

import { ButtonCountryCardContainer } from './styles';

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  const { setCountry, handleChoicePhase } = useContext(FootballContext);

  function handleChooseCountry(country: Country) {
    setCountry(country);
    handleChoicePhase('league');
  }

  return (
    <ButtonCountryCardContainer onClick={() => handleChooseCountry(country)}>
      <div>
        <img src={country.flag} alt={country.name} />
      </div>
      <strong>{translateCountryNameForCode(country.code)}</strong>
    </ButtonCountryCardContainer>
  );
}
