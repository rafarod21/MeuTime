import { useEffect, useState } from 'react';

import { Search } from '../../Search';
import { CountryCard } from '../CountryCard';

import { Country } from '../../../@types/Country';
import { translateCountryName } from '../../../utils/translateCountryName';

import { CountriesWrapper, ChooseCountryContainer } from './styles';

import dataFake from '../../../../data.json';

export function ChooseCountry() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchCountry, setSearchCountry] = useState('');

  const filteredCountries =
    searchCountry.length > 0
      ? countries.filter((country) =>
          translateCountryName(country.code)
            ?.toLocaleLowerCase()
            .includes(searchCountry.toLocaleLowerCase())
        )
      : [];

  useEffect(() => {
    setCountries(dataFake.countries);
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
