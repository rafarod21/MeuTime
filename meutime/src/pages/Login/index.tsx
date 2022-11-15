import { useContext, useEffect, useState } from 'react';
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { Country } from '../../@types/Country';

import logoImg from '../../assets/logo.svg';
import { FootballContext } from '../../contexts/FootballContext';

import { apiFootball } from '../../lib/apiFootball';

import { getCountriesApiFootBall } from '../../utils/getCountriesApiFootBall';

import { ButtonLogin, InputKeyApiFootball, LoginContainer } from './styles';

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { listCountries, setListCountries } = useContext(FootballContext);
  const [isLoading, setIsLoading] = useState(false);
  const [inputKeyApi, setInputKeyApi] = useState('');

  async function handleValidateKey(key: string) {
    const countries = await getCountriesApiFootBall();

    if ('message' in countries) {
      alert('Erro de servidor. Tente mais tarde');
    } else {
      if (countries.response.length === 0) {
        alert('Insira uma key válida!');
      } else {
        setListCountries(countries.response as Country[]);

        // SALVAR KEY EM SESSIONSTORE
        window.sessionStorage.setItem('@meutime:key', key);

        return true;
      }
    }

    return false;
  }

  async function handleLogin() {
    setIsLoading(true);

    if (inputKeyApi.trim().length < 3) {
      alert('Insira uma key válida!');
    } else {
      apiFootball.defaults.headers.common['X-RapidAPI-Key'] =
        inputKeyApi.trim();
      const isKeyValid = await handleValidateKey(inputKeyApi.trim());

      if (isKeyValid) {
        alert('Direto pro gol!!');
        navigate(from, { replace: true });
      }
    }

    setIsLoading(false);
  }

  useEffect(() => {
    const keyApiFootball = window.sessionStorage.getItem('@meutime:key');

    async function validateKey(key: string) {
      const isKeyValid = await handleValidateKey(key);

      if (isKeyValid) {
        alert('Direto pro gol!!');
        navigate(from, { replace: true });
      }
    }

    if (keyApiFootball) {
      apiFootball.defaults.headers.common['X-RapidAPI-Key'] = keyApiFootball;
      if (listCountries === null) {
        validateKey(keyApiFootball);
      }
    }
  }, []);

  return (
    <LoginContainer>
      <img src={logoImg} alt='Meu Time' />

      <InputKeyApiFootball
        placeholder='Insira a key da API-Football'
        value={inputKeyApi}
        onChange={(event) => setInputKeyApi(event.target.value)}
      />

      <ButtonLogin onClick={handleLogin} disabled={isLoading}>
        {!isLoading ? 'BORA JOGAR!' : <ClipLoader color='#FED100' />}
      </ButtonLogin>
    </LoginContainer>
  );
}
