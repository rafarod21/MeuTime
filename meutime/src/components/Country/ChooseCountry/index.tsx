import { useContext, useEffect, useState } from 'react';

import { Search } from '../../Search';
import { CountryCard } from '../CountryCard';

import { Country } from '../../../@types/Country';

import {
  translateCountryNameForCode,
  translateCountryNameForName,
} from '../../../utils/translateCountryName';

import { FootballContext } from '../../../contexts/FootballContext';

import { CountriesWrapper, ChooseCountryContainer } from './styles';

export function ChooseCountry() {
  const { listCountries } = useContext(FootballContext);
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchCountry, setSearchCountry] = useState('');

  const filteredCountries =
    searchCountry.length > 0
      ? countries.filter((country) =>
          translateCountryNameForName(country.name)
            ?.toLocaleLowerCase()
            .includes(searchCountry.toLocaleLowerCase())
        )
      : [];

  useEffect(() => {
    console.log(listCountries);
    if (listCountries) {
      setCountries(listCountries as Country[]);
    }
  }, []);

  return (
    <ChooseCountryContainer>
      <Search
        placeholder='Selecione um país...'
        value={searchCountry}
        onChange={setSearchCountry}
      />
      <CountriesWrapper>
        {searchCountry.length > 0
          ? filteredCountries.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))
          : countries.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))}
      </CountriesWrapper>
    </ChooseCountryContainer>
  );
}
