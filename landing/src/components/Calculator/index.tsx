import React from "react";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import BlackButtonComponent from "../BlackButtonWithArrow";

const Calculator = () => {
  return (
    <Styled.CalculatorPreviewWrapper>
      <Styled.CalculatorPreviewCube>
        <Styled.CalculatorPreview>
          <Styled.CalculatorButton className="button">
            calculator
          </Styled.CalculatorButton>
          <Styled.CalculatorPreviewContentWrapper className="content">
            Answer 10 questions, and we'll <br /> calculate your project's time,
            <br /> team, and price estimation.
            <BlackButtonComponent
              text="Start calculation"
              style={{ padding: "1em 2.15em" }}
            />
          </Styled.CalculatorPreviewContentWrapper>
        </Styled.CalculatorPreview>
      </Styled.CalculatorPreviewCube>
    </Styled.CalculatorPreviewWrapper>
  );
};

export default Calculator;
