import React, { useRef, useState, useCallback, useEffect } from "react";
import Slider from "react-slick";

import HowWeWorkCard from "../HowWeWorkCard/HowWeWorkCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import { insertHowWeWorkData } from "../../utils/HowWeWorkDataCreator";

interface IHowWeWorkProps {
  isClicked: boolean;
}

const HowWeWorkList = ({ isClicked }: IHowWeWorkProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { width } = useWindowDimension();
  const settings = {
    dots: true,
    infinite: false,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
    },
  };
  const sliderRef = useRef<Slider>(null);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.HowWeWorkBlock;

  const items = insertHowWeWorkData(data);

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.75 });
  const isVisible = !!entry?.isIntersecting;

  if (!isClicked && isVisible && ref.current)
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });

  const scroll = useCallback(
    (y) => {
      if (y > 0) {
        return sliderRef?.current?.slickNext();
      } else {
        return sliderRef?.current?.slickPrev();
      }
    },
    [sliderRef]
  );
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("wheel", (e) => {
        scroll(e.deltaY);
      });
    }
  }, [scroll]);

  return (
    <div ref={ref}>
      <Slider {...settings} ref={sliderRef}>
        {items &&
          [...items].map((item) => (
            <div key={item.rank}>
              <HowWeWorkCard {...item} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default HowWeWorkList;
