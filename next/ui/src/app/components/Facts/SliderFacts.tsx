import React from 'react';
// import * as Styled from '../shared/Slider/slider.style';
import * as Styled from './Facts.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { onChangeSlideEA } from '../../../services/event';
import { slides } from '../../img/index';
import { v4 as uuidv4 } from 'uuid';
import Facts from './Facts.component';
import { FactsList } from 'consts/lists';

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

const SliderFacts: React.FC = () => {
  let settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: 'AboutUs', slide: current }),
    // autoplay: true,
    // autoplaySpeed: 2000, - becomes inconvenient with manual switching, better to turn it off with portfolio
    responsive: [
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
    <Styled.SliderContainer style={{ width: '100%' }}>
      <Slider {...settings} key={uuidv4()}>
        {FactsList.map((fact, index) => (
          <Facts fact={fact} number={index + 1} />
        ))}
      </Slider>
    </Styled.SliderContainer>
  );
};

export default SliderFacts;
