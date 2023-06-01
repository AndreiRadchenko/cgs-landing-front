import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: 10.8em;
  padding-bottom: 8.5em;
  position: relative;
  margin-bottom: 16.7em;

  &.withoutShowcase {
    margin-bottom: 12.9em;
  }

  @media ${themes.primary.media.minPC} {
    padding: 3em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    background-image: none;
    padding-bottom: 5.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 2.7em;
    margin-top: 8em;
    padding-bottom: 9.5em;

    &.withoutShowcase {
      margin-bottom: 1.82em;
    }

    ::before {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      top: -2.5%;
      left: -10%;
    }

    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: 0%;
      left: -10%;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding-bottom: 3.5em;
  }
`;

export const WhatDoWeUse = styled.div`
  display: flex;
  position: relative;

  @media ${themes.primary.media.maxTabletLandScape} {
    align-items: center;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 70px;
  }
`;

export const WhatDoWeUseContainer = styled.div`
  margin-top: 13.2em;
  margin-right: 1.1em;
  width: 50%;

  & h2 {
    margin-left: 0.1em;
  }

  @media ${themes.primary.media.minPC} {
    margin-top: 13em;
  }

  @media (max-width: 1340px) {
    width: 54%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin: 0;
    width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 2.9em;
  }
`;

export const SubText = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 0;
  line-height: 160%;
  font-size: ${themes.primary.font.size.secondary};

  & svg {
    width: 45px;
    height: 20px;
  }

  & p {
    margin-bottom: 0;
    margin-top: 26px;

    &:first-child {
      margin-top: 0;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.oneAndNine};
  }

  @media (max-width: 1340px) {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1em;
    & svg {
      transform: translateY(4px);
      width: 51px;
      height: 18px;
    }

    & p {
      margin-top: 20px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1rem;
  }
`;

export const WhoNeedAppsWrapper = styled.div`
  width: 37%;

  & p {
    margin-bottom: 0;
  }
  @media ${themes.primary.media.minPC} {
    width: 40%;
  }

  @media (max-width: 1340px) {
    width: 43%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 2.1em;
  }
`;
export const ImageWrapper = styled.div`
  @media ${themes.primary.media.maxTabletLandScape} {
    display: block;
    position: relative;
    height: 250px;

    &.whatDoWeUse {
      height: 500px;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 91vw;
    width: 100%;

    &.whatDoWeUse {
      height: 121vw;
      width: 100%;
    }
  }
`;
export const Image = styled.img`
  width: 500px;
  height: 500px;
`;
