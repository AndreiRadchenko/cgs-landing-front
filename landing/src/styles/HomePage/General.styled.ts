import styled, { keyframes } from "styled-components";
import themes from "../../utils/themes";
import buttonHoverBg from "../../../public/HomePageDecoration/buttonHoverBg.png";
import InfoIcon from "../../../public/Calendly/InfoIcon.svg";
import MobileInfoIcon from "../../../public/Calendly/MobileInfoIcon.svg";
import { buttonHover } from "../Animations.styled";

export interface IFontSize {
  size?: string;
  padding?: string;
}

export const LocalLayout = styled.div`
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2rem;
  }

  @media (min-width: 2200px) {
    font-size: 1.4rem;
  }
`;

export const arrowOne = keyframes`
  0% {
    transform: translate(-36px, 36px);
  }
  100% {
    transform: translate(0px, 0px);;
  }
`;

export const arrowTwo = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(36px, -36px);;
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
  white-space: nowrap;

  &.homePage {
    font-size: 1.835em;
    padding: 16px 15.4px;
    font-weight: 400;
  }

  &.portfolio-button {
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    padding: 0;
    align-items: center;
    min-width: 12.45em;
    height: 3.225em;
  }

  &.about-us {
    text-transform: uppercase;
    font-size: calc(
      clamp(22px, 22px + (100vw - 1440px) * ((30 - 22) / (1920 - 1440)), 30px)
    );
    padding: calc(
        clamp(
          18px,
          18px + (100vw - 1440px) * ((22.5 - 18) / (1920 - 1440)),
          22.5px
        )
      )
      calc(
        clamp(
          17px,
          17px + (100vw - 1440px) * ((21.1 - 17) / (1920 - 1440)),
          21.1px
        )
      );
    margin-right: calc(
      clamp(28px, 28px + (100vw - 1440px) * ((32 - 28) / (1920 - 1440)), 32px)
    );
  }

  &.ai,
  &.cloudSolution,
  &.webDev,
  &.social-button {
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    font-weight: 900;
    padding: 16px 15.4px;
    font-size: 1.375em;
    text-transform: uppercase;
  }

  &.mobileDev {
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    font-weight: 900;
    padding: 16px 15.4px;
    font-size: 1.83333em;
    text-transform: uppercase;
  }

  &.services {
    font-size: 22px;
    padding: 16.5px 15.5px;
    text-transform: uppercase;
  }

  &.cta-button {
    padding: 16px 15px;

    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 1.84em;

    text-transform: uppercase;
  }

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
    font-size: 1.835em;
    padding: 16px 15.4px;
    font-weight: 400;
  }

  &.scrolled {
    background: ${themes.primary.colors.primary} url(${buttonHoverBg.src});
    color: ${themes.primary.colors.secondary};
    transition-delay: 0.8s;
    background-size: 229px;
    animation: ${buttonHover} 1s steps(8) forwards;
    font-size: 1.835em;
    padding: 16px 15.4px;
    font-weight: 400;

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

    &.homePage,
    &.main,
    &.scrolled {
      padding: 0.757em 0.78em;
      font-size: 28px;
    }

    &.webDev {
      padding: 0.8em 1em;
    }

    &.cloudSolution {
      padding: 0.8em 1em;
      font-size: 1.58em;
    }

    &.ai,
    &.social-button {
      padding: 0.8em 1em;
      font-size: 1.83em;
    }

    &.mobileDev {
      padding: 0.8em 1em;
      font-size: 2.2em;
    }

    &.services {
      font-size: 33px;
      padding: 24.75px 23.25px;
    }

    &.seeAll {
      font-size: 1em;
      padding: 1.05em 2.2em !important;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 14px;
  }

  @media (max-width: 992px) {
    &.seeAll,
    &.mobileDev,
    &.homePage,
    &.main,
    &.scrolled {
      font-size: 1.33em;
    }

    &.ai,
    &.cloudSolution,
    &.webDev {
      font-size: 1.13em;
    }

    &.social-button {
      font-size: 1.42em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &.main,
    &.scrolled {
      height: 54px;
      font-size: 16px;
    }

    &.about-us {
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((22 - 16) / (768 - 375)), 22px)
      );
      line-height: 100%;
      height: fit-content;
      width: fit-content;
      padding: 16.5px
        calc(
          clamp(
            15.5px,
            16.5px - (100vw - 375px) * ((16.5 - 15.5) / (768 - 375)),
            16.5px
          )
        );
    }

    &.homeFooter {
      margin-top: 0;
      padding: 17.76px 33px;
    }

    &.homePage {
      height: 58px;
      font-size: 22px;
      padding: 18px 15px;
    }

    &.portfolio-button {
      min-width: 178px;
      height: 54px;
      font-size: 16px;
    }

    &.ai,
    &.webDev,
    &.cloudSolution,
    &.social-button {
      padding: 17.1px 17.55px;
      font-size: 16px;
    }

    &.mobileDev {
      min-width: 209px;
      padding: 17.1px 17.55px;
      font-size: 16px;
    }

    &.cta-button {
      width: 178px;
      height: 54px;
      font-size: 16px;
      padding: 18px 33px;
    }

    &.seeAll {
      font-size: 14px;
    }

    &.footer-home {
      margin-top: 1em;
    }

    &.services {
      font-size: 16px;
      padding: 17.5px 31.5px;
    }
    &.services&.header {
      padding: 17.5px 18px;
    }
  }

  @media ${themes.primary.media.minTablet} {
    &.seeAll {
      & > div {
        width: 25px;
        height: 25px;
      }
    }

    &.homePage {
      height: 54px;
      font-size: 16px;
      padding: 17px 19px;
    }
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

export const Title = styled.h1`
  font-size: ${themes.primary.font.size.homeHeader};
  letter-spacing: 5px;
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
    letter-spacing: 6.65px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 76px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 5.2em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 13vw;
  }

  @media ${themes.primary.media.minTablet} {
    font-size: 56px;
    line-height: 132%; /* 73.92px */
    letter-spacing: 2.8px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & .portfolio-button {
    min-width: auto;
    height: calc(
      clamp(58px, 58px + (100vw - 1440px) * ((78 - 58) / (1920 - 1440)), 78px)
    );
    width: calc(
      clamp(
        225px,
        225px + (100vw - 1440px) * ((275 - 225) / (1920 - 1440)),
        275px
      )
    );
    line-height: 100%;
    font-size: calc(
      clamp(18px, 18px + (100vw - 1440px) * ((30 - 18) / (1920 - 1440)), 30px)
    );
    margin-right: calc(
      clamp(28px, 28px + (100vw - 1440px) * ((32 - 28) / (1920 - 1440)), 32px)
    );
  }

  & .portfolio-share-button {
    margin-left: 0;
    margin-top: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    & .portfolio-button {
      width: calc(
        clamp(
          178px,
          178px + (100vw - 375px) * ((261 - 178) / (768 - 375)),
          261px
        )
      );
      height: calc(
        clamp(54px, 54px + (100vw - 375px) * ((58 - 54) / (768 - 375)), 58px)
      );
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((22 - 16) / (768 - 375)), 22px)
      );
    }
  }
`;

export const MainSubtitle = styled.div`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.homeMainSubtitle};
  line-height: 99%;
  display: flex;
  flex-direction: column;
  margin: 17px 0 40px;

  &.homePage {
    margin-top: 30px;
    p {
      display: flex;
      align-items: center;
      margin: 0;
      :nth-child(2) {
        margin-top: 5px;
      }
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.homePage {
      line-height: 106%;
      font-size: 1.803em;
      margin-top: 37px;
      margin-bottom: 53px;
    }
  }

  @media (max-width: 2560px) {
    &.homePage {
      width: 23em;
    }
  }

  @media (max-width: 1800px) {
    &.homePage {
      width: 24em;
    }
  }

  @media (max-width: 1320px) {
    margin-top: ${themes.primary.spacing.small};
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 20px;

    &.homePage {
      width: 26em;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.25em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 3.5vw;
    margin: 10px 0 35px;
    &.homePage {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 40px;

      p {
        line-height: 99%;
      }
    }
  }

  @media ${themes.primary.media.minTablet} {
    font-size: 4.5vw;

    &.homePage {
      margin-top: 10px;
      margin-bottom: 25px;

      p {
        font-size: 17px;
        line-height: 141%;
      }
    }
  }
`;

export const HeadBlockContent = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 119px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 165px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 40px;
    width: 100%;
  }

  @media ${themes.primary.media.minTablet} {
    margin-top: 0;
  }
