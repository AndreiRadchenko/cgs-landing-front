import React from "react";
import * as Styled from "./Featured.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { onChangeSlideEA } from "../../../services/event";
import Featured from "./FeaturedTechnologies.component";
import { IFeaturedTechnology } from "types/components";
import { SampleNextArrow, SamplePrevArrow } from "../shared/Slider/arrows";

const SliderFeatured: React.FC<{
  featuredTechnologies: IFeaturedTechnology[];
}> = ({ featuredTechnologies }) => {
  let settings = {
    infinite: false,
    slidesToShow: featuredTechnologies.length,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow top={20} />,
    prevArrow: <SamplePrevArrow top={20} />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: "Partfolio", slide: current }),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    className: "slides",
  };

  return (
    <Styled.SliderContainer>
      <Slider {...settings}>
        {featuredTechnologies?.map((el) => (
          <Featured featuredTech={el} key={el?.id} />
        ))}
      </Slider>
    </Styled.SliderContainer>
  );
};

export default SliderFeatured;
