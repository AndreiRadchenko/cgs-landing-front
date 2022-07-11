import styled from "styled-components";
import themes from "../../utils/themes";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  margin-top: 90px;
`;

export const FontSettings = styled.div`
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.primary};
`;

export const PaginationItem = styled(FontSettings)`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    background-color: ${themes.primary.colors.blogDarkText};
    border: 1px solid ${themes.primary.colors.primary};
    color: ${themes.primary.colors.secondary};
  }
`;

export const CurrentPaginationItem = styled(PaginationItem)`
  background-color: ${themes.primary.colors.blogDarkText};
  border: 1px solid ${themes.primary.colors.primary};
  color: ${themes.primary.colors.secondary};
`;

export const Dots = styled.span`
  font-family: ${themes.primary.font.family.sourceCode};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.tertiary};
`;

export const PaginationItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
