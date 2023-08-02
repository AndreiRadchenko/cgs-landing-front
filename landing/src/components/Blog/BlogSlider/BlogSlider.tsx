import React, { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import { SliderWrapper } from "./BlogSlider.styled";
import { ISliderProps } from "../../../types/Blog.types";

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
