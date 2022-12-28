import { Formik, useFormikContext } from "formik";
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
}

const CalculatorFormPriceSubItem = ({
  priceEl,
  optionInd,
}: ICalculatorFormPriceSubItemProps) => {
  const { handleChange } = useFormikContext();

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
        value={priceEl.hours}
        placeholder="time (hours)"
        onChange={handleChange}
        name={`subSteps[0].options[${optionInd}].hours`}
        type="number"
      />
      <AdminInput
        value={priceEl.price}
        placeholder="price"
        onChange={handleChange}
        name={`subSteps[0].options[${optionInd}].price`}
        type="number"
      />
    </PriceItemWrapper>
  );
};

export default CalculatorFormPriceSubItem;
