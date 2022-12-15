import React from "react";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

interface ICalculatorTitleField {
  text: string;
}

const CalculatorTitleField = ({ text }: ICalculatorTitleField) => {
  return (
    <Styled.CalculatorFieldWrapper className="title">
      <Styled.LeftBlackBorder />
      <Styled.CalculatorField dangerouslySetInnerHTML={{ __html: text }} />
    </Styled.CalculatorFieldWrapper>
  );
};

export default CalculatorTitleField;
