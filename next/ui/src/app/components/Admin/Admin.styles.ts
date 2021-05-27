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
  grid-template-rows: 0.2fr 1fr 100vh;
  gap: 0px 0px;
  grid-template-areas:
    'Menu Header Header Header'
    'Menu Table Table Table'
    'Menu Table Table Table';
`;

export const Menu = styled('div')`
  grid-area: Menu;
  padding: 50px 100px;
  background-color: #1f5a7b;
  font-size: 1.5em;
  font-weight: 700;
  color: #fff;
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
  & li.active {
    color: black;
  }
`;
export const InfoWrapper = styled('div')`
  grid-area: Table;
`;
