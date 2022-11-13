import { DefaultCardListContainer } from './styles';

interface DefaultCardListProps {
  name: string;
  image: string;
}

export function DefaultCardList({ name, image }: DefaultCardListProps) {
  return (
    <DefaultCardListContainer>
      <div>
        <img src={image} alt={name} />
      </div>
      <strong>{name}</strong>
    </DefaultCardListContainer>
  );
}
