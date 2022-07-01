import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  font-family: ${themes.primary.font.family.openSans};
`;

export const TitleWrapper = styled.div``;

export const SubtitleTag = styled.div`
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.articleTagDescription};
  font-family: ${themes.primary.font.family.namu};
  color: #5869dd;
  margin-right: 12px;
  margin-top: 5px;
  float: left;
`;

export const Title = styled.div`
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.quaternary};
  font-family: ${themes.primary.font.family.namu};
`;

export const Description = styled.p`
  margin: 0;
  font-weight: ${themes.primary.font.weight.light};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  font-family: ${themes.primary.font.family.namu};
  line-height: 160%;
  color: ${themes.primary.colors.blogArticleText};
  p {
    margin-top: 15px;
  }
`;
