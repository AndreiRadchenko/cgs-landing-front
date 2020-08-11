import styled from 'styled-components';

export const HeaderWrapper = styled('header')`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  backgraund: white;
  padding: 1em 4em;
`;
export const HeaderItem = styled('div')`
  display: flex;
  justify-content: space-between;
`;
export const HeaderNav = styled(HeaderItem)`
  width: auto;
  & .active {
    opacity: 1;
  }
`;
export const NavItem = styled('div')`
  margin: 0 1em;
  min-width: max-content;
  opacity: 0.5;
`;
export const HeaderLogo = styled('img')`
  height: 43px;
`;
export const SocialWrap = styled('div')`
  margin: 0 0.5em;
  width: fit-content;
`;
export const SocialLogo = styled('img')`
  width: 100%;
  height: 100%;
`;
