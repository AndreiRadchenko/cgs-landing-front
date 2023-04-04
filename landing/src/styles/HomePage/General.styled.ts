import styled from "styled-components";
import themes from "../../utils/themes";
import buttonHoverBg from "../../../public/HomePageDecoration/buttonHoverBg.png";
import { buttonHover, cursorBlinking } from "../Animations.styled";
export interface IFontSize {
  size?: string;
  padding?: string;
}

export const RowContainer = styled.div`
  display: flex;
  gap: 0.5em;

  @media ${themes.primary.media.maxMobile} {
    gap: 2px;
  }
`;

export const LocalLayout = styled.div`
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2rem;
  }

  @media (min-width: 2200px) {
    font-size: 1.4rem;
  }
`;

export const BlackButton = styled.a<IFontSize>`
  font-family: inherit;
  font-size: ${({ size }) => (size ? size : "1em")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  cursor: pointer;
  position: relative;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;
  display: inline-block;
  border: 2px solid ${themes.primary.colors.primary};
  transition: all 0.3s;
  width: fit-content;
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

  &:hover {
    transition-delay: unset;
    background: none;
    color: ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 0.8em 1em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 14px;
  }

  @media ${themes.primary.media.maxMobile} {
    &.footer-home {
      margin-top: 1em;
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
    transition: transform 1s ease-in-out;
  }
  & path:nth-child(1) {
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(1) {
      transform: translate(0px, 0px);
    }
    & path:nth-child(2) {
      transform: translate(36px, -36px);
    }
  }
`;

export const Title = styled.h1`
  font-size: ${themes.primary.font.size.homeHeader};
  letter-spacing: 0.045em;
  line-height: 132%;
  text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
    0.5px 0.5px 0 #000;
  margin: 0;
  white-space: nowrap;
  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: ${themes.primary.font.size.homeHeaderTablet};
  }
  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.homeHeaderPc};
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.homeHeaderPcHd};
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 76px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 5.2em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 15vw;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const MainSubtitle = styled.div`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.homeMainSubtitle};
  line-height: 99%;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  margin: 28px 0 40px;

  @media (max-width: 1320px) {
    margin-top: ${themes.primary.spacing.small};
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.25em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 4.8vw;
    margin: 10px 0 35px;
  }

  @media (max-width: 360px) {
    font-size: 4.7vw;
  }
`;

export const RightArrowWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 165px;
  @media ${themes.primary.media.onlyLaptop} {
    width: 115px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 65px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 4.8vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 20px;
  }
`;

export const LeftArrowWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 115px;

  @media ${themes.primary.media.onlyPC} {
    width: 145px;
  }

  @media ${themes.primary.media.maxLaptop} {
    width: 90px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 55px;
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const LongArrowWrapper = styled.div`
  display: inline-block;
  margin-left: auto;
  width: 30vw;
  position: relative;
  flex-grow: 1;

  @media ${themes.primary.media.minLaptop} {
    width: 20vw;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 524px;
  }
  @media (max-width: 1360px) {
    width: 35vw;
  }
  @media (max-width: 1370px) {
    width: 28vw;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-left: 10px;
    width: 22vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-left: 0;
    margin-right: 5px;
    width: 110px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 28vw;
  }
`;

export const HeadBlockContent = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8.75em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
  }
`;

export const Tetris = styled.div`
  position: absolute;
  width: 33.7%;
  right: 122px;

  @media ${themes.primary.media.minPCFullHD} {
    top: 80px;
    width: 28em;
  }
  @media (max-width: 1400px) {
    right: 70px;
  }
  @media (max-width: 1320px) {
    right: 40px;
    top: 40px;
    width: 370px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 50px;
    width: 33.7%;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    top: 0;
    right: 0;
    position: relative;
    transform: scale(0.9);
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    transform: none;
    width: 101.74%;
  }
`;

export const TetrisGroup = styled.g<{ coinsTranslate: string }>`
  transform: ${({ coinsTranslate }) => coinsTranslate};
`;

export const HeadBlockRow = styled.section`
  display: flex;
  margin-top: 38px;
  width: 100%;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    align-items: center;
    row-gap: 43px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 0.75rem;
  }
