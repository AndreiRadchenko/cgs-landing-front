import React from 'react';
import * as Styled from './Featured.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { onChangeSlideEA } from '../../../services/event';
import { slides } from '../../img/index';
import Featured from './FeaturedTechnologies.component';
import { IFeaturedTechnology } from 'types/components';

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

const SliderFeatured: React.FC<{
  featuredTechnologies: IFeaturedTechnology[];
}> = ({ featuredTechnologies }) => {
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
    <Styled.SliderContainer>
      <Slider {...settings}>
        {featuredTechnologies.map((el) => (
          <Featured featuredTech={el} key={el.id}></Featured>
        ))}
      </Slider>
    </Styled.SliderContainer>
  );
};

export default SliderFeatured;
