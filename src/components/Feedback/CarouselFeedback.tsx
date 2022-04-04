import React, { FC } from "react";
import { Navigationwrapper } from "./Feedback.styled";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import SwiperCore, {
  Autoplay,
  Navigation,
  Swiper as SwipperType,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IFeedbackCardProps } from "../../types/Feedback.types";
import "swiper/css";
import { useEffect, useState } from "react";
import "swiper/css/bundle";
import LeftArrow from "../../../public/leftArrow";
import RightArow from "../../../public/rightArrow";

SwiperCore.use([Navigation, Autoplay]);

interface ICarouselFeedbackProps {
  feedback: IFeedbackCardProps[];
  isFeedbackOnScreen: boolean;
}

const CarouselFeedback: FC<ICarouselFeedbackProps> = ({
  feedback,
  isFeedbackOnScreen,
}) => {
  let params = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    allowTouchMove: true,
    grabCursor: true,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    focusableElements: "button",
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  const [swiper, setSwiper] = useState<SwipperType>();
  const [isBeenInitSlideScroll, setIsInitSlideScroll] =
    useState<boolean>(false);

  useEffect(() => {
    if (isFeedbackOnScreen && swiper && !isBeenInitSlideScroll) {
      setIsInitSlideScroll(true);

      const delay = 1500;
      for (let i = 1; i < 4; i++) {
        setTimeout(() => {
          swiper.slideNext();
        }, delay * i);
      }
    }
  }, [swiper, isFeedbackOnScreen, isBeenInitSlideScroll]);

  return (
    <Swiper {...params} onSwiper={swiper => setSwiper(swiper)}>
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
      <Navigationwrapper>
        <div className='swiper-button-prev'>
          <LeftArrow />
        </div>
        <div className='swiper-button-next'>
          <RightArow />
        </div>
      </Navigationwrapper>
    </Swiper>
  );
};

export default CarouselFeedback;
