import styled from 'styled-components';

export const SelectLeagueContainer = styled.section`
  width: 90%;
  max-width: 800px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    background: ${(props) => props.theme['gray-900']};
    padding: 1rem;
    border-radius: 6px;
    color: ${(props) => props.theme.white};
  }
`;

export const LeaguesWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 1rem;
`;
