import { SwiperProps } from "swiper/react";

const data: SwiperProps = {
  slidesPerView: "auto",
  spaceBetween: 24,
  allowTouchMove: true,
  grabCursor: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
};

export default data;
