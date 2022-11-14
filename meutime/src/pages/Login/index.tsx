import { useState } from 'react';

import logoImg from '../../assets/logo.svg';

import { ButtonLogin, InputKeyApiFootball, LoginContainer } from './styles';

export function Login() {
  const [keyApi, setKeyApi] = useState('');

  function handleLogin() {
    if (keyApi.length < 5) {
      alert('Insita uma key válida!');
      return;
    }
  }

  return (
    <LoginContainer>
      <img src={logoImg} alt='Meu Time' />

      <InputKeyApiFootball
        placeholder='Insira a key da API-Football'
        value={keyApi}
        onChange={(event) => setKeyApi(event.target.value)}
      />

      <ButtonLogin onClick={handleLogin}>BORA JOGAR!</ButtonLogin>
    </LoginContainer>
  );
}
