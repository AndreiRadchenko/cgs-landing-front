import styled from "styled-components";
import themes from "../../utils/themes";

export const FeedbackCardContainer = styled.div`
  width: 27em;
  font-family: ${themes.primary.font.family.roboto};
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
  margin: 0 22px 0 0;
  font-size: 22px;
  cursor: default;
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.8em;
  }
`;

export const FeedbackCardCompany = styled.a`
  display: block;
  margin: 0.7em 0 0.7em 0;
  font-size: 1.125em;
  transition: 300ms;
  cursor: pointer;
  &:hover {
    color: ${themes.primary.colors.linkBlue};
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.6em;
  }
`;

export const FeedbackButtonContainer = styled.div`
  position: relative;
  left: -1em;
  @media ${themes.primary.media.maxLaptop} {
    left: -1.5em;
  }
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

export const FeedbackCardDescription = styled.span`
  display: block;
  font-size: 1.125em;
  line-height: 175%;
  cursor: default;
  width: 90%;
  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.6em;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.8em;
    width: initial;
    max-width: 97%;
  }
`;