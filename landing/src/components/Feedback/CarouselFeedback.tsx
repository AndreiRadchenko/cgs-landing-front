import React, { FC, useRef } from "react";
import { Navigationwrapper } from "../../styles/HomePage/Feedback.styled";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import FeedbackIntro from "./FeedbackIntro";
import * as StyledThisComp from "../../styles/Feedback.styled";
import params from "../../mock/FeedbackSwiperParams";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import * as Styled from "../../styles/ShowCase.styled";

SwiperCore.use([Navigation, Autoplay]);

const CarouselFeedback: FC = () => {
  const feedbackRef = useRef(null);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.FeedbackBlock;

  let feedbacks, renderSliderSlides;
  if (data?.feedBacks) {
    feedbacks = data.feedBacks;
    const duplicatedSlides = [...feedbacks];
    renderSliderSlides = duplicatedSlides
      .concat(feedbacks)
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
        <MobileInfiniteText title={data?.subtitle} />
        <StyledThisComp.FeedbackRow>
          <Swiper {...params}>
            <Navigationwrapper>
              <FeedbackIntro title={data?.subtitle} subtitle={data?.text3} />
              <Styled.FeedbackButtonWrapper>
                <Styled.ArrowContainer className="feedbackPrevBtn prevBtn swiper-button-prev">
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
                </Styled.ArrowContainer>
                <Styled.ArrowContainer className="nextBtn swiper-button-next">
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
                </Styled.ArrowContainer>
              </Styled.FeedbackButtonWrapper>
            </Navigationwrapper>
            {renderSliderSlides}
          </Swiper>
        </StyledThisComp.FeedbackRow>
      </div>
    </StyledThisComp.FeedbackContainer>
  );
};

export default CarouselFeedback;
