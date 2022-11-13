import { MagnifyingGlass } from 'phosphor-react';

import { SearchContainer } from './styles';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function Search({ value, onChange }: SearchProps) {
  return (
    <SearchContainer>
      <input
        type='text'
        placeholder='Escolha um país...'
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete='off'
      />
      <MagnifyingGlass size={24} />
    </SearchContainer>
  );
}
