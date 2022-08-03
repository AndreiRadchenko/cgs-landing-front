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
import backButton from "../../../../public/Portfolio/left.svg";
import nextButton from "../../../../public/Portfolio/right.svg";
import nextButtonHover from "../../../../public/Portfolio/hoverRight.svg";
import backButtonHover from "../../../../public/Portfolio/hoverLeft.svg";

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
                onMouseOver={handleHoverNext}
                onMouseLeave={handleLeaveNext}
              >
                <Image
                  src={hoverNext ? nextButtonHover : nextButton}
                  className={"swiper-button-next"}
                  alt="portfolio next button"
                  width={"100%"}
                  height={"100%"}
                />
              </Styled.ArrowContainer>
              <Styled.ArrowContainer
                onMouseOver={handleHoverPrev}
                onMouseLeave={handleLeavePrev}
              >
                <Image
                  src={hoverPrev ? backButtonHover : backButton}
                  alt="portfolio back button"
                  className={"swiper-button-prev"}
                  width={"100%"}
                  height={"100%"}
                />
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
