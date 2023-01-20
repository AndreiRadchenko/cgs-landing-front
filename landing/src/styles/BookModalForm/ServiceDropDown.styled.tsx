import styled from "styled-components";
import themes from "../../utils/themes";

export const DropdownButton = styled.button`
  cursor: pointer;
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 100%;
  width: 100%;
  position: relative;
  font-weight: 100;
  border: 1px solid ${themes.primary.colors.comment};
  background-color: ${themes.primary.colors.blogBackground};
  box-sizing: border-box !important;
  outline: none;

  &.open {
    border-width: 1px 3px 0 1px;
    border-color: ${themes.primary.colors.primary};
    box-shadow: 4px 0px 0px 0px ${themes.primary.colors.black};

    img {
      transform: rotate(180deg);
    }
  }

  img {
    transition: 0.3s;
    position: absolute;
    right: 0;
    margin-right: 18px;
  }

  &:hover &.open {
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
    padding-left: 20px;

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
  width: 100%;
  z-index: 4;
  left: 0;
  border-width: 1px 3px 12px 0;
  border-style: solid;
  border-color: ${themes.primary.colors.primary};
  box-shadow: 4px 0px 0px 0px ${themes.primary.colors.black};
  display: none;
  padding-right: 4px;
  overflow: hidden;

  &.open {
    display: block;
  }
`;

export const ContentWrapper = styled.div`
  height: 40px;
  width: 100%;
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  border: 1px solid ${themes.primary.colors.primary};
  border-width: 1px 0 0 1px;
  padding-left: 13px;
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  flex-direction: column;
  display: flex;
  justify-content: center;
  transition: 0.15s;

  &:first-child {
    border-top: 0;
  }
  &:hover {
    background-color: ${themes.primary.colors.blogDropdownHover};
  }

  &:last-child {
    border-bottom: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-left: 20px;
    font-size: 22px;
    height: 60px;
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
    height: 20px;
  }
`;

export const ScrollWrapper = styled.div`
  z-index: 2;
  overflow-y: scroll;
  height: 100%;
  max-height: 200px;
  padding-right: 4px;
  position: relative;
  scrollbar-color: ${themes.primary.colors.primary} transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${themes.primary.colors.primary};
    border-radius: 10px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-height: 300px;
  }
`;
