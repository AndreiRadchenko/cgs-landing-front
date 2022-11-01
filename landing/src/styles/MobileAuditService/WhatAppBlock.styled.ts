import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import { IIcon, ISlide } from "../../types/Decoration.types";
import { float, slideRight } from "../Animations.styled";

export const Container = styled.div`
  margin-top: 14.06em;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 4em;
  }
`;

export const Title = styled.h2`
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
  }
  margin: 0;
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  max-width: 13.75em;
`;

export const ContentLayout = styled.div`
  margin-top: 3.5em;
  width: 98.4%;
  display: flex;

  @media ${themes.primary.media.maxServiceWeb} {
    justify-content: space-between;
  }

  @media ${themes.primary.media.minPCFullHD} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.minPC} {
    justify-content: space-between;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 1em;
    width: 100%;
    flex-direction: column;
    row-gap: 1.25em;
  }
`;

export const WhatAppBlock = styled.div<ISlide>`
  position: relative;
  margin-left: 5px;

  &:nth-child(3) {
    margin-left: 6%;
    img {
      top: 17%;
      left: -43%;
    }
    p {
      margin-left: 20px;
    }

    @media ${themes.primary.media.maxMobile} {
      margin: 0;

      p {
        margin: 0;
      }
    }
  }
  &:nth-child(2) {
    margin-left: 5%;
    margin-top: 12%;
    img {
      top: 16%;
      left: -65%;
    }
    p {
      margin-left: 20px;
      margin-bottom: 7px;
    }

    @media ${themes.primary.media.maxMobile} {
      margin: 0;

      p {
        margin: 0;
      }
    }
  }
  @media ${themes.primary.media.maxServiceWeb} {
    &:nth-child(3) {
      margin-left: 2%;
      img {
        top: 17%;
        left: -43%;
      }
      p {
        margin-left: 20px;
      }
    }
    &:nth-child(2) {
      margin-left: 3%;
      margin-top: 12%;
      img {
        top: 16%;
        left: -65%;
      }
      p {
        margin-left: 20px;
      }
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin: 0;
    opacity: 0;
    &.scrolled {
      animation: ${({ ind }) => css`
        ${slideRight} 1.5s ${ind * 200}ms forwards
      `};
    }

    &:nth-child(n) {
      margin: 0;

      p {
        margin-left: 0;
      }
    }
  }
`;

export const WhatAppTitleContainer = styled.div`
  font-size: 1.5em;
  letter-spacing: 0.05em;
  display: flex;
  column-gap: 11px;
  align-items: center;
  -webkit-text-stroke: 0.2px black;

  @media (max-width: 1400px) {
    font-size: 1.7em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
    list-style: 160%;
    column-gap: 5px;
    width: 16em;
  }
`;

export const BlockImage = styled.img`
  position: absolute;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const Icon = styled.img<IIcon>`
  display: flex;
  margin-right: 0.3em;
  animation: ${({ xOffset }) =>
    css`
      ${float(xOffset)} 3s infinite linear
    `};

  @media ${themes.primary.media.maxTabletLandScape} {
    animation: none;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 1.6em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 1em;
  }
`;

export const WhatAppText = styled.p`
  margin-top: 1.28em;
  line-height: 160%;
  margin-left: 10px;
  font-size: 1.125em;

  @media ${themes.primary.media.maxServiceMobile} {
    br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 1.2em;
  }
  @media ${themes.primary.media.minPC} {
    font-size: 1.15em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 0;

    & br {
      display: none;
    }
  }
`;
