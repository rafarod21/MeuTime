import styled from 'styled-components';

export const InformationsTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  > hr {
    width: 50%;
  }
`;

export const InfoPlayers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > div {
    max-width: 700px;
    display: flex;
    grid-gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const Lineup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
