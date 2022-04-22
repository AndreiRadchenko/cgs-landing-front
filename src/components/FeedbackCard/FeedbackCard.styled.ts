import styled, { css } from "styled-components";
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
  margin: 0 1.375rem 0 0;
  font-size: 1.375em;
  cursor: default;
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.8em;
  }
`;
type starsProps = { rate: number };

export const Stars = styled("div")<starsProps>`
  display: block;
  font-size: 25px;
  font-family: Times;
  line-height: 1;

  &::before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      ${themes.primary.colors.starActive}
        ${(prop) =>
          prop.rate ? css`calc(${prop.rate} / 5 * 98.5%)` : css`98.5%`},
      ${themes.primary.colors.starDisable}
        ${(prop) =>
          prop.rate ? css`calc(${prop.rate} / 5 * 98.5%)` : css`98.5%`}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  bottom: 1rem;
  left: 0.5%;
  @media ${themes.primary.media.maxLaptop} {
    left: -4%;
  }
  @media ${themes.primary.media.maxMobile} {
    left: 2%;
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
