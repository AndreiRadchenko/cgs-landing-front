import styled from "styled-components";
import themes from "../utils/themes";

export const DropdownButton = styled.button<{ isHeader?: boolean; toFormError?: boolean; toSelectPosition?: boolean }>`
  cursor: pointer;
  color: ${({ toFormError, toSelectPosition }) => (toFormError ? "#F84A3F" : toSelectPosition ? "#000" : "#8F8E93")};
  background-color: ${themes.primary.colors.blogBackground};
  box-sizing: border-box;
  border: ${(props) =>
    !props.isHeader &&
    `1px solid ${themes.primary.colors.comment} !important;`};
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.34em;
  border-radius: none;

  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  letter-spacing: 0.03em;
  padding-top: 3px;

  &:hover {
    transition: 0.3s;
    border-right: 1.5px solid ${themes.primary.colors.primary} !important;
    border-bottom: 3px solid ${themes.primary.colors.primary} !important;
  }
  &:hover &.open {
    border-bottom: 0 !important;
    border-right: 3px solid ${themes.primary.colors.primary} !important;
  }
  &.open {
    border-bottom: 0 !important;
    border-right: 3px solid ${themes.primary.colors.primary} !important;
  }
  & > span {
    vertical-align: middle;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    span {
      font-size: 0.875rem;
    }
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    span {
      font-size: 0.75rem;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${themes.primary.colors.blogBackground};
  border: 1.5px solid #000;
  border-left: none;
  box-shadow: 5px 5px 0 #000;
`;

export const DropdownContent = styled.div`
  position: relative;
  background-color: ${themes.primary.colors.blogBackground};
  min-width: 220px;
  z-index: 3;
  right: 0;
  border: 1px solid ${themes.primary.colors.primary};
  border-right: 3px solid ${themes.primary.colors.primary};
  border-bottom: 12px solid ${themes.primary.colors.primary};
  display: none;
  &.open {
    display: block;
  }
  div {
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-size: 1.35em;
    border-left: 1.5px solid black;
    border-bottom: 1px solid ${themes.primary.colors.comment};
    padding: 23px 28px;
    height: 65px;
    text-decoration: none;
    text-align: left;
    cursor: pointer;

    &:last-of-type {
      border-bottom: 0;
      color: #8F8E93;
    }
    
    &:hover {
      background-color: ${themes.primary.colors.blogDropdownHover};
    }

    &:nth-child(2){
      height: 65px;
    }
  }

  @media (max-width: 768px) {
    div{
      height: 55px;
      padding: 16px 20px;

      &:nth-child(2){
        &:nth-child(2){
          height: 55px;
        }
      }
    }
  }
`;

export const DropdownScrollbarContainer = styled.section`
  width: 14px;
  background-color: #F0EFED;
  z-index: 5;
  height: 274px;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DropdownScrollbar = styled.section<{top: number}>`
  position: absolute;
  top: 0;
  transition: transform ease;
  transform: translateY(${(props) => props.top}px);
  right: 20%;
  width: 4px;
  height: 25px;
  border-radius: 5px;
  background-color: black;
  z-index: 100;
`;

