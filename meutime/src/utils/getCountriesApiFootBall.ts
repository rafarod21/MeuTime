import { apiFootball } from '../lib/apiFootball';

import dataFake from '../../data.json';

export async function getCountriesApiFootBall() {
  try {
    const { data } = await apiFootball.get('/countries');
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }

  const response = dataFake.countries;
  return { response };
}
