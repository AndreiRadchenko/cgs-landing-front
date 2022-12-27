import React, { useState } from "react";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

interface ICalculatorPaginationProps {
  buttonsPerPage: number;
  stepsCount: number;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleStepButtonClick: (idx: number) => void;
  stepButtonClassName: (idx: number) => string;
  handleButtonClick: () => void;
}

const CalculatorPagination = ({
  buttonsPerPage,
  stepsCount,
  step,
  setStep,
  handleStepButtonClick,
  handleButtonClick,
  stepButtonClassName,
}: ICalculatorPaginationProps) => {
  const [startButtonNum, setStartButtonNum] = useState<number>(0);
  console.log(stepsCount);

  const handleBackClick = () => {
    if (step - 1 >= 0) {
      setStep((old) => old - 1);
    }

    // if (step - 1 >= 0 && step - 1 <= startButtonNum + buttonsPerPage) {
    //   setStartButtonNum((old) => old - 1);
    // }
  };

  const handleNextClick = () => {
    if (step + 1 >= startButtonNum + buttonsPerPage && step < stepsCount - 1) {
      setStartButtonNum((old) => old + 1);
    }
    // handleButtonClick();
    if (step + 1 <= stepsCount && step < stepsCount - 1) {
      setStep((old) => old + 1);
    }
  };

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
