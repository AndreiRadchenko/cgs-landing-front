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
  height: 85%;
  margin-top: 30px;
  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 769px) {
    height: 50%;
    margin-top: 30px;
    top: 15%;
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
  width: 100%;
  height: 100%;
  & .slick-slider {
    @media screen and (max-width: 650px) {
      margin: 0;
    }
  }
  & .slick-slide {
    display: flex;
    justify-content: center;
  }
  & .slide-container {
    display: flex;
    justify-content: center;
  }
  & .slick-slide > div > div > img {
    margin: auto;
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

export const Wrapper = styled("div")`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const AboutUsContainer = styled("div")`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-family: Mulish;
  & > h2 {
    margin: 16px 0 8px;
  }
  & .about-us__position {
    border-radius: 5px;
    color: #fff;
  }
  & > p {
    margin: 0 0 22px;
    padding: 0 10px;
  }
  & > q {
    font-weight: 300;
    line-height: 1.68;
    opacity: 0.5;
  }
  @media screen and (min-width: 1024px) {
    &:not(:last-child) {
      margin-right: 162px;
    }
    & q {
      opacity: 1;
      font-size: 19px;
      line-height: 1.57;
    }
  }
`;

export const Avatar = styled("div")`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  & > img {
    object-fit: cover;
  }
`;

export const AboutText = styled("p")`
  max-width: 344px;
  font-family: Mulish;
  font-size: 19px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
`;

export const SlideWrapper = styled("div")`
  & .slick-track {
    display: flex;
  }
  @media screen and (min-width: 1024px) {
    & .slick-slide:not(:last-child) {
      padding: 0 81px;
    }
  }
`;

export const Position = styled("p")`
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.theme.colors.buttonBgColor};
`;
