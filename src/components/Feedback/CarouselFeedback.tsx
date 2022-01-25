import React, { FC } from "react";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { IFeedbackCardProps } from "../../types/Feedback.types";
import "swiper/css";

interface ICarouselFeedbackProps {
  feedback: IFeedbackCardProps[];
}

const CarouselFeedback: FC<ICarouselFeedbackProps> = ({ feedback }) => {
  return (
    <Swiper slidesPerView={3} spaceBetween={30}>
      {[...feedback]
        .reverse()
        .map(({ name, description, company, position, rates }, idx) => (
          <SwiperSlide key={idx}>
            <FeedbackCard
              name={name}
              description={description}
              company={company}
              position={position}
              rates={rates}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default CarouselFeedback;
