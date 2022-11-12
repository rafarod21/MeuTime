import styled from 'styled-components';

export const ButtonCountryCardContainer = styled.button`
  background: transparent;
  border: 4px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;

  border-radius: 6px;
  overflow: hidden;

  color: ${(props) => props.theme.white};

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
  }

  &:active {
    transform: scale(1);
  }

  img {
    width: 8rem;
    border-radius: 6px;
  }
`;

export const CountryCardContainer = styled.div`
  background: transparent;
  border: 4px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;

  border-radius: 6px;
  overflow: hidden;

  color: ${(props) => props.theme.white};

  img {
    width: 8rem;
    border-radius: 6px;
  }
`;
