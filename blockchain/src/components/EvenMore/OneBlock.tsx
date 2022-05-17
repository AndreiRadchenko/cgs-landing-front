import React from "react";
import * as Styled from "../../styles/evenMore.styled";

interface IBlockProps {
  text: string;
  number: number;
}

const OneBlock = ({ text, number }: IBlockProps) => {
  const currentText = text
    .split("*")
    .map((i, ind) =>
      ind % 2 ? (
        <Styled.greenText key={`greenTextN${ind}`}>{i}</Styled.greenText>
      ) : (
        i
      )
    );
  return (
    <Styled.Block>
      <Styled.Number>{number + 1}</Styled.Number>
      <p>{currentText}</p>
    </Styled.Block>
  );
};

export default OneBlock;
