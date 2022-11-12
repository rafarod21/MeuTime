import { useState } from 'react';

import { CountryCard } from '../CountryCard';

import { Country } from '../../@types/Country';

import { CountriesWrapper, SelectCountryContainer } from './styles';

interface SelectCountryProps {
  selectedCountry: Country;
  countries: Country[];
  handleSelectCountry: (country: Country) => void;
}

export function SelectCountry({
  selectedCountry,
  countries,
  handleSelectCountry,
}: SelectCountryProps) {
  const [searchCountry, setSearchCountry] = useState('');

  const filteredCountries =
    searchCountry.length > 0
      ? countries.filter((country) =>
          country.brazilianName
            ?.toLocaleLowerCase()
            .includes(searchCountry.toLocaleLowerCase())
        )
      : [];

  function handleSetCountry(country: Country) {
    setSearchCountry(country.brazilianName || '');
    handleSelectCountry(country);
  }

  function resetSelectedCountry() {
    handleSelectCountry({} as Country);
  }

  return (
    <SelectCountryContainer>
      <input
        type='text'
        placeholder='Selecione um país...'
        value={searchCountry}
        onChange={(event) => setSearchCountry(event.target.value)}
        onFocus={resetSelectedCountry}
      />
      {selectedCountry?.name ? (
        <CountryCard country={selectedCountry} />
      ) : (
        <CountriesWrapper>
          {searchCountry.length > 0
            ? filteredCountries.map((country) => (
                <div key={country.name}>
                  <CountryCard
                    country={country}
                    setCountry={handleSetCountry}
                  />
                </div>
              ))
            : countries.map((country) => (
                <div key={country.name}>
                  <CountryCard
                    country={country}
                    setCountry={handleSetCountry}
                  />
                </div>
              ))}
        </CountriesWrapper>
      )}
    </SelectCountryContainer>
  );
}
