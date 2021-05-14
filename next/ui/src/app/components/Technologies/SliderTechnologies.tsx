import React from 'react';
import * as Styled from './technologies.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { onChangeSlideEA } from '../../../services/event';
import { slides } from '../../img/index';
import { v4 as uuidv4 } from 'uuid';
import Technology from './technologies.component';
import { ITechnology } from '../../../types/components/index';

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

const SliderTechnologies: React.FC<{ technologies: ITechnology[] }> = ({
  technologies,
}) => {
  const slidesToShow = technologies.length < 4 ? technologies.length : 4;
  let settings = {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: 'AboutUs', slide: current }),
    responsive: [
      {
        breakpoint: 1024,
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
        {technologies &&
          technologies.map((technology, index) => (
            <Technology key={uuidv4()} technology={technology} index={index} />
          ))}
      </Slider>
    </Styled.SliderContainer>
  );
};

export default SliderTechnologies;
