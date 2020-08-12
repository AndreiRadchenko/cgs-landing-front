import styled from 'styled-components';

export const HeaderWrapper = styled('header')`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 1em 4em;
`;
export const HeaderItem = styled('div')`
  display: flex;
  justify-content: space-between;
`;
export const HeaderLinks = styled(HeaderItem)`
  @media screen and (max-width: 1013px) {
    display: none;
  }
`;

export const HeaderLogo = styled('img')`
  height: 43px;
`;
