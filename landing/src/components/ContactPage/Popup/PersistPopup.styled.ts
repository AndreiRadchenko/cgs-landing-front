import styled from "styled-components";
import themes from "../../../utils/themes";

export const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 1;
  transform: translate(50%, -100%);
  text-align: center;
  padding: 8px 0;
  @media ${themes.primary.media.maxMobile} {
  }
`;

export const PersistPopupText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 19px;
  display: none;
  @media ${themes.primary.media.maxServiceWeb} {
    display: block;
  }
`;

export const PersistPopupWrapper = styled.div`
  position: relative;
  transition: color 0.3s ease;
  :hover {
    color: ${themes.primary.colors.darkBlue};
    .popup {
      visibility: visible;
      opacity: 1;
    }
  }
`;