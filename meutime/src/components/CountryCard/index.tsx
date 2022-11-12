import { CountryCardContainer } from './styles';

interface CountryCardProps {
  countryCode: string;
}

export function CountryCard({ countryCode }: CountryCardProps) {
  const countryName = new Intl.DisplayNames(['pt-BR'], { type: 'region' }).of(
    countryCode
  );
  const countryFlag = `https://media.api-sports.io/flags/${countryCode.toLowerCase()}.svg`;

  return (
    <CountryCardContainer>
      <img src={countryFlag} alt={countryName} />
      <span>{countryName}</span>
    </CountryCardContainer>
  );
}
