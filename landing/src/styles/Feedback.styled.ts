import styled from "styled-components";
import themes from "../utils/themes";

export const FeedbackContainer = styled.section`
  font-family: ${themes.primary.font.family.gilroy};

  @media ${themes.primary.media.maxMobile} {
    padding-top: 2em;
    margin-bottom: 3px;
  }
  @media ${themes.primary.media.minTablet} {
    padding-top: 2em;
    margin-bottom: 13px;
  }
`;

export const FeedbackSectionTitle = styled.h3`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  font-size: ${themes.primary.font.size.aboutUsSubtitle};
  margin: 0;
  text-transform: uppercase;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 2.8em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.reviewTitle};
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5rem;
    display: none;
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

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 20px;
    font-size: 1.53em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.2em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1rem;
    max-width: none;

    & br {
      display: none;
    }
    display: none;
  }
`;

export const FeedbackRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: baseline;
  margin-bottom: 120px;
  & .swiper {
    display: flex;
    flex-direction: column-reverse;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 15px;
    margin-bottom: 162px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 90px;
    margin-top: -30px;
  }
`;
