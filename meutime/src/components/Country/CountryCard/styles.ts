import styled from 'styled-components';

export const ButtonCountryCardContainer = styled.button`
  background: transparent;
  border: 4px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;

  border-radius: 6px;
  overflow: hidden;

  color: ${(props) => props.theme.white};

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }

  img {
    width: 8rem;
    border-radius: 6px;
  }

  span {
    font-style: italic;
    color: ${(props) => props.theme['gray-400']};
  }
`;