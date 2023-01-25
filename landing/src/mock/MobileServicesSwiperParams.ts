import { SwiperProps } from "swiper/react";

const data: SwiperProps = {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  allowTouchMove: true,
  grabCursor: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 700,
  focusableElements: "button",
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
};

export default data;
