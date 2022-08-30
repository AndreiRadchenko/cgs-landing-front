import React from "react";
import * as Styled from "../../styles/BlockchainService/LinedText.styled";

interface ILinedText {
  text: string;
  position: "top" | "bottom";
  height: number;
}

const LinedText = ({ text, position = "top", height }: ILinedText) => {
  return (
    <Styled.Container position={position} height={height}>
      <Styled.Marker position={position} />
      <Styled.Text position={position}>{text}</Styled.Text>
    </Styled.Container>
  );
};

export default LinedText;
