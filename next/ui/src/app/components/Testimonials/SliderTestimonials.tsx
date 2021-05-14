import React, { useEffect, useState } from 'react';
import * as Styled from './Testimonials.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { onChangeSlideEA } from '../../../services/event';
import { slides } from '../../img/index';
import Testimonials from './Testimonials.component';
import { ITestimonial } from '../../../types/components/index';

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

const SliderTestimonials: React.FC<{ testimonials: ITestimonial[] }> = ({
  testimonials,
}) => {
  let settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: 'Portfolio', slide: current }),
    responsive: [
      {
        breakpoint: 1149,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    className: 'slides',
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
function data(data: any, arg1: (any: any) => any) {
  throw new Error('Function not implemented.');
}
