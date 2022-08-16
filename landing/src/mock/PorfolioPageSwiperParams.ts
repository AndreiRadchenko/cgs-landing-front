import { SwiperProps } from "swiper/react";

const data: SwiperProps = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  allowTouchMove: false,
  grabCursor: false,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  speed: 500,
};

export default data;
