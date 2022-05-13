import styled from "styled-components";
import { PropsHeaderWrapper } from "types/components/index";

export const HeaderWrapper = styled.header<PropsHeaderWrapper>`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 1em 4em;
  margin-bottom: 1em;
  flex: 1;
  max-width: 100%;
  @media screen and (max-width: 600px) {
    margin-bottom: 0;
  }
`;

export const HeaderItem = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLogo = styled("img")`
  height: 87px;
  @media screen and (max-width: 768px) {
    height: 67px;
  }
`;

export const NavContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 100%;
  
  & div:nth-child(3) {
    min-width: 136px;
  }
  & div:nth-child(4) {
    min-width: 149px;   
  }

  @media screen and (min-width: 1024px) and (max-width: 1149px) {
    text-align: center;
    & div:nth-child(1) {
    min-width: 100px;
  }
    & div:nth-child(2) {
    min-width: 100px;
  }
    & div:nth-child(3) {
    min-width: 115px;
  }
    & div:nth-child(4) {
      min-width: 130px;   
    }
  }

  @media screen and (min-width: 1050px) and (max-width: 1149px) {
    width: 65%;
  }
 
  @media screen and (min-width: 1150px) {
    width: 66%;
  }
`;
