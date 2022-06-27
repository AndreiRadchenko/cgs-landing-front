import { IPortfolioData } from "../../../types/Admin/AdminPortfolioPage.types";
import React, { FC, useRef } from "react";

import FeedbackCard from "../../FeedbackCard/FeedbackCard";
import SwiperCore, {
  Autoplay,
  Navigation,
  Swiper as SwipperType,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import "swiper/css/bundle";
import { useOnScreen } from "../../../hooks/useOneScreen";
import * as Styled from "../../../styles/PortfolioSlider.styles";
import params from "../../../mock/PorfolioPageSwiperParams";
import { useQueryClient } from "react-query";
import LeftArrow from "../../../../public/leftArrow";
import RightArrow from "../../../../public/rightArrow";
import { IDataResponse } from "../../../types/Admin/Response.types";
import { queryKeys } from "../../../consts/queryKeys";
import Feedback from "../../Feedback/Feedback";
import {
  ArrowContainer,
  Navigationwrapper,
} from "../../Feedback/Feedback.styled";

interface IPortfolioSwipers {
  data: IPortfolioData;
}

SwiperCore.use([Navigation, Autoplay]);

const PortfolioSwipers: FC<IPortfolioSwipers> = () => {
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
      .map(({ name, text, link, companyName, role, stars }, idx) => (
        <SwiperSlide key={idx}>
          <FeedbackCard
            name={name}
            description={text}
            company={companyName}
            link={link}
            rates={stars}
            position={role}
          />
        </SwiperSlide>
      ));
  }

  return (
    // <Styled.FeedbackContainer>
    <div ref={feedbackRef}>
      {/*<Styled.FeedbackRow>*/}
      <Swiper {...params}>
        <Navigationwrapper>
          {/*<Feedback title={data?.subtitle} subtitle={data?.text3} />*/}
          <ArrowContainer>
            <div className="swiper-button-prev">
              <LeftArrow />
            </div>
            <div className="swiper-button-next">
              <RightArrow />
            </div>
          </ArrowContainer>
        </Navigationwrapper>
        {renderSliderSlides}
      </Swiper>
      {/*</Styled.FeedbackRow>*/}
    </div>
    // </Styled.FeedbackContainer>
  );
};

export default PortfolioSwipers;
