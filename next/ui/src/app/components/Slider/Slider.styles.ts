import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  width: 90%;
  height: inherit;
  align-items: center;

  & .swiper-wrapper {
    display: flex;
    transform-style: preserve-3d;
  }

  & .swiper-slide {
    height: auto;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
  }
`;

export const SlideContainer = styled("div")`
  height: 100%;
  padding-left: 5px;
  padding-right: 5px;
`;
