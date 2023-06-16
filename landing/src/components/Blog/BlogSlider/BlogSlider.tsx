import React, { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import { SliderWrapper } from "./BlogSlider.styled";
import { IArticle } from "../../../types/Admin/Response.types";

interface ISliderProps {
  children?: React.ReactNode;
  slides?: IArticle[];
}

export const BlogSwiper: FC<ISliderProps> = ({ children }) => {
  return (
    <SliderWrapper>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={false}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </SliderWrapper>
  );
};
