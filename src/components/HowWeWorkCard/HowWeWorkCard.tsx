import React, { useRef } from "react";

import * as Styles from "./HowWeWorkCard.styled";
import { IHowWeWorkCardProps } from "./types";
import Image from "next/image";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const HowWeWorkCard = ({
  title,
  contentTitle,
  contentText,
  rank,
  backGroundColor,
  imgUrl,
  additionalImgUrl,
  isFlipImageOnMobile,
}: IHowWeWorkCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <Styles.Container
      backGroundColor={backGroundColor}
      additionalImgUrl={additionalImgUrl}
    >
      <Styles.NumberContainer ref={ref}>
        <Styles.Number active={isVisible} backGroundColor={backGroundColor}>
          #{rank}
        </Styles.Number>
      </Styles.NumberContainer>
      <Styles.TitleContainer>
        <Styles.Title>{"//" + title}</Styles.Title>
      </Styles.TitleContainer>
      <Styles.ContentContainer>
        <Styles.ContentTextContainer>
          <Styles.ContentTitle>{contentTitle}</Styles.ContentTitle>
          <Styles.ContentTextWrapper>
            <Styles.ContentText active={isVisible}>
              {contentText}
            </Styles.ContentText>
          </Styles.ContentTextWrapper>
        </Styles.ContentTextContainer>
        <Styles.ContentImgContainer additionalImgUrl={additionalImgUrl}>
          <Styles.ContentImage
            isFlipOnMobile={isFlipImageOnMobile}
            active={isVisible}
          >
            <Image
              src={imgUrl}
              alt={contentTitle}
              layout="fill"
              objectFit="cover"
            />
          </Styles.ContentImage>
        </Styles.ContentImgContainer>
      </Styles.ContentContainer>
      {additionalImgUrl && (
        <Styles.AdditionalImgContainer active={isVisible}>
          <Styles.AdditionalImg>
            <Image src={additionalImgUrl} alt={contentTitle} layout="fill" />
          </Styles.AdditionalImg>
        </Styles.AdditionalImgContainer>
      )}
    </Styles.Container>
  );
};

export default HowWeWorkCard;
