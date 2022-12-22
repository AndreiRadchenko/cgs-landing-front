import React, { ReactNode, useEffect, useState } from "react";
import CalcualtorResultForm from "./CalcualtorResultForm";
import CalculatorStepsModalComponent from "./CalculatorStepsModalComponent";
import Logo from "./CalculatorLogo";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import { useFormikContext } from "formik";
import {
  ICalculatorAnswersResults,
  ICalculatorFormValuesProps,
  ICalculatorPostResultsProps,
  IStepOptions,
} from "../../types/Admin/Response.types";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminCalculatorService } from "../../services/adminCalculator";

interface ICalculatorStepsFormContentProps {
  handleBackClick: () => void;
  handleClose: () => void;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPreviousSteps: React.Dispatch<React.SetStateAction<number[]>>;
  stepsCount: number;
  calculateIsClicked: boolean;
  setCalculateIsClicked: React.Dispatch<React.SetStateAction<boolean>>;

  arrayChildren: Array<Exclude<ReactNode, boolean | null | undefined>>;
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
  handleStepButtonClick,
  calculateIsClicked,
  setCalculateIsClicked,
}: ICalculatorStepsFormContentProps) => {
  const { values, isValid, errors, handleSubmit } =
    useFormikContext<ICalculatorFormValuesProps>();
  const [results, setResults] =
    useState<Omit<IStepOptions, "label" | "type">>();
  const [startMutating, setStartMutating] = useState<boolean>(false);

  const { width } = useWindowDimension();

  const lastStep = step === stepsCount;

  const stepButtonClassName = (idx: number, disabled?: boolean) => {
    let classname = "";
    if (idx === step) {
      classname += "active ";
    }

    if (
      (values.questionsArr[idx] &&
        (typeof values.questionsArr[idx] === "string"
          ? values.questionsArr[idx].answer !== ""
          : values.questionsArr[idx].answer.length > 0)) ||
      idx === step
    ) {
      classname += "checked ";
    }
    if (disabled) {
      classname += "disabled ";
    }

    return classname;
  };

  const { mutate, isLoading } = useMutation(
    [queryKeys.postCalculatorResults],
    (answers: ICalculatorPostResultsProps) =>
      adminCalculatorService.countResults(answers),
    {
      onSuccess: (data: ICalculatorAnswersResults | void) =>
        data && setResults(data.results),
    }
  );

  const onButtonClick = () => {
    if (lastStep) {
      setCalculateIsClicked(true);
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

  useEffect(() => {
    if (startMutating) {
      const { isBlockchain, questionsArr } = values;
      mutate({ answers: questionsArr, isBlockchain });
    }
  }, [startMutating]);

  return (
    (width && (
      <CalculatorStepsModalComponent mobile={width < 768} lastPage={lastStep}>
        {(isLoading && (
          <Styled.LoaderWrapper>
            <Styled.Loader />
          </Styled.LoaderWrapper>
        )) || (
          <Styled.ModalContentWrapper>
            <Styled.CalculatorHeaderWrapper className="steps">
              <Styled.CalculatorHeaderInner className="steps">
                <Logo />
                {!lastStep && (
                  <Styled.BackButton onClick={handleBackClick}>
                    {"<"}
                  </Styled.BackButton>
                )}
                <Styled.CloseButton onClick={handleClose} />
              </Styled.CalculatorHeaderInner>
            </Styled.CalculatorHeaderWrapper>
            {(lastStep && (
              <CalcualtorResultForm
                setStartMutating={setStartMutating}
                results={results}
                calculateIsClicked={calculateIsClicked}
              />
            )) ||
              arrayChildren[step]}
            <Styled.ButtonWrapper className={lastStep ? "last" : undefined}>
              <Styled.StepButtonWrapper
                className={lastStep ? "last" : undefined}
              >
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
                      lastStep
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
        )}
      </CalculatorStepsModalComponent>
    )) ||
    null
  );
};

export default CalculatorStepsFormContent;
