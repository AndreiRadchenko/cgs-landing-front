import React from "react";
import Carousel from "react-multi-carousel";
import { useMediaQuery } from "react-responsive";
import "react-multi-carousel/lib/styles.css";
import { IFact } from "types/components";
import { SampleNextArrow, SamplePrevArrow } from "../shared/Slider/arrows";
import Facts from "./Facts.component";

import * as Styled from "./SliderFacts.styles";

interface SliderProps {
  facts: IFact[];
}

const Slider: React.FC<SliderProps> = ({ facts }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  if (isDesktop) {
    return (
      <Styled.DesktopContainer>
        {facts.map((fact, index) => (
          <Facts key={fact.id} fact={fact} number={index + 1} />
        ))}
      </Styled.DesktopContainer>
    );
  }

  return (  
    <Styled.SliderContainer>
      <Carousel
        ssr={true}
        infinite={true}
        swipeable={true}
        draggable={false}
        responsive={{
          mobile: {
            breakpoint: { min: 0, max: Infinity },
            items: 1,
            slidesToSlide: 1,
          }
        }}
        customLeftArrow={<SamplePrevArrow top={9} />}
        customRightArrow={<SampleNextArrow top={9} />}
      >
        {facts.map((fact, index) => (
          <Styled.SlideContainer key={fact.id}>
            <Facts fact={fact} number={index + 1} />
          </Styled.SlideContainer>
        ))}
      </Carousel>
    </Styled.SliderContainer>
  );
};

export default Slider;
