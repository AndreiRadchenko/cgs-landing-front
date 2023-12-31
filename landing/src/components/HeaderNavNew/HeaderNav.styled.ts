import styled from "styled-components";
import themes from "../../utils/themes";

export const HeaderWrapper = styled.nav`
  padding-bottom: 56px;

  @media ${themes.primary.media.minPCFullHD} {
    padding-bottom: 70px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 156px;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    padding-bottom: 95px;
  }

  @media print {
    display: none;
  }
`;

export const HeaderNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  right: 0;
  top: -1px;
  z-index: 36;
  background-color: ${themes.primary.colors.blogBackground};
  border-bottom: 1px solid ${themes.primary.colors.headerBorder};

  @media ${themes.primary.media.maxMobile} {
    justify-content: flex-start;
    border: none;
  }

  @supports (-webkit-hyphens: none) {
    @media ${themes.primary.media.maxMobile} {
      top: -1px;
    }
  }
`;

export const NavBarWrapper = styled.div`
  padding-top: 1px;
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    background-color: ${themes.primary.colors.blogBackground};
    z-index: 36;
    padding: 57.5px 0;

    &.scrolled {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding: 32px 0;
  }
`;

export const LogoLinkWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  border-right: 1px solid ${themes.primary.colors.headerBorder};
  transition: 0.3s;
  z-index: 36;
  height: 100%;
  padding: 0 49px 0 68px;

  &:hover {
    border-right: 1.5px solid ${themes.primary.colors.primary};
    border-bottom: 7px solid ${themes.primary.colors.primary};
  }

  @media (max-width: 1440px) {
    padding: 0 36px 0 49px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0 0 0 40px;
    height: 52px;
    border: none;
    &:hover {
      border: none;
    }
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    padding-left: 20px;
    height: 30px;
  }
`;

export const ListItemNav = styled.a`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.headerLinkText};
  display: flex;
  padding: 0 68px;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${themes.primary.colors.headerBorder};
  cursor: pointer;
  transition: 300ms;
  @media ${themes.primary.media.onlyTabletPortrait} {
    font-size: 1.3em;
    padding: 0.5rem 2.5rem;
  }
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }

  @media ${themes.primary.media.minTabletPortrait} and (max-width: 830px) {
    width: 11.15vw;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 23px 68px;
    font-size: 20px;
    width: fit-content;
  }
  @media (max-width: 1440px) {
    padding: 0px 50px;
    font-size: 16px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 0px 35px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 0px 28px;
  }
  &:hover {
    transition: 0.3s;
    border-right: 1.5px solid ${themes.primary.colors.primary};
    border-bottom: 7px solid ${themes.primary.colors.primary};
  }

  &.disabled {
    cursor: default;
    opacity: 0.5;
    &:hover {
      border-right: 0;
      border-bottom: 0;
    }
  }
`;

export const NavList = styled.menu`
  margin: 0;
  display: flex;
  height: 76px;
  padding-top: 1px;
  padding-left: 0;

  @media ${themes.primary.media.maxLaptop} {
    margin-right: 0;
  }

  @media (max-width: 1440px) {
    height: 57px;
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const LinkText = styled.span`
  font-size: 20px;
  @media (max-width: 1440px) {
    font-size: 16px;
  }
`;

export const BurgerLinkText = styled.p`
  cursor: pointer;
  margin: 0;
  padding: 18px 40px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 20px;

  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 16px;
    padding: 18px 20px;
  }
`;
