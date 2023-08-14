import React from "react";
import Image from "next/image";

import PlayBtn from "./PlayBtn";

import * as Styled from "../../../styles/HomePage/Testimonials.styled";

import { ITestimonialsSlideProps } from "../../../types/Components.types";

import star from "../../../../public/HomePageDecoration/testimonialsStar.svg";

const TestimonialsSlide = ({
  setIsOpen,
  subtitle,
  setIndex,
  slideNum,
  testimonialImg,
}: ITestimonialsSlideProps) => {
  const clickHandler = () => {
    setIsOpen(true);
    setIndex(slideNum);
  };

  return (
    <Styled.TestimonialsSlideContainer onClick={clickHandler}>
      <Image layout={"fill"} src={testimonialImg} alt={"clients"} />
      <Styled.TestimonialsSlideHeadline>
        {subtitle}
      </Styled.TestimonialsSlideHeadline>
      <Styled.TestimonialsSlideStar>
        {[...Array(5)].map((_, i) => (
          <Image key={i} src={star} alt={"star"} />
        ))}
      </Styled.TestimonialsSlideStar>
      <Styled.TestimonialsSlidePlayBtnContainer>
        <PlayBtn />
      </Styled.TestimonialsSlidePlayBtnContainer>
      <Styled.HoverBlockTestimonials className={"hidden"}>
        <Styled.HoverBlackBlockTestimonials />
      </Styled.HoverBlockTestimonials>
    </Styled.TestimonialsSlideContainer>
  );
};

export default TestimonialsSlide;
