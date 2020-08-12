import styled from 'styled-components';

export const BurgerMenu = styled('div')`
  width: calc(100% - 110px);
  position: relative;
  @media screen and (max-width: 1013px) {
    width: auto;
    & > div.drop-down.show-sub-menu {
      transition: all 1.5s cubic-bezier(0.25, 1.65, 0.78, 0.65);
      width: 300px;
      flex-wrap: nowrap;
      box-shadow: -1px 3px 9px silver;
      height: auto;
      padding: 1em;
      & > * {
        display: flex;
      }
    }
    & > div.show-sub-menu::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      transform: rotate(225deg);
      background: white;
      z-index: 3;
      top: -5px;
      right: 5px;
      border-top: 1px solid silver;
      border-left: 1px solid silver;
    }
  }
`;
export const MenuContainer = styled('div')`
  @media screen and (min-width: 1014px) {
    display: none;
  }
`;
export const DropDown = styled('div')`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  & > div:first-child {
    margin: auto;
  }
  @media screen and (max-width: 1013px) {
    flex-direction: column;
    position: absolute;
    width: 0px;
    height: 0px;
    padding: 0;
    border: 1px solid silver;
    background: white;
    right: 0;
    top: 30px;
    z-index: 2;
    & > * {
      display: none;
    }
    & > div:first-child {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    & > div:last-child {
      flex-wrap: wrap;
      padding-top: 1em;
      border-top: 1px solid silver;
    }
  }
`;
