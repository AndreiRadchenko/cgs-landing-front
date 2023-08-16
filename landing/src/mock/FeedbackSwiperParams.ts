import { SwiperProps } from "swiper/react";

const data: SwiperProps = {
  slidesPerView: 3,
  spaceBetween: 30,
  allowTouchMove: true,
  grabCursor: true,
  navigation: {
    prevEl: ".swiper-button-prev-feedback",
    nextEl: ".swiper-button-next-feedback",
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
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export default data;
