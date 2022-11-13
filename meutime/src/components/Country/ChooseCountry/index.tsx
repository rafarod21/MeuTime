import { useContext, useEffect, useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

import { CountryCard } from '../CountryCard';

import { Country } from '../../../@types/Country';
import { translateCountryName } from '../../../utils/translateCountryName';

import { FootballContext } from '../../../contexts/FootballContext';

import { CountriesWrapper, ChooseCountryContainer, Search } from './styles';

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

  function handleSetCountry(country: Country) {
    setSearchCountry(translateCountryName(country.code) || '');
    setCountry(country);
    setShowListCountries(false);
  }

  function handleOnFocus() {
    setShowListCountries(true);
  }

  function handleOnBlur() {
    setShowListCountries(false);
  }

  useEffect(() => {
    setCountries(dataFake.countries);
  }, []);

  return (
    <ChooseCountryContainer>
      <Search>
        <input
          type='text'
          placeholder='Escolha um país...'
          value={searchCountry}
          onChange={(event) => setSearchCountry(event.target.value)}
          autoComplete='off'
        />
        <MagnifyingGlass size={32} />
      </Search>
      {showListCountries && (
        <CountriesWrapper>
          {searchCountry.length > 0
            ? filteredCountries.map((country) => (
                <div key={country.name}>
                  <CountryCard country={country} />
                </div>
              ))
            : countries.map((country) => (
                <div key={country.name}>
                  <CountryCard country={country} />
                </div>
              ))}
        </CountriesWrapper>
      )}
    </ChooseCountryContainer>
  );
}
