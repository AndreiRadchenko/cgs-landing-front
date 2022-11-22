import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  font-family: ${themes.primary.font.family.openSans};

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
  }
`;

export const TitleWrapper = styled.div`
  z-index: 2;
  :not(:first-child) {
    margin-top: 50px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 3em;
    margin-bottom: 1.66em;

    :not(:first-child) {
      margin-top: 3em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    display: flex;
    margin-top: 34px;
    margin-bottom: 20px;

    :not(:first-child) {
      margin-top: 34px;
    }
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

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25rem;
  }
`;

export const Title = styled.div`
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.articleDescription};
  font-family: ${themes.primary.font.family.openSans};
  margin: 0;
  color: ${themes.primary.colors.blogDarkText};

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.375rem;
  }
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
    p {
      margin-top: 1.25em;
    }
    font-size: ${themes.primary.font.size.vistaco};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1rem;

    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block: 28px 20px;
      font-size: 1.25rem;
    }

    p {
      margin-block: 0 0.875rem;
      strong {
        display: inline-block;
        margin-top: 12px;
        font-size: 1.25rem;
      }
    }
    & > p:first-child strong {
      margin-top: 8px;
    }

    & > h2:first-child,
    h3:first-child,
    h4:first-child,
    h5:first-child,
    h6:first-child {
      margin-top: 8px;
    }
  }
`;
