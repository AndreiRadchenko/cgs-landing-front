import styled from "styled-components";
import themes from "../utils/themes";

export const FeedbackContainer = styled.section`
  font-family: ${themes.primary.font.family.gilroy};
`;

export const FeedbackSectionTitle = styled.h3`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  font-size: ${themes.primary.font.size.aboutUsSubtitle};
  margin: 0;
  text-transform: uppercase;
  @media ${themes.primary.media.maxMobile} {
    font-size: 2.7em;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.reviewTitle};
  }
`;

export const FeedbackSectionSubTitle = styled.h3`
  max-width: 25em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1.8em;
  line-height: 160%;
  opacity: 0.7;
  margin-top: 0.75em;
  margin-bottom: 0;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.2em;
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
  align-items: baseline;
  margin-bottom: 180px;
  & .swiper {
    display: flex;
    flex-direction: column-reverse;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 190px;
  }
`;
