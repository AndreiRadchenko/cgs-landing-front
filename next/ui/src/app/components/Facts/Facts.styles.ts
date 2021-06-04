import styled from "styled-components";

const imgSize = {
  w: "35px",
  h: "35px",
};

const Arrow = styled.div`
  position: absolute;
  z-index: 100;
  background-color: #fff;
  width: ${imgSize.w};
  height: 50%;

  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 769px) {
    top: 10%;
    height: 45%;
    margin-top: 20px;
  }
  @media screen and (max-width: 500px) {
    height: 30%;
    margin-top: 10px;
    top: 15%;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
  &.slick-prev:hover,
  &.slick-prev:focus,
  &.slick-next:hover,
  &.slick-next:focus {
    background-color: #fff;
  }
`;
export const SliderPrev = styled(Arrow)`
  top: 20%;
  left: 5%;
`;

export const SliderNext = styled(Arrow)`
  top: 20%;
  right: 5%;
`;

export const SliderContainer = styled.div`
  @media (min-width: 1025px) {
    padding: 0 60px;
  }
  width: 100%;
  height: 100%;
  & .slick-track {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1024px) {
    & .slick-slide {
      margin: 0;
      width: calc((100% - 120px) / 2) !important;
    }
    & .slick-slide:nth-child(2n + 1) {
      margin-right: 120px;
    }
    & .slick-slide:nth-child(n + 3) {
      margin-top: 80px;
    }
  }

  & .slick-slide > div > div > img {
    @media screen and (max-width: 1023px) {
      width: 100%;
    }
  }

  & .slides *:focus {
    outline: 0;
    outline: none;
  }

  & .slick-next:before,
  & .slick-prev:before {
    content: none;
  }
`;

export const FactContainer = styled("div")`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  text-align: justify;

  & .titleWrapper {
    margin: 4px 0 5px;
    display: flex;
    align-items: center;
  }
  & h2 {
    margin: 0;
    margin-right: 12px;
    font-size: 22px;
  }

  & .fact__text {
    margin: 0;
    font-size: 18px;
    line-height: 1.22;
  }

  & .fact__title {
    margin: 0;
    margin-bottom: 25px;
    padding: 2px 8px;
    border-radius: 5px;
    color: #fff;
  }

  @media screen and (max-width: 1023px) {
    align-items: center;
    text-align: center;
    & .fact__text {
      opacity: 0.5;
    }
  }
`;

export const FactTitle = styled("p")`
  background: ${(props) => props.theme.colors.buttonBgColor};
  border-radius: 5px;
`;
