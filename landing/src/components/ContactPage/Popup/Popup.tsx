import React, { ReactNode, CSSProperties } from "react";

import * as Styled from "./Popup.styled";
import { useWindowDimension } from "../../../hooks/useWindowDimension";

interface Props {
  style?: CSSProperties;
  children: ReactNode;
}

export const Popup = ({ children, style }: Props) => {
  const { width } = useWindowDimension();

  return (
    <Styled.PointerPopup style={style} className="popup">
      <Styled.PopupText>{children}</Styled.PopupText>
    </Styled.PointerPopup>
  );
};

export const EmailPopup = ({ children, style }: Props) => {
  const { width } = useWindowDimension();

  return (
    <Styled.EmailPopup style={style} className="popup">
      <Styled.PopupText>{children}</Styled.PopupText>
    </Styled.EmailPopup>
  );
};

export default Popup;
