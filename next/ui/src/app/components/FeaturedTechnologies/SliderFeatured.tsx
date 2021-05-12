import React from 'react';
import * as Styled from './Featured.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { onChangeSlideEA } from '../../../services/event';
import { slides } from '../../img/index';
import { v4 as uuidv4 } from 'uuid';
import { FeaturedList } from 'consts/lists';
import Featured from './FeaturedTechnologies.component';

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

const SliderFeatured: React.FC = () => {
  let settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: 'Partfolio', slide: current }),
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
      <Slider {...settings}>
        {FeaturedList.map((el) => (
          <Featured tech={el}></Featured>
        ))}
      </Slider>
    </Styled.SliderContainer>
  );
};

export default SliderFeatured;
