import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0.5rem;

  > img {
    height: 8.25rem;
  }
`;

export const ShowChoices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  height: 10rem;

  @media (min-width: 700px) {
    height: 13rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > div:nth-child(3) {
    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;

      font-size: 2rem;
    }
  }
`;
