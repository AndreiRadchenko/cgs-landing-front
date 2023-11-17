import styled from "styled-components";
import themes from "../../../utils/themes";

export const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 1;
  transform: translate(50%, -100%);
  text-align: center;
  padding: 0 0 20px 0;
  display: none;

  & svg {
    width: 121px;
    height: 14px;
  }

  @media ${themes.primary.media.maxMobile} {
    display: block;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 0 0 5px;
    display: block;

    & svg {
      width: 60px;
      height: 7px;
    }
  }
`;

export const PersistPopupText = styled.p`
  margin: 0;
  padding: 0;
  line-height: 19px;
  font-size: 24px;

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 30px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding-bottom: 7px;
    font-size: 16px;
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
