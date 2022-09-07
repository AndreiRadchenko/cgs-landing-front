import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 65px;
  margin-bottom: 130px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 202px;
  }
`;

export const Title = styled.p`
  font-size: ${themes.primary.font.size.secondary};
  font-weight: ${themes.primary.font.weight.bold};
  font-family: ${themes.primary.font.family.openSans};
  color: ${themes.primary.colors.blogDarkText};
`;

export const ReadMoreItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${themes.primary.colors.blogDarkText};
  font-family: ${themes.primary.font.family.openSans};
  column-gap: 35px;
  @media ${themes.primary.media.maxMobile} {
    flex-wrap: wrap;

    & a {
      color: ${themes.primary.colors.blogDarkText};
    }
  }
`;

export const Space = styled.div`
  height: 70px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
`;
