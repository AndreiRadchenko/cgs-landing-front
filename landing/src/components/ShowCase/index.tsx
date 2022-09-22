import React, { useEffect, useState } from "react";
import * as Styled from "../../styles/ShowCase.styled";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminPortfolioPageService } from "../../services/adminPortfolioPage";
import { IReviewProps } from "../../types/Admin/Response.types";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Slide from "./Slide";

const SliderProps: SwiperProps = {
  slidesPerView: 3.1,
  spaceBetween: 28,
  className: "mySwiper",
  loop: true,

  breakpoints: {
    2420: {
      slidesPerView: 4.1,
    },
    1375: {
      slidesPerView: 3.1,
    },
    940: {
      slidesPerView: 2.1,
    },
    768: { spaceBetween: 11, slidesPerView: 1.17 },
    670: { spaceBetween: 11, slidesPerView: 2.05 },
    374: {
      spaceBetween: 11,
      slidesPerView: 1.17,
    },
    300: {
      centeredSlides: true,
      slidesPerView: 1,
    },
  },
};

interface IShowCase {
  projects?: string[];
}

const ShowCase = ({ projects }: IShowCase) => {
  const [currentProjects, setCurrentProjects] = useState<IReviewProps[]>();
  const { data } = useQuery(queryKeys.getPortfolio, () =>
    adminPortfolioPageService.getPortfolio()
  );

  useEffect(() => {
    setCurrentProjects(
      data?.reviews.filter((review) => projects?.includes(review.title))
    );
  }, [data?.reviews, projects]);

  return (
    <Styled.SliderWrapper>
      <Styled.SliderHeader>
        <span>OUR WORK</span>
        <span>OUR WORK</span>
        <span>OUR WORK</span>
        <span>OUR WORK</span>
        <span>OUR WORK</span>
        <span>OUR WORK</span>
      </Styled.SliderHeader>
      <Swiper {...SliderProps}>
        {currentProjects?.map((el, ind) => (
          <SwiperSlide key={ind}>
            <Slide review={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.SliderWrapper>
  );
};

export default ShowCase;
