import { CountryCard } from '../../components/CountryCard';

import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <br />
      <CountryCard countryCode='BR' />
    </HomeContainer>
  );
}
