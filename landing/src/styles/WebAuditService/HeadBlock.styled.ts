import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: 4.2em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.25em;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${themes.primary.media.maxMobile} {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  padding-top: 8em;
  width: 50%;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-top: 4em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    padding-top: 0;
    margin-bottom: 6.73em;
  }
`;

export const Title = styled.div`
  margin: 0;
  font-size: 5.5em;
  line-height: 120%;

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
  margin-bottom: 1.9em;
  margin-top: 1em;
  font-size: 1.833em;
  line-height: 160%;
  max-width: 27.2em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.menuElement};
  }

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
    margin-bottom: 1.78em;
    margin-top: 1.25em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    white-space: pre-line;
    br {
      display: none;
    }
  }
`;

export const Image = styled.img`
  width: 61em;
  position: relative;

  @media ${themes.primary.media.maxLaptop} {
    width: 50%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 121%;
    right: 13.5%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 4em;
  }
`;
