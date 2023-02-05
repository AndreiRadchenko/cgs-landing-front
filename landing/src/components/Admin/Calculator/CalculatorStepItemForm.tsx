import React, { useState } from "react";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import CalculatorStepItemComponent from "./CalculatorStepItemComponent";

interface ICalculatorStepItemProps {
  allSteps: ICalculatorStep[];
  step: ICalculatorStep;
  index: number;
  refetch: () => void;
  isBlockchain: boolean;
}

const CalculatorStepItem = ({
  isBlockchain,
  allSteps,
  step,
  index,
  refetch,
}: ICalculatorStepItemProps) => {
  const [submitKey, setSubmitKey] = useState<boolean>(false);

  const { mutateAsync } = useMutation(
    [queryKeys.getCalculatorClassicSteps],
    (data: ICalculatorStep) =>
      adminCalculatorService.updateCalculatorClassicStepById(data)
  );

  const { mutateAsync: blockchainMutate } = useMutation(
    [queryKeys.getCalculatorBlockchainSteps],
    (data: ICalculatorStep) =>
      adminCalculatorService.updateCalculatorBlockchainStepById(data)
  );
  const handleSubmit = async (values: ICalculatorStep) => {
    const converted = values;

    document.body.style.cursor = "wait";
    isBlockchain
      ? await blockchainMutate(converted)
      : await mutateAsync(converted);
    await refetch();
    document.body.style.cursor = "auto";
    setSubmitKey((old) => !old);
  };

  return (
    <Formik initialValues={step} onSubmit={handleSubmit}>
      <CalculatorStepItemComponent
        index={index}
        submitKey={submitKey}
        data={allSteps}
        isBlockchain={isBlockchain}
      />
    </Formik>
  );
};

export default CalculatorStepItem;
