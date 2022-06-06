import styled from "styled-components";
import { Modal } from "@mui/material";
import themes from "../utils/themes";

export const BackDrop = styled.div`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const ModalContainer = styled(Modal)`
  position: fixed;
  z-index: 12;
  overflow-y: scroll;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(12, 16, 51, 0.75);
`;

export const ModalWrapper = styled.div`
  outline: none;
  width: 80.625em;
  min-height: 3.75em;
  position: absolute;
  top: 10%;
  background-color: #f7f7f7;
  opacity: 1;
  border-radius: 15px;

  @media ${themes.primary.media.onlyLaptop} {
    width: 1040px;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 80%;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 90%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 90%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 90%;
  }
`;

export const ModalRow = styled.div`
  position: relative;
`;

export const ModalBackButton = styled.button`
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  width: 0.7em;
  height: 0.7em;
  position: absolute;
  right: 2%;
  top: 0;
  cursor: pointer;

  @media ${themes.primary.media.minLaptop} {
    right: 2%;
    font-size: 2.5em;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    right: 2%;
    font-size: 2.5em;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    right: 4%;
    font-size: 3em;
  }

  @media ${themes.primary.media.maxMobile} {
    right: 6%;
    top: 0%;
    font-size: 3em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    right: 6%;
    top: -0.1%;
    font-size: 3em;
  }
`;

export const ModalBackButtonArrow = styled.div`
  display: flex;
  align-items: center;
  width: 9rem;
  cursor: pointer;
`;

export const ModalBackButtonArrowText = styled.span`
  font-size: 0.8rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const ModalBackButtonAnimated = styled.div`
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  width: 13rem;
  height: 3rem;
  position: absolute;
  right: 2.5rem;

  &.close {
    align-items: center;
    justify-content: flex-end;
  }
  img {
    cursor: pointer;
  }
  @media ${themes.primary.media.minLaptop} {
    right: 2.5rem;
    font-size: 3rem;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    right: 2.5rem;
    top: -1rem;
    font-size: 3rem;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    right: 2.5rem;
    top: -1rem;
    font-size: 3rem;
  }

  @media ${themes.primary.media.maxMobile} {
    right: 2.5rem;
    top: -1rem;
    font-size: 3rem;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 11rem;
    right: 2rem;
    top: -1.2rem;
    font-size: 3rem;
  }
`;