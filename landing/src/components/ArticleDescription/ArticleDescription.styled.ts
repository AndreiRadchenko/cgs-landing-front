import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  font-family: ${themes.primary.font.family.openSans};
`;

export const TitleWrapper = styled.div`
  z-index: 2;
  :not(:first-child) {
    margin-top: 50px;
  }
`;

export const SubtitleTag = styled.div`
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.quaternary};
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.darkBlue};
  margin-right: 12px;
  margin-top: 5px;
  float: left;
`;

export const Title = styled.div`
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.articleDescription};
  font-family: ${themes.primary.font.family.openSans};
  margin: 0;
  color: ${themes.primary.colors.blogDarkText};
`;

export const Description = styled.p`
  margin: 0;
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.oneAndHalf};
  font-family: ${themes.primary.font.family.openSans};
  line-height: 160%;
  color: ${themes.primary.colors.blogDarkText};
  overflow-wrap: anywhere;
  p {
    margin-top: 15px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.vistaco};
  }
`;
