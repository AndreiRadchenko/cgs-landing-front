import React from 'react';
import * as Styled from './Facts.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { onChangeSlideEA } from '../../../services/event';
import { slides } from '../../img/index';
import { v4 as uuidv4 } from 'uuid';
import Facts from './Facts.component';

import { IFact } from '../../../types/components/index';

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

const SliderFacts: React.FC<{ facts: IFact[] }> = ({ facts }) => {
  let settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: 'AboutUs', slide: current }),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    className: 'slides',
  };
  return (
    <Styled.SliderContainer>
      <Slider {...settings} key={uuidv4()}>
        {facts &&
          facts.map((fact, index) => (
            <Facts fact={fact} number={index + 1} key={fact.id} />
          ))}
      </Slider>
    </Styled.SliderContainer>
  );
};

export default SliderFacts;
