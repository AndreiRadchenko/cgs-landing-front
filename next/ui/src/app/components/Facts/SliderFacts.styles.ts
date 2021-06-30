import styled from "styled-components";

export const DesktopContainer = styled("div")`
  display: grid;
  width: 80%;
  margin: 0px auto;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 60px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SliderContainer = styled("div")`
  width: inherit;
  height: inherit;
`;

export const SlideContainer = styled("div")`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;