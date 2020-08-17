import styled from 'styled-components';

export const Button = styled('button')`
  background: #0c1033;
  border-radius: 2em;
  padding: 0.7em 2em;
  outline: none;
  border: 0;
  color: white;
  min-width: 200px;
  cursor: pointer;
  transition: background 0.2s ease-in;
  & * {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background: #97c3f9;
  }
  &:active {
    background: #0c1033;
    opacity: 0.7;
  }
`;
