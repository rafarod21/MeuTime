import { MagnifyingGlass } from 'phosphor-react';

import { SearchContainer } from './styles';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export function Search({ value, onChange, placeholder }: SearchProps) {
  return (
    <SearchContainer>
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete='off'
      />
      <MagnifyingGlass size={24} />
    </SearchContainer>
  );
}
