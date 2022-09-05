import styled from "styled-components";
import themes from "../../utils/themes";

export const StrongContainer = styled.div`
  margin-top: 16.15em;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 8em;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4.3em 1.75em 0 -2.6em;

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    row-gap: 1.5rem;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 1.1em;
`;

export const BlockImage = styled.img`
  padding-left: 27px;
`;

export const Block = styled.div`
  display: flex;

  &:nth-child(2) {
    margin-right: 1.7%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    &:nth-child(2) {
      margin-right: 0;
    }
  }
`;

export const BlockTextContainer = styled.div`
  margin-left: 2.8em;
`;

export const BlockTitle = styled.h3`
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 1.39388px;
  margin-top: 1rem;
  font-size: ${themes.primary.font.size.secondary};

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.oneAndNine};
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }

  @media ${themes.primary.media.maxServiceMobile} {
    font-size: 1.6em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 0.875rem;
    margin-bottom: 1.5rem;
    white-space: nowrap;
    font-size: 1.125rem;
  }

  @media (max-width: 370px) {
    font-size: 0.9rem;
  }
`;

export const BlockText = styled.p`
  font-size: 1.65em;
  line-height: 160%;
  width: 84%;
  margin-bottom: 10px;

  @media ${themes.primary.media.maxTabletLandScape} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 100%;
    font-size: 1rem;
  }
`;
