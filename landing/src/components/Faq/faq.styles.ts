import styled from "styled-components";
import themes from "../../utils/themes";

export const FaqContainer = styled.article`
  padding: 77px 22% 200px 50px;

  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  position: relative;
  height: 100%;

  @media ${themes.primary.media.maxMobile} {
    padding: 0;

    &.privacy {
      padding-bottom: 80px;
    }
  }

  ul {
    margin: 0;
    padding: 0 0 0 15px;
    li::marker {
      color: ${themes.primary.colors.blogArticleText} !important;
    }
  }
  p {
    margin: 0;
  }
  a {
    color: ${themes.primary.colors.darkBlue};
    text-decoration: none;
    u {
      text-decoration: none;
    }
  }
`;

export const BottomDecorWrap = styled.figure`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

export const BottomDecor = styled.img`
  position: absolute;
  right: 0;
  width: 240.83px;
  height: 196.83px;
  bottom: 5px;

  @media ${themes.primary.media.maxMobile} {
    width: 144.17px;
    height: 117.83px;
    bottom: 0;
  }
`;

export const PageTitle = styled.header`
  text-transform: uppercase;
  font-size: 4.45vw;
  display: flex;
  margin-bottom: 54px;

  p::first-letter {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxMobile} {
    flex-wrap: wrap;
    display: flex;

    .first {
      width: 100%;
    }

    font-size: 34px;
    margin: 13px 0 39px;
    padding-left: 20px;
    letter-spacing: -1px;
  }
`;

export const QuestionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${themes.primary.media.maxMobile} {
    border-bottom: 1px solid ${themes.primary.colors.faqBorder};
    margin-bottom: 170px;
  }
`;
