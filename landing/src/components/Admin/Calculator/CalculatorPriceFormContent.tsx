import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import React, { useState } from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import {
  PriceFormGrid,
  QuestionTitle,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import SaveBtn from "../Global/SaveBtn";
import CalculatorFormPriceItem from "./CalculatorFormPriceItem";
import CalculatorPriceSubItem from "./CalculatorPriceSubItem";

interface ICalculatorPriceFormContentProps {
  item: ICalculatorStep;
  isBlockchain: boolean;
  stepInd: number;
}

const CalculatorPriceFormContent = ({
  item,
  isBlockchain,
}: ICalculatorPriceFormContentProps) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    [queryKeys.updateCalculatorClassicSteps],
    (data: ICalculatorStep) =>
      adminCalculatorService.updateCalculatorClassicStepById(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCalculatorClassicSteps]);
      },
    }
  );

  const { mutateAsync: blockchainMutate } = useMutation(
    [queryKeys.updateCalculatorBlockchainSteps],
    (data: ICalculatorStep) =>
      adminCalculatorService.updateCalculatorBlockchainStepById(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCalculatorBlockchainSteps]);
      },
    }
  );

  const onSubmit = async (values: ICalculatorStep) => {
    document.body.style.cursor = "wait";
    isBlockchain ? await blockchainMutate(values) : await mutateAsync(values);
    document.body.style.cursor = "auto";
  };

  const substring = item.title.substring(0, item.title.indexOf("<span style="));
  return (
    <Formik initialValues={item} onSubmit={onSubmit}>
      {({ values, handleSubmit }) => (
        <div>
          <QuestionTitle
            dangerouslySetInnerHTML={{
              __html: substring.length > 0 ? substring : item.title,
            }}
          />
          <PriceFormGrid>
            {values.options.map((el, idx) => (
              <CalculatorFormPriceItem optionInd={idx} key={idx} priceEl={el} />
            ))}
          </PriceFormGrid>
          {values.subSteps.length > 0 &&
            values.subSteps.map((el, idx) => (
              <CalculatorPriceSubItem priceSubEl={el} key={idx} />
            ))}
          <SaveBtn
            handleClick={() => handleSubmit()}
            style={{ marginBottom: "14px" }}
          />
        </div>
      )}
    </Formik>
  );
};

export default CalculatorPriceFormContent;
