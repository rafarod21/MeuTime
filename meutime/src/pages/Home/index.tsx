import { useEffect, useState } from 'react';

import { SelectCountry } from '../../components/SelectCountry';
import { SelectTeam } from '../../components/SelectTeam';
import { SelectLeague } from '../../components/SelectLeague';

import logoImg from '../../assets/logo.svg';

import { Country } from '../../@types/Country';
import { League } from '../../@types/League';
import { Team } from '../../@types/Team';

import { HomeContainer } from './styles';

import dataFake from '../../../data.json';

export function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    {} as Country
  );
  const [selectedLeague, setSelectedLeague] = useState<League>({} as League);
  const [selectedTeam, setSelectedTeam] = useState<Team>({} as Team);

  function handleSelectCountry(country: Country) {
    console.log(country);
    setSelectedCountry(country);
  }

  function handleSelectLeague(league: League) {
    console.log(league);
    setSelectedLeague(league);
  }

  function handleSelectTeam(team: Team) {
    console.log(team);
    setSelectedTeam(team);
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
      {selectedCountry?.name && (
        <SelectLeague
          selectedLeague={selectedLeague}
          leagues={dataFake.leagues}
          handleSelectLeague={handleSelectLeague}
        />
      )}
      {selectedLeague?.name && (
        <SelectTeam
          selectedTeam={selectedTeam}
          teams={dataFake.teams}
          handleSelectTeam={handleSelectTeam}
        />
      )}
    </HomeContainer>
  );
}
