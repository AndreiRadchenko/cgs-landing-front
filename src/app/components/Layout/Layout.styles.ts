import styled, { css } from "styled-components";

export interface MainContainerProps {
  showMenu: boolean;
}

export const MainContainer = styled("div")<MainContainerProps>`
  ${(props) => props.showMenu && css`
    display: none;
  `}
`;

export interface FooterContainerProps {
  showMenu: boolean;
}

export const FooterContainer = styled("div")<FooterContainerProps>`
  ${(props) => props.showMenu && css`
    display: none;
  `}
`;
