import { useEffect, useState } from 'react';

import { SelectCountry } from '../../components/SelectCountry';

import logoImg from '../../assets/logo.svg';

import { Country } from '../../@types/Country';

import { HomeContainer } from './styles';

import dataFake from '../../../data.json';

export function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    {} as Country
  );

  function handleSelectCountry(country: Country) {
    console.log(country);
    setSelectedCountry(country);
  }

  useEffect(() => {
    const countriesFormatt: Country[] = dataFake.countries.map((country) => {
      return {
        name: country.name,
        brazilianName: new Intl.DisplayNames(['pt-BR'], { type: 'region' }).of(
          country.code
        ),
        code: country.code,
        flag: country.flag,
      };
    });

    setCountries(countriesFormatt);
  }, []);

  return (
    <HomeContainer>
      <img src={logoImg} alt='Meu Time' />
      <SelectCountry
        selectedCountry={selectedCountry}
        countries={countries}
        handleSelectCountry={handleSelectCountry}
      />
    </HomeContainer>
  );
}
