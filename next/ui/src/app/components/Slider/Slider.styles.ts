import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  width: 90%;
  height: inherit;
  align-items: center;

  & .swiper-wrapper {
    display: flex;
  }

  & .swiper-slide {
    height: auto;
  }
`;

export const SlideContainer = styled("div")`
  height: 100%;
  padding-left: 5px;
  padding-right: 5px;
`;
