import styled from "styled-components";

export const BurgerMenu = styled("div")`
  @media screen and (min-width: 1023.5px) {
    width: calc(100% - 110px);
  }

  position: relative;
  @media screen and (max-width: 1023px) {
    width: 100%;
    & > div.drop-down.show-sub-menu {
      width: 100vw;
      height: calc(100vh - 102px);
      text-align: right;    
    }
    width: auto;
  }
`;

export const MenuContainer = styled("div")`
  cursor: pointer;
  @media screen and (min-width: 1023.5px) {
    display: none;
  }
`;

export const DropDown = styled("div")`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  & > div:first-child {
    margin: auto;
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    position: fixed;
    width: 0px;
    height: 0px;
    padding: 0;
    background: white;
    right: 0;
    top: 102px;
    z-index: 2;
    & > div:first-child {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    & > div:last-child {
      flex-wrap: wrap;
    }
  }
`;

export const DropBoxContainer = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1023.5px) {
    display: none;
  }
`;

export const DropBoxMain = styled("div")`
  width: 100%;
  height: calc(100% - 206px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px 0 125px 0;
  & .drop-box-item {
    width: fit-content;
    padding: 10px;
    font-weight: 700;
    font-size: 24px;
  }
`;

export const DropBoxFooter = styled("div")`
  min-height: 206px;
  background-color: ${(props) => props.theme.colors.footer};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 1023.5px) {
    flex-direction: row;
    min-height: 120px;
    justify-content: space-between;
    padding: 0 3em;
  }
`;

export const DropBoxFooterText = styled("p")`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

export const LgMenu = styled("div")`
  display: none;
  @media (min-width: 1023.5px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    & > div:first-child {
      margin: auto;
    }
  }
`;
