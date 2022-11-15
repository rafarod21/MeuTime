import { useContext, useEffect, useState } from 'react';

import { Search } from '../../Search';
import { SeasonCard } from '../SeasonCard';

import { FootballContext } from '../../../contexts/FootballContext';

import { SeasonsWrapper, ChooseSeasonContainer } from './styles';

export function ChooseSeason() {
  const { league } = useContext(FootballContext);
  const [seasons, setSeasons] = useState<number[]>([]);
  const [searchSeason, setSearchSeason] = useState('');

  const filteredCountries =
    searchSeason.length > 0
      ? seasons.filter((season) =>
          String(season).includes(searchSeason.toLocaleLowerCase())
        )
      : [];

  useEffect(() => {
    if (league) {
      setSeasons(league.seasons.map((season) => season.year));
    }
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
