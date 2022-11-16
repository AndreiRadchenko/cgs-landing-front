import styled from "styled-components";
import { emailShake } from "../../styles/Animations.styled";
import themes from "../../utils/themes";

export const HeaderNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  z-index: 5;
  background-color: ${themes.primary.colors.blogBackground};
  border-top: 1px solid ${themes.primary.colors.headerBorder};

  @media ${themes.primary.media.maxMobile} {
    justify-content: flex-end;
    height: 101px;
    flex-direction: column-reverse;
    background-color: ${themes.primary.colors.black};
    color: ${themes.primary.colors.secondary};
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

export const Email = styled.a`
  display: flex;
  align-items: center;
  margin-left: 17px;
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
  max-width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${themes.primary.colors.headerBorder};
  cursor: pointer;
  transition: 300ms;

  &:hover {
    transition: 0.3s linear;
    border-right: 1.5px solid ${themes.primary.colors.primary} !important;
    border-bottom: 7px solid ${themes.primary.colors.primary} !important;
  }

  @media ${themes.primary.media.maxMobile} {
    flex: 1;
    border: none;
    max-width: 40px;
    width: 100%;

    &:nth-child(n) {
      padding: 0;
    }
  }

  &:hover {
    transition: 0.3s linear;
    border-right: 1.5px solid ${themes.primary.colors.primary} !important;
    border-bottom: 7px solid ${themes.primary.colors.primary} !important;
  }

  &:nth-child(1) {
    width: 157px;
  }
  &:nth-child(2) {
    width: 163px;
  }
  &:nth-child(3) {
    width: 180px;
  }
  &:nth-child(4) {
    width: 136px;
  }

  @media (max-width: 1280px) {
    &:nth-child(1) {
      width: 130px;
    }
    &:nth-child(2) {
      width: 135px;
    }
    &:nth-child(3) {
      width: 150px;
    }
    &:nth-child(4) {
      width: 113px;
    }
  }

  @media (max-width: 1110px) {
    &:nth-child(1) {
      width: 109px;
    }
    &:nth-child(2) {
      width: 113px;
    }
    &:nth-child(3) {
      width: 125px;
    }
    &:nth-child(4) {
      width: 94px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 25%;
  }

  @media ${themes.primary.media.maxMobile} {
    &:hover {
      border-right: none !important;
      border-bottom: none !important;
    }
  }
`;

export const NavList = styled.menu`
  margin: 0;
  display: flex;
  height: 56px;
  padding-left: 19px;

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

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 44%;
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
