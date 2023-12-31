import styled from "styled-components";

import themes from "../../utils/themes";
import buttonHoverBg from "../../../public/HomePageDecoration/buttonHoverBg.png";
import { buttonHover } from "../Animations.styled";
import { arrowOne, arrowTwo } from "../HomePage/General.styled";

export const BlackButton = styled.button`
  font-family: inherit;
  cursor: pointer;
  position: relative;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;
  display: inline-block;
  border: 2px solid ${themes.primary.colors.primary};
  transition: all 0.3s;
  width: fit-content;
  height: 50px;

  &.footer {
    margin-top: 10px;
    height: 4vw;
    margin-left: 20px;
  }

  &.footer-home {
    margin-top: 10px;
    height: 4vw;
    margin-left: 20px;
  }

  &.main {
    background: transparent;
    color: ${themes.primary.colors.primary};
    background-size: 229px;
    transition-delay: unset;
  }

  &.scrolled {
    background: ${themes.primary.colors.primary} url(${buttonHoverBg.src});
    color: ${themes.primary.colors.secondary};
    transition-delay: 0.8s;
    background-size: 229px;
    animation: ${buttonHover} 1s steps(8) forwards;

    &.removeBg {
      transition-delay: unset;
      background-image: none;
    }
  }

  &.calendly {
    margin-left: 2px;
    height: 57px;
    width: 188px;
    font-size: 22px;
    padding: 0;
    &.contactPage {
      width: 252px;
      height: 70px;

      @media ${themes.primary.media.maxPCFullHD} {
        width: 196px;
        height: 54px;
      }

      @media ${themes.primary.media.maxMobile} {
        width: 243px;
        height: 58px;
        text-transform: uppercase;
      }

      @media ${themes.primary.media.maxLowScreenMobile} {
        text-transform: initial;
      }
    }
  }

  &:hover {
    transition-delay: unset;
    background: none;
    color: ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 0.8em 1em;

    &.calendly {
      width: 235.5px;
      height: 72px;
      font-size: 27.5px;
      &.contactPage {
        width: 252px;
        height: 72px;
        font-size: 28px;
      }
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 14px;
  }

  @media ${themes.primary.media.maxMobile} {
    &.footer-home {
      margin-top: 1em;
    }
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    &.calendly {
      width: 153px;
      height: 49px;
      font-size: 16px;
    }
    &.calendly.contactPage {
      width: 178px;
      height: 55px;
      font-size: 16px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    &.seeAll {
      & > div {
        width: 25px;
        height: 25px;
      }
    }
  }

  & path {
  }
  & path:nth-child(1) {
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(1) {
      animation: ${arrowOne} 1s 1 forwards ease-in-out;
    }
    & path:nth-child(2) {
      animation: ${arrowTwo} 1s 1 forwards ease-in-out;
    }
  }
`;

export const BlackButtonAnchor = styled.a`
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
