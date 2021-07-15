import styled from "styled-components";

export const DesktopContainer = styled("div")`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  -webkit-column-gap: 80px;
  column-gap: 80px;
  row-gap: 60px;
`;

export const MobileContainer = styled("div")`
  display: flex;
  justify-content: center;
  width: inherit;
  height: inherit;
`;

export const Container = styled("div")`
  width: inherit;
  height: inherit;

  @media screen and (min-width: 1024px) {
    & > ${MobileContainer} {
      display: none;
    }
  }

  @media screen and (max-width: 1023.5px) {
    & > ${DesktopContainer} {
      display: none;
    }
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