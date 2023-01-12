import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { ICalculator } from "../../../types/Admin/Response.types";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import CalculatorTypeInput from "./CalculatorTypeInput";
import CalculatorTypesRate from "./CalculatorTypesRate";

interface ICalculatorPriceForm {
  isBlockchain: boolean;
}

const CalculatorPriceForm = ({ isBlockchain }: ICalculatorPriceForm) => {
  const queryClient = useQueryClient();
  const roles = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ])?.roles;

  return (
    <AdminBlockDropDown title="PRICE">
      <CalculatorTypeInput />
      <CalculatorTypesRate />
    </AdminBlockDropDown>
  );
};

export default CalculatorPriceForm;
