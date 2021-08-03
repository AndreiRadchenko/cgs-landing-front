import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  & .swiper-slide {
    height: auto;
  }
`;

export const SlideContainer = styled("div")`
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;
