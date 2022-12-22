import React from "react";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

interface ICalculatorTitleField {
  text: string;
  className?: string;
}

const CalculatorTitleField = ({ text, className }: ICalculatorTitleField) => {
  const fieldClassName = `${className} title`;

  return (
    <Styled.CalculatorFieldWrapper className={fieldClassName}>
      <Styled.LeftBlackBorder className={className} />
      <Styled.CalculatorField
        className={className}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Styled.CalculatorFieldWrapper>
  );
};

export default CalculatorTitleField;
