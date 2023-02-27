import { IPortfolioReview } from "../../../types/Admin/AdminPortfolio.types";
import React, { FC, RefAttributes, useEffect, useRef, useState } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import * as Styled from "../../../styles/PortfolioSlider.styled";
import params from "../../../mock/PorfolioPageSwiperParams";
import Review from "../../Portfolio/Review";
import { Separator } from "../../../styles/Blog.styled";
import { makeALink } from "../../../utils/makeALink";
import { AnchorLinkContainer } from "../../Portfolio/AnchorLinkContainer";

interface IPortfolioSwipers {
  reviews: IPortfolioReview[] | undefined;
  category: string;
  isMobile: boolean;
}

SwiperCore.use([Navigation, Autoplay]);

const Position = (obj: any) => {
  let currentTop = 0;
  if (obj!.offsetParent) {
    do {
      currentTop += obj!.offsetTop;
    } while ((obj = obj!.offsetParent));
    return currentTop;
  }
};

const PortfolioSlider: FC<IPortfolioSwipers> = ({
  reviews,
  category,
  isMobile,
}) => {
  const [isOnTop, setIsOnTop] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState("");
  const portfolioRef = useRef(null);
  const navRef = useRef<HTMLInputElement>(null);

  const RefSwiper: React.FunctionComponent<
    SwiperProps & RefAttributes<SwiperCore>
  > = Swiper;

  const swiperRef = useRef<any>(null);

  let renderSliderSlides;
  if (reviews) {
    renderSliderSlides = reviews.map((review, idx) =>
      isMobile ? (
        <Review
          key={idx}
          review={review}
          className={isOpen ? "open" : undefined}
        />
      ) : (
        <SwiperSlide key={idx}>
          <Review review={review} />
        </SwiperSlide>
      )
    );
  }

  useEffect(() => {
    if (window.location.href.includes("#")) {
      const elementToScroll = document.getElementById(
        window.location.href.split("#")[1]
      );
      if (
        isMobile &&
        navRef.current!.id === window.location.href.split("#")[1].split("_")[0]
      ) {
        setIsOpen(true);
        setTimeout(() => {
          window.scrollTo({
            top: Position(elementToScroll!),
            left: 0,
            behavior: "smooth",
          });
        }, 1000);
      } else {
        setTimeout(() => {
          window.scrollTo({
            top: window.scrollY - 100,
            left: 0,
            behavior: "smooth",
          });
        }, 1);
        if (window.location.href.includes("_") && swiperRef!.current)
          swiperRef!.current.swiper.slideTo(
            elementToScroll!.parentElement!.getAttribute(
              "data-swiper-slide-index"
            )
          );
      }
    }
  }, []);
  useEffect(() => {
    const getOffset = () => {
      if (navRef.current && navRef.current.getBoundingClientRect) {
        const { y } = navRef.current.getBoundingClientRect();
        y <= 95 && isOpen ? setIsOnTop(true) : setIsOnTop(false);
      }
    };

    window.addEventListener("scroll", getOffset, { passive: true });

    return () => window.removeEventListener("scroll", getOffset);
  }, [isOpen]);

  const navigateMobileClassName = () => {
    let className = "";

    if (isOpen) className += "open ";
    if (isOnTop) className += "top ";
    return className;
  };

  return isMobile ? (
    <Styled.PortfolioRow>
      <Styled.NavigateWrapper>
        <Styled.NavigateLeft
          ref={navRef}
          id={category}
          onClick={() => setIsOpen(!isOpen)}
          className={navigateMobileClassName()}
        >
          {category}
          <svg
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isOpen ? "open" : undefined}
          >
            <path d="M7.5 8L0.138784 0.5L14.8612 0.5L7.5 8Z" />
          </svg>
        </Styled.NavigateLeft>
      </Styled.NavigateWrapper>
      {renderSliderSlides}
    </Styled.PortfolioRow>
  ) : (
    <div ref={portfolioRef} id={category}>
      <Separator className="portfolio" />
      <Styled.PortfolioRow>
        {reviews ? (
          <RefSwiper ref={swiperRef} {...params}>
            <Styled.NavigateLeft
              onClick={() =>
                openCategory === category
                  ? setOpenCategory("")
                  : setOpenCategory(category)
              }
            >
              {category}
              {openCategory === category && (
                <AnchorLinkContainer
                  link={makeALink(category)}
                  isProject={false}
                />
              )}
            </Styled.NavigateLeft>
            <Styled.NavigateRight>
              <Styled.ArrowContainerRight>
                <svg
                  width="40"
                  className="swiper-button-next"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6788 38.7186C29.9947 38.7186 38.3797 30.3954 38.4072 20.1283C38.4347 9.86113 30.0943 1.53796 19.7783 1.53796C9.46234 1.53796 1.07733 9.86113 1.04984 20.1283C1.02236 30.3954 9.36281 38.7186 19.6788 38.7186Z"
                    fill="#F1EFED"
                    stroke="black"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.3726 10.6605L28.5378 19.8735L28.5263 19.885L28.5377 19.8966L18.8444 29.5332L17.5319 28.2133L24.9733 20.8154L10.9673 20.8154L10.9773 18.9491H24.9785L18.0457 11.9801L19.3726 10.6605Z"
                    fill="black"
                  />
                </svg>
              </Styled.ArrowContainerRight>
              <Styled.ArrowContainerLeft>
                <svg
                  className="swiper-button-prev"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7783 1.53799C9.46231 1.53799 1.07729 9.86116 1.0498 20.1283C1.02232 30.3955 9.36278 38.7186 19.6787 38.7186C29.9947 38.7186 38.3797 30.3955 38.4072 20.1283C38.4347 9.86116 30.0942 1.53799 19.7783 1.53799Z"
                    fill="#F1EFED"
                    stroke="black"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.0845 29.5961L10.9192 20.3831L10.9307 20.3716L10.9193 20.36L20.6126 10.7234L21.9252 12.0433L14.4837 19.4412H28.4897L28.4798 21.3075H14.4786L21.4114 28.2765L20.0845 29.5961Z"
                    fill="black"
                  />
                </svg>
              </Styled.ArrowContainerLeft>
            </Styled.NavigateRight>
            {renderSliderSlides}
          </RefSwiper>
        ) : (
          <Styled.NoRewiews>No reviews</Styled.NoRewiews>
        )}
      </Styled.PortfolioRow>
    </div>
  );
};

export default PortfolioSlider;
