import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

import * as Styled from "../../../styles/HomePage/Testimonials.styled";

import { ITestimonialsModalProps } from "../../../types/Components.types";

import cross from "../../../../public/closeBtn.svg";
import star from "../../../../public/HomePageDecoration/testimonialsStar.svg";

const TestimonialsModal = ({
  setIsOpen,
  testimonial,
}: ITestimonialsModalProps) => {
  return (
    <Styled.TestimonialsModalContainer>
      <Styled.TestimonialsVideoContainer>
        <Styled.TestimonialsCrossContainer onClick={() => setIsOpen(false)}>
          <Styled.TestimonialsCrossWrapper>
            <Image alt={"cross"} src={cross} width={"100%"} height={"100%"} />
          </Styled.TestimonialsCrossWrapper>
        </Styled.TestimonialsCrossContainer>
        <Styled.TestimonialsModalVideoContainer>
          <ReactPlayer
            url={testimonial.videoUrl}
            width={"100%"}
            height={"31.3em"}
          />
          <Styled.TestimonialsVideoInfoContainer>
            <Styled.TestimonialsInfoHeader>
              <div>
                <Styled.TestimonialsHeaderName>
                  {testimonial.name}
                </Styled.TestimonialsHeaderName>
                <Styled.TestimonialsHeaderPosition className={"desktop"}>
                  <a href={testimonial.link} target={"_blank"} rel="noreferrer">
                    {testimonial.company}
                  </a>
                </Styled.TestimonialsHeaderPosition>
              </div>
              <Styled.TestimonialsHeaderStar>
                {[...Array(Math.round(testimonial.stars))].map((_, i) => (
                  <Image key={i} src={star} alt={"star"} />
                ))}
              </Styled.TestimonialsHeaderStar>
            </Styled.TestimonialsInfoHeader>
            <Styled.TestimonialsHeaderPosition className={"mobile"}>
              <a href={testimonial.link} target={"_blank"} rel="noreferrer">
                {testimonial.company}
              </a>
            </Styled.TestimonialsHeaderPosition>
            <Styled.TestimonialsInfoText>
              {testimonial.text}
            </Styled.TestimonialsInfoText>
          </Styled.TestimonialsVideoInfoContainer>
        </Styled.TestimonialsModalVideoContainer>
        <Styled.HoverBlockTestimonials>
          <Styled.HoverBlackBlockTestimonials />
        </Styled.HoverBlockTestimonials>
      </Styled.TestimonialsVideoContainer>
    </Styled.TestimonialsModalContainer>
  );
};

export default TestimonialsModal;
