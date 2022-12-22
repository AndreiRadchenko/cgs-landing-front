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

  // const { values } = useFormikContext<ICalculatorFormValuesProps>();

  useEffect(() => {
    setStartMutating(true);
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
