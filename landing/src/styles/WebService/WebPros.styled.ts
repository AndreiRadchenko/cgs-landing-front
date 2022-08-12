import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 14em;
  position: relative;
  background-color: ${themes.primary.colors.blogBackground};
  padding-bottom: 4.8%;
`;

export const BgImage = styled.img`
  position: absolute;
  width: 118vw;
  top: -4.5vh;
  left: -8.7vw;
`;

export const CategorySubtitle = styled.h3`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 2.835em;
  text-transform: uppercase;
  line-height: 41px;
  font-family: ${themes.primary.font.family.namu};
  margin-top: 0;
`;

export const CategoryListItem = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin-top: 1.5em;
  margin-bottom: 0;
`;
export const ContentWrapper = styled.div`
  padding-left: 9.5vw;
  padding-right: 11vw;
  display: flex;
  justify-content: space-between;
`;
