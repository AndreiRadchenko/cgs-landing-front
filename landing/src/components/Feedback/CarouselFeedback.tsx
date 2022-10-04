import React, { FC, useRef } from "react";
import {
  Navigationwrapper,
  ArrowContainer,
  LeftArrowWrapper,
  RightArrowWrapper,
  ButtonWrapper,
} from "../../styles/HomePage/Feedback.styled";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import LeftArrow from "../../../public/HomePageDecoration/leftArrowFeedback.svg";
import RightArrow from "../../../public/HomePageDecoration/rightArrowFeedback.svg";
import FeedbackIntro from "./FeedbackIntro";
import { useOnScreen } from "../../hooks/useOnScreen";
import * as StyledThisComp from "../../styles/Feedback.styled";
import params from "../../mock/FeedbackSwiperParams";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import Image from "next/image";

SwiperCore.use([Navigation, Autoplay]);

const CarouselFeedback: FC = () => {
  const feedbackRef = useRef(null);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.FeedbackBlock;

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
          <Swiper {...params}>
            <Navigationwrapper>
              <FeedbackIntro title={data?.subtitle} subtitle={data?.text3} />
              <ButtonWrapper>
                <ArrowContainer>
                  <LeftArrowWrapper>
                    <Image
                      className="swiper-button-prev"
                      src={LeftArrow.src}
                      alt="left arrow feedback"
                      layout="fill"
                    />
                  </LeftArrowWrapper>
                  <RightArrowWrapper>
                    <Image
                      className="swiper-button-next"
                      src={RightArrow.src}
                      alt="right arrow feedback"
                      layout="fill"
                    />
                  </RightArrowWrapper>
                </ArrowContainer>
              </ButtonWrapper>
            </Navigationwrapper>
            {renderSliderSlides}
          </Swiper>
        </StyledThisComp.FeedbackRow>
      </div>
    </StyledThisComp.FeedbackContainer>
  );
};

export default CarouselFeedback;
