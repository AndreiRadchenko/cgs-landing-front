import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 63px;
  font-family: ${themes.primary.font.family.openSans};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
  :not(:first-child) {
    margin-top: 50px;
  }
`;

export const SubtitleTag = styled.div`
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.quaternary};
  font-family: ${themes.primary.font.family.namu};
  color: #5869dd;
  margin-right: 24px;
  float: left;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.blogArticleTitle};
  }
`;

export const Title = styled.div`
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.articleDescription};
  font-family: ${themes.primary.font.family.openSans};
  margin: 0;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.quaternary};
  }
`;

export const Description = styled.p`
  margin: 0;
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.openSans};
  line-height: 160%;
  color: ${themes.primary.colors.blogArticleText};
  p {
    margin-top: 15px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.vistaco};
  }
`;
