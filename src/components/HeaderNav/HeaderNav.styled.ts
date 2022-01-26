import styled from "styled-components";
import themes from "../../utils/themes";
import Link from "next/link";

export const HeaderNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoLinkWrapper = styled(Link)``;

export const HeaderNavLinkWrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  z-index: 2;
`;

export const ListItemNav = styled.span`
  font-family: ${themes.primary.font.family.roboto};
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.linkText};
  margin-left: ${themes.primary.spacing.headerNavHorizontal};
  transition: 300ms;

  &:hover {
    color: ${themes.primary.colors.linkBlue};
  }
`;
