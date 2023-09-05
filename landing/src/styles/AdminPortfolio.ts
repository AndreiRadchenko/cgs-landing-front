import styled from "styled-components";
import themes from "../utils/themes";

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownWrapperTechnology = styled.div`
  position: relative;
  width: 382px;
`;

export const DropdownBanner = styled.div<{ iserror?: boolean }>`
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
  border: 1px solid
    ${({ iserror }) =>
      iserror ? "red" : themes.primary.colors.adminInputBorder};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
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
    align-items: center;
    justify-content: space-between;
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
`;

export const IndividualTopGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 440px));
  gap: 20px 30px;
  margin-bottom: 25px;
`;

export const IndividualBottomGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 350px));
  gap: 15px;
  margin-bottom: 25px;
`;
