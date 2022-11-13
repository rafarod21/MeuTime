import styled from 'styled-components';

export const ChooseSeasonContainer = styled.section`
  width: 90%;
  max-width: 800px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SeasonsWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 1rem;
`;
