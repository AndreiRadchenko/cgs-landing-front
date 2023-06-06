import styled from "styled-components";
import themes from "../../../../../utils/themes";

interface ISliderProps {
  isReverse: boolean;
}

export const SliderWrapper = styled("div")<ISliderProps>`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 335px;
  height: 100%;

  transform: ${({ isReverse }) => (isReverse ? "rotate(180deg)" : "none")};

  @media ${themes.primary.media.maxServiceWeb} {
    margin-left: -61px;
    width: 130%;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
  }

  .swiper-wrapper {
    transition-timing-function: linear;
  }

  .swiper {
    width: 100%;
    height: 383px;
    overflow: visible;
  }

  .swiper-slide {
    width: 335px;
    transform: ${({ isReverse }) => (isReverse ? "rotate(180deg)" : "none")};
  }
`;
