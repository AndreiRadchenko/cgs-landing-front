import styled from "styled-components";

export const DesktopContainer = styled("div")`
  display: flex;
  width: 50%;
  margin: 0 auto;
  flex-direction: column;
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