import axios from 'axios';

export const apiFootball = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    // 'x-rapidapi-key': import.meta.env.VITE_API_URL,
  },
});
