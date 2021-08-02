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
  items: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  swiperOptions?: SwiperOptions;
}

export function Slider<T extends { id: any }>({
  items,
  renderItem,
  swiperOptions = {},
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

          window.dispatchEvent(new Event('resize'));
        },
        1000,
      );

      updateSwiper();

      swiper.on("breakpoint", onBreakpoint);   

      document.addEventListener("DOMContentLoaded", updateSwiper);

      return () => {
        swiper.off("breakpoint", onBreakpoint);

        document.removeEventListener("DOMContentLoaded", updateSwiper);
      };
    },
    [swiper, items],
  );

  const defaultOptions: SwiperOptions = useMemo(
    () => ({
      loop: true,
      slidesPerView: 1,
      loopAdditionalSlides: Math.floor(items.length / 2),
    }),
    [items],
  );

  const memoizedOptions = useMemo(
    () => {
      const newSwiperOptions: SwiperOptions = {
        ...defaultOptions,
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
    [items, defaultOptions, swiperOptions],
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
      <Swiper {...memoizedOptions} onSwiper={setSwiper}>
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
