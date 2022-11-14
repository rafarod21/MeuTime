import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;

  gap: 5rem;

  img {
    width: 12rem;
  }
`;

export const InputKeyApiFootball = styled.input`
  width: 20rem;
  background: ${(props) => props.theme['gray-900']};
  border-radius: 6px;
  padding: 1rem;
  color: ${(props) => props.theme.white};
`;

export const ButtonLogin = styled.button`
  width: 20rem;
  background: ${(props) => props.theme['blue-500']};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  border-radius: 6px;

  font-weight: bold;
  color: ${(props) => props.theme.white};

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['blue-600']};
  }
`;
