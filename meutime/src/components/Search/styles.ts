import styled from 'styled-components';

export const SearchContainer = styled.div`
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
