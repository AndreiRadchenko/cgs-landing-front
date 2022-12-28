import { Formik, useFormikContext } from "formik";
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
}

const CalculatorFormPriceItem = ({
  priceEl,
  optionInd,
}: ICalculatorFormPriceItemProps) => {
  const { values, handleChange } = useFormikContext<ICalculatorStep>();
  const substring = priceEl.label.substring(
    0,
    priceEl.label.indexOf("<span style=")
  );

  return (
    <PriceItemWrapper>
      <PriceSubtitle
        dangerouslySetInnerHTML={{
          __html: substring.length > 0 ? substring : priceEl.label,
        }}
      />
      <AdminInput
        value={values.options[optionInd].hours}
        placeholder="time (hours)"
        onChange={handleChange}
        name={`options[${optionInd}].hours`}
        type="number"
      />
      <AdminInput
        value={values.options[optionInd].price}
        placeholder="price"
        onChange={handleChange}
        name={`options[${optionInd}].price`}
        type="number"
      />
    </PriceItemWrapper>
  );
};

export default CalculatorFormPriceItem;
