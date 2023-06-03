import React, { FC } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import { SliderWrapper } from "./VerticalSlider.styled";

interface ISliderProps {
  children?: React.ReactNode;
  isReverse?: boolean;
  direction?: "vertical" | "horizontal" | undefined;
}

export const VerticalSlider: FC<ISliderProps> = ({
  isReverse = false,
  direction = "vertical",
  children,
}) => {
  return (
    <SliderWrapper>
      <Swiper
        direction={direction}
        spaceBetween={18}
        slidesPerView={"auto"}
        centeredSlides={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: isReverse,
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        speed={7000}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </SliderWrapper>
  );
};
