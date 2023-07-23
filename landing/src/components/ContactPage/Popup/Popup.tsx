import React, { ReactNode, CSSProperties } from "react";

import * as Styled from "./Popup.styled";

interface Props {
  style?: CSSProperties;
  children: ReactNode;
}

export const Popup = ({ children, style }: Props) => {
  return (
    <Styled.PointerPopup style={style} className="popup">
      <Styled.PopupText>{children}</Styled.PopupText>
    </Styled.PointerPopup>
  );
};

export const EmailPopup = ({ children, style }: Props) => {
  return (
    <Styled.EmailPopup style={style} className="popup">
      <Styled.PopupText>{children}</Styled.PopupText>
    </Styled.EmailPopup>
  );
};

export default Popup;
