import styled from 'styled-components';
export const HomeWrapper = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & > * {
    width: 47%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    & > * {
      width: 100%;
    }
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
  @media screen and (max-width: 768px) {
    justify-content: center;
    text-align: center;
    & > h2 {
      margin: 1em 0;
    }
    & > a {
      margin: 1em 0 1em 0;
    }
  }
`;
export const Ilustration = styled('img')`
  width: 100%;
  height: 425px;
`;
