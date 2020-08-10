import styled from 'styled-components';
export const HomeWrapper = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & > * {
    width: 47%;
  }
`;
export const ContentBlock = styled('article')`
  display: flex;
  flex-direction: column;
  align-itens: flex-start;
  justify-content: space-evenly;
  & > p {
    opacity: 0.5;
  }
`;
export const Ilustration = styled('img')`
  width: 100%;
  height: 425px;
`;
