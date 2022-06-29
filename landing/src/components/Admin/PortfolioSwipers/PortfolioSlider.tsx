import {
  IPortfolioData,
  IPortfolioReview,
} from "../../../types/Admin/AdminPortfolioPage.types";
import React, { FC, useRef } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import * as Styled from "../../../styles/PortfolioSlider.styles";
import params from "../../../mock/PorfolioPageSwiperParams";
import Review from "../../Portfolio/Review";

interface IPortfolioSwipers {
  reviews: IPortfolioReview[] | undefined;
  category: string;
}

SwiperCore.use([Navigation, Autoplay]);

const PortfolioSlider: FC<IPortfolioSwipers> = ({ reviews, category }) => {
  const portfolioRef = useRef(null);

  let renderSliderSlides;
  if (reviews) {
    renderSliderSlides = [...reviews].reverse().map((review, idx) => (
      <SwiperSlide key={idx}>
        <Review review={review} />
      </SwiperSlide>
    ));
  }

  return reviews ? (
    <div ref={portfolioRef}>
      <Styled.PortfolioRow>
        <Swiper {...params}>
          <Styled.NavigateLeft className={"swiper-button-prev"}>
            {category}
          </Styled.NavigateLeft>
          <Styled.NavigateRight>
            <div className={"swiper-button-next"} />
          </Styled.NavigateRight>
          {renderSliderSlides}
        </Swiper>
      </Styled.PortfolioRow>
    </div>
  ) : (
    <div>Something went wrong:/</div>
  );
};

export default PortfolioSlider;
