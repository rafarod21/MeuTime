import { useContext, useEffect, useState } from 'react';

import { Search } from '../../Search';
import { CountryCard } from '../CountryCard';

import { Country } from '../../../@types/Country';
import { translateCountryName } from '../../../utils/translateCountryName';

import { FootballContext } from '../../../contexts/FootballContext';

import { CountriesWrapper, ChooseCountryContainer } from './styles';

import dataFake from '../../../../data.json';

export function ChooseCountry() {
  const { country, setCountry } = useContext(FootballContext);
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [showListCountries, setShowListCountries] = useState(false);

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
    setShowListCountries(true);
  }, []);

  return (
    <ChooseCountryContainer>
      <Search value={searchCountry} onChange={setSearchCountry} />
      {showListCountries && (
        <CountriesWrapper>
          {searchCountry.length > 0
            ? filteredCountries.map((country) => (
                <CountryCard key={country.name} country={country} />
              ))
            : countries.map((country) => (
                <CountryCard key={country.name} country={country} />
              ))}
        </CountriesWrapper>
      )}
    </ChooseCountryContainer>
  );
}
