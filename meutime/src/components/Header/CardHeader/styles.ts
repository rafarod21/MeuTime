import styled from 'styled-components';

export const CardHeaderContainer = styled.div`
  height: 9rem;

  @media (min-width: 700px) {
    height: 15rem;
  }
`;

export const ButtonCard = styled.button`
  /* height: 100%; */
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: flex-end; */
  padding-top: 2rem;
  gap: 0.5rem;

  border-radius: 6px;
  overflow: hidden;

  color: ${(props) => props.theme.white};

  transition: transform 0.2s;

  @media (min-width: 700px) {
    width: 10rem;
    justify-content: flex-start;
    padding-top: 2rem;
  }

  &:disabled {
    cursor: default;
  }

  &:not(:disabled) {
    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1);
    }
  }

  span {
    font-style: italic;
    color: ${(props) => props.theme['gray-400']};
  }

  strong {
    height: 50%;
    font-size: 0.75rem;

    @media (min-width: 700px) {
      font-size: 1rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 2rem;
      overflow: hidden;
      border-radius: 6px;

      @media (min-width: 700px) {
        width: 6rem;
      }
    }

    strong {
      margin-top: -1rem;
      font-size: 1.5rem;
    }
  }
`;
