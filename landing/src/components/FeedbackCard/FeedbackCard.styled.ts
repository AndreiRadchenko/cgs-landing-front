import styled from "styled-components";
import themes from "../../utils/themes";

export const FeedbackCardContainer = styled.div`
  width: 95%;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxMobile} {
    width: initial;
  }
`;

export const FeedBackContentWrapper = styled.div``;

export const FeedbackCardWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FeedbackCardName = styled.h2`
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 0 0.8rem 0 0;
  line-height: 168%;
  font-size: ${themes.primary.font.size.feedbackName};
  cursor: default;
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.8em;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }
`;

export const Stars = styled.div`
  height: 25px;
  @media ${themes.primary.media.maxTabletLandScape} {
    height: 18.5px;
  }
`;

export const StarImage = styled.img`
  height: 100%;
  width: 26px;
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 18.5px;
  }
`;

export const FeedbackCardCompany = styled.a`
  font-weight: ${themes.primary.font.weight.heavy};
  display: block;
  margin: 0.4em 0;
  font-size: ${themes.primary.font.size.oneAndHalf};
  transition: 300ms;
  color: ${themes.primary.colors.headerBorder};
  cursor: pointer;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.reviewSmallText};
    margin: 0.4em 0;
  }
`;

export const FeedbackButton = styled.a`
  cursor: pointer;
  width: 8.5em;
  height: 2.2em;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${themes.primary.font.size.vistaco};
  background: ${themes.primary.colors.primary};
  border: 1px solid ${themes.primary.colors.primary};
  letter-spacing: 0.03em;
  color: ${themes.primary.colors.secondary};
`;

export const FeedbackCardPosition = styled.span`
  display: inline-block;
  font-size: 1.125em;
  padding: 0.2em 0.6em;
  background-color: ${themes.primary.colors.septenary};
  border-radius: 5px;
  margin-bottom: 1em;
  cursor: default;
  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.6em;
  }
`;

export const FeedbackCardDescription = styled.p`
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${themes.primary.font.size.oneAndHalf};
  cursor: default;
  margin-top: 0;

  line-height: 160%;

  font-weight: ${themes.primary.font.weight.light};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.reviewSmallText};
    margin: 0.6em 0 0.8em 0;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.8em;
    width: initial;
    max-width: 97%;
  }
`;
