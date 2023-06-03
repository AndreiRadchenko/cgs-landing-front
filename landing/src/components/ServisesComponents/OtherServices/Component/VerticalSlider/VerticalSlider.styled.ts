import styled from "styled-components";
import themes from "../../../../../utils/themes";

export const SliderWrapper = styled("div")`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 335px;
  height: 100%;

  @media ${themes.primary.media.maxServiceWeb} {
    width: 100%;
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
  }
`;
