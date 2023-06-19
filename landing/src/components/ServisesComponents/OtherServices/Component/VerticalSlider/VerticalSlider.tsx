import React, { FC, useRef } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperRef } from "swiper/react";
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
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleMouseEnter = () => {
    swiperRef.current?.swiper.autoplay.stop();
    swiperRef.current?.swiper.slidePrev();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.swiper.autoplay.start();
  };
  return (
    <SliderWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isReverse={isReverse}
    >
      <Swiper
        ref={swiperRef}
        direction={direction}
        spaceBetween={18}
        slidesPerView={"auto"}
        centeredSlides={true}
        threshold={50}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        loopPreventsSliding={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        speed={3000}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </SliderWrapper>
  );
};
