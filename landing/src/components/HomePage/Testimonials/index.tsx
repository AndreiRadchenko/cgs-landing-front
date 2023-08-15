import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQueryClient } from "@tanstack/react-query";

import TestimonialsModal from "./TestimonialsModal";
import TestimonialsSlide from "./TestimonialsSlide";
import { MobileInfiniteText } from "../../MobileInfiniteText/MobileInfiniteText";

import * as Styled from "../../../styles/HomePage/Testimonials.styled";
import { ArrowContainer } from "../../../styles/ShowCase.styled";

import options from "../../../mock/TestimonialsSwiperParams";
import { IDataResponse } from "../../../types/Admin/Response.types";
import { queryKeys } from "../../../consts/queryKeys";

import "swiper/css";
import "swiper/css/bundle";

SwiperCore.use([Navigation, Autoplay]);

const Testimonials = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.TestimonialsBlock;

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <div>
      <MobileInfiniteText title={data?.title} withoutMargin />

      <Styled.TestimonialsTitleAndArrowContainer>
        <Styled.TestimonialsTitle>{data?.title}:</Styled.TestimonialsTitle>
        {data && data?.testimonials.length > 2 && (
          <Styled.TestimonialsSwiperArrowContainer>
            <ArrowContainer className="prevBtn swiper-button-prev testimonial">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.25 1.39844L2 9.39844M2 9.39844L10.25 17.3984M2 9.39844L20 9.39844"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <path
                  d="M10.25 1.39844L2 9.39844M2 9.39844L10.25 17.3984M2 9.39844L20 9.39844"
                  stroke="black"
                  strokeWidth="1.5"
                />
              </svg>
            </ArrowContainer>
            <ArrowContainer className="nextBtn swiper-button-next testimonial">
              <span>next</span>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.75 16.6016L18 8.60156M18 8.60156L9.75 0.601563M18 8.60156L-6.84812e-07 8.60156"
                  stroke="#F1EFED"
                  strokeWidth="1.5"
                />
                <path
                  d="M9.75 16.6016L18 8.60156M18 8.60156L9.75 0.601563M18 8.60156L-6.84812e-07 8.60156"
                  stroke="#F1EFED"
                  strokeWidth="1.5"
                />
              </svg>
            </ArrowContainer>
          </Styled.TestimonialsSwiperArrowContainer>
        )}
      </Styled.TestimonialsTitleAndArrowContainer>

      <Styled.TestimonialsSwiperContainer>
        <Swiper {...options}>
          {data?.testimonials.map((testimonial, i) => (
            <SwiperSlide key={testimonial.videoUrl}>
              {testimonial.slideBanner.image && (
                <TestimonialsSlide
                  setIsOpen={setIsOpen}
                  subtitle={testimonial.slideTitle}
                  setIndex={setIndex}
                  slideNum={i}
                  testimonialImg={testimonial.slideBanner.image.url}
                  stars={testimonial.stars}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.TestimonialsSwiperContainer>
      {isOpen && data?.testimonials && (
        <TestimonialsModal
          testimonial={data?.testimonials[index]}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default Testimonials;
