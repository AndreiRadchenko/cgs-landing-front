import styled from "styled-components";
import themes from "../utils/themes";

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownWrapperTechnology = styled.div`
  position: relative;
  width: 275px;
`;
export const DropdownBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  height: 56px;
  color: ${themes.primary.colors.adminInputBorder};
  text-align: left;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.vistaco};
  letter-spacing: 0.03em;

  &.open img {
    transform: rotate(180deg);
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  max-height: 236px;
  overflow-y: scroll;
  ms-overflow-y: scroll;
  z-index: 10;
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  display: none;
  &.open {
    display: block;
  }
  div {
    display: flex;
    align-items: center;justify-content: space-between;
    background-color: ${themes.primary.colors.blogBackground};
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-size: ${themes.primary.font.size.primary};
    border-bottom: 1px solid ${themes.primary.colors.comment};
    padding: 10px 16px;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    
    span {
      flex: 1;
    }
    
    svg {
      cursor: pointer;
      path {
        fill: ${themes.primary.colors.adminRed};
      }
    }
    
    &:hover {
      background-color: ${themes.primary.colors.blogDropdownHover};
    }
    &:last-child {
      border-bottom: 0;
    }
  }
\`;`;
