import React, { useEffect, useState } from "react";
import * as Styled from "../../styles/ShowCase.styled";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminPortfolioService } from "../../services/adminPortfolioPage";
import { IReviewProps } from "../../types/Admin/Response.types";
import { IShowCaseProps } from "../../types/Services.types";
import SwiperCore, {
  Autoplay,
  Navigation,
  Scrollbar,
  EffectFade,
} from "swiper";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Slide from "./Slide";

SwiperCore.use([Scrollbar, Autoplay, EffectFade]);

const SliderProps: SwiperProps = {
  slidesPerView: 1,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  fadeEffect: { crossFade: true },
  className: "mySwiper",
  modules: [Navigation, Autoplay, EffectFade],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const ShowCase = ({ projects }: IShowCaseProps) => {
  const [currentProjects, setCurrentProjects] = useState<
    (IReviewProps | undefined)[]
  >([]);
  const { data } = useQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
  );

  useEffect(() => {
    if (data && projects) {
      setCurrentProjects(
        projects.map((proj) => data?.find((el) => el.title === proj))
      );
    }
  }, [data, projects]);

  return projects && projects.length !== 0 ? (
    <div>
      <Styled.SwiperArrowContainer>
        <div>
          <Styled.ArrowContainer className="prevBtn swiper-button-prev">
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
        </div>
      </Styled.SwiperArrowContainer>
      <Styled.SliderWrapper>
        <Styled.SliderContainerBg></Styled.SliderContainerBg>
        <Swiper {...SliderProps}>
          {currentProjects?.map(
            (el, ind) =>
              el && (
                <SwiperSlide key={ind}>
                  {({ isActive }) => <Slide review={el} isActive={isActive} />}
                </SwiperSlide>
              )
          )}
        </Swiper>
      </Styled.SliderWrapper>
    </div>
  ) : null;
};

export default ShowCase;
