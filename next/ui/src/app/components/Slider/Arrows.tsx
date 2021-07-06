import React, { useMemo } from "react";

import { slides } from "../../../app/img";

import * as Styled from "./Arrows.styles";

export interface ArrowProps {
  visible: boolean;
  imageSrc: string;
  onClick: (...args: any[]) => any;
}

export const Arrow: React.FC<ArrowProps> = ({
  visible,
  imageSrc,
  onClick,
}) => {
  const onArrowClick = useMemo(() => {
    if (!visible) {
      return undefined;
    }

    return onClick;
  }, [visible, onClick]);

  return (
    <Styled.ArrowContainer visible={visible} onClick={onArrowClick}>
      <img src={imageSrc} alt={imageSrc} />
    </Styled.ArrowContainer>
  );
};

export interface PrevArrowProps extends Omit<ArrowProps, "imageSrc"> {}

export const PrevArrow: React.FC<PrevArrowProps> = (props) => {
  return (
    <Styled.PrevArrowContainer>
      <Arrow
        visible={props.visible}
        imageSrc={slides.LeftVector}
        onClick={props.onClick}
      />
    </Styled.PrevArrowContainer>
  );
};

export interface NextArrowProps extends Omit<ArrowProps, "imageSrc"> {}

export const NextArrow: React.FC<NextArrowProps> = (props) => {
  return (
    <Styled.NextArrowContainer>
      <Arrow
        visible={props.visible}
        imageSrc={slides.RightVector}
        onClick={props.onClick}
      />
    </Styled.NextArrowContainer>
  );
};
