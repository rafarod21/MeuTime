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

export const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: space-between;
  gap: 0.5rem;
  background: ${(props) => props.theme['gray-900']};
  padding-right: 1rem;
  border-radius: 6px;
  color: ${(props) => props.theme['gray-400']};

  input {
    width: 100%;
    padding: 1rem;
    padding-right: 0;
    background: transparent;
    color: ${(props) => props.theme.white};
  }
`;
