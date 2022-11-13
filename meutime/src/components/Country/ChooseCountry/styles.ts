import styled from 'styled-components';

export const ChooseCountryContainer = styled.section`
  width: 90%;
  max-width: 800px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CountriesWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 1rem;
`;
