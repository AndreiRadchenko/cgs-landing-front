import { Formik } from "formik";
import React, { useState } from "react";
import { AdminInput } from "../../../styles/AdminPage";
import {
  PriceItemWrapper,
  PriceSubtitle,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculatorStep,
  IStepOptions,
} from "../../../types/Admin/Response.types";
import SaveBtn from "../Global/SaveBtn";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";

interface ICalculatorFormPriceItemProps {
  priceEl: IStepOptions;
  optionInd: number;
  isBlockchain: boolean;
  item: ICalculatorStep;
  subStep?: boolean;
  stepId?: string;
}

const CalculatorFormPriceItem = ({
  priceEl,
  optionInd,
  isBlockchain,
  item,
}: ICalculatorFormPriceItemProps) => {
  const [submitKey, setSubmitKey] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    [queryKeys.getCalculatorClassicSteps],
    (data: ICalculatorStep) =>
      adminCalculatorService.updateCalculatorClassicStepById(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCalculatorClassicSteps]);
      },
    }
  );

  const { mutateAsync: blockchainMutate } = useMutation(
    [queryKeys.getCalculatorBlockchainSteps],
    (data: ICalculatorStep) =>
      adminCalculatorService.updateCalculatorBlockchainStepById(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCalculatorBlockchainSteps]);
      },
    }
  );

  const onSubmit = async (values: IStepOptions) => {
    const converted = item;
    converted.options[optionInd].hours = Number(values.hours);
    converted.options[optionInd].price = Number(values.price);
    document.body.style.cursor = "wait";
    isBlockchain
      ? await blockchainMutate(converted)
      : await mutateAsync(converted);
    document.body.style.cursor = "auto";
    setSubmitKey((old) => !old);
  };

  const substring = priceEl.label.substring(
    0,
    priceEl.label.indexOf("<span style=")
  );

  return (
    <Formik
      initialValues={priceEl}
      onSubmit={onSubmit}
      key={`${submitKey} price`}
    >
      {({ values, handleChange, handleSubmit }) => (
        <PriceItemWrapper>
          <PriceSubtitle
            dangerouslySetInnerHTML={{
              __html: substring.length > 0 ? substring : priceEl.label,
            }}
          />
          <AdminInput
            value={values.hours}
            placeholder="time (hours)"
            onChange={handleChange}
            name={`hours`}
          />
          <AdminInput
            value={values.price}
            placeholder="price"
            onChange={handleChange}
            name={`price`}
          />
          <SaveBtn handleClick={handleSubmit} title="Save Data" />
        </PriceItemWrapper>
      )}
    </Formik>
  );
};

export default CalculatorFormPriceItem;
