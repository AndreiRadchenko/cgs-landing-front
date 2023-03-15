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
  isBlockchain: boolean;
}

const CalcualtorResultForm = ({
  calculateIsClicked,
  isBlockchain,
}: ICalculatorResultForm) => {
  const { values } = useFormikContext<ICalculatorFormValuesProps>();
  const [results, setResults] = useState<ICalculatorAnswersResults>();
  const queryClient = useQueryClient();
  const calculatorData = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  let definedStepsData: ICalculatorStep[] | undefined;

  if (isBlockchain) {
    definedStepsData = queryClient.getQueryData<ICalculatorStep[]>([
      queryKeys.getCalculatorBlockchainSteps,
    ]);
  } else {
    definedStepsData = queryClient.getQueryData<ICalculatorStep[]>([
      queryKeys.getCalculatorClassicSteps,
    ]);
  }

  const countResultFunc = (stepData: ICalculatorStep[] | undefined) => {
    if (stepData) {
      const keys: Array<"hours" | "uxui"> = ["hours", "uxui"];

      const countResults: ICalculatorAnswersResults = { uxui: 1 };
      keys.forEach(
        (key) =>
          (countResults[key] = getResults(stepData, values.questionsArr, key))
      );
      setResults(countResults);
    }
  };

  useEffect(() => {
    if (typeof definedStepsData == undefined) throw Error("No data found!");

    const keys: Array<"hours" | "uxui"> = ["hours", "uxui"];

    const countResults: ICalculatorAnswersResults = { uxui: 1 };
    keys.forEach(
      (key) =>
        (countResults[key] = getResults(
          definedStepsData,
          values.questionsArr,
          key
        ))
    );
    setResults(countResults);

    countResultFunc(definedStepsData);
  }, [definedStepsData, values]);

  const getText = (results: ICalculatorAnswersResults) => {
    if (results && results.hours) {
      const mounthForTwoDev = (results.hours / (168 * 2)).toFixed(2);
      const mounthForThreeDev = (results.hours / (168 * 3)).toFixed(2);

      const text = `<h4 class="result-title">The estimated team and time for your project:<br></h4>
<<<<<<< HEAD
      <ul>
        <li><p><span class="bold">${mounthForTwoDev} months</span> with<span class="bold"> 2 developers;</span> or <span class="bold">${mounthForThreeDev} months</span>
        with <span class="bold">3 developers;</span></p></li>
        ${
          results?.uxui && typeof results?.uxui === "number"
            ? "<li><p>UI/UX Designer</p></li>"
            : ""
        }
        <li>Project Manager;</li>
        <li>QA.</li>
      </ul>
      <span class="result-msg">${calculatorData?.resultMessage}</span>
      `;
=======
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
>>>>>>> staging

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
