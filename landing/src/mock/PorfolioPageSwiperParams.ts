import { SwiperProps } from "swiper/react";

const data: SwiperProps = {
  slidesPerView: 1.2,
  spaceBetween: 0,
  loop: true,
  allowTouchMove: true,
  grabCursor: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  focusableElements: "button",
  speed: 500,
  breakpoints: {
    1100: {
      slidesPerView: 1.23,
    },
    900: {
      slidesPerView: 1.25,
    },
    768: {
      slidesPerView: 1.3,
    },
  },
};

export default data;
