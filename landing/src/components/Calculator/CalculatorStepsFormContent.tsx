import React, { ReactNode, useEffect, useState } from "react";
import CalcualtorResultForm from "./CalcualtorResultForm";
import CalculatorStepsModalComponent from "./CalculatorStepsModalComponent";
import Logo from "./CalculatorLogo";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import { useFormikContext } from "formik";
import { ICalculatorFormValuesProps } from "../../types/Admin/Response.types";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import CalculatorPagination from "./CalculatorPagination";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import { ICalendlyUserData } from "../HomePage/Content";

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
  isBlockchain: boolean;
  setIsCalendlyOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCalendlyUserData: React.Dispatch<React.SetStateAction<ICalendlyUserData>>;
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
  isBlockchain,
  setIsCalendlyOpen,
  setCalendlyUserData,
}: ICalculatorStepsFormContentProps) => {
  const { values, isValid, errors, handleSubmit, validateForm } =
    useFormikContext<ICalculatorFormValuesProps>();

  const calendlyLink = isBlockchain
    ? "https://calendly.com/d/yyt-5dp-6bn/client-meets-cgs-team-ib-web3"
    : "https://calendly.com/d/2cj-vbz-zkp/client-meets-cgs-team-ib-web2";

  const handleClick = () =>
    stepsCount <= 10 ? onButtonClick() : handlePaginationNextClick();

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

  useEffect(() => {
    if (warnIsShow) {
      setTimeout(() => {
        setWarnIsShow(false);
      }, 3000);
    }
  }, [warnIsShow, setWarnIsShow]);

  const handleStepButtonClick = (idx: number) => {
    const checkArray = errors.questionsArr?.slice(0, idx);
    const pastValuesArray = values.questionsArr.slice(0, idx);

    if (
      (checkArray &&
        Array.isArray(checkArray) &&
        checkArray.some((el) => el !== undefined)) ||
      (pastValuesArray &&
        pastValuesArray.some(
          (el) =>
            el.subStepRequired && el.answer.includes("Yes") && !el.subStepAnswer
        ))
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
      if (isValid) {
        handleSubmit();
        setIsCalendlyOpen(true);
        setCalendlyUserData({
          name: values.name,
          email: values.email,
          link: calendlyLink,
        });
      }
    } else if (errors["questionsArr"] && errors["questionsArr"][step]) {
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
      <CalculatorStepsModalComponent
        mobile={width < 768}
        lastPage={lastStep}
        handleQuit={handleQuit}
      >
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
              <CalcualtorResultForm
                isBlockchain={isBlockchain}
                calculateIsClicked={calculateIsClicked}
              />
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
                {lastStep ? (
                  <Styled.SubmitContainer>
                    <BlackButton onClick={handleClick} className="calc-submit">
                      BOOK A CALL
                      <ArrowContainer>
                        <ButtonArrow />
                      </ArrowContainer>
                    </BlackButton>
                  </Styled.SubmitContainer>
                ) : (
                  <Styled.StartButton
                    type="submit"
                    className={`steps ${warnIsShow ? "invalid" : ""}`}
                    onClick={handleClick}
                  >
                    {"<"}&nbsp;{"next"}&nbsp;{">"}
                  </Styled.StartButton>
                )}
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
