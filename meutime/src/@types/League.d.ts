import { Country } from './Country';

export interface Season {
  year: number;
  start: string;
  end: string;
  current: boolean;
  // coverage: {};
}

export interface League {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: Country;
  seasons: Season[];
}
