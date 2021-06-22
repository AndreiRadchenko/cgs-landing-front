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
  margin-top: 20px;

  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 769px) {
    height: 40%;
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
  top: 10%;
  left: 4%;
`;

export const SliderNext = styled(Arrow)`
  top: 10%;
  right: 4%;
`;

export const SliderContainer = styled.div`
  width: 100%;

  & .slick-track {
    display: flex;
    flex-wrap: wrap;
  }

  & .slick-slide {
    display: flex;
    justify-content: center;
    padding: 6px 0;

    &:not(:last-child) {
      margin-bottom: 48px;
    }

    @media screen and (max-width: 350px) {
      width: 100%;
    }
    @media screen and (min-width: 1024px) {
      width: 100% !important;
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

  & .slick-next {
    @media (max-width: 420px) {
      right: 20px;
    }
  }

  & .slick-prev {
    @media (max-width: 420px) {
      left: 20px !important;
    }
  }
`;

export const FeaturedContainer = styled("div")`
  max-width: 800px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  text-align: left;

  @media screen and (min-width: 1024px) {
    .slick-slide:nth-child(2n) & {
      flex-direction: row-reverse;
    }
    .slick-slide:nth-child(2n) & p {
      text-align: right;
    }
  }

  @media screen and (max-width: 1023.5px) {
    align-items: center;
    text-align: left;
    flex-direction: column-reverse;
    padding: 0 35px;
  }
`;

export const TextContainer = styled.div`
  & h2 {
    text-align: center;
    margin: 0 0 19px 0;
  }
  & .featured__description {
    margin: 0;
    line-height: 1.67;
    opacity: 0.5;
    text-align: justify;
  }
  @media screen and (min-width: 1024px) {
    min-width: 410px;
    .slick-slide:nth-child(2n + 1) & {
      margin-right: 73px;
    }
    .slick-slide:nth-child(2n) & {
      margin-left: 73px;
    }
    & .featured__description {
      line-height: 1.22;
      opacity: 1;
    }
    & h2 {
      margin: 0 0 39px 0;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: ${(props) => props.theme.colors.buttonBgColor};
  & img {
    margin-bottom: 19px;
  }
  & .featured__name {
    margin: 0;
    position: absolute;
    bottom: 19px;
  }

  @media screen and (max-width: 1023.5px) {
    width: 144px;
    height: 155px;
    margin-bottom: 31.5px;
    & img {
      margin-bottom: 15px;
      width: 60%;
    }
    & .featured__name {
      bottom: 15px;
    }
  }
  @media screen and (min-width: 1024px) {
    min-width: 180px;
  }
`;
