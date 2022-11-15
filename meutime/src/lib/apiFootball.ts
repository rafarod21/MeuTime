import axios from 'axios';

export const apiFootball = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v3',
  headers: {
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    // 'x-rapidapi-key': import.meta.env.VITE_API_URL,
  },
});
