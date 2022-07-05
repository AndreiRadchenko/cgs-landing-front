import { SwiperProps } from "swiper/react";

const data: SwiperProps = {
  slidesPerView: 1.3,
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
};

export default data;
