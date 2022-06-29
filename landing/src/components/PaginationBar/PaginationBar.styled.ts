import styled from "styled-components";
import themes from "../../utils/themes";

export const PaginationWrapper = styled.div`
  height: 38px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  padding: 15px;
  margin: 90px auto 200px auto;
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
  //width: 100px;
  display: flex;
  justify-content: space-between;
`;

export const SwiperButton = styled.div`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
`;
