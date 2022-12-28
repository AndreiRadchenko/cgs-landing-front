import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { queryKeys } from "../../consts/queryKeys";
import { ICalculator, IStepOptions } from "../../types/Admin/Response.types";
import CalculatorEmailField from "./CalculatorEmailField";
import CalculatorTitleField from "./CalculatorTitleField";

interface ICalculatorResultForm {
  setStartMutating: React.Dispatch<React.SetStateAction<boolean>>;
  results: Omit<IStepOptions, "label" | "type"> | undefined;
  calculateIsClicked: boolean;
}

const CalcualtorResultForm = ({
  setStartMutating,
  results,
  calculateIsClicked,
}: ICalculatorResultForm) => {
  const queryClient = useQueryClient();
  const calculatorData = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  useEffect(() => {
    setStartMutating(true);
  }, []);

  const countDevs = (hours: number) => {
    if (hours <= 168) return 1;
    if (hours > 168 && hours <= 840) return 2;
    if (hours > 840) return 3;
  };

  const devs = results && countDevs(results.hours);

  return (
    <div>
      {results && (
        <CalculatorTitleField
          className="last"
          text={`We need ${
            results.hours
          } hours of work. A team of ${devs} developer${
            devs && devs > 1 ? "s" : ""
          }, ${results && results.pm} project manager${
            results && results.pm > 1 ? "s" : ""
          }, ${
            results && results.uxui !== 0
              ? `and ${results && results.uxui} UX/UI designer${
                  results && results.uxui > 1 ? "s" : ""
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
