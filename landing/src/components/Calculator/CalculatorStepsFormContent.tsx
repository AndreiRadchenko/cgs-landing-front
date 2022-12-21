import React, { ReactNode } from "react";
import CalcualtorResultForm from "./CalcualtorResultForm";
import CalculatorStepsModalComponent from "./CalculatorStepsModalComponent";
import Logo from "./CalculatorLogo";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import { useFormikContext } from "formik";
import { ICalculatorFormValuesProps } from "../../types/Admin/Response.types";

interface ICalculatorStepsFormContentProps {
  handleBackClick: () => void;
  handleClose: () => void;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPreviousSteps: React.Dispatch<React.SetStateAction<number[]>>;
  stepsCount: number;
  arrayChildren: Array<Exclude<ReactNode, boolean | null | undefined>>;
  stepButtonClassName: (idx: number, disabled?: boolean) => string;
  handleStepButtonClick: (idx: number) => void;
}

const CalculatorStepsFormContent = ({
  handleBackClick,
  handleClose,
  step,
  setStep,
  setPreviousSteps,
  stepsCount,
  arrayChildren,
  stepButtonClassName,
  handleStepButtonClick,
}: ICalculatorStepsFormContentProps) => {
  const { values, isValid, errors, handleSubmit } =
    useFormikContext<ICalculatorFormValuesProps>();

  const lastStep = step === stepsCount;

  const onButtonClick = () => {
    if (lastStep) {
      isValid && handleSubmit();
    } else if (
      step + 1 < stepsCount &&
      !values.questionsArr[step + 1].tieUpDisabled
    ) {
      setStep((old) => {
        setPreviousSteps((prev) => [...prev, old]);
        return old + 1;
      });
    } else if (
      step + 2 < stepsCount &&
      values.questionsArr[step + 1].tieUpDisabled
    ) {
      setStep((old) => {
        setPreviousSteps((prev) => [...prev, old]);
        return old + 2;
      });
    } else if (!(errors["questionsArr"] && errors["questionsArr"].length > 0)) {
      setPreviousSteps((prev) => [...prev, stepsCount]);
      setStep(stepsCount);
      handleSubmit();
    }
  };

  return (
    <CalculatorStepsModalComponent lastPage={lastStep}>
      <Styled.ModalContentWrapper>
        <Styled.CalculatorHeaderWrapper className="steps">
          <Styled.CalculatorHeaderInner>
            <Logo />
            {!lastStep && (
              <Styled.BackButton onClick={handleBackClick}>
                {"<"}
              </Styled.BackButton>
            )}
            <Styled.CloseButton onClick={handleClose} />
          </Styled.CalculatorHeaderInner>
        </Styled.CalculatorHeaderWrapper>
        {(lastStep && <CalcualtorResultForm />) || arrayChildren[step]}
        <Styled.ButtonWrapper>
          <Styled.StepButtonWrapper className={lastStep ? "last" : undefined}>
            {(!lastStep &&
              stepsCount <= 10 &&
              new Array(stepsCount).fill(0).map((_, idx) => (
                <Styled.GridButtonWrapper key={idx}>
                  <Styled.StepButton
                    disabled={values.questionsArr[idx].tieUpDisabled}
                    className={stepButtonClassName(
                      idx,
                      values.questionsArr[idx].tieUpDisabled
                    )}
                    onClick={() => handleStepButtonClick(idx)}
                  >
                    {idx + 1}
                  </Styled.StepButton>
                </Styled.GridButtonWrapper>
              ))) || (
              <Styled.LastStepBackButton onClick={handleBackClick}>
                {"<"}
              </Styled.LastStepBackButton>
            )}
            <Styled.GridButtonWrapper>
              <Styled.StepButton
                disabled={
                  (errors["questionsArr"] &&
                    errors["questionsArr"].length > 0) ||
                  false
                }
                className={
                  step === stepsCount
                    ? "active checked"
                    : stepButtonClassName(
                        stepsCount,
                        (errors["questionsArr"] &&
                          errors["questionsArr"].length > 0) ||
                          false
                      )
                }
                onClick={() => handleStepButtonClick(stepsCount)}
              >
                {stepsCount + 1}
              </Styled.StepButton>
            </Styled.GridButtonWrapper>
          </Styled.StepButtonWrapper>
          <Styled.StepsMainButtonWrapper>
            <Styled.StartButton
              type="submit"
              className="steps"
              onClick={onButtonClick}
            >
              {"<"}&nbsp;{lastStep ? "calculation" : "next"}&nbsp;{">"}
            </Styled.StartButton>
          </Styled.StepsMainButtonWrapper>
        </Styled.ButtonWrapper>
      </Styled.ModalContentWrapper>
    </CalculatorStepsModalComponent>
  );
};

export default CalculatorStepsFormContent;
