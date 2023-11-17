import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import leftArrow from "../../../../public/HomePageDecoration/larr.svg";
import rightArrow from "../../../../public/HomePageDecoration/rarr.svg";

import * as Styled from "./LeftArrow.styled";
import { useWinDimension } from "../../../hooks/useWindowDimension";

export const LeftArrow = ({ isRight = false }: { isRight?: boolean }) => {
  const [isArrowVisible, setIsArrowVisible] = useState(true);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const { width } = useWinDimension();

  useEffect(() => {
    if (arrowRef.current) {
      if (arrowRef.current?.getBoundingClientRect().width < 35) {
        setIsArrowVisible(false);
      } else {
        setIsArrowVisible(true);
      }
    }
  }, [arrowRef, width]);

  return (
    <Styled.ArrowContainer ref={arrowRef}>
      {isArrowVisible && (
        <>
          <Styled.ArrowHead isRight={isRight}>
            <Image
              src={isRight ? rightArrow.src : leftArrow.src}
              alt="wide tech long arrow"
              layout="fill"
              objectFit="cover"
              objectPosition={isRight ? "right" : "left"}
              priority
            />
          </Styled.ArrowHead>
          <Styled.ArrowShaft isRight={isRight} />
        </>
      )}
    </Styled.ArrowContainer>
  );
};
