import { useFormikContext } from "formik";
import React from "react";
import { AdminInputFormikField } from "../../../styles/AdminPage";
import {
  PriceItemWrapper,
  PriceSubtitle,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import { IStepOptions } from "../../../types/Admin/Response.types";

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
      <AdminInputFormikField
        value={priceEl.hours}
        placeholder="time (hours)"
        onChange={handleChange}
        name={`subSteps[0].options[${optionInd}].hours`}
        type="number"
      />
      <AdminInputFormikField
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
