import themes from "./../../utils/themes";
import styled, { keyframes, css } from "styled-components";

export const FormTitle = styled.h1`
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: ${themes.primary.font.weight.normal};
  text-align: center;
  margin-bottom: 4rem;
`;

export const FormWrapper = styled.section`
  display: flex;
  @media ${themes.primary.media.maxTablet} {
    flex-direction: column;
    align-items: center;
  }
`;

interface IFormImage {
  image?: { url: string };
}

export const FormImage = styled("div")<IFormImage>`
  background-image: ${({ image }) => (image ? css`url(${image.url})` : null)};
  width: 35.063rem;
  height: 38.188rem;
  background-repeat: space;

  @media ${themes.primary.media.maxLaptop} {
    margin-left: 4.125rem;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-left: 0;
    width: 26rem;
    height: 29rem;
    background-repeat: round;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 17rem;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 25.125rem;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 16.625rem;
    height: 20.313rem;
  }
`;

const rocket = keyframes`
  ${css`
    12% {
      transform: translateX(1rem);
    }
    25% {
      transform: translateY(-0.5rem);
    }
    37% {
      transform: translateX(-1rem);
    }
    50% {
      transform: translateY(-0.5rem);
    }
    62% {
      transform: translateX(1rem);
    }
    75% {
      transform: translateY(0.5rem);
    }
    87% {
      transform: translateX(-1rem);
    }
    100% {
      transform: translateY(0);
    }
  `}
`;

export const ImageWrapper = styled.div`
  display: flex;
`;

export const FormRocketImage = styled.div`
  display: flex;
  position: relative;
  top: 19rem;
  left: -10rem;
  width: 5.5rem;
  height: 11rem;
  background-size: 5.5rem auto;
  background-image: url("/rocketWithFlame.png");
  background-repeat: no-repeat;

  animation: ${rocket} 40s linear;
  animation-iteration-count: infinite;

  @media ${themes.primary.media.minPC} {
    left: 4rem;
  }

  @media ${themes.primary.media.minLaptop} {
    top: 15rem;
    left: 4.5rem;
    width: 10rem;
    height: 20rem;
    background-size: 9rem auto;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    top: 10.5rem;
    left: 6rem;
    width: 10rem;
    height: 20rem;
    background-size: 6rem auto;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    top: 10.5rem;
    left: 7rem;
    width: 10rem;
    height: 20rem;
    background-size: 6rem auto;
  }

  @media (min-width: 476px) and (max-width: 767px) {
    top: 10rem;
    left: 3rem;
    width: 6.5rem;
    height: 13rem;
    background-size: 6.5rem auto;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    top: 7rem;
    left: 2rem;
    width: 5.5rem;
    height: 13rem;
    background-size: 5.5rem auto;
  }
`;

export const FormContainter = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;
