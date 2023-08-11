import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

import * as Styled from "../../../styles/HomePage/Testimonials.styled";

import { ITestimonialsModalProps } from "../../../types/Components.types";

import cross from "../../../../public/closeBtn.svg";
import star from "../../../../public/HomePageDecoration/feedbackStar.svg";

const TestimonialsModal = ({
  setIsOpen,
  testimonial,
}: ITestimonialsModalProps) => {
  return (
    <Styled.TestimonialsModalContainer>
      <Styled.TestimonialsCrossContainer onClick={() => setIsOpen(false)}>
        <Image alt={"cross"} src={cross} width={"100%"} height={"100%"} />
      </Styled.TestimonialsCrossContainer>
      <Styled.TestimonialsVideoContainer>
        <ReactPlayer
          url={testimonial.videoUrl}
          width={"100%"}
          height={"34.7em"}
        />
        <Styled.TestimonialsVideoInfoContainer>
          <Styled.TestimonialsInfoHeader>
            <div>
              <Styled.TestimonialsHeaderName>
                {testimonial.name}
              </Styled.TestimonialsHeaderName>
              <Styled.TestimonialsHeaderPosition className={"desktop"}>
                {testimonial.company}
              </Styled.TestimonialsHeaderPosition>
            </div>
            <Styled.TestimonialsHeaderStar>
              {[...Array(5)].map((_, i) => (
                <Image key={i} src={star} alt={"star"} />
              ))}
            </Styled.TestimonialsHeaderStar>
          </Styled.TestimonialsInfoHeader>
          <Styled.TestimonialsHeaderPosition className={"mobile"}>
            {testimonial.company}
          </Styled.TestimonialsHeaderPosition>
          <Styled.TestimonialsInfoText>
            {testimonial.text}
          </Styled.TestimonialsInfoText>
        </Styled.TestimonialsVideoInfoContainer>
        <Styled.HoverBlockTestimonials>
          <Styled.HoverBlackBlockTestimonials />
        </Styled.HoverBlockTestimonials>
      </Styled.TestimonialsVideoContainer>
    </Styled.TestimonialsModalContainer>
  );
};

export default TestimonialsModal;
