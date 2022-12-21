import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import CalculatorPrice from "./CalculatorPrice";

interface ICalculatorPriceForm {
  isBlockchain: boolean;
}

const CalculatorPriceForm = ({ isBlockchain }: ICalculatorPriceForm) => {
  const queryClient = useQueryClient();
  const classicSteps = queryClient.getQueryData<ICalculatorStep[]>([
    queryKeys.getCalculatorClassicSteps,
  ]);
  const blockchainSteps = queryClient.getQueryData<ICalculatorStep[]>([
    queryKeys.getCalculatorBlockchainSteps,
  ]);

  return (
    (
      <AdminBlockDropDown title="PRICE">
        {classicSteps && blockchainSteps && (
          <CalculatorPrice
            isBlockchain={isBlockchain}
            data={isBlockchain ? blockchainSteps : classicSteps}
          />
        )}
      </AdminBlockDropDown>
    ) || null
  );
};

export default CalculatorPriceForm;
