import React from "react";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import CalculatorTypeInput from "./CalculatorTypeInput";
import CalculatorTypesRate from "./CalculatorTypesRate";

interface ICalculatorPriceForm {
  isBlockchain: boolean;
}

const CalculatorPriceForm = ({ isBlockchain }: ICalculatorPriceForm) => {
  return (
    <AdminBlockDropDown title="PRICE">
      <CalculatorTypeInput />
      <CalculatorTypesRate />
    </AdminBlockDropDown>
  );
};

export default CalculatorPriceForm;
