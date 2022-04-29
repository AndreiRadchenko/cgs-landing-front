import styled from "styled-components";
import themes from "../../utils/themes";

export const HeaderNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 26;
`;

export const LogoLinkWrapper = styled.a``;

export const HeaderNavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  &:hover {
    color: ${themes.primary.colors.linkBlue};
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

export const ListItemNav = styled.span`
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.extraBold};
  font-size: ${themes.primary.font.size.linkText};
  margin-left: ${themes.primary.spacing.headerNavHorizontal};
  transition: 300ms;

  @media ${themes.primary.media.onlyTabletPortrait} {
    font-size: 1.3em;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: 1.45em;
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }

  &:hover {
    color: ${themes.primary.colors.linkBlue};
  }
`;

export const NavList = styled.menu`
  display: flex;
  margin-right: 5rem;
  @media ${themes.primary.media.maxLaptop} {
    margin-right: 0;
  }
`;

export const LinkText = styled.span`
  cursor: pointer;
`;

export const BurgerLinkText = styled.p`
  cursor: pointer;
`;
