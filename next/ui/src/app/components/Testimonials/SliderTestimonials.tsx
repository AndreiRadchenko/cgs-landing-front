import React from "react";
import * as Styled from "./Testimonials.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { onChangeSlideEA } from "../../../services/event";
import Testimonials from "./Testimonials.component";
import { ITestimonial } from "../../../types/components/index";
import { SampleNextArrow, SamplePrevArrow } from "../shared/Slider/arrows";

const SliderTestimonials: React.FC<{ testimonials: ITestimonial[] }> = ({
  testimonials,
}) => {
  let settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow top={25} />,
    prevArrow: <SamplePrevArrow top={25} />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: "Portfolio", slide: current }),
    responsive: [
      {
        breakpoint: 1149,
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
        {testimonials &&
          testimonials.map((el) => (
            <Testimonials key={el.id} testimonial={el}></Testimonials>
          ))}
      </Slider>
    </Styled.SliderContainer>
  );
};

export default SliderTestimonials;
