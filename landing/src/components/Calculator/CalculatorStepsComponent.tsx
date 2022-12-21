import React, { Children, ReactNode } from "react";
import {
  ICalculatorAnswersResults,
  ICalculatorFormValuesProps,
  ICalculatorPostResultsProps,
  ICalculatorStep,
} from "../../types/Admin/Response.types";
import { Formik } from "formik";
import CalculatorStepsFormContent from "./CalculatorStepsFormContent";
import { CalculatorValidation } from "../../validations/CalculatorValidation";
import { queryKeys } from "../../consts/queryKeys";
import { useMutation } from "@tanstack/react-query";
import { adminCalculatorService } from "../../services/adminCalculator";

interface ICalculatorStepsComponentProps {
  step: number;
  previousSteps: number[];
  stepsCount: number;
  handleClose: () => void;
  data: ICalculatorStep[];
  setIsChosen: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPreviousSteps: React.Dispatch<React.SetStateAction<number[]>>;
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  isBlockchain: boolean;
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
    }
  };

  const stepButtonClassName = (idx: number, disabled?: boolean) => {
    let classname = "";
    if (idx === step) {
      classname += "active ";
    }

    if (idx <= step) {
      classname += "checked ";
    }
    if (disabled) {
      classname += "disabled ";
    }

    return classname;
  };

  const handleStepButtonClick = (idx: number) => {
    idx !== stepsCount - 1 && setPreviousSteps((old) => [...old, step]);
    setStep(idx);
  };

  const initialValues = {
    questionsArr: data.map((el) => {
      return {
        title: el.title,
        answer: "",
      };
    }),
    isBlockchain,
    email: "",
  };

  const { mutate } = useMutation(
    [queryKeys.postCalculatorResults],
    (answers: ICalculatorPostResultsProps) =>
      adminCalculatorService.countResults(answers),
    {
      onSuccess: (data: ICalculatorAnswersResults | void) =>
        data && setIsCompleted(true),
    }
  );

  const onSubmit = (values: ICalculatorFormValuesProps) => {
    const { isBlockchain, questionsArr } = values;
    // do e-mail work
    mutate({ answers: questionsArr, isBlockchain });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={CalculatorValidation}
      validateOnChange
      validateOnMount
    >
      <CalculatorStepsFormContent
        handleBackClick={handleBackClick}
        handleClose={handleClose}
        handleStepButtonClick={handleStepButtonClick}
        stepButtonClassName={stepButtonClassName}
        setPreviousSteps={setPreviousSteps}
        setStep={setStep}
        step={step}
        stepsCount={stepsCount}
        arrayChildren={arrayChildren}
      />
    </Formik>
  );
};

export default CalculatorStepsComponent;
