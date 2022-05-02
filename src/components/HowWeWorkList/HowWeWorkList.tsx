import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/mousewheel";

import HowWeWorkCard from "../HowWeWorkCard/HowWeWorkCard";
import { IHowWeWorkCardProps } from "../HowWeWorkCard/types";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useWindowDimension } from "../../hooks/useWindowDimension";

SwiperCore.use([Mousewheel, Pagination]);

const HowWeWorkList = ({ items }: { items: IHowWeWorkCardProps[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { width } = useWindowDimension();

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.75 });
  const isVisible = !!entry?.isIntersecting;

  const isReleaseOnEdges = (e: SwiperCore, bool: boolean, time: number) => {
    setTimeout(() => {
      if (
        e.params &&
        e.params.mousewheel &&
        typeof e.params.mousewheel !== "boolean"
      ) {
        e.params.mousewheel.releaseOnEdges = bool;
      }
    }, time);
  };

  return width && width > 768 ? (
    <div ref={ref}>
      {!isVisible ? (
        <HowWeWorkCard {...items[currentSlide]} />
      ) : (
        <Swiper
          observer={true}
          spaceBetween={10}
          mousewheel={{ releaseOnEdges: true }}
          speed={600}
          pagination={{ clickable: true }}
          onSlideChange={(e) => {
            setCurrentSlide(e.activeIndex);
            isReleaseOnEdges(e, false, 0);
          }}
          onReachBeginning={(e) => isReleaseOnEdges(e, true, 300)}
          onReachEnd={(e) => isReleaseOnEdges(e, true, 300)}
          initialSlide={currentSlide}
        >
          {items &&
            [...items].map((item) => (
              <SwiperSlide key={item.rank}>
                <HowWeWorkCard {...item} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  ) : (
    <div>
      {items &&
        [...items].map((item) => <HowWeWorkCard key={item.rank} {...item} />)}
    </div>
  );
};

export default HowWeWorkList;
