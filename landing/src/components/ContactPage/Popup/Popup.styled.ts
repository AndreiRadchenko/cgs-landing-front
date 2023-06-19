import styled from "styled-components";
import themes from "../../../utils/themes";

export const PointerPopup = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 1;
  width: 20em;
  transform: translate(50%, -115%);
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  opacity: 0;
  transition: all 0.5s ease;
  @media ${themes.primary.media.maxMobile} {
    width: 239px;
    height: 82px;
    visibility: visible;
    opacity: 1;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: -19px;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

export const EmailPopup = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 1;
  transform: translate(50%, -115%);
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  opacity: 0;
  transition: all 0.5s ease;
  @media ${themes.primary.media.maxServiceWeb} {
    display: none;
  }

  ::after {
    content: "";
    position: absolute;
    bottom: -19px;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

export const PopupText = styled.p`
  margin: 0;
  padding: 0;
  line-height: 150%;
  @media ${themes.primary.media.maxMobile} {
    font-size: 12px;
  }
`;

export const PopupWrapper = styled.div`
  position: relative;

  @media ${themes.primary.media.minServiceWeb} {
    transition: color 0.3s ease;
    :hover {
      color: ${themes.primary.colors.darkBlue};
      .popup {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;
