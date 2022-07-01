import React, { useRef } from "react";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import Feedback from "./Feedback";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import params from "../../mock/FeedbackSwiperParams";
import * as StyledThisComp from "../../styles/Feedback.styled";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import { ArrowContainer, Navigationwrapper } from "./Feedback.styled";
import LeftArrow from "./leftArrow";
import RightArrow from "./rightArrow";

const CarouselFeedback = () => {
  const feedbackRef = useRef(null);
  const slider = useRef<Slider>(null);

  const handlePrevClick = () => {
    slider?.current?.slickPrev();
  };

  const handleNextClick = () => {
    slider?.current?.slickNext();
  };

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.FeedbackBlock;

  let feedbacks, renderSliderSlides;
  if (data?.feedBacks) {
    feedbacks = data.feedBacks;
    renderSliderSlides = [...feedbacks]
      .reverse()
      .map(({ name, text, link, companyName, role, stars }, idx) => (
        <FeedbackCard
          key={idx}
          name={name}
          description={text}
          company={companyName}
          link={link}
          rates={stars}
          position={role}
        />
      ));
  }

  return (
    <StyledThisComp.FeedbackContainer>
      <div ref={feedbackRef}>
        <StyledThisComp.FeedbackRow>
          <Navigationwrapper>
            <Feedback title={data?.subtitle} subtitle={data?.text3} />
            <ArrowContainer>
              <div className="swiper-button-prev" onClick={handlePrevClick}>
                <LeftArrow />
              </div>
              <div onClick={handleNextClick}>
                <RightArrow />
              </div>
            </ArrowContainer>
          </Navigationwrapper>
          <Slider ref={slider} {...params}>
            {renderSliderSlides}
          </Slider>
        </StyledThisComp.FeedbackRow>
      </div>
    </StyledThisComp.FeedbackContainer>
  );
};

export default CarouselFeedback;
