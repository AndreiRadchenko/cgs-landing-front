import styled from "styled-components";
import themes from "../utils/themes";

export const DropdownButton = styled.button<{ isHeader?: boolean; toFormError?: boolean }>`
  cursor: pointer;
  color: ${({ toFormError }) => (toFormError ? "#F84A3F" : "black")};
  background-color: ${themes.primary.colors.blogBackground};
  box-sizing: border-box;
  border: ${(props) =>
    !props.isHeader &&
    `1px solid ${themes.primary.colors.comment} !important;`};
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.tertiary};

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
  box-shadow: 5px 5px 0 #000;
`;

export const DropdownContent = styled.div`
  position: absolute;
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
    font-size: ${themes.primary.font.size.vistaco};
    border-bottom: 1px solid ${themes.primary.colors.comment};
    padding: 30px 20px;
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
`;
