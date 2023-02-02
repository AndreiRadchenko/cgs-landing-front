import React from "react";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

interface ICalculatorTitleField {
  text: string;
  className?: string;
  disabled?: boolean;
}

const CalculatorTitleField = ({
  text,
  disabled,
  className,
}: ICalculatorTitleField) => {
  const fieldWrapperClassName = `${className ? className : ""} title`;

  return (
    <Styled.CalculatorFieldWrapper className={fieldWrapperClassName}>
      <Styled.LeftBlackBorder className={className} />
      <Styled.CalculatorField className={className}>
        <Styled.CalculatorInputsFieldsWrapper
          className={className}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <Styled.Disabled className={disabled ? "disabled" : undefined} />
      </Styled.CalculatorField>
    </Styled.CalculatorFieldWrapper>
  );
};

export default CalculatorTitleField;
