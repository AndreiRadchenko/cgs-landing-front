import styled from "styled-components";

import { SamplePrevArrow, SampleNextArrow } from "../shared/Slider/arrows";

export const PrevArrow = styled(SamplePrevArrow)`
  z-index: 100;
`;

export const NextArrow = styled(SampleNextArrow)`
  z-index: 100;
`;

export const Container = styled("div")`
  display: flex;
  width: 100%;
  height: inherit;
  align-items: center;
`;

export const SlideContainer = styled("div")`
  margin-left: auto;
  margin-right: auto;
`;
