import styled from 'styled-components';

export const DefaultCardListContainer = styled.div`
  width: 5rem;

  background: transparent;
  border: 4px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  border-radius: 6px;
  overflow: hidden;

  color: ${(props) => props.theme.white};
  text-align: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;

    img {
      width: 100%;
      overflow: hidden;
      border-radius: 6px;
    }
  }

  span {
    font-style: italic;
    color: ${(props) => props.theme['gray-400']};
  }
`;