`;

export const Tetris = styled.div`
  position: absolute;
  width: 33.7%;
  right: 122px;
  top: 24px;

  @media ${themes.primary.media.minPCFullHD} {
    right: 162px;
    top: 32px;
    width: 33.9em;
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
    top: -30px;
    right: 0;
    position: relative;
    transform: scale(0.885);
  }

  @media ${themes.primary.media.minTablet} {
    transform: none;
    width: 101.74%;
    top: 25px;
  }
`;

interface ITetrisGroupProps {
  coinsTranslate: string[];
}

export const TetrisGroup = styled.g.attrs(
  ({ coinsTranslate }: ITetrisGroupProps) => ({
    style: {
      transform: `translate(
      ${coinsTranslate[0]}px,
      ${coinsTranslate[1]}px
    )`,
    },
  })
)``;

export const HeadBlockRow = styled.section`
  display: flex;
  margin-top: 24px;
  width: 100%;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 32px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    align-items: center;
    row-gap: 0;
  }

  @media ${themes.primary.media.minTablet} {
    margin-top: 15px;
  }
`;

interface ISubtitle {
  homepageFooter?: boolean;
}

export const Subtitle = styled.div<ISubtitle>`
  text-transform: uppercase;
  font-size: 5.14vw;
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 32px 0 20px;

  & u {
    text-decoration-thickness: 3px;
    text-underline-offset: 7px;
  }

  &.foooter {
    margin-top: 120px;
    margin-bottom: 14px;
    p {
      margin: 0;
    }
  }

  &.textOnFilm {
    margin-bottom: 15px;

    p {
      margin: 0;
      line-height: 146%;
      span:first-child {
        display: inline-flex;
        height: 90px;
        min-width: 370px;
      }
    }
  }

  &.nextTech {
    line-height: 132%;
    height: 2.5em;
    p {
      margin: 0;
    }
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

  @media ${themes.primary.media.maxTabletPortrait} {
    &.textOnFilm {
      p {
        span:first-child {
          min-width: 300px;
        }
      }
    }
  }

  @media ${themes.primary.media.minServiceWeb} {
    &.textOnFilm {
      p {
        span:first-child {
          min-width: 560px;
        }
      }
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 5.105em;
    margin: 0;

    &.textOnFilm {
      margin-bottom: 40px;

      p {
        span:first-child {
          height: auto;
          min-width: 740px;
        }
      }
    }
    span {
      &.tech {
        width: 5.79166em;
        height: 1.3229em;
      }
    }

    &.foooter {
      margin-top: 160px;
      margin-bottom: -7px;
      p {
        margin: 0;
      }
    }
  }

  @media (min-width: 2000px) {
    &.textOnFilm {
      p {
        span:first-child {
          min-width: 860px;
        }
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

    &.textOnFilm {
      p {
        span:first-child {
          display: inline-flex;
          height: 10px;
        }
      }
    }

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

    &.foooter {
      margin-top: 12px;
      font-size: 56px;
      width: 470px;
      line-height: 132%;
      letter-spacing: 2.8px;
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

  @media ${themes.primary.media.minTablet} {
    &.foooter {
      width: 315px;
      font-size: 32px;
      line-height: 132%; /* 42.24px */
      letter-spacing: 1.6px;
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
        font-size: ${({ homepageFooter }) => homepageFooter && "8.5vw"};
        width: 5.8em;
        height: 5vw;
      }
    }
  }
`;

export const NextTech = styled.section`
  margin-top: 24.7em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 20.75em;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
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

export const RightContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 0;

  @media ${themes.primary.media.minPCFullHD} {
    margin-right: 20px;
  }
`;

export const FooterButtonWrapper = styled.span`
  display: flex;
  justify-content: flex-start;
  margin-right: 28px;

  &.btn {
    margin-top: 2.5rem;
    margin-left: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.btn {
      margin-top: 38px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &.btn {
      margin-top: 38px;
    }
  }

  @media ${themes.primary.media.minTablet} {
    &.btn {
      flex-direction: column;
    }
  }
`;

export const FooterWhatsAppContainer = styled.div`
  margin-bottom: 162px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 217px;
  }

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

  &.contactPage {
    right: -13px;
    top: -16px;
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

    &.contactPage {
      right: -15px;
      top: -20px;
    }

    &.mobileAudit {
      font-size: 1.5em;
    }

    & svg {
      width: 30px;
      height: 30px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &.contactPage {
      right: -13px;
      top: -13px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 24px;
    height: 24px;
    right: -9px;
    top: -9px;

    &.contactPage {
      width: 25px;
      height: 25px;
      right: -10px;
      top: -13px;
    }
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
  margin-left: 28px;
  gap: calc(
    clamp(14px, 14px + (100vw - 1440px) * ((18 - 14) / (1920 - 1440)), 18px)
  );

  &.about-us {
    gap: calc(
      clamp(14px, 14px + (100vw - 1440px) * ((32 - 14) / (1920 - 1440)), 32px)
    );
    margin-left: 0;
  }

  &.homePage {
    gap: calc(
      clamp(2px, 2px + (100vw - 1440px) * ((22 - 10) / (1920 - 1440)), 22px)
    );
  }

  &.footer {
    margin-inline: 1.1666em 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 37px;
    &.homePage {
      margin-left: 34px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 16px;
    margin-left: 1px;

    &.about-us {
      margin-top: 0;
    }

    &.homePage {
      margin-top: 2px;
      margin-left: 29px;
      gap: 0;
    }

    &.dappAuditShare a {
      padding: 0 !important;
    }

    &.footer {
      margin-inline: 0;
    }
  }

  @media ${themes.primary.media.minTablet} {
    &.homePage {
      margin-top: 15px;
      margin-left: 0;
      gap: 7px;
    }
  }

  @media (max-width: 472px) {
    &.portfolio-share-button {
      margin-top: 20px;
    }
  }
`;

export const ButtonShareText = styled.a``;

export const WhatsAppWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.444em;
  color: ${themes.primary.colors.primary};
  font-size: 1.125em;

  &.about-us {
    font-size: calc(
      clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
    );
    gap: calc(
      clamp(8px, 8px + (100vw - 1440px) * ((10.5 - 8) / (1920 - 1440)), 10.5px)
    );
  }

  &.homePage,
  &.webAudit,
  &.mobileDev {
    font-size: 1.5em;
  }

  &.dappAuditShare {
    font-size: 1.5em;
  }

  &.portfolio-share-button,
  &.cta-share-button {
    font-size: 1.5em;
  }

  &:hover {
    color: ${themes.primary.colors.darkBlue};

    & > div {
      filter: none;
    }
  }

  &.services {
    font-size: 18px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.homePage {
      font-size: 1.25em;
    }

    &.webDev {
      font-size: 1.1em;
    }

    &.cloudSolution {
      font-size: 1.25em;
    }

    &.mobileDev,
    &.webAudit {
      font-size: 1.8em;
    }

    &.services {
      font-size: 27px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &.webDev {
      font-size: 1.13em;
    }

    &.blockchain {
      font-size: 1.41em;
    }

    &.webAudit,
    &.mobileDev,
    &.homePage {
      font-size: 1.33em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 19px;
    column-gap: 3px;

    &.about-us {
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((18 - 16) / (768 - 375)), 18px)
      );
      gap: calc(
        clamp(3px, 3px + (100vw - 375px) * ((8 - 3) / (768 - 375)), 8px)
      );
    }

    &.cta-share-button,
    &.services {
      font-size: 16px;
    }

    &.homePage {
      gap: 8px;
      font-size: 18px;
    }

    &.portfolio-share-button {
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((18 - 16) / (768 - 375)), 18px)
      );
      line-height: calc(
        clamp(19px, 19px + (100vw - 375px) * ((22 - 19) / (768 - 375)), 22px)
      );
      gap: calc(
        clamp(3px, 3px + (100vw - 375px) * ((8 - 3) / (768 - 375)), 8px)
      );
    }
  }

  @media ${themes.primary.media.minTablet} {
    &.homePage {
      gap: 8px;
      font-size: 16px;
    }
  }
`;

export const TelegramWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.444em;
  color: ${themes.primary.colors.primary};
  font-size: 1.125em;
  transition: color 0.3s;
  margin-left: 0.778em;

  &.about-us {
    font-size: calc(
      clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
    );
    gap: calc(
      clamp(8px, 8px + (100vw - 1440px) * ((10.5 - 8) / (1920 - 1440)), 10.5px)
    );
    margin-left: 0;
  }

  &.homePage,
  &.webAudit,
  &.mobileDev {
    font-size: 1.5em;
  }

  &.dappAuditShare {
    font-size: 1.5em;
  }

  &.portfolio-share-button,
  &.cta-share-button {
    font-size: 1.5em;
  }

  &.services {
    font-size: 18px;
  }

  &:hover {
    color: ${themes.primary.colors.darkBlue};

    & > div {
      filter: none;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.homePage {
      font-size: 1.25em;
    }

    &.webDev {
      font-size: 1.1em;
    }

    &.cloudSolution {
      font-size: 1.25em;
    }

    &.mobileDev,
    &.webAudit {
      font-size: 1.8em;
    }

    &.services {
      font-size: 27px;
    }
  }

  @media (max-width: 992px) {
    &.webDev {
      font-size: 1.13em;
    }

    &.blockchain {
      font-size: 1.41em;
    }

    &.webAudit,
    &.mobileDev,
    &.homePage {
      font-size: 1.33em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 19px;
    column-gap: 3px;
    margin-left: 0.875em;

    &.about-us {
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((18 - 16) / (768 - 375)), 18px)
      );
      gap: calc(
        clamp(3px, 3px + (100vw - 375px) * ((8 - 3) / (768 - 375)), 8px)
      );
    }

    &.cta-share-button,
    &.services {
      font-size: 16px;
    }

    &.homePage {
      gap: 8px;
      font-size: 18px;
    }

    &.portfolio-share-button {
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((18 - 16) / (768 - 375)), 18px)
      );
      line-height: calc(
        clamp(19px, 19px + (100vw - 375px) * ((22 - 19) / (768 - 375)), 22px)
      );
      gap: calc(
        clamp(3px, 3px + (100vw - 375px) * ((8 - 3) / (768 - 375)), 8px)
      );
    }
  }

  @media ${themes.primary.media.minTablet} {
    &.homePage {
      gap: 8px;
      font-size: 16px;
      margin-left: 0;
    }
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
    width: 1.22em;
    height: 1.22em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &.portfolio-share-button {
      width: calc(
        clamp(15px, 15px + (100vw - 375px) * ((22 - 15) / (768 - 375)), 22px)
      );
      height: calc(
        clamp(14px, 14px + (100vw - 375px) * ((22 - 14) / (768 - 375)), 22px)
      );
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: calc(
      clamp(15px, 15px + (100vw - 375px) * ((22 - 15) / (768 - 375)), 22px)
    );
    height: calc(
      clamp(14px, 14px + (100vw - 375px) * ((22 - 14) / (768 - 375)), 22px)
    );
  }
`;

export const CalculatorAndChatWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 44%;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 15px;

  z-index: 37;

  @media ${themes.primary.media.maxMobile} {
    top: 27vw;
  }

  @media ${themes.primary.media.maxMobile} {
    height: auto;
    top: auto;
    bottom: 5px;
    flex-direction: row;
    gap: 0;
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
    width: 1.22em;
    height: 1.22em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: calc(
      clamp(15px, 15px + (100vw - 375px) * ((22 - 15) / (768 - 375)), 22px)
    );
    height: calc(
      clamp(14px, 14px + (100vw - 375px) * ((22 - 14) / (768 - 375)), 22px)
    );
  }
`;

export const FooterSection = styled.section``;

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${themes.primary.colors.blogBackground};

  & .portfolio_dropdown-element {
    width: 160px;
    white-space: nowrap;
    font-size: 14px;
    padding: 0 10px;
  }

  & .portfolio-dropdown {
    min-width: calc(
      clamp(
        198px,
        198px + (100vw - 1440px) * ((260 - 198) / (1920 - 1440)),
        260px
      )
    );

    & div {
      line-height: 120%;
      font-size: calc(
        clamp(14px, 14px + (100vw - 1440px) * ((18 - 14) / (1920 - 1440)), 18px)
      );
    }
  }

  @media ${themes.primary.media.minServiceWeb} {
    & .portfolio_dropdown-element {
      width: calc(
        clamp(
          160px,
          160px + (100vw - 1440px) * ((213 - 160) / (1920 - 1440)),
          213px
        )
      );
      height: calc(
        clamp(35px, 35px + (100vw - 1440px) * ((47 - 35) / (1920 - 1440)), 47px)
      );
      font-size: calc(
        clamp(14px, 14px + (100vw - 1440px) * ((18 - 14) / (1920 - 1440)), 18px)
      );
    }
  }
`;

export const DropdownButton = styled.button<{ isHeader?: boolean }>`
  cursor: pointer;
  color: ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  box-sizing: border-box;
  border: ${(props) =>
    !props.isHeader &&
    `1px solid ${themes.primary.colors.comment} !important;`};
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.primary};
  vertical-align: middle;
  line-height: normal;
  letter-spacing: 0.03em;
  height: 35px;
  width: 131px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;

  &:hover {
    transition: 0.15s ease-out;
    padding: 0 8px 0 10px;
    border-right: 2px solid ${themes.primary.colors.primary} !important;
    border-bottom: 4px solid ${themes.primary.colors.primary} !important;
  }
  &:hover &.open {
    padding: 0 7px 0 10px;
    border-bottom: 0 !important;
    border-right: 3px solid ${themes.primary.colors.primary} !important;
    img {
      transform: rotate(180deg);
    }
  }
  &.open {
    padding: 0 7px 0 10px;
    border-bottom: 0 !important;
    border-right: 3px solid ${themes.primary.colors.primary} !important;

    img {
      transform: rotate(180deg);
    }
  }

  &.blog {
    font-size: 1.1667em;

    @media ${themes.primary.media.minPCFullHD} {
      font-size: 0.75em;
      padding: 0 15px;
      height: 2.45em;

      &.blog {
        width: 9.2em;
      }
    }

    @media ${themes.primary.media.maxMobile} {
      font-size: 0.875rem;
    }
  }

  & > img,
  & > span {
    vertical-align: middle;
  }

  img {
    margin-left: 10px;
    transform: rotate(0deg);
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 3em;
    width: 10.91em;
    padding: 0 1em;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: ${themes.primary.colors.blogBackground};
  min-width: 198px;
  z-index: 3;
  right: 0;
  border: 1px solid ${themes.primary.colors.primary};
  border-right: 3px solid ${themes.primary.colors.primary};
  border-bottom: 12px solid ${themes.primary.colors.primary};
  display: none;
  &.open {
    display: block;
  }
  div {
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-size: 1.167em;
    border-bottom: 1px solid ${themes.primary.colors.comment};
    padding: calc(
        clamp(
          11.2px,
          11.2px + (100vw - 1440px) * ((16 - 11.2) / (1920 - 1440)),
          16px
        )
      )
      calc(
        clamp(10px, 10px + (100vw - 1440px) * ((12 - 10) / (1920 - 1440)), 12px)
      );
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    &:hover {
      background-color: ${themes.primary.colors.blogDropdownHover};
    }
    &:last-child {
      border-bottom: 0;
    }
    &.checked {
      color: ${themes.primary.colors.comment};
    }

    @media ${themes.primary.media.maxMobile} {
      font-size: 14px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    div {
      font-size: 0.75em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 32px;
  align-items: flex-end;
  column-gap: 20px;
  flex-wrap: wrap;
  row-gap: 12px;

  @media ${themes.primary.media.minPCFullHD} {
    &.blog {
      margin-bottom: 40px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 1.375rem;
  }
`;

export const CalendlyInfoModalWrapper = styled.div``;

export const CalendlyInfoModalWrapperCloseWrapper = styled.div`
  width: 100%;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const CalendlyInfoModalWrapperCloseButton = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  margin: 20px 19px 0 0;
  cursor: pointer;
  z-index: 2;

  @media ${themes.primary.media.maxMobile} {
    margin: 12px 8.5px 0 0;
  }
`;

export const CalendlyInfoModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 58px 36px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  align-self: stretch;

  @media ${themes.primary.media.maxMobile} {
    padding: 58px 32px 20px;
    gap: 24px;
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    padding: 48px 16px 16px;
    gap: 16px;
  }
`;

export const CalendlyInfoModalLinkBlock = styled.div`
  border: 2px dashed ${themes.primary.colors.darkBlue};
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  @media ${themes.primary.media.maxMobile} {
    padding: 16px;
    gap: 12px;
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    padding: 10px;
  }
`;
export const CalendlyInfoModalDateTime = styled.div`
  font-size: 16px;
  font-family: NAMU;
  width: 100%;
  border: 1px solid ${themes.primary.colors.primary};
  display: flex;
  justify-content: space-between;
  & > div:first-child {
    padding: 8.5px 12px 10.5px;
    height: 100%;
  }
  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8.5px 12px 10.5px;
    border-left: 1px solid ${themes.primary.colors.primary};
    background-color: ${themes.primary.colors.chatMessageBgc};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    & > div:first-child {
      padding: 5px 8px 7px;
    }
    & > div:last-child {
      padding: 5px 8px 7px;
    }
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 14px;
  }
`;
export const CalendlyInfoModalLinkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;

  & > div:first-child {
    font-family: NAMU;
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
    background-color: ${themes.primary.colors.blogBackground};
    padding-right: 12px;
    z-index: 2;
  }
  & > img {
    z-index: 1;
    position: absolute;
    top: 6px;
    right: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    & > img {
      transform: translateY(25%);
      z-index: 1;
      position: absolute;
      top: 2px;
      right: 0;
    }
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    & > div:first-child {
      font-size: 16px;
    }
  }
`;
export const CalendlyInfoModalLinkMain = styled.div`
  display: flex;
  width: 100%;
  height: 40px;

  & > div:first-child {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.secondary};
    padding: 12px;
    font-size: 18px;
    white-space: nowrap;
    width: 78.1884%;
    display: flex;
    align-items: center;

    & > p {
      overflow: hidden;
      margin: 0;
      padding: 0;
      width: 100%;
    }
  }
  & > div:last-child {
    display: flex;
    width: 21.8116%;
    background-color: ${themes.primary.colors.primary};
    color: ${themes.primary.colors.secondary};
    font-size: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    position: relative;
  }

  @media (max-width: 640px) {
    height: 32px;
    & > div:first-child {
      padding: 8px;
      font-size: 14px;
      width: 67.57%;
    }
    & > div:last-child {
      font-size: 13px;
      width: 32.43%;
    }
  }
`;
export const CalendlyInfoModalLinkFooter = styled.div`
  font-family: NAMU;
  font-size: 18px;
  font-weight: 500;

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
`;
export const CalendlyInfoModalLinkCopyImage = styled.img`
  color: ${themes.primary.colors.secondary};
  width: 14px;
  height: 14px;

  @media ${themes.primary.media.maxMobile} {
    width: 12px;
    height: 12px;
  }
`;
export const CalendlyInfoModalLinkDoneImage = styled.img`
  color: ${themes.primary.colors.secondary};
  width: 18px;
  height: 14px;
`;
export const CalendlyInfoModalLinkArrowImage = styled.img``;

export const CalendlyInfoModalLinkHint = styled.div`
  position: absolute;
  bottom: 55px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
  white-space: nowrap;
  background: ${themes.primary.colors.primary};
  border-radius: 6px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${themes.primary.colors.blogBackground};
  font-size: 12px;
  line-height: 18px;
  padding: 16px;
  text-align: center;

  @media ${themes.primary.media.maxTabletLandScape} {
    bottom: 45px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 12px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 8px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

export const CalendlyInfoModalTitle = styled.div`
  line-height: 31.2px;
  font-size: 24px;
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;

  @media ${themes.primary.media.maxMobile} {
    /* margin-top: 32px; */
    font-size: 26px;
    line-height: 21.6px;
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 17px;
  }
`;

export const CalendlyInfoModalNotice = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const CalendlyInfoModalImageWrapper = styled.div``;

export const CalendlyInfoModalImage = styled.div`
  background: url(${InfoIcon.src});
  background-repeat: no-repeat;
  width: 37px;
  height: 40px;

  @media ${themes.primary.media.maxMobile} {
    background: url(${MobileInfoIcon.src});
    background-repeat: no-repeat;
    width: 33px;
  }
`;

export const CalendlyInfoModalNoticeText = styled.div`
  font-size: 18px;
  line-height: 28.8px;
  font-weight: 900;
  font-family: ${themes.primary.font.family.namu};

  & p {
    margin: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
    font-size: 18px;
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 16px;
    line-height: 25.6px;
  }
`;

export const CalendlyInfoModalNoticeButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  @media ${themes.primary.media.maxMobile} {
  }
`;

export const CalendlyInfoModalNoticeButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: ${themes.primary.font.family.namu};
  font-size: 14px;
  align-items: center;
  border: none;
  padding: 7.1px 28.3px;
  background-color: black;
  color: white;
`;

interface ITag {
  isArticlePage?: boolean;
}

export const Tag = styled.button<ITag>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.darkBlue};
  padding: 6px 12px;
  font-style: normal;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.articleViews};
  font-family: ${themes.primary.font.family.openSans};
  letter-spacing: 0.5px;
  z-index: 1;
  &:hover {
    background-color: ${(props) =>
      props.isArticlePage && themes.primary.colors.hoveredBlogTag};
    cursor: ${(props) => props.isArticlePage && "pointer"};
  }
  span {
    cursor: pointer;
  }
  @media ${themes.primary.media.minPC} {
    height: 2.333em;
    padding: 0.5em ${themes.primary.font.size.primary};
    font-size: ${themes.primary.font.size.primary};
  }

  @media ${themes.primary.media.maxMobile} {
    &.preview {
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
      font-size: 1.35em;
      margin-left: -1px;
    }
  }
`;
