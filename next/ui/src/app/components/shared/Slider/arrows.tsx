import React from "react";
import * as Styled from "./slider.style";
import { slides } from "../../../img/index";

export const SamplePrevArrow = (props) => {
  const { className, onClick, img } = props;

  return (
    <Styled.SliderPrev
      left={props?.left}
      forWorks={props?.forWorks}
      top={props?.top}
      className={className}
      onClick={onClick}
    >
      <img src={img ? img : slides.LeftVector} alt="prevVector" />
    </Styled.SliderPrev>
  );
};

export const SampleNextArrow = (props) => {
  const { className, onClick, img } = props;

  return (
    <Styled.SliderNext
      right={props?.right}
      top={props?.top}
      forWorks={props?.forWorks}
      className={className}
      onClick={onClick}
    >
      <img src={img ? img : slides.RightVector} alt="prevVector" />
    </Styled.SliderNext>
  );
};
