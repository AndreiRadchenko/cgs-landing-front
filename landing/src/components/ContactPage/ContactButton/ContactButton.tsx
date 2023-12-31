import React from "react";
import Image from "next/image";

import * as Styled from "./ContactButton.styled";

import { IContactButton } from "../../../types/Button.types";

import emailIcon from "/public/email.svg";

export const ContactButton = ({
  className,
  picture,
  text,
  style,
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
        <Styled.ImageWrapper className="img-wrapper">
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
