import React, { ReactNode, CSSProperties } from "react";

import * as Styled from "./PersistPopup.styled";
import { useWindowDimension } from "../../../hooks/useWindowDimension";

interface Props {
  style?: CSSProperties;
  children: ReactNode;
}

export const PersistPopup = ({ children, style }: Props) => {
  const { width } = useWindowDimension();

  return (
    <Styled.TextWrapper style={style} className="persist-popup">
      <Styled.PersistPopupText>{children}</Styled.PersistPopupText>
      <svg
        width="60"
        height="7"
        viewBox="0 0 60 7"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.99998 7C5.78492 7 5.56988 6.91597 5.40591 6.74825L0.24617 1.46804C-0.0820567 1.13215 -0.0820567 0.587565 0.24617 0.251814C0.574264 -0.0839379 1.10632 -0.0839379 1.43458 0.251814L5.99998 4.92404L10.5654 0.251977C10.8936 -0.0837747 11.4256 -0.0837747 11.7537 0.251977C12.0821 0.587728 12.0821 1.13231 11.7537 1.4682L6.59405 6.74842C6.43 6.91616 6.21497 7 5.99998 7Z" />
        <path d="M30 7C29.7849 7 29.5699 6.91597 29.4059 6.74825L24.2462 1.46804C23.9179 1.13215 23.9179 0.587565 24.2462 0.251814C24.5743 -0.0839379 25.1063 -0.0839379 25.4346 0.251814L30 4.92404L34.5654 0.251977C34.8936 -0.0837747 35.4256 -0.0837747 35.7537 0.251977C36.0821 0.587728 36.0821 1.13231 35.7537 1.4682L30.5941 6.74842C30.43 6.91616 30.215 7 30 7Z" />
        <path d="M54 7C53.7849 7 53.5699 6.91597 53.4059 6.74825L48.2462 1.46804C47.9179 1.13215 47.9179 0.587565 48.2462 0.251814C48.5743 -0.0839379 49.1063 -0.0839379 49.4346 0.251814L54 4.92404L58.5654 0.251977C58.8936 -0.0837747 59.4256 -0.0837747 59.7537 0.251977C60.0821 0.587728 60.0821 1.13231 59.7537 1.4682L54.5941 6.74842C54.43 6.91616 54.215 7 54 7Z" />
      </svg>
    </Styled.TextWrapper>
  );
};

export default PersistPopup;
