import React, { useState, useEffect, useCallback } from "react";

import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore, SwiperOptions } from "swiper/core";

import { PrevArrow, NextArrow } from "./Arrows";

import * as Styled from "./Slider.styles";

export interface SliderProps<T> {
  swiperOptions?: SwiperOptions;
  items: T[];
  renderItem: (item: T, index: number) => JSX.Element;
}

export function Slider<T extends { id: any }>({
  swiperOptions,
  items,
  renderItem,
}: SliderProps<T>) {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    if (swiper === null || items.length === 0) {
      return;
    }

    const slidesPerView = swiper.params?.slidesPerView;

    if (slidesPerView !== undefined) {
      setShowArrows(items.length > slidesPerView);
    }

    const onBreakpoint = (swiper, options) => {
      if (options.slidesPerView === undefined) {
        return;
      }

      setShowArrows(items.length > options.slidesPerView);
    };

    swiper.on('breakpoint', onBreakpoint);

    return () => {
      swiper.off('breakpoint', onBreakpoint);
    };
  }, [swiper, items]);

  const onPrevSlide = useCallback(() => {
    swiper?.slidePrev();
  }, [swiper]);

  const onNextSlide = useCallback(() => {
    swiper?.slideNext();
  }, [swiper]);

  return (
    <Styled.Container>
      <PrevArrow visible={showArrows} onClick={onPrevSlide} />
      <Swiper
        loop={true}
        slidesPerView={1}
        onSwiper={setSwiper}
        {...swiperOptions}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Styled.SlideContainer>
              {renderItem(item, index)}
            </Styled.SlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>
      <NextArrow visible={showArrows} onClick={onNextSlide} />
    </Styled.Container>
  );
};
