import styled from "styled-components";
import themes from "../../utils/themes";
import Link from "next/link";

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
`;

export const BurgerLinkWrapper = styled.a`
  transition: 200ms;
  width: 40%;
  margin-left: 1.5em;
  margin-right: auto;
  font-size: 2.5em;
  font-weight: 700;
  margin-top: 0.8462em;
  cursor: pointer;

  &:hover {
    color: ${themes.primary.colors.linkBlue};
  }
`;

export const ListItemNav = styled.span`
  font-family: ${themes.primary.font.family.roboto};
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.linkText};
  margin-left: ${themes.primary.spacing.headerNavHorizontal};
  transition: 300ms;

  @media ${themes.primary.media.onlyTabletPortrait} {
    font-size: 1.3em;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: 1.45em;
  }

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    color: ${themes.primary.colors.linkBlue};
  }
`;

export const NavList = styled.menu`
  display: flex;
`;
