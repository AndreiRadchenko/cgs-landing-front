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
  margin-top: 2em;

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
  }
`;

export const QuestionsWrapper = styled.ol`
  padding-left: 0;
  counter-reset: section;
  list-style-type: none;
  font-size: 16px;
  line-height: 160%;

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

  & li:before {
    counter-increment: section;
    content: counters(section, ".") ". ";
  }

  @media ${themes.primary.media.minPC} {
    font-size: 1.2em;
  }
`;

export const QuesitonItem = styled.div`
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
  }
`;

export const QuestionListItem = styled.li`
  line-height: 37.75px;
`;

export const QuestionHiddenWrapper = styled.div`
  margin-top: 0.5rem;
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
    margin-top: 0.125em;
    padding-inline: 20px;
  }
`;
