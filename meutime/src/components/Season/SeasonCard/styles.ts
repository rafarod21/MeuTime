import styled from 'styled-components';

export const ButtonSeasonCardContainer = styled.button`
  width: 5rem;
  height: 3rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

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

  @media (min-width: 768px) {
    width: 9rem;
  }

  span {
    font-style: italic;
    color: ${(props) => props.theme['gray-400']};
  }

  strong {
    font-size: 1rem;

    @media (min-width: 700px) {
      font-size: 1.5rem;
    }
  }
`;
