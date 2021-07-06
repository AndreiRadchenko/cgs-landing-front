import React from "react";
import * as Styled from "./AboutUs.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { onChangeSlideEA } from "../../../services/event";
import AboutUs from "./AboutUs.component";
import { IWorker } from "types/components";
import { SampleNextArrow, SamplePrevArrow } from "../shared/Slider/arrows";

const SliderComponent: React.FC<{ workers: IWorker[] }> = ({ workers }) => {
  const settings = {
    infinite: workers.length > 3,    
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow top={20} />,
    prevArrow: <SamplePrevArrow top={20} />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: "AboutUs", slide: current }),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
    className: "slides",
  };

  return (
    <Styled.SliderContainer>
      <Styled.SlideWrapper>
        <Slider {...settings} >
          {workers.map((employee) => (
            <AboutUs key={employee.id} employee={employee} />
          ))}
        </Slider>
      </Styled.SlideWrapper>
    </Styled.SliderContainer>
  );
};

export default SliderComponent;
