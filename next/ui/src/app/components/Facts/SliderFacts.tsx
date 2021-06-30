import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IFact } from "types/components";
import { SampleNextArrow, SamplePrevArrow } from "../shared/Slider/arrows";
import Facts from "./Facts.component";

import * as Styled from "./SliderFacts.styles";

interface SliderProps {
  facts: IFact[];
}

const Slider: React.FC<SliderProps> = ({ facts }) => {
  return (
    <Styled.Container>
      <Styled.DesktopContainer>
        {facts.map((fact, index) => (
          <Facts key={fact.id} fact={fact} number={index + 1} />
        ))}
      </Styled.DesktopContainer>
      <Styled.MobileContainer>
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
      </Styled.MobileContainer>
    </Styled.Container>
  );
};

export default Slider;
