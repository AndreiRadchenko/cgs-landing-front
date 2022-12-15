import React from "react";
import CalculatorStepsModalComponent from "./CalculatorStepsModalComponent";
import Logo from "./CalculatorLogo";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import CalculatorField from "./CalculatorTitleField";
import CalculatorInputField from "./CalculatorInputs";
import { ICalculatorStep } from "../../types/Admin/Response.types";

interface ICalculatorStepsComponentProps {
  step: number;
  stepsCount: number;
  handleClose: () => void;
  currentData: ICalculatorStep;
  setIsChosen: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const CalculatorStepsComponent = ({
  step,
  stepsCount,
  handleClose,
  setIsChosen,
  currentData,
  setStep,
}: ICalculatorStepsComponentProps) => {
  const onButtonClick = () => {
    setStep((old) => (old + 1 > stepsCount ? stepsCount : old + 1));
  };

  const handleBackClick = () => {
    if (step === 0) {
      setIsChosen(false);
    } else {
      setStep((old) => old - 1);
    }
  };

  const stepButtonClassName = (idx: number) => {
    let classname = "";
    if (idx === step) {
      classname += "active ";
    }

    if (idx <= step) {
      classname += "checked";
    }

    return classname;
  };

  const handleStepButtonClick = (idx: number) => {
    setStep(idx);
  };

  return (
    <CalculatorStepsModalComponent>
      <Styled.ModalContentWrapper>
        <Styled.CalculatorHeaderWrapper className="steps">
          <Styled.CalculatorHeaderInner>
            <Logo />
            <Styled.BackButton onClick={handleBackClick}>
              {"<"}
            </Styled.BackButton>
            <Styled.CloseButton onClick={handleClose} />
          </Styled.CalculatorHeaderInner>
        </Styled.CalculatorHeaderWrapper>
        <CalculatorField text={currentData.title} />
        {typeof currentData.options !== "string" && (
          <CalculatorInputField
            key={currentData.title}
            text={currentData.title}
            options={currentData.options}
          />
        )}
        <Styled.ButtonWrapper>
          <Styled.StepButtonWrapper>
            {stepsCount <= 10 &&
              new Array(stepsCount).fill(0).map((_, idx) => (
                <Styled.GridButtonWrapper key={idx}>
                  <Styled.StepButton
                    className={stepButtonClassName(idx)}
                    onClick={() => handleStepButtonClick(idx)}
                  >
                    {idx + 1}
                  </Styled.StepButton>
                </Styled.GridButtonWrapper>
              ))}
          </Styled.StepButtonWrapper>
          <Styled.StepsMainButtonWrapper>
            <Styled.StartButton className="steps" onClick={onButtonClick}>
              {"< next >"}
            </Styled.StartButton>
          </Styled.StepsMainButtonWrapper>
        </Styled.ButtonWrapper>
      </Styled.ModalContentWrapper>
    </CalculatorStepsModalComponent>
  );
};

export default CalculatorStepsComponent;
