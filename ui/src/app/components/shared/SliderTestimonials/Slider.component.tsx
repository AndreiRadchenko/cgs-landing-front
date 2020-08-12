import React from 'react';
import * as Styled from './slider.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slides } from './slides';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const rightVector =
    props.slideCount - props.currentSlide === 1
      ? slides.RightBlueVector
      : slides.RightVector;
  return (
    <Styled.SliderNext className={className} onClick={onClick}>
      <img src={rightVector} alt="prevVector" />
    </Styled.SliderNext>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const leftVector =
    props.currentSlide === 0 ? slides.LeftBlueVector : slides.LeftVector;
  return (
    <Styled.SliderPrev className={className} onClick={onClick}>
      <img src={leftVector} alt="prevVector" />
    </Styled.SliderPrev>
  );
}

const SliderTestimonials: React.FC<{ children: React.ReactNodeArray }> = ({
  children,
}) => {
  let settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: 'slides',
  };

  return (
    <Styled.SliderContainer
      style={{ marginBottom: '100px', width: '100%', height: '420px' }}
    >
      <Slider {...settings}>{children.map(slide => slide)}</Slider>
    </Styled.SliderContainer>
  );
};

export default SliderTestimonials;
