import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { queryKeys } from "../../consts/queryKeys";
import { adminCalculatorService } from "../../services/adminCalculator";
import {
  ICalculator,
  ICalculatorAnswersResults,
  ICalculatorFormValuesProps,
  ICalculatorPostResultsProps,
  IStepOptions,
} from "../../types/Admin/Response.types";
import CalculatorEmailField from "./CalculatorEmailField";
import CalculatorTitleField from "./CalculatorTitleField";

const CalcualtorResultForm = () => {
  const [results, setResults] =
    useState<Omit<IStepOptions, "label" | "type">>();
  const queryClient = useQueryClient();
  const calculatorData = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  const { mutate } = useMutation(
    [queryKeys.postCalculatorResults],
    (answers: ICalculatorPostResultsProps) =>
      adminCalculatorService.countResults(answers),
    {
      onSuccess: (data: ICalculatorAnswersResults | void) =>
        data && setResults(data.results),
    }
  );

  const { values } = useFormikContext<ICalculatorFormValuesProps>();

  useEffect(() => {
    const { isBlockchain, questionsArr } = values;
    mutate({ answers: questionsArr, isBlockchain });
  }, []);

  const countDevs = (hours: number) => {
    if (hours <= 168) return 1;
    if (hours > 168 && hours <= 840) return 2;
    if (hours > 840) return 3;
  };

  return (
    <div>
      {results && (
        <CalculatorTitleField
          className="last"
          text={`We need ${results.hours} hours of work. A team of ${countDevs(
            results.hours
          )} developers, 1 project manager will implement your idea.
${calculatorData?.resultMessage}`}
        />
      )}
      {calculatorData && <CalculatorEmailField email={calculatorData.email} />}
    </div>
  );
};

export default CalcualtorResultForm;
