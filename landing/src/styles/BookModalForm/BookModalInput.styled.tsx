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
  z-index: 2;
  @media ${themes.primary.media.estiomationFormWidth} {
    margin: 21px 15px 0 0;
  }
`;

export const HiddenWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  height: 97%;
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

  @media ${themes.primary.media.estiomationFormWidth} {
    margin-right: 7px;
  }
`;

export const List = styled.ul`
  list-style-type: square;
  margin: 48px 5px 0 0;
  padding: 0 64px 0 50px;

  @media ${themes.primary.media.estiomationFormWidth} {
    margin-top: 36px;
    padding: 0 46px 0 34px;
  }
`;

export const ListTitle = styled.span`
  margin-bottom: 7px;
  font-size: 24px;
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  line-height: 31px;

  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 16px;
    text-align: center;
  }
`;
