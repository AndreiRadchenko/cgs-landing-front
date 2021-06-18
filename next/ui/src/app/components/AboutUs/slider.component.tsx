import React from "react";
import * as Styled from "./AboutUs.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { onChangeSlideEA } from "../../../services/event";
import { v4 as uuidv4 } from "uuid";
import AboutUs from "./AboutUs.component";
import { IWorker } from "types/components";
import { SampleNextArrow, SamplePrevArrow } from "../shared/Slider/arrows";

const SliderComponent: React.FC<{ workers: IWorker[] }> = ({ workers }) => {
  let settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow top={20} />,
    prevArrow: <SamplePrevArrow top={20} />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: "AboutUs", slide: current }),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    className: "slides",
  };
  return (
    <Styled.SliderContainer>
      <Styled.SlideWrapper>
        <Slider {...settings} key={uuidv4()}>
          {workers.map((employee) => (
            <AboutUs key={employee.id} employee={employee} />
          ))}
        </Slider>
      </Styled.SlideWrapper>
    </Styled.SliderContainer>
  );
};

export default SliderComponent;
