import styled from '@emotion/styled';

export const Button = styled.button`
  margin: 0;
  padding: 5px;
  width: 70px;
  border: 1px solid #022058;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: #96b4eb;
  }
`;
