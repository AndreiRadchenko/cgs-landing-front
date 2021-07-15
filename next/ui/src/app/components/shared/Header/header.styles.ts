import styled from "styled-components";
import { PropsHeader } from "types/components/index";

export const HeaderWrapper = styled.header<PropsHeader>`
  display: flex;
  margin: 0 auto;
  max-width: 1238px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: white;
  flex: 1;
  padding-top: 35px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 1024px) and (max-width: 1149px) {
    padding-top: 20px;   
  }

  @media screen and (max-width: 1023.5px) {
    padding-left: 55px;
    padding-right: 55px;
  }
`;

export const HeaderItem = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLogo = styled("img")`
  height: 87px;

  @media screen and (max-width: 1050px) {
    margin-right: 10px;
  }

  @media screen and (max-width: 1023px) {
    height: 67px;
    margin-right: 0px;
  }
  @media screen and (max-width: 425px) {
    height: 47px;
  }
`;
