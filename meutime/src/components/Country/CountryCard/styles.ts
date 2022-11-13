import styled from 'styled-components';

export const ButtonCountryCardContainer = styled.button`
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

  span {
    font-style: italic;
    color: ${(props) => props.theme['gray-400']};
  }

  strong {
    font-size: 0.875rem;

    @media (min-width: 700px) {
      font-size: 1rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-top: 1rem;
      width: 4rem;
      overflow: hidden;
      border-radius: 6px;

      @media (min-width: 700px) {
        width: 6rem;
      }
    }

    strong {
      font-size: 1.5rem;
    }
  }
`;
