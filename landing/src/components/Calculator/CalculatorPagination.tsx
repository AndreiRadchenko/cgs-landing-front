import React from "react";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

interface ICalculatorPaginationProps {
  buttonsPerPage: number;
  startButtonNum: number;
  handleStepButtonClick: (idx: number) => void;
  stepButtonClassName: (idx: number) => string;
  handleNextClick: () => void;
  handleBackClick: () => void;
}

const CalculatorPagination = ({
  buttonsPerPage,
  startButtonNum,
  handleStepButtonClick,
  stepButtonClassName,
  handleBackClick,
  handleNextClick,
}: ICalculatorPaginationProps) => {
  return (
    <>
      <Styled.LastStepBackButton onClick={handleBackClick}>
        {"<"}
      </Styled.LastStepBackButton>{" "}
      {new Array(buttonsPerPage).fill(0).map((_, idx) => (
        <Styled.GridButtonWrapper key={idx}>
          <Styled.StepButton
            className={stepButtonClassName(idx + startButtonNum)}
            onClick={() => handleStepButtonClick(idx + startButtonNum)}
          >
            {startButtonNum + idx + 1}
          </Styled.StepButton>
        </Styled.GridButtonWrapper>
      ))}
      <Styled.LastStepBackButton onClick={handleNextClick}>
        {">"}
      </Styled.LastStepBackButton>
    </>
  );
};

export default CalculatorPagination;
