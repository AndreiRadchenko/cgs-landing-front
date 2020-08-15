import styled from 'styled-components';

export const FooterWrapper = styled('footer')`
  width: 100vw;
  max-width: 1200px;
  align-items: center;
  background: #0c1033;
  display: flex;
  padding: 1em 4em;
  justify-content: space-between;
  color: white;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    & > * {
      padding: 1em 0;
    }
    & > div:last-child {
      border-top: 1px solid white;
    }
  }
`;
export const Wrapper = styled('div')`
  background: #0c1033;
  display: flex;
  justify-content: center;
  width: 100vw;
`;
