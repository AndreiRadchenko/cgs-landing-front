import React, { useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import TestimonialsModal from "./TestimonialsModal";
import TestimonialsSlide from "./TestimonialsSlide";

import * as Styled from "../../../styles/HomePage/Testimonials.styled";
import { ArrowContainer } from "../../../styles/ShowCase.styled";

import options from "../../../mock/TestimonialsSwiperParams";

import "swiper/css";
import "swiper/css/bundle";
import { MobileInfiniteText } from "../../MobileInfiniteText/MobileInfiniteText";

SwiperCore.use([Navigation]);

const Testimonials = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const DATA_TESTIMONIALS = [
    {
      slideTitle: "Damien Dalli // Head of Design, Founder of Heartstring AI",
      name: "Damien Dalli",
      company: "Head of Design // Founder of Heartstring AI",
      videoUrl: "https://youtu.be/53Hmv73kqwk",
      imgUrl: "/HomePageDecoration/TestimonialsMockImages/dali.png",
      text: "After talking with many different teams, I am very happy with my decision to hire CGS. Finding a web developer is no easy task, especially when you're just an individual, not a company, and have no idea where to start.",
    },
    {
      slideTitle: "Max Wolfrath / Dex-wallet",
      name: "Max Wolfrath",
      company: "Dex-wallet",
      videoUrl: "https://youtu.be/4P6ZikEW6Uw",
      imgUrl: "/HomePageDecoration/TestimonialsMockImages/max.png",
      text: "After talking with many different teams, I am very happy with my decision to hire CGS. Finding a web developer is no easy task, especially when you're just an individual, not a company, and have no idea where to start.",
    },
    {
      slideTitle: "Damien Dalli // Head of Design, Founder of Heartstring AI",
      name: "Damien Dalli",
      company: "Head of Design // Founder of Heartstring AI",
      videoUrl: "https://youtu.be/53Hmv73kqwk",
      imgUrl: "/HomePageDecoration/TestimonialsMockImages/dali.png",
      text: "After talking with many different teams, I am very happy with my decision to hire CGS. Finding a web developer is no easy task, especially when you're just an individual, not a company, and have no idea where to start.",
    },
    {
      slideTitle: "Max Wolfrath / Dex-wallet",
      name: "Max Wolfrath",
      company: "Dex-wallet",
      videoUrl: "https://youtu.be/4P6ZikEW6Uw",
      imgUrl: "/HomePageDecoration/TestimonialsMockImages/max.png",
      text: "After talking with many different teams, I am very happy with my decision to hire CGS. Finding a web developer is no easy task, especially when you're just an individual, not a company, and have no idea where to start.",
    },
  ];

  return (
    <div>
      <MobileInfiniteText title={"Testimonials"} />
      <Styled.TestimonialsTitleAndArrowContainer>
        <Styled.TestimonialsTitle>Testimonials:</Styled.TestimonialsTitle>
        <Styled.TestimonialsSwiperArrowContainer>
          <ArrowContainer className="prevBtn swiper-button-prev">
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
          <ArrowContainer className="nextBtn swiper-button-next">
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
      </Styled.TestimonialsTitleAndArrowContainer>

      <Styled.TestimonialsSwiperContainer>
        <Swiper {...options}>
          {DATA_TESTIMONIALS.map((testimonial, i) => (
            <SwiperSlide key={testimonial.videoUrl}>
              <TestimonialsSlide
                setIsOpen={setIsOpen}
                subtitle={testimonial.slideTitle}
                setIndex={setIndex}
                slideNum={i}
                testimonialImg={testimonial.imgUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.TestimonialsSwiperContainer>
      {isOpen && (
        <TestimonialsModal
          testimonial={DATA_TESTIMONIALS[index]}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default Testimonials;
