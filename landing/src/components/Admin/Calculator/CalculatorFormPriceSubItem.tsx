import { Formik } from "formik";
import React from "react";
import { AdminInput } from "../../../styles/AdminPage";
import {
  PriceItemWrapper,
  PriceSubtitle,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculatorSubStep,
  IStepOptions,
} from "../../../types/Admin/Response.types";
import SaveBtn from "../Global/SaveBtn";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";

interface ICalculatorFormPriceSubItemProps {
  priceEl: IStepOptions;
  optionInd: number;
  isBlockchain: boolean;
  item: ICalculatorSubStep;
  stepId: string;
}

interface ISubStepWithId {
  values: ICalculatorSubStep;
  stepId: string;
}

const CalculatorFormPriceSubItem = ({
  priceEl,
  optionInd,
  isBlockchain,
  item,
  stepId,
}: ICalculatorFormPriceSubItemProps) => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    [queryKeys.updateCalculatorClassicSubStep],
    (data: ISubStepWithId) =>
      adminCalculatorService.updateCalculatorClassicSubStepById(
        data.stepId,
        data.values
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCalculatorClassicSteps]);
      },
    }
  );

  const { mutateAsync: blockchainMutate } = useMutation(
    [queryKeys.updateCalculatorBlockchainSubStep],
    (data: ISubStepWithId) =>
      adminCalculatorService.updateCalculatorBlockchainSubStepById(
        data.stepId,
        data.values
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCalculatorBlockchainSteps]);
      },
    }
  );

  const onSubmit = (values: ICalculatorSubStep) => {
    values.options[optionInd].hours = Number(values.options[optionInd].hours);
    values.options[optionInd].price = Number(values.options[optionInd].price);
    const subData = { stepId, values };
    document.body.style.cursor = "wait";
    isBlockchain ? blockchainMutate(subData) : mutateAsync(subData);
    document.body.style.cursor = "auto";
  };

  return (
    <Formik initialValues={item} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <PriceItemWrapper>
          <PriceSubtitle dangerouslySetInnerHTML={{ __html: priceEl.label }} />
          <AdminInput
            value={values.options[optionInd].hours}
            placeholder="time (hours)"
            onChange={handleChange}
            name={`options[${optionInd}].hours`}
          />
          <AdminInput
            value={values.options[optionInd].price}
            placeholder="price"
            onChange={handleChange}
            name={`options[${optionInd}].price`}
          />
          <SaveBtn handleClick={handleSubmit} title="Save Data" />
        </PriceItemWrapper>
      )}
    </Formik>
  );
};

export default CalculatorFormPriceSubItem;