`;

export const Subtitle = styled.div`
  text-transform: uppercase;
  font-size: 5.14vw;
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 32px 0 40px;

  & u {
    text-decoration-thickness: 3px;
    text-underline-offset: 7px;
  }

  &.footer {
    margin-block: ${themes.primary.spacing.tertiary} 0;
    line-height: 132%;
    display: inline-block;
    vertical-align: middle;
    position: relative;

    & br {
      display: none;
    }
  }
  span {
    &.blue {
      color: ${themes.primary.colors.darkBlue};
      height: 5vw;
      white-space: nowrap;
    }

    &.tech {
      display: inline-block;
      width: 29.305vw;
      height: 5.5vw;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 5em;

    span {
      &.tech {
        width: 5.79166em;
        height: 1.3229em;
      }
    }
  }

  @media (max-width: 1370px) {
    &.small {
      font-size: 4.5vw;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 4.75vw;

    &.small {
      font-size: 4.4vw;
    }
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 4vw;

    &.small {
      font-size: 3.75vw;
    }

    span {
      &.tech {
        width: 24.305vw;
        height: 5vw;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 6.5vw;
    margin-top: 60px;
    margin-bottom: 20px;
    row-gap: 0px;
    p {
      margin: 0;
    }

    & u {
      text-decoration-thickness: 1px;
      text-underline-offset: 5px;
    }

    &.small {
      margin-top: 0;
      font-size: 5vw;
      margin-bottom: 14px;
    }

    &.footer {
      margin-top: 4em;
      & br {
        display: block;
      }
    }

    & span {
      &.blue {
        width: 43.805vw;
        height: 5vw;
      }

      &.tech {
        width: 5.8em;
        height: 5vw;
      }
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 9.3vw;

    & span {
      &.blue {
        width: 40.805vw;
        height: 5vw;
      }

      &.tech {
        width: 5.8em;
        height: 5vw;
      }
    }
  }
`;

export const NextTech = styled.section`
  margin-top: 24.5em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 20.5em;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 18.5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 10.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 5.5em;
    display: none;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 10.5em;
  }
`;

export const FilmContainer = styled.div`
  position: relative;
`;

export const Film = styled.img`
  width: 91%;
`;

export const FilmText = styled.div`
  position: absolute;
  top: 37.5%;
  left: 2.7%;
  max-width: 42%;
  line-height: 160%;
  font-size: 1.22vw;

  @media (min-width: 847px) {
    font-size: 1.24vw;
  }
  @media (min-width: 960px) {
    font-size: 1.25vw;
  }
  @media (min-width: 1170px) {
    font-size: 1.27vw;
  }
  @media (min-width: 1210px) {
    font-size: 1.29vw;
  }
  @media (min-width: 1560px) {
    font-size: 1.3vw;
  }
  @media (min-width: 1890px) {
    font-size: 1.33vw;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 25px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  margin-block: 41.5px;
  background-color: ${themes.primary.colors.headerBorder};

  @media ${themes.primary.media.maxMobile} {
    opacity: 0;
  }
`;

export const FooterButtonWrapper = styled.span`
  display: flex;
  justify-content: flex-start;
  margin-right: 28px;

  &.btn {
    margin-top: 1rem;
    margin-left: 0;
  }

  & .homepage-footer-button {
    display: flex;
    min-width: 188px;
    min-height: 58px;
    align-items: center;
    justify-content: center;
  }

  @media ${themes.primary.media.maxMobile} {
    &.btn {
      justify-content: flex-end;
      flex-direction: column;
    }

    & .homepage-footer-button {
      height: 54px;
      width: 178px;
    }
  }
`;

export const FooterWhatsAppContainer = styled.div`
  margin-bottom: 135px;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 6em;
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  right: -12px;
  top: -12px;
  background-color: ${themes.primary.colors.headerBorderHover};
  border: 1.7px solid ${themes.primary.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & svg {
    width: 25px;
    height: 25px;
  }

  @media (min-width: 2200px) {
    width: 45px;
    height: 45px;
    right: -17px;
    top: -17px;

    & svg {
      width: 32px;
      height: 32px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 40px;
    height: 40px;
    right: -15px;
    top: -15px;

    &.mobileAudit {
      font-size: 1.5em;
    }

    & svg {
      width: 30px;
      height: 30px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 24px;
    height: 24px;
    right: -9px;
    top: -9px;
  }
`;

export const MobileReverseLayout = styled.div`
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ButtonShareTextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  font-family: ${themes.primary.font.family.namu};
  z-index: 10;
  margin-left: 2.5em;
  font-size: 0.75rem;

  &.footer {
    margin-inline: 1.1666em 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.428em;
    margin-left: 0;
    font-size: 0.75rem;

    &.footer {
      margin-inline: 0;
    }
  }
`;

export const ButtonShareText = styled.a`
  font-size: 1.2857em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.143em;
  }
`;

export const WhatsAppWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.444em;
  color: ${themes.primary.colors.primary};
  font-size: 1.167em;

  &:hover {
    color: ${themes.primary.colors.darkBlue};

    & > div {
      filter: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 19px;
    column-gap: 3px;
  }
`;

export const TelegramWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.444em;
  color: ${themes.primary.colors.primary};
  font-size: 1.167em;
  transition: color 0.3s;
  margin-left: 0.778em;

  &:hover {
    color: ${themes.primary.colors.darkBlue};

    & > div {
      filter: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    line-height: 19px;
    column-gap: 3px;
    margin-left: 0.875em;
  }
`;

export const TelegramIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 0.3s;
  filter: brightness(0);
  position: relative;
  width: 22px;
  height: 22px;
  @media ${themes.primary.media.minPCFullHD} {
    width: 1.4em;
    height: 1.4em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 14px;
    height: 14px;
  }
`;

export const WhatsAppIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 22px;
  height: 22px;
  transition: filter 0.3s;
  filter: brightness(0);

  @media ${themes.primary.media.minPCFullHD} {
    width: 1.4em;
    height: 1.4em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 14px;
    height: 14px;
  }
`;

export const FooterSection = styled.section``;

export const CalculatorAndChatWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 45%;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 10px;

  /* height: 18.833em; */
  z-index: 13;

  @media ${themes.primary.media.maxMobile} {
    top: 27vw;
  }

  @media ${themes.primary.media.maxMobile} {
    position: fixed;
    height: auto;
    top: auto;
    bottom: 0;
    flex-direction: row;
    gap: 0;
  }
`;
