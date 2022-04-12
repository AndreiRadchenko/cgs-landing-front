import React, { FC, useRef } from "react";
import { Navigationwrapper, ArrowContainer } from "./Feedback.styled";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import SwiperCore, {
  Autoplay,
  Navigation,
  Swiper as SwipperType,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import "swiper/css/bundle";
import LeftArrow from "../../../public/leftArrow";
import RightArow from "../../../public/rightArrow";
import Feedback from "./Feedback";
import { useOnScreen } from "../../hooks/useOneScreen";
import { feedbackArr } from "../../utils/variables";
import * as StyledThisComp from "../../styles/Feedback.styled";

SwiperCore.use([Navigation, Autoplay]);

const CarouselFeedback: FC = () => {
  const feedbackRef = useRef(null);
  const isFeedbackOnScreen = useOnScreen(feedbackRef);
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
    <StyledThisComp.FeedbackContainer>
      <div ref={feedbackRef}>
        <StyledThisComp.FeedbackRow>
          <Swiper
            {...params}
            onSwiper={swiper => setSwiper(swiper)}
            style={{ display: "flex", flexDirection: "column-reverse" }}>
            <Navigationwrapper>
              <Feedback />
              <ArrowContainer>
                <div className='swiper-button-prev'>
                  <LeftArrow />
                </div>
                <div className='swiper-button-next'>
                  <RightArow />
                </div>
              </ArrowContainer>
            </Navigationwrapper>
            {[...feedbackArr]
              .reverse()
              .map(
                (
                  { name, description, link, company, position, rates },
                  idx
                ) => (
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
                )
              )}
          </Swiper>
        </StyledThisComp.FeedbackRow>
      </div>
    </StyledThisComp.FeedbackContainer>
  );
};

export default CarouselFeedback;
