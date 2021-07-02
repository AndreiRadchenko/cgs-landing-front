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
  height: 36%;

  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 769px) {
    height: 32%;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    height: 30%;
    top: 10%;
    margin: 10px 0;
  }
  @media screen and (min-width: 1149px) {
    background-color: transparent;
    top: 50%;
  }
  &.slick-prev:hover,
  &.slick-prev:focus,
  &.slick-next:hover,
  &.slick-next:focus {
    background-color: #fff;
  }
`;
export const SliderPrev = styled(Arrow)`
  top: 15%;
  left: 5%;
  @media screen and (max-width: 500px) {
    left: 0;
  }
  @media screen and (min-width: 1149px) {
    background-color: transparent;
    top: 50%;
  }
  @media screen and (min-width: 1149px) {
    left: 1%;
  }
`;

export const SliderNext = styled(Arrow)`
  top: 15%;
  right: 5%;
  @media screen and (max-width: 500px) {
    right: 0;
  }
  @media screen and (min-width: 1149px) {
    right: 1%;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  & .slick-next, .slick-prev {
    z-index: 2;
  }
  & .slick-track {
    display: flex;
    justify-content: space-between;
    min-height: 388px;
    @media (min-width: 1025px) {
      padding: 0 40px;
    }
  }

  & .slick-slide {
    height: auto;

    & > div {
      height: 100%;
    }

    @media screen and (max-width: 1023px) {
      width: 100%;
    }
    @media screen and (min-width: 1024px) {
      width: calc((100% - 116px) / 3);
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

export const TestimonialContainer = styled("div")`
  height: 100%;
  padding: 10px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  & .titleWrapper {
    margin: 4px 0 5px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 100%;
  }

  & .infoWrapper {
    display: flex;

    align-items: center;
  }
  & h2 {
    margin: 0;
    font-size: 22px;
    max-width: 100%;
    word-wrap: break-word;
    white-space: normal;

    @media screen and (max-width: 415px) {
      width: min-content;
      font-size: 14px;
    }
  }

  & .testimonials__company {
    margin: 0;
    line-height: 48px;
  }

  & .testimonials__text {
    margin: 0;
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 1.67;
    flex-grow: 1;
    @media (max-width: 420px) {
      font-size: 14px;
    }
  }

  & .testimonials__position {
    margin: 0;
    margin-bottom: 22px;
    padding: 2px 8px;
    border-radius: 5px;
    color: #fff;
  }

  & .testimonials__country {
    font-size: 14px;
  }

  @media screen and (max-width: 1023.5px) {
    align-items: center;
    text-align: center;
    & .testimonials__text {
      opacity: 0.5;
      font-size: 18px;
    }
  }
`;

export const TestimonialFlag = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 24px;
  object-fit: cover;

  & img {
    object-fit: cover;
    border: 2px solid black;
    border-radius: 5px;
    margin-right: 5px;
  }
`;

export const TestimonialPosition = styled("p")`
  background-color: ${(props) => props.theme.colors.buttonBgColor};
  border-radius: 5px;
  margin: 0;
  margin-bottom: 22px;
  padding: 2px 8px;
  color: ${(props) => props.theme.colors.mainBgColor};
`;
