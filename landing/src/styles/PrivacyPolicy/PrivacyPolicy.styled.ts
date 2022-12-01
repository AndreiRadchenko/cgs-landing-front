import styled from "styled-components";
import themes from "../../utils/themes";

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${themes.primary.colors.darkBlue};
  font-size: 4.7em;
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    padding-inline: 20px;
    font-size: 3.27em;
  }
`;

export const IntroWrapper = styled.div`
  color: ${themes.primary.colors.blogArticleText};
  font-size: 16px;
  line-height: 160%;
  margin-block: 2em 1.75em;

  & strong {
    color: ${themes.primary.colors.primary};
  }

  & p {
    margin-bottom: 1em;
  }

  @media ${themes.primary.media.minPC} {
    font-size: 1.2em;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-inline: 20px;
    margin-block: 1.5em 1.25em;
  }
`;

export const QuestionsWrapper = styled.ol`
  padding-left: 0;
  counter-reset: section;
  list-style-type: none;
  font-size: 16px;
  line-height: 160%;
  margin: 0;

  & ol {
    padding-left: 0;
    counter-reset: section;
    list-style-type: none;

    & ol {
      padding-left: 29px;

      & ol {
        padding-left: 40px;
      }
    }
  }

  & > div:last-child {
    border-bottom: 1px solid ${themes.primary.colors.faqBorder};
  }

  & li:before {
    counter-increment: section;
    content: counters(section, ".") ". ";
  }

  @media ${themes.primary.media.minPC} {
    font-size: 1.2em;
  }
`;

export const QuesitonItem = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const QuestionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${themes.primary.colors.faqBorder};
  font-size: 20px;
  padding-inline: 17px 19px;
  height: 73px;
  transition: all 0.3s;

  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }

  &.open {
    margin-top: 0.6em;
    height: 68px;
    color: ${themes.primary.colors.secondary};
    background-color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.13em;
    height: 80px;

    &.open {
      margin-top: 0;
      height: 79px;
    }
  }
`;

export const QuestionButton = styled.span`
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.6em;
  line-height: 118.75%;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.33em;
    padding-left: 20px;
  }
`;

export const QuestionListItem = styled.li`
  line-height: 37.75px;

  @media ${themes.primary.media.maxMobile} {
    line-height: 140%;
  }
`;

export const QuestionHiddenWrapper = styled.div`
  margin-block: 0.5rem 0.75em;
  display: none;
  color: ${themes.primary.colors.blogArticleText};

  & p,
  & li {
    margin-block: 1em;
  }

  & a {
    text-decoration: underline;
  }

  & strong {
    color: ${themes.primary.colors.primary};
  }

  &.open {
    display: block;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-block: 0.125em 0.25em;
    padding-inline: 20px;
  }
`;

export const PrivacyHeader = styled.header``;