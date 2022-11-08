import React, { useEffect, useState } from "react";
import * as Styled from "../../styles/ShowCase.styled";
import { useQuery } from "@tanstack/react-query";
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

interface IShowCaseProps {
  projects?: string[];
}

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

  return (
    (projects && projects.length !== 0 && (
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
            {currentProjects?.map(
              (el, ind) =>
                el && (
                  <SwiperSlide key={ind}>
                    <Slide review={el} />
                  </SwiperSlide>
                )
            )}
          </Swiper>
          <Styled.NavigateRight>
            <Styled.ArrowContainer>
              <svg
                width="40"
                className="swiper-button-next"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6788 38.7186C29.9947 38.7186 38.3797 30.3954 38.4072 20.1283C38.4347 9.86113 30.0943 1.53796 19.7783 1.53796C9.46234 1.53796 1.07733 9.86113 1.04984 20.1283C1.02236 30.3954 9.36281 38.7186 19.6788 38.7186Z"
                  fill="#F1EFED"
                  stroke="black"
                  strokeWidth="1.7"
                  strokeMiterlimit="10"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.3726 10.6605L28.5378 19.8735L28.5263 19.885L28.5377 19.8966L18.8444 29.5332L17.5319 28.2133L24.9733 20.8154L10.9673 20.8154L10.9773 18.9491H24.9785L18.0457 11.9801L19.3726 10.6605Z"
                  fill="black"
                />
              </svg>
            </Styled.ArrowContainer>
            <Styled.ArrowContainer>
              <svg
                className="swiper-button-prev"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7783 1.53799C9.46231 1.53799 1.07729 9.86116 1.0498 20.1283C1.02232 30.3955 9.36278 38.7186 19.6787 38.7186C29.9947 38.7186 38.3797 30.3955 38.4072 20.1283C38.4347 9.86116 30.0942 1.53799 19.7783 1.53799Z"
                  fill="#F1EFED"
                  stroke="black"
                  strokeWidth="1.7"
                  strokeMiterlimit="10"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.0845 29.5961L10.9192 20.3831L10.9307 20.3716L10.9193 20.36L20.6126 10.7234L21.9252 12.0433L14.4837 19.4412H28.4897L28.4798 21.3075H14.4786L21.4114 28.2765L20.0845 29.5961Z"
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
    )) ||
    null
  );
};

export default ShowCase;
