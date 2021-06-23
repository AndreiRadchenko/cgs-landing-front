import React from "react";
import * as Styled from "./Facts.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { onChangeSlideEA } from "../../../services/event";
import { v4 as uuidv4 } from "uuid";
import Facts from "./Facts.component";
import { IFact } from "../../../types/components/index";
import { SampleNextArrow, SamplePrevArrow } from "../shared/Slider/arrows";

const SliderFacts: React.FC<{ facts: IFact[] }> = ({ facts }) => {
  let settings = {
    slidesToShow: facts.length,
    infinite: false,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow top={20} />,
    prevArrow: <SamplePrevArrow top={20} />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: "AboutUs", slide: current }),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
    className: "slides",
  };

  return (
    <Styled.SliderContainer>
      <Slider {...settings} key={uuidv4()}>
        {facts &&
          facts?.map((fact, index) => (
            <Facts fact={fact} number={index + 1} key={fact?.id} />
          ))}
      </Slider>
    </Styled.SliderContainer>
  );
};

export default SliderFacts;
