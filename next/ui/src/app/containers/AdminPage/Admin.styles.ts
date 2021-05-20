import styled from 'styled-components';

export const Wrapper = styled('div')`
  /* padding: 30px; */
  & h2 {
    grid-area: Header;
    text-align: center;
  }
`;
export const ContentWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'Menu Header Header Header'
    'Menu Table Table Table'
    'Menu Table Table Table';
`;

export const Menu = styled('div')`
  grid-area: Menu;
  padding: 30px;
  height: 100%;

  background-color: orange;

  & h3 {
    text-align: center;
  }
`;

export const MenuList = styled('div')`
  padding: 0;
  list-style: none;

  & li {
    padding: 10px;
    cursor: pointer;
  }
  & li:hover {
    transform: scale(1.1);
  }
`;
export const InfoWrapper = styled('div')`
  grid-area: Table;
`;
