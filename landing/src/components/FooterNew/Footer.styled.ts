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
    height: 101px;
    flex-direction: column-reverse;
    background-color: ${themes.primary.colors.black};
    color: ${themes.primary.colors.secondary};

    &.mobileDissapear {
      opacity: 0;
      max-height: 65px;
    }
  }
`;

export const FlexRowContainer = styled.div`
  display: flex;
  width: 100%;
  transition: color 0;

  @media ${themes.primary.media.maxMobile} {
    padding-top: 12px;
    align-items: flex-start;
    justify-content: center;
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
  line-height: 150%;
  padding: 12px 41.5px;
  text-align: center;
`;

export const Email = styled.a`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.email};
  color: ${themes.primary.colors.primary};

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
  }

  @media (max-width: 1280px) {
    font-size: 14px;
  }

  @media (max-width: 1110px) {
    font-size: 12px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: ${themes.primary.font.size.articleViews};
    color: ${themes.primary.colors.secondary};
    margin: 0;
  }
`;

export const EmailText = styled.span`
  line-height: 188%;
  margin-left: 11px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 15px;
  }

  @media (max-width: 1280px) {
    margin-left: 9px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-left: 8.5px;
    line-height: 250%;
  }
`;

export const LogoLinkWrapper = styled.a`
  height: 56px;
  width: 213px;
  display: flex;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  border-right: 1px solid ${themes.primary.colors.headerBorder};

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
  width: 136px;

  &:hover {
    transition: 0.3s linear;
    border-right: 1.5px solid ${themes.primary.colors.primary} !important;
    border-bottom: 7px solid ${themes.primary.colors.primary} !important;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 115px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 60px;
  }

  @media ${themes.primary.media.maxMobile} {
    flex: 1;
    border: none;
    max-width: 40px;
    width: 100%;

    &:nth-child(n) {
      padding: 0;
    }

    &:hover {
      border-right: none !important;
      border-bottom: none !important;
    }
  }
`;

export const NavList = styled.nav`
  margin: 0;
  display: flex;
  height: 56px;
  padding-left: 19px;

  @media ${themes.primary.media.minPCFullHD} {
    padding-left: 25px;
  }

  @media ${themes.primary.media.maxLaptop} {
    margin-right: 0;
  }

  @media (max-width: 1280px) {
    padding-left: 10px;
    height: 49px;
  }

  @media (max-width: 1110px) {
    height: 39px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 170px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 0;
  }
`;

export const BurgerLinkText = styled.p`
  cursor: pointer;
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

  @media (max-width: 1280px) {
    width: 22px;
  }

  @media (max-width: 1110px) {
    font-size: 8.5px;
    margin-left: 6px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 20px;
  }
  @media ${themes.primary.media.maxMobile} {
    height: 22px;
    width: 31px;
  }
  > span > img {
    height: auto;
    width: auto;

    @media ${themes.primary.media.maxTabletPortrait} {
      max-width: 20px;
    }
    @media ${themes.primary.media.maxMobile} {
      max-height: 22px;
      max-width: 31px;
      filter: invert(1);
      -webkit-filter: invert(1);
    }
  }
`;

export const PrivacyPolicy = styled.a`
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  display: flex;
  align-items: center;
  color: ${themes.primary.colors.comment};
  cursor: pointer;

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

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const MiddleTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
  }
`;

export const MailsWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    column-gap: 26px;
  }
`;
