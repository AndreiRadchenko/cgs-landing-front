import styled from 'styled-components';
export const HeaderNav = styled('div')`
  display: flex;
  justify-content: space-between;
  width: auto;
  & .active {
    opacity: 1;
  }
`;
export const NavItem = styled('div')`
  margin: 0.5em 1em;
  min-width: max-content;
  opacity: 0.5;
`;
