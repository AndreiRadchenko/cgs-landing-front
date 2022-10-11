import React, { useEffect, useState } from "react";
import * as Styled from "../../styles/ShowCase.styled";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminPortfolioService } from "../../services/adminPortfolioPage";
import { IReviewProps } from "../../types/Admin/Response.types";
import SwiperCore, { Navigation, Scrollbar } from "swiper";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slide from "./Slide";

SwiperCore.use([Scrollbar]);

const SliderProps: SwiperProps = {
  slidesPerView: 2,
  loop: true,
  className: "mySwiper",
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 0 },
    300: {
      slidesPerView: 1,
      spaceBetween: 21,
      modules: [Scrollbar],
      scrollbar: {
        dragSize: 57,
        dragClass: "swiper-thumb",
        hide: false,
        el: ".swiper-scrollbar",
        draggable: true,
      },
    },
  },
};

interface IShowCase {
  projects?: string[];
}

const ShowCase = ({ projects }: IShowCase) => {
  const [currentProjects, setCurrentProjects] = useState<IReviewProps[]>([]);
  const { data } = useQuery(queryKeys.getPortfolio, () =>
    adminPortfolioService.getReviews()
  );

  useEffect(() => {
    if (data) {
      setCurrentProjects(
        data.filter((review) => projects?.includes(review.title))
      );
    }
  }, [data, projects]);

  return (
    <Styled.HoverWrapper>
      <Styled.SliderWrapper>
        <Styled.NavigateLeft>
          OUR WORK
          <svg
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.5 8L0.138784 0.5L14.8612 0.5L7.5 8Z" />
          </svg>
        </Styled.NavigateLeft>
        <Swiper {...SliderProps}>
          {currentProjects?.map((el, ind) => (
            <SwiperSlide key={ind}>
              <Slide review={el} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Styled.NavigateRight>
          <Styled.ArrowContainer>
            <svg
              className="swiper-button-next"
              fill="none"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2846 48.6355C32.2733 53.6972 43.6635 50.5591 48.7252 41.6264C53.787 32.6936 50.6035 21.3489 41.6147 16.2871C32.6259 11.2254 21.2358 14.3635 16.174 23.2962C11.1123 32.229 14.2958 43.5738 23.2846 48.6355Z"
                fill="#F1EFED"
                stroke="black"
                strokeWidth="1.7"
                strokeMiterlimit="10"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.9661 23.0272L41.2694 32.1009L41.258 32.1125L41.2697 32.1239L31.723 41.9058L30.3906 40.6058L37.7195 33.0964L23.7151 33.3079L23.6969 31.4417L37.6965 31.2303L30.6593 24.3668L31.9661 23.0272Z"
                fill="black"
              />
            </svg>
          </Styled.ArrowContainer>
          <Styled.ArrowContainer>
            <svg
              className="swiper-button-prev"
              fill="none"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.5171 16.2198C32.498 11.2124 21.1269 14.4192 16.1192 23.3823C11.1115 32.3455 14.3634 43.6708 23.3825 48.6782C32.4017 53.6856 43.7727 50.4788 48.7804 41.5157C53.7882 32.5525 50.5363 21.2272 41.5171 16.2198Z"
                fill="#F1EFED"
                stroke="black"
                strokeWidth="1.7"
                strokeMiterlimit="10"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.9902 41.88L23.6322 32.8627L23.6435 32.8509L23.6318 32.8396L33.1193 23.0003L34.4595 24.2922L27.1761 31.8457L41.1789 31.5497L41.2084 33.4158L27.2103 33.7117L34.2889 40.5326L32.9902 41.88Z"
                fill="black"
              />
            </svg>
          </Styled.ArrowContainer>
        </Styled.NavigateRight>
        <Styled.SliderScrollbar className="swiper-scrollbar">
          <div />
          <Styled.ScrollbarThumb className="swiper-thumb">
            <div />
            <div />
            <div />
            <div />
          </Styled.ScrollbarThumb>
        </Styled.SliderScrollbar>
      </Styled.SliderWrapper>
    </Styled.HoverWrapper>
  );
};

export default ShowCase;
