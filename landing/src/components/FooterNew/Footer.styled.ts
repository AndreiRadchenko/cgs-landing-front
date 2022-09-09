import styled from "styled-components";
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
    height: 101px;
    flex-direction: column-reverse;
  }
`;

export const FlexRowContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;

  @media ${themes.primary.media.maxMobile} {
    padding-top: 10px;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const Email = styled.a`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.email};
  color: ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxMobile} {
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: ${themes.primary.font.size.articleViews};
    margin: 0;
  }
`;

export const LogoLinkWrapper = styled.a`
  padding: 12px 3.315rem 13px;
  height: 56px;
  display: flex;
  column-gap: 8px;
  align-items: center;
  max-width: 300px;
  border-right: 1px solid ${themes.primary.colors.headerBorder};
  @media ${themes.primary.media.onlyTabletPortrait} {
    padding: 0.7rem 2.5rem;
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

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 25%;
  }
`;

export const NavList = styled.menu`
  margin: 0;
  display: flex;
  height: 56px;
  @media ${themes.primary.media.maxLaptop} {
    margin-right: 0;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 170px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 44%;
  }
`;

export const LinkText = styled.img`
  height: auto;
  width: auto;
  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 20px;
  }
  @media ${themes.primary.media.maxMobile} {
    max-height: 22px;
    max-width: 31px;
  }
`;

export const BurgerLinkText = styled.p`
  cursor: pointer;
`;
