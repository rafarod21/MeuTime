import { useEffect, useState } from 'react';

import { Search } from '../../Search';
import { SeasonCard } from '../SeasonCard';

import { SeasonsWrapper, ChooseSeasonContainer } from './styles';

import dataFake from '../../../../data.json';

export function ChooseSeason() {
  const [seasons, setSeasons] = useState<number[]>([]);
  const [searchSeason, setSearchSeason] = useState('');

  const filteredCountries =
    searchSeason.length > 0
      ? seasons.filter((season) =>
          String(season).includes(searchSeason.toLocaleLowerCase())
        )
      : [];

  useEffect(() => {
    setSeasons(dataFake.seasons);
  }, []);

  return (
    <ChooseSeasonContainer>
      <Search
        placeholder='Seleciona uma temporada...'
        value={searchSeason}
        onChange={setSearchSeason}
      />

      <SeasonsWrapper>
        {searchSeason.length > 0
          ? filteredCountries.map((season) => (
              <SeasonCard key={season} season={season} />
            ))
          : seasons.map((season) => (
              <SeasonCard key={season} season={season} />
            ))}
      </SeasonsWrapper>
    </ChooseSeasonContainer>
  );
}
