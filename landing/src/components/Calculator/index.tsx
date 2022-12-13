import React, { useState } from "react";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import BlackButtonComponent from "../BlackButtonWithArrow";
import CalculatorPager from "./CalculatorPager";

const Calculator = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Styled.CalculatorPreviewWrapper>
        <Styled.CalculatorPreviewCube>
          <Styled.CalculatorPreview>
            <Styled.CalculatorButton className="button">
              calculator
            </Styled.CalculatorButton>
            <Styled.CalculatorPreviewContentWrapper className="content">
              Answer 10 questions, and we'll <br /> calculate your project's
              time,
              <br /> team, and price estimation.
              <BlackButtonComponent
                onClick={handleOpen}
                text="Start calculation"
                style={{ padding: "1em 2.15em" }}
              />
            </Styled.CalculatorPreviewContentWrapper>
          </Styled.CalculatorPreview>
        </Styled.CalculatorPreviewCube>
      </Styled.CalculatorPreviewWrapper>
      {isOpen && <CalculatorPager />}
    </>
  );
};

export default Calculator;
