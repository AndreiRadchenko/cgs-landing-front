import styled from "styled-components";
import themes from "../../utils/themes";

export const HeaderNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 37;
  background-color: ${themes.primary.colors.blogBackground};
  border-bottom: 1px solid ${themes.primary.colors.headerBorder};

  @media ${themes.primary.media.maxMobile} {
    justify-content: flex-start;
    border: none;
  }
`;

export const NavBarWrapper = styled.div`
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    background-color: ${themes.primary.colors.blogBackground};
    z-index: 36;

    &.scrolled {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
`;

export const LogoLinkWrapper = styled.a`
  padding: 0.7rem 3.315rem;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  border-right: 1px solid ${themes.primary.colors.headerBorder};
  transition: 0.3s;
  z-index: 36;
  @media ${themes.primary.media.onlyTabletPortrait} {
    padding: 0.7rem 2.5rem;
  }

  &:hover {
    border-right: 1.5px solid ${themes.primary.colors.primary};
    border-bottom: 7px solid ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.maxMobile} {
    height: 5.8125rem;
    border: none;
    padding: 0 0 0 1.25rem;
    &:hover {
      border: none;
    }
  }
`;

export const BurgerLinkWrapper = styled.a`
  transition: 200ms;
  width: 40%;
  margin-left: 1.5em;
  margin-right: auto;
  font-size: 2.5em;
  font-weight: ${themes.primary.font.weight.extraBold};
  margin-top: 0.8462em;
  cursor: pointer;
`;

export const ListItemNav = styled.a`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.headerLinkText};
  display: flex;
  width: 11.11vw;
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
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 13px;
  }
  @media ${themes.primary.media.minTabletPortrait} and (max-width: 830px) {
    width: 11.15vw;
  }

  @media ${themes.primary.media.minPC} and (max-width: 2560px) {
    width: 11.07vw;
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
  &:first-child {
    padding: 19px 2.9rem;
  }
`;

export const NavList = styled.menu`
  margin: 0;
  display: flex;
  height: 56px;
  padding-left: 0;
  @media ${themes.primary.media.maxLaptop} {
    margin-right: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const LinkText = styled.span``;

export const BurgerLinkText = styled.p`
  cursor: pointer;
  margin: 0;
  padding: 1.125rem 1.25rem;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1.125rem;

  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const HeaderWrapper = styled.nav`
  padding-bottom: 56px;

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 93px;
  }
`;

export const Source = styled.source``;

export const ClickAudio = styled.audio`
  display: none;
`;
