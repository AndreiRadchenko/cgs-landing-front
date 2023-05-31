import React, { CSSProperties } from "react";

import emailIcon from "/public/email.svg";

import * as Styled from "./ContactButton.styled";
import Image from "next/image";

export interface IContactButton {
  picture?: string;
  pictureWidth?: string;
  pictureHeight?: string;
  text?: string;
  link?: string;
  style?: CSSProperties;
}

export const ContactButton = ({
  picture,
  text,
  style,
  pictureWidth,
  pictureHeight,
  link,
}: IContactButton) => {
  return (
    <Styled.ButtonWrapper
      style={style}
      href={link}
      rel="noopener noreferrer"
      target="blank"
    >
      <Styled.ButtonContent>
        <Styled.ImageWrapper
          width={pictureWidth ? pictureWidth : "24px"}
          height={pictureHeight ? pictureHeight : "24px"}
        >
          <Image
            src={picture ? picture : emailIcon}
            alt="messenger icon"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            priority
          />
        </Styled.ImageWrapper>
        <Styled.ButtonText>{text}</Styled.ButtonText>
      </Styled.ButtonContent>
    </Styled.ButtonWrapper>
  );
};
