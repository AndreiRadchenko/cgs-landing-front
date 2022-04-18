import styled from "styled-components";
import themes from "../utils/themes";

export const FeedbackContainer = styled.section`
  margin-top: 3rem;
  font-family: ${themes.primary.font.family.roboto};
`;

export const FeedbackSectionTitle = styled.h1`
  font-size: 2.5em;
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.7em;
  }
`;

export const FeedbackSectionSubTitle = styled.h3`
  max-width: 23em;
  font-weight: 300;
  font-size: 1.65em;
  line-height: 125%;
  margin-top: 0.75em;
  margin-bottom: 0;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.6em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.8em;
    max-width: 23em;
  }
`;

export const FeedbackRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  min-height: 40rem;
  max-height: 49rem;
  align-items: baseline;
  & .swiper {
    display: flex;
    flex-direction: column-reverse;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    min-height: 40rem;
    max-height: 52rem;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    min-height: 40rem;
    max-height: 70rem;
  }
`;

export const StyledArrowButton = styled.button`
  position: absolute;
  width: 6em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  cursor: pointer;
  transition: 300ms;

  &:last-child {
    transform: rotate(180deg);
    right: -5%;
    top: 15%;
  }

  &:first-child {
    left: -10%;
    top: 15%;
  }

  &:hover {
    &:first-child {
      left: -11%;
    }

    &:last-child {
      right: -6%;
    }
  }
`;
