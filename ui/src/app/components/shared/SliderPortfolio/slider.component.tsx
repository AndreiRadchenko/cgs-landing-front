import React from 'react';
import * as Styled from './slider.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { onChangeSlideEA } from '../../../../services/event';
import { slides, portfolioSlides } from '../../../img/index';
import { v4 as uuidv4 } from 'uuid';

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

const SliderComponent: React.FC = () => {
  let settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: current =>
      onChangeSlideEA({ sliderName: 'Partfolio', slide: current }),
    //autoplay: true,
    //autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
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
        {Object.values(portfolioSlides).map(slide => (
          <div key={uuidv4()}>
            <img width="378px" height="520px" src={slide} alt="Project" />
          </div>
        ))}
      </Slider>
    </Styled.SliderContainer>
  );
};

export default SliderComponent;
