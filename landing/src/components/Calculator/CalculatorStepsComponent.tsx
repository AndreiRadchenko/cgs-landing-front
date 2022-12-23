import React, { Children, ReactNode } from "react";
import {
  ICalculatorFormValuesProps,
  ICalculatorPostEmailResultsProps,
  ICalculatorStep,
} from "../../types/Admin/Response.types";
import { Formik } from "formik";
import CalculatorStepsFormContent from "./CalculatorStepsFormContent";
import { CalculatorValidation } from "../../validations/CalculatorValidation";
import { queryKeys } from "../../consts/queryKeys";
import { useMutation } from "@tanstack/react-query";
import { adminCalculatorService } from "../../services/adminCalculator";
import CalculatorQuittingPager from "./CalculatorQuttingPager";

interface ICalculatorStepsComponentProps {
  step: number;
  previousSteps: number[];
  stepsCount: number;
  handleClose: () => void;
  handleEmailClose: () => void;
  data: ICalculatorStep[];
  setIsChosen: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPreviousSteps: React.Dispatch<React.SetStateAction<number[]>>;
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  isBlockchain: boolean;
  calculateIsClicked: boolean;
  isQuitting: boolean;
  setIsQuitting: React.Dispatch<React.SetStateAction<boolean>>;
  setCalculateIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  warnIsShow: boolean;
  setWarnIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const CalculatorStepsComponent = ({
  step,
  previousSteps,
  stepsCount,
  data,
  handleClose,
  setIsChosen,
  setStep,
  setPreviousSteps,
  setIsCompleted,
  children,
  isBlockchain,
  calculateIsClicked,
  setCalculateIsClicked,
  isQuitting,
  setIsQuitting,
  handleEmailClose,
  warnIsShow,
  setWarnIsShow,
}: ICalculatorStepsComponentProps) => {
  const arrayChildren = Children.toArray(children);

  const handleBackClick = () => {
    if (step === 0 || previousSteps.length === 0) {
      setStep(0);
      setIsChosen(false);
    } else {
      setStep(previousSteps[previousSteps.length - 1]);
      setPreviousSteps((old) => {
        old.splice(-1);
        return old;
      });
      setWarnIsShow(false);
    }
  };

  const initialValues = {
    questionsArr: data.map((el) => {
      return {
        title: el.title,
        answer: "",
      };
    }),
    email: "",
    isBlockchain,
  };

  const { mutate } = useMutation(
    [queryKeys.sendEmailResults],
    (answers: ICalculatorPostEmailResultsProps) =>
      adminCalculatorService.sendResultsEmail(answers),
    {
      onSuccess: (data: ICalculatorPostEmailResultsProps | void) =>
        console.log(data),
    }
  );

  const handleContinueClick = () => {
    setIsQuitting(false);
  };

  const onSubmit = (values: ICalculatorFormValuesProps) => {
    const { isBlockchain, questionsArr, email } = values;
    // do e-mail work
    mutate({ answers: questionsArr, isBlockchain, email });
    setIsCompleted(true);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={CalculatorValidation}
      validateOnMount
    >
      {isQuitting ? (
        <CalculatorQuittingPager
          handleClose={handleClose}
          handleQuitClick={handleClose}
          handleContinueClick={handleContinueClick}
        />
      ) : (
        <CalculatorStepsFormContent
          handleBackClick={handleBackClick}
          handleClose={handleClose}
          setPreviousSteps={setPreviousSteps}
          setStep={setStep}
          step={step}
          stepsCount={stepsCount}
          calculateIsClicked={calculateIsClicked}
          setCalculateIsClicked={setCalculateIsClicked}
          handleEmailClose={handleEmailClose}
          warnIsShow={warnIsShow}
          setWarnIsShow={setWarnIsShow}
          arrayChildren={arrayChildren}
        />
      )}
    </Formik>
  );
};

export default CalculatorStepsComponent;
