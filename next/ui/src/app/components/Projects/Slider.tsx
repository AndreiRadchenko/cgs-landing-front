import "swiper/swiper.min.css";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/core";

import { slides } from "../../../app/img";

import { IProject } from "types/components";

import { Project } from "./Project";

import * as Styled from "./Slider.styles";

export interface ProjectsSliderProps {
  projects: IProject[];
}

export const ProjectsSlider: React.FC<ProjectsSliderProps> = ({ projects }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const onPrevSlide = () => {
    swiper?.slidePrev();
  };

  const onNextSlide = () => {
    swiper?.slideNext();
  };

  return (
    <Styled.Container>
      <div onClick={onPrevSlide} style={{ paddingRight: '20px' }}>
        <img src={slides.LeftVector} alt="prev" />
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        onSwiper={setSwiper}
        preloadImages={false}
        lazy={true}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Styled.SlideContainer key={project.id}>
              <Project project={project} />
            </Styled.SlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>
      <div onClick={onNextSlide} style={{ paddingLeft: '20px' }}>
        <img src={slides.RightVector} alt="next" />
      </div>
    </Styled.Container>
  );
};
