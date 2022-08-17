import { SwiperProps } from "swiper/react";

const data: SwiperProps = {
  slidesPerView: "auto",
  loop: true,
  allowTouchMove: false,
  grabCursor: false,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  focusableElements: "button",
  speed: 500,
};

export default data;
