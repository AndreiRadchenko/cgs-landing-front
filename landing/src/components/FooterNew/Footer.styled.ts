import styled from "styled-components";
import { emailShake } from "../../styles/Animations.styled";
import themes from "../../utils/themes";

export const HeaderNavContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 5;
  background-color: ${themes.primary.colors.blogBackground};
  border-top: 1px solid ${themes.primary.colors.headerBorder};

  @media ${themes.primary.media.maxMobile} {
    overflow: hidden;
    justify-content: flex-end;
    height: 183px;
    flex-direction: column-reverse;
    background-color: ${themes.primary.colors.black};
    color: ${themes.primary.colors.secondary};
    border-top: none;

    &.mobileDissapear {
      opacity: 0;
      max-height: 65px;
    }
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    height: 103px;
  }
`;

export const FlexRowContainer = styled.div`
  display: flex;
  width: 100%;
  transition: color 0;

  @media ${themes.primary.media.maxMobile} {
    padding-top: 32px;
    align-items: flex-start;
    justify-content: center;
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    padding-top: 18px;
  }
`;

export const ExplanationEmailFieldTooltip = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: 55px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 220px;
  height: 65px;
  z-index: 10;
  background: ${themes.primary.colors.primary};
  border-radius: 6px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${themes.primary.colors.blogBackground};
  font-size: 12px;
  line-height: 18px;
  padding: 12px 41.5px;
  text-align: center;

  @media ${themes.primary.media.maxTabletLandScape} {
    bottom: 45px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
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

export const Email = styled.a`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  font-family: ${themes.primary.font.family.namu};
  font-size: 12px;
  color: ${themes.primary.colors.primary};

  & svg {
    width: 22px;
    height: 16px;
  }

  & span {
    transition: color 0.1s;
  }
  & path {
    transition: stroke 0.1s;
  }

  &:hover {
    & span {
      color: ${themes.primary.colors.darkBlue};
    }
    & path {
      stroke: ${themes.primary.colors.darkBlue};
    }
  }

  &:hover ${ExplanationEmailFieldTooltip} {
    visibility: visible;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.25em;
    margin-left: 24px;

    & svg {
      width: 27px;
      height: 20px;
    }
  }

  @media (max-width: 1280px) {
    font-size: 14px;
  }

  @media (max-width: 1110px) {
    font-size: 12px;
  }

  @media (max-width: 870px) {
    margin: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 20px;
    color: ${themes.primary.colors.secondary};
    margin: 0;

    & svg {
      width: 37px;
      height: 25px;
    }
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 12px;

    & svg {
      width: 21px;
      height: 14px;
    }
  }
`;

export const EmailText = styled.span`
  line-height: 188%;
  margin-left: 9px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 24px;
    font-size: 16px;
  }

  @media (max-width: 1280px) {
    margin-left: 9px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-left: 8.5px;
    line-height: 250%;
  }
`;

export const LogoLinkWrapper = styled.a`
  height: 56px;
  width: 281px;
  display: flex;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  border-right: 1px solid ${themes.primary.colors.headerBorder};

  @media ${themes.primary.media.minPCFullHD} {
    height: 73px;
    width: 384px;

    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 1280px) {
    height: 47px;
    width: 177px;
  }

  @media (max-width: 1110px) {
    height: 39px;
    width: 147px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 0.5rem 1.5rem;
  }
  &:hover {
    transition: 0.3s;
    border-right: 1.5px solid ${themes.primary.colors.primary} !important;
    border-bottom: 7px solid ${themes.primary.colors.primary} !important;
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const ListItemNav = styled.a`
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.headerLinkText};
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${themes.primary.colors.headerBorder};
  cursor: pointer;
  transition: 300ms;
  width: 109px;

  &:hover {
    transition: 0.3s linear;
    border-right: 1.5px solid ${themes.primary.colors.primary} !important;
    border-bottom: 7px solid ${themes.primary.colors.primary} !important;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 135px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 60px;
  }
  @media (max-width: 870px) {
    width: 55px;
  }
  @media ${themes.primary.media.maxMobile} {
    border: none;
    height: 40px;
    width: auto;
    transform: scale(1.8);

    &:nth-child(n) {
      padding: 0;
    }

    &:hover {
      border-right: none !important;
      border-bottom: none !important;
    }
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    height: 22px;
    transform: scale(1);
  }
`;

export const NavList = styled.nav`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 769px) {
    margin-top: 35px;
    gap: 43px;
    & > a {
      transform: scale(1) !important;
      height: 40px;
      & > div {
        width: 100%;
        height: 100%;
      }
    }
    & > a:nth-child(1) {
      width: 48px;
    }
    & > a:nth-child(2) {
      width: 43px;
    }
    & > a:nth-child(3) {
      width: 34px;
    }
    & > a:nth-child(4) {
      width: 40px;
    }
    & > a:nth-child(5) {
      width: 56.4px;
    }
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    margin-top: 20px;
    gap: 24px;
    & > a {
      height: 22px;
    }
    & > a:nth-child(1) {
      width: 25.5px;
    }
    & > a:nth-child(2) {
      width: 24px;
    }
    & > a:nth-child(3) {
      width: 19px;
    }
    & > a:nth-child(4) {
      width: 22px;
    }
    & > a:nth-child(5) {
      width: 31px;
    }
  }

  @media (min-width: 769px) {
    margin: 0;
    gap: 0;
  }
`;

export const MailIcon = styled.svg`
  width: 27px;
  height: 19px;
  margin-top: 3px;
  fill: none;
  stroke-width: 2;

  &.scrolled {
    animation: ${emailShake} 0.8s linear;
  }

  & path {
    stroke: ${themes.primary.colors.primary};
    color: blue;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 37px;
    height: 29px;
  }

  @media (max-width: 1280px) {
    width: 20px;
    height: 14px;
  }

  @media (max-width: 1110px) {
    width: 17px;
    height: 11px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 18.33px;
    height: 12.47px;
    & path {
      stroke: ${themes.primary.colors.secondary};
      color: blue;
    }
  }
`;

export const FooterImageWrapper = styled.div`
  position: relative;
  width: 45px;
  height: 32px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 1280px) {
    width: 22px;
  }

  @media (max-width: 1110px) {
    font-size: 8.5px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 20px;
  }
  @media ${themes.primary.media.maxMobile} {
    height: 22px;
    width: 31px;
    filter: invert(1);
    -webkit-filter: invert(1);
  }
`;

export const PrivacyPolicy = styled.a`
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  display: flex;
  align-items: center;
  color: ${themes.primary.colors.comment};
  cursor: pointer;
  margin-right: 20px;

  &:hover,
  &:active {
    color: ${themes.primary.colors.darkBlue};
    text-decoration: underline;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.25em;
  }

  @media (max-width: 1280px) {
    margin-left: 15px;
    font-size: 14px;
  }

  @media (max-width: 1110px) {
    font-size: 12px;
  }

  @media (max-width: 870px) {
    width: 43px;
    margin: 0;
  }
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const MiddleTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 870px) {
    justify-content: space-around;
  }
  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
  }
`;

export const MailsWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    column-gap: 56px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    column-gap: 22px;
  }
  @media (max-width: 870px) {
    gap: 10px;
  }
  @media ${themes.primary.media.maxMobile} {
    gap: 58px;
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    gap: 24px;
  }
`;
