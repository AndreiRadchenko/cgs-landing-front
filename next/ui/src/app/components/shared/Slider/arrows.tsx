import React from "react";
import * as Styled from "./slider.style";
import { slides } from "../../../img/index";

export const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <Styled.SliderPrev
      forWorks={props.forWorks}
      top={props.top}
      className={className}
      onClick={onClick}
    >
      <img src={slides.LeftVector} alt="prevVector" />
    </Styled.SliderPrev>
  );
};

export const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <Styled.SliderNext
      top={props.top}
      forWorks={props.forWorks}
      className={className}
      onClick={onClick}
    >
      <img src={slides.RightVector} alt="prevVector" />
    </Styled.SliderNext>
  );
};
