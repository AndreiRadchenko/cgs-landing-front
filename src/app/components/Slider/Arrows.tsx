import React, { useMemo } from "react";
import Image from "next/image";

import leftArrowSvg from "../../../../public/leftVector.svg";
import RightArrowSvg from "../../../../public/rightVector.svg";

import * as Styled from "./Arrows.styles";

export interface ArrowProps {
  visible: boolean;
  image: {
    src: string;
    width: number;
    height: number;
  };
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Arrow: React.FC<ArrowProps> = ({ visible, image, onClick }) => {
  const onArrowClick = useMemo(
    () => {
      if (!visible) {
        return undefined;
      }

      return onClick;
    },
    [visible, onClick],
  );

  return (
    <Styled.ArrowContainer
      visible={visible}
      width={image.width}
      height={image.height}
      onClick={onArrowClick}
    >
      <Image
        src={image.src}
        alt={image.src}
        width={image.width}
        height={image.height}
      />
    </Styled.ArrowContainer>
  );
};

export interface PrevArrowProps extends Omit<ArrowProps, "image"> {}

export const PrevArrow: React.FC<PrevArrowProps> = (props) => {
  return (
    <Styled.PrevArrowContainer>
      <Arrow
        visible={props.visible}
        image={leftArrowSvg}
        onClick={props.onClick}
      />
    </Styled.PrevArrowContainer>
  );
};

export interface NextArrowProps extends Omit<ArrowProps, "image"> {}

export const NextArrow: React.FC<NextArrowProps> = (props) => {
  return (
    <Styled.NextArrowContainer>
      <Arrow
        visible={props.visible}
        image={RightArrowSvg}
        onClick={props.onClick}
      />
    </Styled.NextArrowContainer>
  );
};
