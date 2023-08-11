import styled from "styled-components";
import themes from "../../utils/themes";
import { twistedBlockAnimation } from "../Animations.styled";
import twistedBlockBg from "../../../public/HomePageDecoration/twistedBlockBg.png";

export const TwistedBlockContainer = styled.div`
  margin: 5.58em auto 10em;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor2} 0%,
    ${themes.primary.colors.mainGradientColor1} 100%
  );

  @media (max-width: 1200px) {
    margin: 80px auto 60px;
  }

  @media (max-width: 767px) {
    margin: 90px auto 90px;
    margin-left: -1.925em;
    width: 100vw;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 372px;
  border: 1px solid black;
  transition: all 0.5s;
  box-shadow: 10px 4px 0px 0px #000, 1px 0px 0px 0px #000;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor2} 0%,
    ${themes.primary.colors.mainGradientColor1} 100%
  );

  &.scrolled {
    background: #f1efed url(${twistedBlockBg.src});
    transition-delay: 0.8s;
    background-size: 1120px;
    animation: ${twistedBlockAnimation(2976)} 0.8s steps(8) forwards;
  }

  @media (max-width: 1799px) {
    box-shadow: 7px 2px 0px 0px #000;
    min-height: 210px;
    &.scrolled {
      background-size: 627px;
      animation: ${twistedBlockAnimation(1664)} 0.8s steps(8) forwards;
    }
  }

  @media (max-width: 767px) {
    font-size: 20px;
    border-left: none;
    border-right: none;
    box-shadow: none;
    box-shadow: 0px 2px 0px 0px #000;
    min-height: 168px;
  }

  @media (max-width: 767px) {
    font-size: 20px;
    border-left: none;
    border-right: none;
    box-shadow: none;
    box-shadow: 0px 2px 0px 0px #000;
    min-height: 168px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    &.scrolled {
      background-size: 506px;
      animation: ${twistedBlockAnimation(1344)} 0.8s steps(8) forwards;
    }
  }
`;

export const TwistedText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 3.33em;
  padding: 32px;
  line-height: normal;

  p {
    padding: 0;
    margin: 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 20px;
    font-size: 28px;
  }
  @media (max-width: 767px) {
    text-align: left;
    font-size: 20px;
    padding: 24px 8px;
  }
`;
