import styled from "styled-components";
import themes from "../utils/themes";

interface IModal {
  isOpen?: boolean;
}

export const TicketModal = styled.div<IModal>`
  display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
  position: fixed;
  z-index: 36;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: linear-gradient(
    180deg,
    rgba(241, 239, 237, 0.8) 100%,
    rgba(241, 239, 237, 0) 114.26%
  );
`;

export const TicketModalContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const TicketModalContent = styled.div`
  width: 535px;
  height: 590px;
  background: ${themes.primary.colors.blogBackground};
  border: 2px solid ${themes.primary.colors.primary};
  position: relative;

  @media (min-width: 1920px) {
    width: 585px;
    height: 640px;
  }

  @media (max-width: 570px) {
    width: 345px;
    height: 623px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 300px;
    height: 660px;
  }

  @media (max-height: 670px) {
    height: 560px;
  }

  @media (max-height: 570px) {
    height: 460px;
  }
`;

export const List = styled.ul`
  list-style-type: square;
  margin: 24px 5px 0 0;

  &:first-child {
    margin: 50px 5px 0 0;
  }

  @media (max-width: 570px) {
    margin-top: 24px;
    padding-left: 11px;
  }
`;

export const ListTitle = styled.span`
  position: relative;
  bottom: 10px;
  left: -3px;
  font-size: 26px;
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  line-height: 29px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5rem;
  }
`;

export const ListItem = styled.li`
  margin: 0;
  margin-top: 0px;
  margin-left: 22px;
  font-size: 16px;
  line-height: 28px;
  font-weight: ${themes.primary.font.weight.heavy};
  color: #535557;

  span {
    position: relative;
    top: -3px;
  }

  &::marker {
    color: black;
    font-size: 1.8em;
    margin: 0;
  }

  @media (max-width: 570px) {
    margin-top: 8px;
    margin-left: 22px;
    font-size: 0.875rem;

    & span {
      position: relative;
      top: -3px;
      left: -5px;
    }

    &::marker {
      font-size: 1.65rem;
    }
  }
`;

export const SubmitButtonContainer = styled.div`
  height: 50px;
  width: 172px;
  position: relative;
  margin: 23px 0px 20px 36px;

  & path {
    transition: all 1s ease-in-out;
  }
  & path:nth-child(1) {
    z-index: -1;
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(2) {
      transform: translate(36px, -36px);
    }

    & path:nth-child(1) {
      transform: translate(0px, 0px);
    }
  }

  @media (max-width: 570px) {
    margin: 26px 0 26px 10px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 154px;
  }
`;

export const SubmitButton = styled.button`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  height: 100%;
  width: 100%;
  border: 0;
  background: black;
  color: white;
  text-transform: uppercase;
  font-size: 19px;
  cursor: pointer;

  @media (max-width: 570px) {
    font-size: 1rem;
  }
`;

export const CloseButton = styled.img`
  width: 32px;
  height: 32px;
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

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  margin-top: 12px;
  margin-left: 12px;
  border: 2px solid black;

  @media (max-width: 570px) {
    margin-top: 6px;
    margin-left: 6px;
  }
`;

export const BlackBox = styled.div`
  width: 100%;
  height: 50%;
  background: black;
  outline: 1px solid black;
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 50%;
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

export const HiddenWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  background-color: ${themes.primary.colors.blogBackground};
`;
