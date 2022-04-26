import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/mousewheel";

import HowWeWorkCard from "../HowWeWorkCard/HowWeWorkCard";
import { IHowWeWorkCardProps } from "../HowWeWorkCard/types";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import * as Styles from "./HowWeWorkList.styled";

SwiperCore.use([Mousewheel, Pagination]);

const HowWeWorkList = ({ items }: { items: IHowWeWorkCardProps[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.75 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <Styles.Container ref={ref}>
      {!isVisible ? (
        <HowWeWorkCard {...items[currentSlide]} />
      ) : (
        <Swiper
          observer={true}
          spaceBetween={10}
          mousewheel={{ releaseOnEdges: true }}
          speed={700}
          pagination={{ clickable: true }}
          onSlideChange={(e) => setCurrentSlide(e.activeIndex)}
          initialSlide={currentSlide}
        >
          {items &&
            [...items].map((item, idx) => (
              <SwiperSlide key={idx}>
                <HowWeWorkCard key={idx.toString()} {...item} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </Styles.Container>
  );
};

export default HowWeWorkList;
