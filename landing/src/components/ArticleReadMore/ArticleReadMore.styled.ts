import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

export const Title = styled.p`
  font-size: ${themes.primary.font.size.articleTitle};
  font-weight: ${themes.primary.font.weight.bold};
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.blogDarkText};
`;

export const ReadMoreItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${themes.primary.colors.blogDarkText};
  font-family: ${themes.primary.font.family.namu};
  margin: 0 auto 200px;
  column-gap: 35px;
  @media ${themes.primary.media.maxMobile} {
    flex-wrap: wrap;
  }
`;
