import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 94px;
  margin-bottom: 130px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 114px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 100px;
    margin-bottom: 26px;
  }
`;

export const Title = styled.p`
  font-size: 2.1em;
  font-weight: ${themes.primary.font.weight.bold};
  font-family: ${themes.primary.font.family.openSans};
  color: ${themes.primary.colors.blogDarkText};
  margin: 0;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.67em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0 0 30px;
  }
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
    width: 100%;
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
  margin-bottom: 56px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 70px;
  }
`;
