import styled from "styled-components";
import themes from "../../utils/themes";
import buttonHoverBg from "../../../public/HomePageDecoration/buttonHoverBg.png";
import InfoIcon from "../../../public/Calendly/InfoIcon.svg";
import MobileInfoIcon from "../../../public/Calendly/MobileInfoIcon.svg";
import { buttonHover } from "../Animations.styled";
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
  white-space: nowrap;

  &.homePage {
    font-size: 1.835em;
    padding: 16px 15.4px;
    font-weight: 400px;
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

  &.social-button {
    display: flex;
    justify-content: center;
    padding: 0;
    align-items: center;
    min-width: 12.45em;
    height: 3.225em;
    font-size: 1.125em;
  }

  &.services {
    font-size: 1.5em;
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
    font-weight: 400px;
  }

  &.scrolled {
    background: ${themes.primary.colors.primary} url(${buttonHoverBg.src});
    color: ${themes.primary.colors.secondary};
    transition-delay: 0.8s;
    background-size: 229px;
    animation: ${buttonHover} 1s steps(8) forwards;
    font-size: 1.835em;
    padding: 16px 15.4px;
    font-weight: 400px;

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
      padding: 0.8em 1em;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 14px;
  }

  @media (max-width: 992px) {
    &.seeAll,
    &.homePage,
    &.main,
    &.scrolled {
      font-size: 1.33em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &.main,
    &.scrolled {
      height: 54px;
      font-size: 16px;
    }

    &.homePage {
      height: 54px;
      font-size: 16px;
      padding: 17px 35px;
    }

    &.portfolio-button {
      min-width: 178px;
      height: 54px;
      font-size: 16px;
    }

    &.social-button {
      min-width: 178px;
      height: 54px;
      font-size: 16px;
    }

    &.cta-button {
      width: 178px;
      height: 54px;
      font-size: 16px;
      padding: 18px 33px;
    }

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
  width: 100%;

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
  margin: 17px 0 40px;

  &.homePage {
    margin-top: 25px;
    p {
      margin: 0;
    }
  }

  @media (max-width: 2560px) {
    &.homePage {
      width: 22em;
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
    font-size: 4.8vw;
    margin: 10px 0 35px;
    &.homePage {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 27px;

      p {
        line-height: 141%;
      }
    }
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
    display: none;
  }
`;

export const RightArrowWrapperMobile = styled.div`
  position: relative;
  display: none;

  @media ${themes.primary.media.maxMobile} {
    display: inline-block;
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
  top: 18px;

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
    margin-top: 76px;
    margin-bottom: 14px;
    p {
      margin-bottom: 0;
    }
  }

  &.textOnFilm {
    margin-bottom: 29px;
    p {
      margin: 0;
      line-height: 146%;
      span:first-child {
        display: inline-flex;
        height: 90px;
      }
    }
  }

  &.nextTech {
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
      margin-top: 60px;
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
        font-size: ${({ homepageFooter }) => homepageFooter && "8.5vw"};
        width: 5.8em;
        height: 5vw;
      }
    }
  }
`;

export const NextTech = styled.section`
  margin-top: 18.5em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 10.5em;
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
    margin-top: 2.7rem;
    margin-left: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    &.btn {
      margin-top: 28px;
      justify-content: flex-end;
      flex-direction: column;
    }
  }
`;

export const FooterWhatsAppContainer = styled.div`
  margin-bottom: 162px;

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

  &.ticketModalArrowSubmit {
    will-change: transform;
  }

  &.careersTicketArrow {
    position: relative;
    top: 0;
    right: 0;
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
  margin-left: 28px;

  &.footer {
    margin-inline: 1.1666em 0;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 16px;
    margin-left: 1px;

    &.dappAuditShare a {
      padding: 0 !important;
    }

    &.footer {
      margin-inline: 0;
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

  @media (max-width: 992px) {
    &.homePage {
      font-size: 1.33em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 19px;
    column-gap: 3px;

    &.cta-share-button,
    &.portfolio-share-button,
    &.homePage,
    &.webAudit,
    &.mobileDev,
    &.dappAuditShare {
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

  @media (max-width: 992px) {
    &.homePage {
      font-size: 1.33em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 19px;
    column-gap: 3px;
    margin-left: 0.875em;

    &.cta-share-button,
    &.portfolio-share-button,
    &.homePage,
    &.webAudit,
    &.mobileDev,
    &.dappAuditShare {
      font-size: 16px;
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
    width: 1.4em;
    height: 1.4em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 15px;
    height: 15px;

    &.aiService {
      width: 14.5px;
      height: 14.5px;
    }
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
    width: 15px;
    height: 15px;
  }
`;

export const FooterSection = styled.section``;

export const CalculatorAndChatWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 44%;

  display: grid;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 15px;

  z-index: 13;

  @media ${themes.primary.media.maxMobile} {
    top: 27vw;
  }

  @media ${themes.primary.media.maxMobile} {
    display: flex;
    height: auto;
    top: auto;
    bottom: 5px;
    flex-direction: row;
    gap: 0;
  }
`;

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
    font-size: 14px;
    border-bottom: 1px solid ${themes.primary.colors.comment};
    padding: 12px 10px 11px;
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
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 25px;
  align-items: flex-end;
  column-gap: 20px;
  flex-wrap: wrap;
  row-gap: 12px;

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
  padding: 0 36px;

  @media ${themes.primary.media.maxMobile} {
    padding: 0 14px;
  }
`;

export const CalendlyInfoModalTitle = styled.div`
  margin-top: 58px;
  line-height: 31.2px;
  font-size: 26px;
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 32px;
    font-size: 18px;
    line-height: 21.6px;
  }
`;

export const CalendlyInfoModalNotice = styled.div`
  display: flex;
  column-gap: 12px;
  margin-top: 20px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 18px;
    column-gap: 7px;
  }
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
    font-size: 16px;
    line-height: 25.6px;
  }
`;

export const CalendlyInfoModalNoticeButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 22px;
  margin-bottom: 20px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 20px;
    margin-bottom: 32px;
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
