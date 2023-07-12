import React, { CSSProperties } from "react";

import emailIcon from "/public/email.svg";

import * as Styled from "./ContactButton.styled";
import Image from "next/image";

export interface IContactButton {
  className?: string;
  picture?: string;
  pictureWidth?: string;
  pictureHeight?: string;
  text?: string;
  link?: string;
  style?: CSSProperties;
  newTab?: boolean;
}

export const ContactButton = ({
  className,
  picture,
  text,
  style,
  pictureWidth = "24px",
  pictureHeight = "24px",
  link,
  newTab,
}: IContactButton) => {
  return (
    <Styled.ButtonWrapper
      className={className}
      style={style}
      href={link}
      target={newTab ? "_blank" : "_self"}
      rel="noreferrer noopener"
    >
      <Styled.ButtonContent>
        <Styled.ImageWrapper
          id="img-wrapper"
          width={pictureWidth}
          height={pictureHeight}
        >
          <Image
            src={picture ? picture : emailIcon}
            alt="messenger icon"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            priority
          />
        </Styled.ImageWrapper>
        {text && <Styled.ButtonText>{text}</Styled.ButtonText>}
      </Styled.ButtonContent>
    </Styled.ButtonWrapper>
  );
};
