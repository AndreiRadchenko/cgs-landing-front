import React from "react";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import CalculatorPriceFormContent from "./CalculatorPriceFormContent";

interface ICalculatorPriceProps {
  data: ICalculatorStep[];
  isBlockchain: boolean;
}

const CalculatorPrice = ({ data, isBlockchain }: ICalculatorPriceProps) => {
  return (
    <div>
      {data.map((item, idx) => (
        <CalculatorPriceFormContent
          stepInd={idx}
          key={item._id}
          item={item}
          isBlockchain={isBlockchain}
        />
      ))}
    </div>
  );
};

export default CalculatorPrice;
