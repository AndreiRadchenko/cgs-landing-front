import styled from "styled-components";
import themes from "../../utils/themes";

export const PaginationWrapper = styled.div`
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  margin-top: 70px;
  margin-bottom: 110px;
`;

export const PaginationItem = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-family: ${themes.primary.font.family.sourceCode};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

export const CurrentPaginationItem = styled(PaginationItem)`
  background-color: black;
  color: white;
`;

export const Dots = styled.span`
  font-family: ${themes.primary.font.family.sourceCode};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
`;

export const PaginationItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SwiperButton = styled.div`
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
`;

export const ArrowContainer = styled.div`
  display: flex;
  column-gap: 14px;
`;
