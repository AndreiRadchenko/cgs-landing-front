import styled from "styled-components";
import themes from "../../utils/themes";

export const FaqContainer = styled.div`
  padding: 77px 22% 200px 50px;

  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  position: relative;

  @media ${themes.primary.media.maxTablet} {
    padding: 0;
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
  p {
    color: ${themes.primary.colors.blogArticleText} !important;
  }
  span {
    color: ${themes.primary.colors.blogArticleText} !important;
  }
`;

export const BottomDecorWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const BottomDecor = styled.img`
  position: absolute;
  right: 0;
  width: 240.83px;
  height: 196.83px;
  bottom: 5px;
`;

export const PageTitle = styled.div`
  text-transform: uppercase;
  font-size: 4.45vw;
  display: flex;
  margin-bottom: 54px;
  div::first-letter {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxTablet} {
    margin: 13px 0 39px;
    font-size: 3.27em;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;
export const QuestionsWrapper = styled.div`
  @media ${themes.primary.media.maxTablet} {
    padding: 0 20px;
    border-bottom: 1px solid ${themes.primary.colors.faqBorder};
    margin-bottom: 170px;
  }
`;
