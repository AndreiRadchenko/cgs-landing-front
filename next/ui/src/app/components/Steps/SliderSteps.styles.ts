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
  flex-direction: column;
  width: 57%;
  margin: 0 auto;

  @media screen and (min-width: 700px) and (max-width: 800px) {
    width: 63%;
  }

  @media screen and (min-width: 600px) and (max-width: 699px) {
    width: 67%;
  }

  @media screen and (min-width: 500px) and (max-width: 599px) {
    width: 70%;
  }

  @media screen and (min-width: 400px) and (max-width: 499px) {
    width: 75%;
  }

  @media screen and (min-width: 320px) and (max-width: 399px) {
    width: 85%;
  }
  /* width: inherit;
  height: inherit; */
  /* display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  -webkit-column-gap: 80px;
  column-gap: 80px;
  row-gap: 60px; */
  & > h2 {
    margin-right: 0px;
  }
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