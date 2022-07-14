import styled from "styled-components";
import themes from "../../utils/themes";

export const HeaderNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 26;
  background-color: ${themes.primary.colors.blogBackground};
  border-top: 1px solid ${themes.primary.colors.headerBorder};
`;

export const FlexRowContainer = styled.div`
  display: flex;
`;

export const Email = styled.a`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.email};
  color: ${themes.primary.colors.primary};
`;

export const LogoLinkWrapper = styled.a`
  padding: 0.7rem 3rem;
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
`;

export const ListItemNav = styled.a`
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.headerLinkText};
  padding: 10px 3rem;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${themes.primary.colors.headerBorder};
  cursor: pointer;
  transition: 300ms;
  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 0.5rem 1.8rem;
  }
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
  &:hover {
    transition: 0.3s linear;
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

export const LinkText = styled.img`
  height: auto;
  width: 100%;
  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 20px;
  }
`;

export const BurgerLinkText = styled.p`
  cursor: pointer;
`;
