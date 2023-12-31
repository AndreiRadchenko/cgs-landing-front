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

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.55em;
    margin-right: 16px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.8em;
  }
`;

export const Stars = styled.div`
  height: 25px;
  @media ${themes.primary.media.maxTabletLandScape} {
    height: 18.5px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 21px;
  }
`;

export const StarImage = styled.img`
  height: 100%;
  width: 26px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 34px;
    height: 33px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 18.5px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 21px;
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

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.25em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.reviewSmallText};
    margin: 0.4em 0;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1rem;
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
  border: 2px solid ${themes.primary.colors.primary};
  letter-spacing: 0.03em;
  color: ${themes.primary.colors.secondary};
  transition: all 0.3s;

  &:hover {
    background-color: transparent;
    color: ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 8.03em;
    font-size: 0.95em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
    width: 7.8em;
  }
`;

export const FeedbackCardDescription = styled.p`
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${themes.primary.font.size.oneAndHalf};
  margin-top: 0;
  margin-bottom: 25px;

  line-height: 160%;

  font-weight: ${themes.primary.font.weight.light};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.25em;
    margin-bottom: 26px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.reviewSmallText};
    margin: 0.6em 0 0.8em 0;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1rem;
    width: initial;
    max-width: 97%;
  }
`;
