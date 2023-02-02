import React, { ReactNode, useEffect, useRef, useState } from "react";
import CalcualtorResultForm from "./CalcualtorResultForm";
import CalculatorStepsModalComponent from "./CalculatorStepsModalComponent";
import Logo from "./CalculatorLogo";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import { useFormikContext } from "formik";
import { ICalculatorFormValuesProps } from "../../types/Admin/Response.types";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import CalculatorPopover from "./CalculatorPopover";
import CalculatorPagination from "./CalculatorPagination";
import { ClickAudio, Source } from "../HeaderNavNew/HeaderNav.styled";

const PAGINATION_STEPS_PER_PAGE = 8;

interface ICalculatorStepsFormContentProps {
  handleBackClick: () => void;
  handleQuit: () => void;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPreviousSteps: React.Dispatch<React.SetStateAction<number[]>>;
  stepsCount: number;
  calculateIsClicked: boolean;
  setCalculateIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  warnIsShow: boolean;
  setWarnIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  arrayChildren: Array<Exclude<ReactNode, boolean | null | undefined>>;
}

const CalculatorStepsFormContent = ({
  handleBackClick,
  handleQuit,
  step,
  setStep,
  setPreviousSteps,
  stepsCount,
  arrayChildren,
  warnIsShow,
  setWarnIsShow,
  calculateIsClicked,
  setCalculateIsClicked,
}: ICalculatorStepsFormContentProps) => {
  const { values, isValid, errors, handleSubmit, validateForm } =
    useFormikContext<ICalculatorFormValuesProps>();
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    audioRef.current?.play();
    stepsCount <= 10 ? onButtonClick() : handlePaginationNextClick();
  };

  const [startButtonNum, setStartButtonNum] = useState<number>(0);
  const { width } = useWindowDimension();
  const lastStep = step === stepsCount - 1;

  const stepButtonClassName = (idx: number) => {
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

    return classname;
  };

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const handleStepButtonClick = (idx: number) => {
    if (
      idx === stepsCount - 1 &&
      errors["questionsArr"] &&
      errors["questionsArr"].length > 0
    ) {
      setWarnIsShow(true);
    } else {
      setWarnIsShow(false);
      idx !== stepsCount - 1 && setPreviousSteps((old) => [...old, step]);
      setStep(idx);
    }
  };

  const onButtonClick = () => {
    if (lastStep) {
      setCalculateIsClicked(true);
      isValid && handleSubmit();
    } else if (
      step + 1 === stepsCount - 1 &&
      errors["questionsArr"] &&
      errors["questionsArr"].length > 0
    ) {
      setWarnIsShow(true);
    } else if (step + 1 < stepsCount) {
      warnIsShow && setWarnIsShow(false);
      setStep((old) => {
        setPreviousSteps((prev) => [...prev, old]);
        return old + 1;
      });
    } else if (!(errors["questionsArr"] && errors["questionsArr"].length > 0)) {
      warnIsShow && setWarnIsShow(false);
      setPreviousSteps((prev) => [...prev, stepsCount]);
      setStep(stepsCount);
    }
  };

  const handlePaginationBackClick = () => {
    if (step - 1 >= 0) {
      setStep((old) => old - 1);
    }
    warnIsShow && setWarnIsShow(false);
    if (step - 1 >= 0 && step - 1 < startButtonNum) {
      setStartButtonNum((old) => old - 1);
    }
  };

  const handlePaginationNextClick = () => {
    if (
      step + 1 >= startButtonNum + PAGINATION_STEPS_PER_PAGE &&
      step < stepsCount
    ) {
      setStartButtonNum((old) => old + 1);
    }
    onButtonClick();
  };

  return (
    (width && (
      <CalculatorStepsModalComponent mobile={width < 768} lastPage={lastStep}>
        {
          <Styled.ModalContentWrapper>
            <Styled.CalculatorHeaderWrapper className="steps">
              <Styled.CalculatorHeaderInner className="steps">
                <Logo />
                {!lastStep && (
                  <Styled.BackButton onClick={handleBackClick}>
                    {"<"}
                  </Styled.BackButton>
                )}
                <Styled.CloseButton onClick={handleQuit} />
              </Styled.CalculatorHeaderInner>
            </Styled.CalculatorHeaderWrapper>
            {(lastStep && (
              <CalcualtorResultForm calculateIsClicked={calculateIsClicked} />
            )) ||
              arrayChildren[step]}
            <Styled.ButtonWrapper className={lastStep ? "last" : undefined}>
              <Styled.StepButtonWrapper
                className={lastStep ? "last" : undefined}
              >
                {(lastStep && (
                  <>
                    <Styled.LastStepBackButton onClick={handleBackClick}>
                      {"<"}
                    </Styled.LastStepBackButton>
                    <Styled.GridButtonWrapper>
                      <Styled.StepButton
                        className={lastStep ? "active checked" : undefined}
                        onClick={() => handleStepButtonClick(stepsCount - 1)}
                      >
                        {stepsCount}
                      </Styled.StepButton>
                    </Styled.GridButtonWrapper>
                  </>
                )) || (
                  <>
                    {stepsCount <= 10 ? (
                      <>
                        {new Array(stepsCount - 1).fill(0).map((_, idx) => (
                          <Styled.GridButtonWrapper key={idx}>
                            <Styled.StepButton
                              className={stepButtonClassName(idx)}
                              onClick={() => handleStepButtonClick(idx)}
                            >
                              {idx + 1}
                            </Styled.StepButton>
                          </Styled.GridButtonWrapper>
                        ))}
                        <Styled.GridButtonWrapper>
                          <Styled.StepButton
                            className={lastStep ? "active checked" : undefined}
                            onClick={() =>
                              handleStepButtonClick(stepsCount - 1)
                            }
                          >
                            {stepsCount}
                          </Styled.StepButton>
                        </Styled.GridButtonWrapper>
                      </>
                    ) : (
                      <CalculatorPagination
                        handleBackClick={handlePaginationBackClick}
                        handleNextClick={handlePaginationNextClick}
                        handleStepButtonClick={handleStepButtonClick}
                        stepButtonClassName={stepButtonClassName}
                        startButtonNum={startButtonNum}
                        buttonsPerPage={PAGINATION_STEPS_PER_PAGE}
                      />
                    )}
                  </>
                )}
              </Styled.StepButtonWrapper>
              <Styled.StepsMainButtonWrapper>
                <ClickAudio ref={audioRef}>
                  <Source src="/music/calculatorButton.mp3" type="audio/mpeg" />
                </ClickAudio>
                <Styled.StartButton
                  type="submit"
                  className={`steps ${warnIsShow ? "invalid" : ""}`}
                  onClick={handleClick}
                >
                  {"<"}&nbsp;{lastStep ? "calculation" : "next"}&nbsp;{">"}
                </Styled.StartButton>
                <CalculatorPopover />
              </Styled.StepsMainButtonWrapper>
            </Styled.ButtonWrapper>
          </Styled.ModalContentWrapper>
        }
      </CalculatorStepsModalComponent>
    )) ||
    null
  );
};

export default CalculatorStepsFormContent;
