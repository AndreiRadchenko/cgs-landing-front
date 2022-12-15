import React from "react";
import {
  OptionWrapper,
  TieUpInput,
  TieUpLabel,
} from "../../styles/Calculator/CalculatorAdmin.styled";

import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

interface ICalculatorFieldProps {
  text: string;
  options: {
    type: string;
    label: string;
  }[];
}

const CalculatorInputs = ({ text, options }: ICalculatorFieldProps) => {
  return (
    <Styled.CalculatorFieldWrapper className="input">
      <Styled.LeftBlackBorder />
      <Styled.CalculatorInputFields>
        {options.map((input, idx) => (
          <OptionWrapper key={idx}>
            <TieUpInput
              type={input.type}
              name={`${text}`}
              id={`${input.type}${input.label}${idx}`}
              value={input.label}
              className={input.type}
              // onChange={handleCondition}
            />
            <TieUpLabel
              dangerouslySetInnerHTML={{ __html: input.label }}
              htmlFor={`${input.type}${input.label}${idx}`}
            />
          </OptionWrapper>
        ))}
      </Styled.CalculatorInputFields>
    </Styled.CalculatorFieldWrapper>
  );
};

export default CalculatorInputs;
