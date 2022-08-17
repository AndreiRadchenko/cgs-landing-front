import { IPortfolioReview } from "../../../types/Admin/AdminPortfolioPage.types";
import React, { FC, useEffect, useRef, useState } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import * as Styled from "../../../styles/PortfolioSlider.styled";
import params from "../../../mock/PorfolioPageSwiperParams";
import Review from "../../Portfolio/Review";
import { Separator } from "../../../styles/Blog.styled";

interface IPortfolioSwipers {
  reviews: IPortfolioReview[] | undefined;
  category: string;
  isMobile: boolean;
}

SwiperCore.use([Navigation, Autoplay]);

const PortfolioSlider: FC<IPortfolioSwipers> = ({
  reviews,
  category,
  isMobile,
}) => {
  const [hoverNext, setHoverNext] = useState<boolean>(false);
  const [hoverPrev, setHoverPrev] = useState<boolean>(false);
  const [isOnTop, setIsOnTop] = useState<boolean>(false);
  const [isShow, setIsShow] = useState(false);
  const portfolioRef = useRef(null);
  const navRef = useRef<HTMLInputElement>(null);

  let renderSliderSlides;
  if (reviews) {
    renderSliderSlides = reviews.map((review, idx) =>
      isMobile ? (
        <Review key={idx} review={review} />
      ) : (
        <SwiperSlide key={idx}>
          <Review review={review} idx={idx} />
        </SwiperSlide>
      )
    );
  }

  const getOffset = () => {
    if (navRef.current && navRef.current.getBoundingClientRect) {
      const { y } = navRef.current.getBoundingClientRect();
      y === 0 ? setIsOnTop(true) : setIsOnTop(false);
    }
  };

  const handleHoverNext = () => {
    setHoverNext(true);
  };

  const handleLeaveNext = () => {
    setHoverNext(false);
  };

  const handleHoverPrev = () => {
    setHoverPrev(true);
  };

  const handleLeavePrev = () => {
    setHoverPrev(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", getOffset, { passive: true });

    return () => window.removeEventListener("scroll", getOffset);
  }, []);

  return (
    <div ref={portfolioRef}>
      <Separator className="portfolio" />
      <Styled.PortfolioRow>
        {isMobile ? (
          <>
            {isShow &&
              (reviews ? (
                renderSliderSlides
              ) : (
                <Styled.NoRewiews>No reviews</Styled.NoRewiews>
              ))}
          </>
        ) : reviews ? (
          <Swiper {...params}>
            <Styled.NavigateLeft>{category}</Styled.NavigateLeft>
            <Styled.NavigateRight>
              <Styled.ArrowContainer
                onMouseOver={handleHoverPrev}
                onMouseLeave={handleLeavePrev}
                className={hoverPrev ? "hover" : undefined}
              >
                <svg
                  className="swiper-button-next"
                  fill="none"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2846 48.6355C32.2733 53.6972 43.6635 50.5591 48.7252 41.6264C53.787 32.6936 50.6035 21.3489 41.6147 16.2871C32.6259 11.2254 21.2358 14.3635 16.174 23.2962C11.1123 32.229 14.2958 43.5738 23.2846 48.6355Z"
                    fill="#F1EFED"
                    stroke="black"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.9661 23.0272L41.2694 32.1009L41.258 32.1125L41.2697 32.1239L31.723 41.9058L30.3906 40.6058L37.7195 33.0964L23.7151 33.3079L23.6969 31.4417L37.6965 31.2303L30.6593 24.3668L31.9661 23.0272Z"
                    fill="black"
                  />
                </svg>
              </Styled.ArrowContainer>
              <Styled.ArrowContainer
                onMouseOver={handleHoverNext}
                onMouseLeave={handleLeaveNext}
                className={hoverNext ? "hover" : undefined}
              >
                <svg
                  className="swiper-button-prev"
                  fill="none"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.5171 16.2198C32.498 11.2124 21.1269 14.4192 16.1192 23.3823C11.1115 32.3455 14.3634 43.6708 23.3825 48.6782C32.4017 53.6856 43.7727 50.4788 48.7804 41.5157C53.7882 32.5525 50.5363 21.2272 41.5171 16.2198Z"
                    fill="#F1EFED"
                    stroke="black"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32.9902 41.88L23.6322 32.8627L23.6435 32.8509L23.6318 32.8396L33.1193 23.0003L34.4595 24.2922L27.1761 31.8457L41.1789 31.5497L41.2084 33.4158L27.2103 33.7117L34.2889 40.5326L32.9902 41.88Z"
                    fill="black"
                  />
                </svg>
              </Styled.ArrowContainer>
            </Styled.NavigateRight>
            {renderSliderSlides}
          </Swiper>
        ) : (
          <Styled.NoRewiews>No reviews</Styled.NoRewiews>
        )}
      </Styled.PortfolioRow>
    </div>
  );
};

export default PortfolioSlider;
