import styled, { css } from "styled-components";
import { IIcon, ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { float, slideRight } from "../Animations.styled";

export const Container = styled.section`
  margin-top: 5.5em;
`;

export const ContentLayout = styled.div`
  margin-top: 5.4em;
  width: 95%;
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 5%;
    width: 100%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 3.5em;
  }
`;

export const WorthTitleContainer = styled.div`
  font-size: ${themes.primary.font.size.secondary};
  letter-spacing: 0.05em;
  display: flex;
  column-gap: 11px;
  align-items: center;
  font-weight: ${themes.primary.font.weight.heavy};
  -webkit-text-stroke: 0.2px black;

  @media ${themes.primary.media.maxLowScreenMobile} {
    column-gap: 0;
  }
`;

export const WorthText = styled.p`
  margin-top: 15px;
  line-height: 160%;
  margin-left: 10px;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.oneAndHalf};

  @media ${themes.primary.media.minPCFullHD} {
    & br {
      display: none;
    }
  }

  @media (max-width: 1260px) {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 5px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-bottom: 1.28em;
    max-width: 20.5em;
  }
`;

export const Icon = styled.img<IIcon>`
  display: flex;
  margin-right: 0.3em;
  animation: ${({ xOffset }) =>
    css`
      ${float(xOffset)} 3s infinite linear
    `};

  &:first-child {
    width: 29px;
  }

  &:nth-child(2) {
    width: 37px;
  }

  &:nth-child(3) {
    width: 38px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    animation: none;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-right: 0;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-right: 0.3em;
    &:first-child {
      width: 17px;
    }

    &:nth-child(2) {
      width: 21px;
    }

    &:nth-child(3) {
      width: 29px;
    }
  }
`;

export const BlockImage = styled.img`
  position: absolute;

  @media ${themes.primary.media.maxTabletLandScape} {
    display: none;
  }
`;

export const WorthBlock = styled.div<ISlide>`
  position: relative;
  &:nth-child(3) {
    img {
      top: 18%;
      left: -46%;
    }
    p {
      margin-left: 20px;
    }
  }
  &:nth-child(2) {
    margin-right: 1%;
    margin-top: 10.3%;
    img {
      top: 6%;
      left: -80%;
    }
    p {
      margin-left: 20px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &:nth-child(2) {
      img {
        left: -60%;
        top: 25%;
      }
    }
  }

  @media (max-width: 1300px) {
    &:nth-child(2) {
      img {
        left: -60%;
        top: 35%;
      }
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    &:nth-child(n) {
      p {
        margin-left: 0;
      }
    }
    &:nth-child(2) {
      margin: 0;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    opacity: 0;
    &.scrolled {
      animation: ${({ ind }) => css`
        ${slideRight} 1.5s ${ind * 120}ms forwards
      `};
    }
  }
`;
