import styled from "styled-components";
import themes from "../../utils/themes";

export const PaginationWrapper = styled.div`
  height: 38px;
  width: 243px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 200px;
`;

export const PaginationItem = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  alitgn-items: center;
  font-family: ${themes.primary.font.family.sourceCode};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
`;

export const PaginationItemsWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

export const SwiperButton = styled.div``;
