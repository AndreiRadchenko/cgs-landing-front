import styled from "styled-components";
import themes from "../../utils/themes";

export const ButtonWrapper = styled.div`
  width: 100%;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const CloseButton = styled.img`
  width: 26px;
  height: 26px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 26px 26px 0 0;
  cursor: pointer;
  z-index: 5;
  @media (max-width: 570px) {
    margin-top: 21px;
    margin-right: 15px;
  }
`;

export const HiddenWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

export const Content = styled.div`
  height: 97%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 10px 0;
  margin-right: 10px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 20px;
  }

  &::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${themes.primary.colors.primary};
    border-radius: 10px;
  }

  scrollbar-color: ${themes.primary.colors.primary} transparent;
  scrollbar-width: thin;

  @media (max-width: 570px) {
    margin-right: 7px;
  }
`;

export const List = styled.ul`
  list-style-type: square;
  margin: 48px 5px 0 0;

  @media (max-width: 570px) {
    margin-top: 24px;
    padding-left: 11px;
  }
`;

export const ListTitle = styled.span`
  margin: 0 0 7px 0;
  font-size: 28px;
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  line-height: 33px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5rem;
  }
`;
