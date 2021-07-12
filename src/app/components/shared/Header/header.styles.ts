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
  padding: 1em 55px;
  flex: 1;
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
