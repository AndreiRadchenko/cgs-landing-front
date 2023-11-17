import React from "react";

import * as Styled from "../../styles/BlockchainService/LinedText.styled";

import { ILinedText } from "../../types/Services.types";

const LinedText = ({
  text,
  position = "top",
  height,
  ind,
  isScrolled,
}: ILinedText) => {
  return (
    <Styled.Container
      position={position}
      height={height}
      ind={ind}
      className={isScrolled ? "scrolled" : undefined}
    >
      <Styled.Marker position={position} />
      <Styled.Text position={position}>{text}</Styled.Text>
    </Styled.Container>
  );
};

export default LinedText;
