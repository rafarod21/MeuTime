import logoImg from '../../assets/logo.svg';

import { CardHeader } from './CardHeader';

import { HeaderContainer, ShowChoices } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt='Meu Time' />

      <ShowChoices>
        <CardHeader type='country' />
        <CardHeader type='league' />
        <CardHeader type='season' />
        <CardHeader type='team' />
      </ShowChoices>
    </HeaderContainer>
  );
}
