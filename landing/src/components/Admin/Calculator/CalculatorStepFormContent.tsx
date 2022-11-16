import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import CalculatorStepItem from "./CalculatorStepItem";

const CalculatorStepFormContent = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculatorStep[]>([
    queryKeys.getCalculatorSteps,
  ]);

  return (
    <div>
      {data &&
        data.map((step, idx) => (
          <CalculatorStepItem step={step} key={idx} index={idx} />
        ))}
    </div>
  );
};

export default CalculatorStepFormContent;
