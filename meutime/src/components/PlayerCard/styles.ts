import styled from 'styled-components';

export const PlayerCardContainer = styled.div`
  border: 2px solid ${(props) => props.theme['blue-500']};
  border-radius: 6px;
  width: 20rem;
  gap: 1rem;
  padding: 1rem;

  display: flex;
  align-items: center;

  img {
    max-width: 6rem;
    overflow: hidden;
    border-radius: 6px;
  }
`;

export const PlayerDataContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  strong {
    font-size: 1rem;
  }
`;
