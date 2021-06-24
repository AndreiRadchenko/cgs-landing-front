import React from "react";
import * as Styled from "./technologies.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { onChangeSlideEA } from "../../../services/event";
import { v4 as uuidv4 } from "uuid";
import Technology from "./technologies.component";
import { ITechnology } from "../../../types/components/index";
import { SampleNextArrow, SamplePrevArrow } from "../shared/Slider/arrows";
const SliderTechnologies: React.FC<{ technologies: ITechnology[] }> = ({
  technologies,
}) => {
  const slidesToShow = technologies.length < 4 ? technologies.length : 4;
  let settings = {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow top={35} />,
    prevArrow: <SamplePrevArrow top={35} />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: "AboutUs", slide: current }),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    className: "slides",
  };
  return (
    <Styled.SliderContainer>
      <Slider {...settings}>
        {technologies?.map((technology, index) => (
          <Technology key={uuidv4()} technology={technology} index={index} />
        ))}
      </Slider>
    </Styled.SliderContainer>
  );
};
export default SliderTechnologies;
