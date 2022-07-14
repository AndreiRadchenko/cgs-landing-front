import styled from "styled-components";
import themes from "../../utils/themes";

export const HeaderNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 26;
  background-color: ${themes.primary.colors.blogBackground};
  border-bottom: 1px solid ${themes.primary.colors.headerBorder};
`;

export const LogoLinkWrapper = styled.a`
  padding: 0.7rem 3rem;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  border-right: 1px solid ${themes.primary.colors.headerBorder};
  @media ${themes.primary.media.onlyTabletPortrait} {
    padding: 0.7rem 2.5rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 0.5rem 1.5rem;
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

export const CompanyNameText = styled.div`
  line-height: 120%;
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.quinary};
  color: ${themes.primary.colors.primary};
`;

export const ListItemNav = styled.a`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.headerLinkText};
  display: flex;
  width: 11.03vw;
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
    font-size: 14px;
  }
  &:hover {
    transition: 0.3s;
    border-right: 1.5px solid ${themes.primary.colors.primary} !important;
    border-bottom: 7px solid ${themes.primary.colors.primary} !important;
  }
`;

export const NavList = styled.menu`
  margin: 0;
  display: flex;
  height: 56px;
  @media ${themes.primary.media.maxLaptop} {
    margin-right: 0;
  }
`;

export const LinkText = styled.span``;

export const BurgerLinkText = styled.p`
  cursor: pointer;
`;

export const DropdownElement = styled.div`
  button,
  &:first-child {
    border: none;
    height: 56px;
    width: 11.02vw;
  }
  div {
    &:nth-child(2) {
      min-width: 419px;
    }
  }

  button {
    font-family: ${themes.primary.font.family.gilroy};
    font-weight: ${themes.primary.font.weight.medium};
    font-size: ${themes.primary.font.size.headerLinkText};

    border-left: 1px solid grey;

    &:hover {
      transition: 0.3s;
      border-right: 1.5px solid ${themes.primary.colors.primary} !important;
      border-bottom: 7px solid ${themes.primary.colors.primary} !important;
    }
    @media ${themes.primary.media.maxTabletLandScape} {
      font-size: 14px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;
