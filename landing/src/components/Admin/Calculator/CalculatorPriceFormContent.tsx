import React from "react";
import {
  PriceFormGrid,
  QuestionTitle,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
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
  const substring = item.title.substring(0, item.title.indexOf("<span style="));

  return (
    <>
      <div>
        <QuestionTitle
          dangerouslySetInnerHTML={{
            __html: substring.length > 0 ? substring : item.title,
          }}
        />
        <PriceFormGrid>
          {item.options.map((el, idx) => (
            <CalculatorFormPriceItem
              item={item}
              optionInd={idx}
              key={idx}
              priceEl={el}
              isBlockchain={isBlockchain}
            />
          ))}
        </PriceFormGrid>
      </div>
      {item.subSteps.length > 0 &&
        item.subSteps.map((el, idx) => (
          <CalculatorPriceSubItem
            isBlockchain={isBlockchain}
            stepId={item._id}
            priceSubEl={el}
            key={idx}
          />
        ))}
    </>
  );
};

export default CalculatorPriceFormContent;
