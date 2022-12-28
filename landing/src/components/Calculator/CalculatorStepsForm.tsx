import { useMutation } from "@tanstack/react-query";
import { Formik } from "formik";
import React from "react";
import { queryKeys } from "../../consts/queryKeys";
import { adminCalculatorService } from "../../services/adminCalculator";
import {
  ICalculatorFormValuesProps,
  ICalculatorPostEmailResultsProps,
  ICalculatorStep,
} from "../../types/Admin/Response.types";
import { CalculatorValidation } from "../../validations/CalculatorValidation";
import CalculatorField from "./CalculatorTitleField";
import CalculatorInputField from "./CalculatorInputs";

interface ICalculatorStepsFormProps {
  data: ICalculatorStep[] | void;
  isBlockchain: boolean;
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalculatorStepsForm = ({
  data,
  isBlockchain,
  setIsCompleted,
}: ICalculatorStepsFormProps) => {
  const { mutate } = useMutation(
    [queryKeys.sendEmailResults],
    (answers: ICalculatorPostEmailResultsProps) =>
      adminCalculatorService.sendResultsEmail(answers),
    {
      onSuccess: (data: ICalculatorPostEmailResultsProps | void) =>
        console.log(data),
    }
  );
  const initialValues = data && {
    questionsArr: data.map((el) => {
      return {
        title: el.title,
        answer: "",
      };
    }),
    email: "",
    isBlockchain,
  };

  const onSubmit = (values: ICalculatorFormValuesProps) => {
    const { isBlockchain, questionsArr, email } = values;
    mutate({ answers: questionsArr, isBlockchain, email });
    setIsCompleted(true);
  };
  return (
    (initialValues && (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={CalculatorValidation}
        validateOnMount
      >
        {({ values }) => (
          <>
            {isBlockchain &&
              data &&
              data.map((currentData, stepInd) => (
                <div key={currentData.title}>
                  <CalculatorField
                    text={currentData.title}
                    disabled={values.questionsArr[stepInd].tieUpDisabled}
                  />
                  {typeof currentData.options !== "string" && (
                    <CalculatorInputField
                      subStep={currentData.subSteps}
                      stepInd={stepInd}
                      options={currentData.options}
                      data={data}
                    />
                  )}
                </div>
              ))}
          </>
        )}
      </Formik>
    )) ||
    null
  );
};

export default CalculatorStepsForm;
