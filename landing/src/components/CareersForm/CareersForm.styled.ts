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

export const FormContainter = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;
