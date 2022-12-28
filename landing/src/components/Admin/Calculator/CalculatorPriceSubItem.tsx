import React from "react";
import {
  PriceFormGrid,
  QuestionTitle,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import { ICalculatorSubStep } from "../../../types/Admin/Response.types";
import CalculatorFormPriceSubItem from "./CalculatorFormPriceSubItem";

interface ICalculatorPriceSubItemProps {
  priceSubEl: ICalculatorSubStep;
}

const CalculatorPriceSubItem = ({
  priceSubEl,
}: ICalculatorPriceSubItemProps) => {
  const substring = priceSubEl.title.substring(
    0,
    priceSubEl.title.indexOf("<span style=")
  );

  return (
    <div>
      <QuestionTitle
        dangerouslySetInnerHTML={{
          __html: substring.length > 0 ? substring : priceSubEl.title,
        }}
      />
      <PriceFormGrid>
        {priceSubEl.options.map((el, idx) => (
          <CalculatorFormPriceSubItem key={idx} optionInd={idx} priceEl={el} />
        ))}
      </PriceFormGrid>
    </div>
  );
};

export default CalculatorPriceSubItem;
