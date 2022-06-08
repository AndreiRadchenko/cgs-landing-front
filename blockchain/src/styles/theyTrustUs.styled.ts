import styled from "styled-components";
import themes from "../utils/themes";
import { ufoFloatAnimation } from "./animations";

export const UfoBlock = styled.div`
  height: 200px;
  position: relative;
  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 300px;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 300px;
  }
  @media ${themes.primary.media.minPC} {
    width: 90%;
  }
  @media ${themes.primary.media.maxMobile} {
    position: relative;
    left: calc(50% - 9rem);
    margin: 4rem 0 1rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 80%;
    left: 15%;
  }
`;

export const LogosGrid = styled.div`
  display: grid;
  margin-top: ${themes.primary.spacing.oneSix};
  grid-template-columns: 1fr 1fr;
  row-gap: 4em;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div img {
    cursor: pointer;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    grid-gap: 1.5rem;
  }
  @media ${themes.primary.media.minLaptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const UfoBigWrapper = styled.div`
  position: absolute;
  top: -20px;
  animation: 5s ${ufoFloatAnimation} ${({ theme }) => `${theme}s`} infinite
    ease-in-out;
  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 60%;
    left: 20px;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 60%;
    left: 0;
  }
`;

export const UfoTopEl = styled.div`
  position: absolute;
  top: -40px;
  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 50%;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 15%;
  }
`;

export const UfoMiddleEl = styled.div`
  position: absolute;
  top: 60px;
  left: 240px;
  @media ${themes.primary.media.onlyTabletLandScape} {
    left: 200px;
    top: 50px;
    width: 10%;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    left: 170px;
    top: 50px;
    width: 10%;
  }
`;

export const UfoSmallWrapper = styled.div`
  position: absolute;
  top: 130px;
  animation-delay: ${({ theme }) => `${theme}s`};
  animation: 5s ${ufoFloatAnimation} ${({ theme }) => `${theme}s`} infinite
    ease-in-out;
  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 50%;
    top: 90px;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 25%;
    top: 90px;
  }
`;

export const UfoMediumWrapper = styled.div`
  position: absolute;
  top: 110px;
  left: 130px;
  animation-delay: ${({ theme }) => `${theme}s`};
  animation: 5s ${ufoFloatAnimation} ${({ theme }) => `${theme}s`} infinite
    ease-in-out;
  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 50%;
    left: 100px;
    top: 80px;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 40%;
    left: 70px;
    top: 80px;
  }
`;

export const UfoBottomEl = styled.div`
  position: absolute;
  bottom: -30px;
  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 40%;
    bottom: 10px;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 40%;
    bottom: 30px;
  }
`;
