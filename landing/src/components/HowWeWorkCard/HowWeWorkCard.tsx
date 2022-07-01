import React, { useRef } from "react";
import * as Styles from "./HowWeWorkCard.styled";
import { IHowWeWorkCardProps } from "./types";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Image from "next/image";

const HowWeWorkCard = ({
  title,
  contentTitle,
  contentText,
  rank,
  backGroundColor,
  imgUrl,
  additionalImgUrl,
}: IHowWeWorkCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <Styles.Container backGroundColor={backGroundColor}>
      <Styles.NumberContainer ref={ref}>
        <Styles.Number active={isVisible} backGroundColor={backGroundColor}>
          #{rank}
        </Styles.Number>
      </Styles.NumberContainer>
      <Styles.TitleContainer>
        <Styles.Title>{"//" + title}</Styles.Title>
      </Styles.TitleContainer>
      <Styles.ContentContainer>
        <Styles.ContentTextContainer className={additionalImgUrl}>
          <Styles.ContentTitle>{contentTitle}</Styles.ContentTitle>
          <Styles.ContentTextWrapper>
            <Styles.ContentText>{contentText}</Styles.ContentText>
          </Styles.ContentTextWrapper>
        </Styles.ContentTextContainer>

        <Styles.ContentImgContainer className={additionalImgUrl}>
          <Styles.ContentImage active={isVisible} className={additionalImgUrl}>
            <Image src={imgUrl} alt={contentTitle} layout="fill" />
          </Styles.ContentImage>
        </Styles.ContentImgContainer>
      </Styles.ContentContainer>
    </Styles.Container>
  );
};

export default HowWeWorkCard;
