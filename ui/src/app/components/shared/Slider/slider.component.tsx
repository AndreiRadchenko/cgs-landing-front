import React, { ReactNodeArray } from 'react';
import * as Styled from './slider.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftVector from '../../../img/leftVector.svg';
import RightVector from '../../../img/rightVector.svg';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Styled.SliderNext className={className} onClick={onClick}>
      <img src={RightVector} alt="prevVector" />
    </Styled.SliderNext>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Styled.SliderPrev className={className} onClick={onClick}>
      <img src={LeftVector} alt="prevVector" />
    </Styled.SliderPrev>
  );
}

const SliderComponent: React.FC<{ children: ReactNodeArray }> = ({
  children,
}) => {
  let settings = {
    //dots: true,
    //infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        breakpoint: 900,
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
        {children.map(project => (
          <div className="project-container">{project}</div>
        ))}
      </Slider>
    </Styled.SliderContainer>
  );
};

export default SliderComponent;
