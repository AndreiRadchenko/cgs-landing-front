import styled from "styled-components";
import themes from "../../utils/themes";
import articleIntro from "../../../public/BlogDecorations/Formatting/articleIntro.svg";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
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
  font-size: 1.125rem;
  font-family: ${themes.primary.font.family.openSans};
  line-height: 160%;
  color: ${themes.primary.colors.blogDarkText};
  overflow-wrap: anywhere;
  & > p:first-child {
    margin-bottom: 83px;
  }
  & > div > figure {
    position: relative;
    margin: 0;

    & > iframe {
      position: absolute;
      height: 100%;
      top: 0;
    }
  }

  & iframe {
    border-color: transparent;
  }

  & .__se__format__range_article_intro_custom {
    position: relative;
    border: 0.6px solid rgba(0, 0, 0, 0.25);
    padding: 10px 25px 10px 45px;
    font-family: ${themes.primary.font.family.openSans};
    font-weight: ${themes.primary.font.weight.semiBold};
    font-size: 18px;
    color: ${themes.primary.colors.blogArticleText};

    &::before {
      position: absolute;
      top: 16px;
      left: 16px;
      content: "";
      width: 17px;
      height: 17px;
      background-image: url(${articleIntro.src});
      background-repeat: no-repeat;
    }
  }

  & figcaption {
    color: ${themes.primary.colors.comment};
    font-size: 18px;
    line-height: 160%;
    padding-block: 0 !important;
    background-color: transparent !important;

    & > div {
      margin-left: 0 !important;
    }
  }

  & blockquote {
    margin: 0;
    border-left: 4px solid ${themes.primary.colors.blogArticleText};
    color: ${themes.primary.colors.blogArticleText};
    padding-left: 10px;
    font-size: 1.444em;
    font-style: italic;
    font-weight: ${themes.primary.font.weight.bold};
    line-height: 160%;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 150%;
    margin-block: 100px 32px;
    font-size: 2.5rem;

    & span {
      font-family: ${themes.primary.font.family.namu};
      font-weight: ${themes.primary.font.weight.heavy};
      font-size: 2.1875rem;
    }
  }

  & > h2:first-child,
  & > h2:nth-child(2),
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: 63px;
  }

  & .__se__float-left {
    float: left;
    margin-right: 2em;
    margin-bottom: 1em;
  }

  & .__se__float-right {
    float: right;
    margin-left: 2em;
    margin-bottom: 1em;
  }

  @media ${themes.primary.media.minTablet} {
    & > p:first-child {
      margin-bottom: 50px;
    }

    & > h2:nth-child(2) {
      margin-top: 10px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    p {
      margin-top: 1.25em;
    }
    font-size: ${themes.primary.font.size.vistaco};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1rem;

    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block: 28px 20px;
      font-size: 1.375rem;

      & span {
        font-size: 1.25rem;
      }
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
  @media ${themes.primary.media.maxMobile} {
    & .se-video-container {
      width: 100% !important;
      clear: both;
    }
  }
`;
