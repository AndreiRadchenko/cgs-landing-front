import styled from "styled-components";
import themes from "../../utils/themes";

export const FeedbackCardContainer = styled.div`
  width: 27em;
  height: 600px;
  font-family: ${themes.primary.font.family.roboto};

  display: flex;
  flex-direction: column;
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
`;

export const FeedbackCardPosition = styled.span`
  display: inline-block;
  font-size: 1.125em;
  padding: 0.2em 0.6em;
  background-color: ${themes.primary.colors.septenary};
  border-radius: 5px;
  margin-bottom: 1em;
  cursor: default;
`;

export const FeedbackCardDescription = styled.span`
  display: block;
  font-size: 1.125em;
  line-height: 175%;
  cursor: default;

  width: 90%;
`;