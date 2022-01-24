import React from "react";

import * as Styles from "./HowWeWorkCard.styled";
import { IHowWeWorkCardProps } from "./types";
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
  console.log(imgUrl);
  return (
    <Styles.Container
      backGroundColor={backGroundColor}
      additionalImgUrl={additionalImgUrl}
    >
      <Styles.NumberContainer>
        <Styles.Number backGroundColor={backGroundColor}>#{rank}</Styles.Number>
      </Styles.NumberContainer>
      <Styles.TitleContainer>
        <Styles.Title>{"/ / " + title}</Styles.Title>
      </Styles.TitleContainer>
      <Styles.ContentContainer>
        <Styles.ContentTextContainer>
          <Styles.ContentTitle>{contentTitle}</Styles.ContentTitle>
          <Styles.ContentText>{contentText}</Styles.ContentText>
        </Styles.ContentTextContainer>
        <Styles.ContentImgContainer additionalImgUrl={additionalImgUrl}>
          <Styles.ContentImage>
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
        <Styles.AdditionalImgContainer>
          <Styles.AdditionalImg>
            <Image src={additionalImgUrl} alt={contentTitle} layout="fill" />
          </Styles.AdditionalImg>
        </Styles.AdditionalImgContainer>
      )}
    </Styles.Container>
  );
};

export default HowWeWorkCard;
