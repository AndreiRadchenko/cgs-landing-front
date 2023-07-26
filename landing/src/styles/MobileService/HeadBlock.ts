import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4.2em 0 1.6em 0;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    padding-top: 1.52em;
    padding-bottom: 0;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45.5%;
  margin-top: 6.3em;

  & > a {
    font-size: 1.54em;
    padding: 1.195em 2.805em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin-bottom: ${themes.primary.font.size.tertiary};
    margin-top: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 120%;
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.serviceTitle};
  position: relative;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tabletServiceTitle};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 3.85em;
  }

  @media (max-width: 365px) {
    font-size: 3.5em;
  }
`;

export const Description = styled.div`
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  margin: 0.9em 0 1.8215em;
  max-width: 27.5em;

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.menuElement};
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1rem;
    white-space: pre-wrap;
    margin-bottom: 28px;
    margin-top: 19px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    & br {
      display: none;
    }
  }
  & p {
    margin: 0;
  }
`;

export const Telephone = styled.img`
  margin-bottom: 0.2rem;
  margin-right: 2rem;
  width: 36.7em;
  height: 38.1em;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 38%;
    height: 33.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 108%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 2.5em;
    width: 30.6em;
    height: 31.7em;
  }
`;
