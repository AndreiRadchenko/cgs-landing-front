import { SwiperProps } from "swiper/react";

const data: SwiperProps = {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
  allowTouchMove: true,
  grabCursor: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
};

export default data;
