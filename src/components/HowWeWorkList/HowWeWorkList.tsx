import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/mousewheel";

import HowWeWorkCard from "../HowWeWorkCard/HowWeWorkCard";
import { IHowWeWorkCardProps } from "../HowWeWorkCard/types";

SwiperCore.use([Mousewheel, Pagination]);

const HowWeWorkList = ({ items }: { items: IHowWeWorkCardProps[] }) => {
  return (
    <Swiper spaceBetween={10} mousewheel={{ releaseOnEdges: true }}>
      {items &&
        [...items].map((item, idx) => (
          <SwiperSlide key={idx}>
            <HowWeWorkCard key={idx.toString()} {...item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default HowWeWorkList;
