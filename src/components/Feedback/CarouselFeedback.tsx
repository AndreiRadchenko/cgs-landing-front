import React, { FC } from "react";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IFeedbackCardProps } from "../../types/Feedback.types";
import "swiper/css";

SwiperCore.use([Navigation]);

interface ICarouselFeedbackProps {
  feedback: IFeedbackCardProps[];
}

const CarouselFeedback: FC<ICarouselFeedbackProps> = ({ feedback }) => {
  let params = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    allowTouchMove: false,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  };

  return (
    <Swiper {...params}>
      {[...feedback]
        .reverse()
        .map(({ name, description, link, company, position, rates }, idx) => (
          <SwiperSlide key={idx}>
            <FeedbackCard
              name={name}
              description={description}
              company={company}
              link={link}
              position={position}
              rates={rates}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default CarouselFeedback;