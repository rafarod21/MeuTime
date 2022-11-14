import { apiFootball } from '../lib/apiFootball';

import dataFake from '../../data.json';

export async function getCountriesApiFootBall() {
  const { data } = await apiFootball.get('/countries');

  // return data;

  const response = dataFake.countries;

  return { response };
}
