import styled from "styled-components";
import themes from "../../utils/themes";

export const DropdownButton = styled.button<{ isHeader?: boolean }>`
  cursor: pointer;
  color: ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  box-sizing: border-box;
  border: ${(props) =>
    !props.isHeader &&
    `1px solid ${themes.primary.colors.comment} !important;`};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
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

    img {
      transform: rotate(180deg);
    }
  }
  &.open {
    border-bottom: 0 !important;
    border-right: 3px solid ${themes.primary.colors.primary} !important;

    img {
      transform: rotate(180deg);
    }
  }
  & > img,
  & > span {
    vertical-align: middle;
  }

  img {
    margin-left: 10px;
    transform: rotate(0deg);
  }

  & span {
    max-width: 96%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 22px;

    & img {
      width: 15px;
      height: 11px;
    }
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    span {
      font-size: 12px;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: ${themes.primary.colors.blogBackground};
  min-width: 220px;
  z-index: 3;
  right: 0;
  border: 1px solid ${themes.primary.colors.primary};
  border-right-width: 3px;
  border-bottom-width: 12px;
  display: none;
  &.open {
    display: block;
  }
  br {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  height: 52px;
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  border: 1px solid ${themes.primary.colors.comment};
  padding: 15px;
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: ${themes.primary.colors.blogDropdownHover};
  }
  &:last-child {
    border-bottom: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 22px;
    height: 84px !important;
    & > div {
      display: flex;
      align-items: center;

      & span {
        margin-right: 5px;
      }
    }
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 12px;
    height: 44px;
  }
`;
