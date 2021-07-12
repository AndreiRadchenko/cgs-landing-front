import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";

import { debounce } from "ts-debounce";

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
  items,
  renderItem,
  swiperOptions,
}: SliderProps<T>) {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(
    () => {
      if (swiper === null || items.length === 0) {
        return;
      }

      setShowArrows(swiper.params.enabled ?? false);

      const onBreakpoint = (swiper: SwiperCore, options: SwiperOptions) => {
        setShowArrows(options.enabled ?? false);
      };

      const updateSwiper = debounce(
        () => {
          swiper.update();
        },
        300,
      );
 
      swiper.on("breakpoint", onBreakpoint);

      window.addEventListener("resize", updateSwiper);
      document.addEventListener("DOMContentLoaded", updateSwiper);
      
      return () => {
        swiper.off("breakpoint", onBreakpoint);

        window.removeEventListener("resize", updateSwiper);
        document.removeEventListener("DOMContentLoaded", updateSwiper);
      };
    },
    [swiper, items],
  );

  const memoizedOptions = useMemo(
    () => {
      if (swiperOptions === undefined) {
        return undefined;
      }

      const newSwiperOptions: SwiperOptions = {
        loop: true,
        slidesPerView: 1,
        loopAdditionalSlides: items.length,

        ...swiperOptions,
      };

      if (swiperOptions.breakpoints !== undefined) {
        const newBreakpoints: NonNullable<SwiperOptions['breakpoints']> =  {};        

        for (const [ratio, options] of Object.entries(swiperOptions.breakpoints)) {
          const newBreakpoint: SwiperOptions = { ...options };

          if (options.slidesPerView !== undefined) {
            const isInfinite = items.length > options.slidesPerView;

            newBreakpoint.enabled = isInfinite;
            newBreakpoint.allowTouchMove = isInfinite;
            newBreakpoint.allowSlidePrev = isInfinite;
            newBreakpoint.allowSlideNext = isInfinite;
          }

          newBreakpoints[ratio] = newBreakpoint; 
        }

        newSwiperOptions.breakpoints = newBreakpoints;
      }

      return newSwiperOptions;
    },
    [swiperOptions, items],
  );

  const onPrevSlide = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (swiper === null) {
        return;
      }

      if (swiper.isBeginning && !swiper.params.loop) {
        return;
      } 

      swiper.slidePrev();
    },
    [swiper],
  );

  const onNextSlide = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (swiper === null) {
        return;
      }

      if (swiper.isEnd && !swiper.params.loop) {
        return;
      }

      swiper.slideNext();
    },
    [swiper],
  );

  return (
    <Styled.Container>
      <PrevArrow visible={showArrows} onClick={onPrevSlide} />
      <Swiper
        onSwiper={setSwiper}
        {...memoizedOptions}
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
