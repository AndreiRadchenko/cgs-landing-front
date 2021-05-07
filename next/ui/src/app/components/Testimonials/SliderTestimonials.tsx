import React from 'react';
import * as Styled from './Testimonials.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { onChangeSlideEA } from '../../../services/event';
import { slides, portfolioSlides } from '../../img/index';
import { v4 as uuidv4 } from 'uuid';
import { TestimonialsList } from 'consts/lists';
import Testimonials from './Testimonials.component';

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

const SliderTestimonials: React.FC = () => {
  let settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: 'Partfolio', slide: current }),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    className: 'slides',
  };

  return (
    <Styled.SliderContainer style={{ width: '100%', height: '520px' }}>
      <Slider {...settings}>
        {TestimonialsList.map((el) => (
          <Testimonials testimonial={el}></Testimonials>
        ))}
      </Slider>
    </Styled.SliderContainer>
  );
};

export default SliderTestimonials;
