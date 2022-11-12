import { Country } from '../../@types/Country';

import { ButtonCountryCardContainer, CountryCardContainer } from './styles';

interface CountryCardProps {
  country: Country;
  setCountry?: (country: Country) => void;
}

export function CountryCard({ country, setCountry }: CountryCardProps) {
  if (setCountry === undefined) {
    return (
      <CountryCardContainer>
        <img src={country.flag} alt={country.brazilianName} />
        <span>{country.brazilianName}</span>
      </CountryCardContainer>
    );
  }

  return (
    <ButtonCountryCardContainer onClick={() => setCountry(country)}>
      <img src={country.flag} alt={country.brazilianName} />
      <span>{country.brazilianName}</span>
    </ButtonCountryCardContainer>
  );
}
