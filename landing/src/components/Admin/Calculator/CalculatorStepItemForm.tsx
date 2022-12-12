import React, { useState } from "react";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import { getInputsFromLabels } from "../../../utils/calculatorGetInputFromLabel";
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
    if (typeof converted.options === "string") {
      converted.options = getInputsFromLabels(converted.options);
    }

    if (
      converted.tieUpSteps.length > 0 &&
      converted.tieUpSteps[0].number &&
      typeof converted.tieUpSteps[0].step.options === "string"
    ) {
      converted.tieUpSteps[0].step.options = getInputsFromLabels(
        converted.tieUpSteps[0].step.options
      );
    }

    if (converted.tieUpSteps.length > 0 && converted.tieUpSteps[0].number) {
      const convertedTieUp = allSteps[converted.tieUpSteps[0].number];
      convertedTieUp.options = converted.tieUpSteps[0].step.options;
      convertedTieUp.title = converted.tieUpSteps[0].step.title;
      isBlockchain
        ? await blockchainMutate(convertedTieUp)
        : await mutateAsync(convertedTieUp);
    }

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
