import styled from "styled-components";
import themes from "../../utils/themes";

export const FaqContainer = styled.div`
  padding: 77px 22% 200px 50px;
  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  position: relative;
  min-height: 95vh;
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
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${themes.primary.colors.faqBorder};
`;
