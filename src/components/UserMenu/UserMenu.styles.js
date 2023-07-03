import styled from 'styled-components';

export const UserTitle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  p {
    font-size: 22px;
    &::first-letter {
    }
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    &:hover,
    &:focus {
      color: #fff;
      cursor: pointer;
    }
  }
`;
