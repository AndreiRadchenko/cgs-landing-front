import { IPortfolioReview } from "../../../types/Admin/AdminPortfolioPage.types";
import React, { FC, useEffect, useRef, useState } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import Image from "next/image";
import * as Styled from "../../../styles/PortfolioSlider.styled";
import params from "../../../mock/PorfolioPageSwiperParams";
import Review from "../../Portfolio/Review";
import TriangleButton from "../../TriangleButton/TriangleButton";
import backButton from "../../../../public/arrowPortfolioBack.svg";
import nextButton from "../../../../public/arrowPortfolioNext.svg";
import nextButtonHover from "../../../../public/arrowPortfolioNextHover.svg";
import backButtonHover from "../../../../public/arrowPortfolioBackHover.svg";
import { useWindowDimension } from "../../../hooks/useWindowDimension";

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
    renderSliderSlides = [...reviews].reverse().map((review, idx) =>
      isMobile ? (
        <Review key={idx} review={review} />
      ) : (
        <SwiperSlide key={idx}>
          <Review review={review} />
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
      <Styled.PortfolioRow>
        {isMobile ? (
          <>
            {/*<Styled.ButtonInfo*/}
            {/*  clicked={isShow}*/}
            {/*  ref={navRef}*/}
            {/*  className={isOnTop ? "sticky-top" : undefined}*/}
            {/*>*/}
            {/*  <Styled.Category>{category}</Styled.Category>*/}
            {/*  <TriangleButton*/}
            {/*    onClick={() => setIsShow(() => !isShow)}*/}
            {/*    isClicked={isShow}*/}
            {/*  />*/}
            {/*</Styled.ButtonInfo>*/}
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
              <div onMouseOver={handleHoverNext} onMouseLeave={handleLeaveNext}>
                <Image
                  src={hoverNext ? nextButtonHover : nextButton}
                  className={"swiper-button-next"}
                  alt="portfolio next button"
                />
              </div>
              <div onMouseOver={handleHoverPrev} onMouseLeave={handleLeavePrev}>
                <Image
                  src={hoverPrev ? backButtonHover : backButton}
                  className={"swiper-button-prev"}
                  alt="portfolio back button"
                />
              </div>
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
