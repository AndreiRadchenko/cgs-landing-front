import styled from 'styled-components';

export const HorizantalSep = styled('div')`
  width: 55px !important;
  height: 2px;
  background: #0c1033;
  border-radius: 5px;
  margin: 2em 0 !important;
`;
export const Wrapper = styled('article')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
  & > p {
    text-align: center;
    opacity: 0.5;
    margin-bottom: 3em;
  }
`;
