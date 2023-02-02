import { useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { queryKeys } from "../../consts/queryKeys";
import {
  ICalculator,
  ICalculatorAnswersResults,
  ICalculatorFormValuesProps,
  ICalculatorStep,
} from "../../types/Admin/Response.types";
import { getResults } from "../../utils/getCalculatorResults";
import CalculatorEmailField from "./CalculatorEmailField";
import CalculatorTitleField from "./CalculatorTitleField";

interface ICalculatorResultForm {
  calculateIsClicked: boolean;
}

const CalcualtorResultForm = ({
  calculateIsClicked,
}: ICalculatorResultForm) => {
  const { values } = useFormikContext<ICalculatorFormValuesProps>();
  const [results, setResults] = useState<ICalculatorAnswersResults>();
  const queryClient = useQueryClient();
  const calculatorData = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  const classicStepsData = queryClient.getQueryData<ICalculatorStep[]>([
    queryKeys.getCalculatorClassicSteps,
  ]);

  const blockchainStepsData = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorBlockchainSteps,
  ]);

  useEffect(() => {
    if (classicStepsData) {
      const keys: Array<"hours" | "endCoef"> = ["hours", "endCoef"];

      const countResults: ICalculatorAnswersResults = { uxui: 1 };
      keys.forEach(
        (key) =>
          (countResults[key] = getResults(
            classicStepsData,
            values.questionsArr,
            key
          ))
      );
      setResults(countResults);
    }
  }, [classicStepsData, values]);

  return (
    <div>
      {results && (
        <CalculatorTitleField
          className="last"
          text={`We need ${
            results.hours
          } hours of work. A team of developers, 1 project manager, ${
            results && results.uxui !== 0
              ? `and ${results && results.uxui} UX/UI designer${
                  results && results.uxui && results.uxui > 1 ? "s" : ""
                }`
              : ""
          } will implement your idea.
${calculatorData?.resultMessage}`}
        />
      )}
      {calculatorData && (
        <CalculatorEmailField
          calculateIsClicked={calculateIsClicked}
          email={calculatorData.email}
        />
      )}
    </div>
  );
};

export default CalcualtorResultForm;
