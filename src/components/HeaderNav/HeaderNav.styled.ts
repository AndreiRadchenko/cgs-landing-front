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

  @media (max-width: 768px) {
    display: none;
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

  &:hover {
    color: ${themes.primary.colors.linkBlue};
  }
`;
