import styled from "styled-components";

import {
  NextArrowContainer,
  PrevArrowContainer,
} from "../Slider/Arrows.styles";

import {
  Container as SliderContainer,
} from "../Slider/Slider.styles";

import { TechnoContainer } from "./technologies.styles";

export const Container = styled("div")`
  display: flex;
  width: 90%;
  justify-content: center;

  @media screen and (min-width: 1024px) {

    & ${SliderContainer} {
      width: auto;
    }

    & ${NextArrowContainer}, & ${PrevArrowContainer} {
      display: none;
    }

    & .swiper-container {
      overflow: visible;
    }

    & .swiper-wrapper {
      display: grid;
      transform: none !important;
      grid-template-columns: 1fr 1fr;
      row-gap: 30px;
      column-gap: 80px;
    }

    & .swiper-slide {
      width: auto !important;
    }

    & .swiper-slide-duplicate {
      display: none;
    }

    & .swiper-slide[data-swiper-slide-index="0"] ${TechnoContainer},
    & .swiper-slide[data-swiper-slide-index="1"] ${TechnoContainer} {
      flex-direction: row-reverse;
    }
  }
`;
