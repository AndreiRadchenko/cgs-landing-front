import styled from "styled-components";
import themes from "../../utils/themes";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;

  @media ${themes.primary.media.maxMobile} {
  }
`;

export const FontSettings = styled.div`
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.primary};
`;

export const PaginationItem = styled(FontSettings)`
  width: 26px;
  height: 26px;
  font-size: 1.35em;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: ${themes.primary.colors.blogDarkText};
    border: 1px solid ${themes.primary.colors.primary};
    color: ${themes.primary.colors.secondary};
  }

  &.active {
    background-color: ${themes.primary.colors.primary};
    border: 1px solid ${themes.primary.colors.primary};
    color: ${themes.primary.colors.secondary};
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 2em;
    height: 2em;
    font-size: 0.85em;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1rem;
  }
`;

export const PaginationItemsWrapper = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  column-gap: 16px;

  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 0.7em;
  }
`;
