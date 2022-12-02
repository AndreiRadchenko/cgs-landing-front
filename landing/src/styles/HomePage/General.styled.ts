import styled from "styled-components";
import themes from "../../utils/themes";
import buttonHoverBg from "../../../public/HomePageDecoration/buttonHoverBg.png";
import { buttonHover, cursorBlinking } from "../Animations.styled";
import { PopupButton, PopupModal } from "react-calendly";

export interface IFontSize {
  size: string;
  padding: string;
}

export const RowContainer = styled.div`
  display: flex;
`;

export const ContentContainer = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
  padding: 38px 51px 90px;
  font-family: ${themes.primary.font.family.namu};
  button {
    border: none;
    outline: none;
    border-radius: 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 50px 50px 70px;
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
export const ButtonArrow = styled.img`
  position: absolute;
  right: -14px;
  top: -14px;
  width: 36px;
  height: 36px;
`;

export const StyledPopupButton = styled(PopupButton)`
  height: 0;
  visibility: hidden;
  opacity: 0;
  padding: 0;
  border: 0;
`;

export const BlackButton = styled.a<IFontSize>`
  font-family: inherit;
  font-size: ${({ size }) => size};
  padding: ${({ padding }) => padding};
  cursor: pointer;
  position: relative;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;
  display: inline-block;
  border: 2px solid ${themes.primary.colors.primary};
  transition: all 0.3s;
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

export const ButtonWrapper = styled.div``;

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
    font-size: 4.3vw;
    margin: 10px 0 35px;
  }
`;

export const RightArrowWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 10px;
  width: 115px;
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 88px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 10.4vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin: 0 5px;
  }
`;

export const LeftArrowWrapper = styled.div`
  display: inline-block;
  width: 142px;
  position: relative;
  margin-left: 10px;
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 108px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 14.1vw;
  }
`;

export const LongArrowWrapper = styled.div`
  display: inline-block;
  margin-left: auto;
  width: 30vw;
  position: relative;

  @media ${themes.primary.media.minLaptop} {
    margin-left: 10px;
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
      width: 11ch;
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
    row-gap: 0px;

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
      white-space: normal !important;

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
    font-size: 1.75rem;
    &.small {
      line-height: 132%;
      font-size: 2rem;
      display: inline-block;
      white-space: nowrap;
    }
    &.small div {
      flex-wrap: wrap;
    }

    span {
      &.range {
        display: inline-block;
        width: 70.805vw;
      }
    }
  }

  @media (max-width: 430px) {
    &.footer {
      margin-top: 110px;
      font-size: 2rem;
    }
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 1.475rem;
    &.small {
      line-height: 132%;
      font-size: 7.5vw;
    }
    &.small div {
      flex-wrap: nowrap;
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
  margin-bottom: 70px;

  @media ${themes.primary.media.maxTabletPortrait} {
    overflow: hidden;
    padding-bottom: 400px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 412px;
    overflow: visible;
    margin-bottom: 52px;
  }

  @media (max-width: 600px) {
    padding-bottom: 310px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    padding-bottom: 300px;
  }
  @media (max-width: 360px) {
    margin-bottom: 0px;
    padding-bottom: 350px;
  }
`;

export const Film = styled.img`
  width: 89.3%;
  @media (max-width: 1410px) {
    width: 97%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 100%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: -13%;
    position: absolute;
    width: 125%;
  }

  @media (max-width: 835px) {
    top: -5%;
    width: 145%;
  }

  @media ${themes.primary.media.maxMobile} {
    left: 5%;
    top: 0;
    width: 90%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 125%;
    left: -8%;
  }
`;

export const FilmText = styled.div`
  position: absolute;
  top: 35.3%;
  left: 2.7%;
  max-width: 42%;
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.menuElement};
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.4em;
  }
  @media (max-width: 1410px) {
    max-width: 47.5%;
    top: 33%;
  }
  @media (max-width: 1220px) {
    font-size: 20px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    top: 35%;
    font-size: 1rem;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 25%;
    font-size: 1.1rem;
    max-width: 60.5%;
  }

  @media (max-width: 835px) {
    top: 32%;
    font-size: 1.1rem;
    max-width: 70.5%;
  }

  @media ${themes.primary.media.maxMobile} {
    left: 7.7%;
    top: 20%;
    font-size: 2.65em;
    max-width: 83.5%;
  }

  @media (max-width: 660px) {
    font-size: ${themes.primary.font.size.secondary};
  }

  @media ${themes.primary.media.minTablet} {
    top: 19%;
    font-size: 1.8em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    top: 22%;
    left: 2.7%;
    max-width: 98.5%;
    font-size: 1.1rem;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    top: 20%;
  }

  @media (max-width: 360px) {
    top: 20%;
    font-size: 0.95rem;
  }

  @media (max-width: 320px) {
    top: 15%;
    font-size: 0.8rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 15px;
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
  justify-content: flex-end;
  margin-right: 13px;

  &.btn {
    & a {
      margin-top: 1rem;
      margin-left: 0;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    justify-content: flex-start;
  }
`;

export const FooterLinkButton = styled.a`
  font-family: inherit;
  font-size: 1.8333em;
  padding: 1.15rem 1.1rem;
  cursor: pointer;
  position: relative;
  letter-spacing: 0.03em;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 20px;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;
  border: 2px solid ${themes.primary.colors.primary};
  transition: all 0.3s;

  &:hover {
    background-color: transparent;
    color: ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 1.5rem 1.4rem;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 14px;
    padding: 1.11em 1.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 1.428em 2em;
  }

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

export const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.45em;
  background-color: ${themes.primary.colors.primary};
  animation: ${cursorBlinking} 1s steps(1) infinite;
  position: absolute;
  right: -0.2em;
  bottom: -0.2em;
`;

export const MobileReverseLayout = styled.div`
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const WhatsAppTextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  font-size: 1.1667em;
  margin-top: 1em;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.5em;
    font-size: 1.346em;
  }
`;

export const WhatsAppText = styled.a`
  display: flex;
  margin-left: 0.666em;
  column-gap: 0.1666em;
  font-size: 1.2857em;
  color: ${themes.primary.colors.whatsApp};

  & path {
    fill: ${themes.primary.colors.whatsApp};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.143em;
    margin-left: 0.44em;
  }
`;

export const WhatsAppIconWrapper = styled.div`
  width: 0.78em;
  height: 0.78em;
`;

export const FooterSection = styled.section``;
