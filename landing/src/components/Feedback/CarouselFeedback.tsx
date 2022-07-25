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
import * as StyledThisComp from "../../styles/Feedback.styled";
import params from "../../mock/FeedbackSwiperParams";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";

SwiperCore.use([Navigation, Autoplay]);

const CarouselFeedback: FC = () => {
  const feedbackRef = useRef(null);
  const isFeedbackOnScreen = useOnScreen(feedbackRef);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.FeedbackBlock;

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

  let feedbacks, renderSliderSlides;
  if (data?.feedBacks) {
    feedbacks = data.feedBacks;
    renderSliderSlides = [...feedbacks]
      .reverse()
      .map(({ name, text, link, companyName, stars }, idx) => (
        <SwiperSlide key={idx}>
          <FeedbackCard
            name={name}
            description={text}
            company={companyName}
            link={link}
            rates={stars}
          />
        </SwiperSlide>
      ));
  }

  return (
    <StyledThisComp.FeedbackContainer>
      <div ref={feedbackRef}>
        <StyledThisComp.FeedbackRow>
          <Swiper {...params} onSwiper={(swiper) => setSwiper(swiper)}>
            <Navigationwrapper>
              <Feedback title={data?.subtitle} subtitle={data?.text3} />
              <ArrowContainer>
                <div className="swiper-button-prev">
                  <LeftArrow />
                </div>
                <div className="swiper-button-next">
                  <RightArow />
                </div>
              </ArrowContainer>
            </Navigationwrapper>
            {renderSliderSlides}
          </Swiper>
        </StyledThisComp.FeedbackRow>
      </div>
    </StyledThisComp.FeedbackContainer>
  );
};

export default CarouselFeedback;
