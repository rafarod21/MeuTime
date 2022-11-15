import { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { ChooseCountry } from '../../components/Country/ChooseCountry';
import { ChooseLeague } from '../../components/League/ChooseLeague';
import { ChooseTeam } from '../../components/Team/ChooseTeam';
import { ChooseSeason } from '../../components/Season/ChooseSeason';
import { InformationsTeam } from '../../components/InformationsTeam';
import { Error } from '../../components/Error';

import { FootballContext } from '../../contexts/FootballContext';

import { apiFootball } from '../../lib/apiFootball';

import { Country } from '../../@types/Country';

import { getCountriesApiFootBall } from '../../utils/getCountriesApiFootBall';

import { HomeContainer } from './styles';

export function Home() {
  const location = useLocation();
  const { choicePhase, listCountries, setListCountries } =
    useContext(FootballContext);
  const [keyApiFootball, setKeyApiFootball] = useState(
    window.sessionStorage.getItem('@meutime:key')
  );

  async function handleValidateKey(key: string) {
    const countries = await getCountriesApiFootBall();

    if ('message' in countries) return 'Server error';

    if (countries.response.length > 0) {
      setListCountries(countries.response as Country[]);

      // SALVAR KEY EM SESSIONSTORE
      window.sessionStorage.setItem('@meutime:key', key);

      return true;
    }

    return false;
  }

  useEffect(() => {
    const key = window.sessionStorage.getItem('@meutime:key');

    async function validateKey(key: string) {
      const isKeyValid = await handleValidateKey(key);

      if (isKeyValid === 'Server error') {
        setKeyApiFootball(key);
        setListCountries(null);
      } else if (!isKeyValid) {
        sessionStorage.clear();
        setKeyApiFootball(null);
      }
    }

    if (key) {
      apiFootball.defaults.headers.common['X-RapidAPI-Key'] = key;
      validateKey(key);
    }
  }, []);

  if (!keyApiFootball) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return (
    <HomeContainer>
      {listCountries === null ? (
        <Error />
      ) : (
        <>
          <Header />
          {choicePhase === 'country' && <ChooseCountry />}
          {choicePhase === 'league' && <ChooseLeague />}
          {choicePhase === 'team' && <ChooseTeam />}
          {choicePhase === 'season' && <ChooseSeason />}
          {choicePhase === 'finish' && <InformationsTeam />}
        </>
      )}
    </HomeContainer>
  );
}
