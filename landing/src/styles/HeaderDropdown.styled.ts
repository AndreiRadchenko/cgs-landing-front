import styled from "styled-components";
import themes from "../utils/themes";

export const DropdownContent = styled.div`
  position: absolute;
  background-color: ${themes.primary.colors.blogBackground};
  min-width: 22.22vw;
  top: 100%;
  z-index: 3;
  right: 0px;
  border: 1px solid ${themes.primary.colors.primary};
  border-right: 2.5px solid ${themes.primary.colors.primary};
  border-bottom: 12px solid ${themes.primary.colors.primary};
  display: none;
  &.open {
    display: block;
  }
  div {
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-size: ${themes.primary.font.size.primary};
    border-bottom: 1px solid ${themes.primary.colors.comment};
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    &:hover {
      background-color: ${themes.primary.colors.blogDropdownHover};
    }
    &:last-child {
      border-bottom: 0;
    }
  }
  a {
    padding: 10px 16px;
  }
`;

export const DropdownButton = styled.button`
  cursor: pointer;
  color: ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  box-sizing: border-box;
  font-family: ${themes.primary.font.family.namu};
  font-size: 20px;
  display: flex;
  justify-content: center;
  column-gap: 12px;
  align-items: center;
  border-bottom: 0;
  border-right: 0;
  border-left: 1px solid ${themes.primary.colors.comment} !important;
  width: fit-content;

  transition: all 0.3s;
  padding: 0 68px;

  button,
  &:first-child {
    border: none;
  }
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    font-size: 1.3em;
  }
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
  &:hover {
    border-right: 2px solid ${themes.primary.colors.primary} !important;
    border-bottom: 7px solid ${themes.primary.colors.primary} !important;
  }
  &:hover &.open {
    border-bottom: 0 !important;
    border-right: 2px solid ${themes.primary.colors.primary} !important;
  }
  &.open {
    border-bottom: 0 !important;
    border-right: 0px solid ${themes.primary.colors.primary} !important;

    img {
      transform: rotate(180deg);
    }
  }
  &.disabled {
    cursor: default;
    &:hover {
      border-right: 0;
      border-bottom: 0;
    }
  }
  & > img,
  & > span {
    vertical-align: middle;
  }
  img {
    transform: rotate(0deg);
    margin-top: 3px;
    width: 12px;
    height: 6.67px;
  }
  @media (max-width: 1440px) {
    padding: 0 42px;
    column-gap: 10px;
    font-size: 16px;
    & > img {
      width: 9px;
      height: 5px;
    }
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 0px 27px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 0px 20px;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: flex;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const Link = styled.a`
  display: block;
  width: 100%;
`;
