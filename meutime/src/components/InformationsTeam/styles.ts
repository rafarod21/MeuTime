import styled from 'styled-components';

export const InformationsTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding-bottom: 2rem;

  > hr {
    width: 50%;
  }

  h2 {
    text-align: center;
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
  gap: 2rem;

  span {
    font-size: 1.5rem;
  }
`;

export const FootballField = styled.div`
  height: 15rem;
  width: 20rem;
  background-image: url(football-field.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme['blue-500']};
  }
`;

export const ResultGames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > div {
    border: 2px solid ${(props) => props.theme['blue-500']};
    border-radius: 6px;
    padding: 0.5rem;

    table {
      th,
      td {
        text-align: center;
        padding: 0.5rem;
      }

      th:nth-of-type(1),
      td:nth-of-type(1) {
        text-align: start;
        width: 5rem;
      }

      th:nth-of-type(3) {
        width: 5rem;
      }
    }
  }
`;

export const GoalsScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
