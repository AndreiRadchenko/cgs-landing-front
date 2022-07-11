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

export const Email = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.primary};
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
  &:hover {
    background-color: ${themes.primary.colors.headerBorderHover};
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    padding: 0.7rem 2.5rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 0.5rem 1.5rem;
  }
`;

export const CompanyNameText = styled.div`
  line-height: 120%;
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.quinary};
  color: ${themes.primary.colors.primary};
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
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.headerLinkText};
  padding: 0 3rem;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${themes.primary.colors.headerBorder};
  cursor: pointer;
  transition: 300ms;
  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 0.5rem 2rem;
  }
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
  &:hover {
    background-color: ${themes.primary.colors.headerBorderHover};
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
  max-width: 30px;
  height: auto;
  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 20px;
  }
`;

export const BurgerLinkText = styled.p`
  cursor: pointer;
`;
