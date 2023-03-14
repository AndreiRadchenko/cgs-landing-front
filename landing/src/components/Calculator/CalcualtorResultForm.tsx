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
      const keys: Array<"hours" | "uxui"> = ["hours", "uxui"];

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
  const getText = (results: ICalculatorAnswersResults) => {
    if (results && results.hours) {
      const mounthForTwoDev = (results.hours / (168 * 2)).toFixed(2);
      const mounthForThreeDev = (results.hours / (168 * 3)).toFixed(2);

      const text = `<h4 class="result-title">The estimated team and time for your project:<br></h4>
  <ul>
    <li><p><span class="bold">${mounthForTwoDev} months</span> with<span class="bold"> 2 developers;</span> or <span class="bold">${mounthForThreeDev} months</span>
     with <span class="bold">3 developers;</span></p></li>
    ${
      results?.uxui && typeof results?.uxui === "number"
        ? "<li><p>UI/UX Designer;</p></li>"
        : ""
    }
    <li>Project Manager;</li>
    <li>QA;</li>
  </ul>
<span class="result-msg">${calculatorData?.resultMessage}</span>
  `;

      return text;
    }
    return "";
  };

  return (
    (calculatorData && (
      <div>
        {results && (
          <CalculatorTitleField className="last" text={getText(results)} />
        )}
        <CalculatorEmailField
          calculateIsClicked={calculateIsClicked}
          email={calculatorData.email}
        />
      </div>
    )) ||
    null
  );
};

export default CalcualtorResultForm;
