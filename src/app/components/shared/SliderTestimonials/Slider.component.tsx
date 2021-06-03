import React from "react";
import * as Styled from "./slider.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "../../../img/";
import { onChangeSlideEA } from "../../../../services/event";

function SampleNextArrow(props) {
  const { className, onClick } = props;

  return (
    <Styled.SliderNext className={className} onClick={onClick}>
      <img src={slides.RightVector} alt="prevVector" />
    </Styled.SliderNext>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Styled.SliderPrev className={className} onClick={onClick}>
      <img src={slides.LeftVector} alt="prevVector" />
    </Styled.SliderPrev>
  );
}

const SliderWorks: React.FC<{ children: React.ReactNodeArray }> = ({
  children,
}) => {
  let settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow top={30} />,
    prevArrow: <SamplePrevArrow top={30} />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: "Our Code", slide: current }),
    className: "slides",
  };

  return (
    <Styled.SliderContainer style={{ width: "90%" }}>
      <Slider {...settings}>{children.map((slide) => slide)}</Slider>
    </Styled.SliderContainer>
  );
};

export default SliderWorks;
