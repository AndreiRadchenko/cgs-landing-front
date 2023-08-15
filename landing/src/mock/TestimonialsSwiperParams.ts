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
  breakpoints: {
    320: {
      loop: true,
      autoplay: true,
      slidesPerView: 1,
    },
    475: {
      autoplay: false,
      loop: false,
      slidesPerView: "auto",
    },
  },
};

export default data;
