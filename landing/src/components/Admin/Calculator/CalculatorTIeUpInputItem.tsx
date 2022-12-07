import { useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import React, { useRef } from "react";
import { queryKeys } from "../../../consts/queryKeys";
import {
  OptionWrapper,
  TieUpInput,
  TieUpLabel,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import { stripHtmlFromString } from "../../../utils/stripHtmlFromString";

interface ICalculatorTIeUpInputItemProps {
  tieUpItem: { type: string; label: string };
  ind: number;
}

const CalculatorTIeUpInputItem = ({
  tieUpItem,
  ind,
}: ICalculatorTIeUpInputItemProps) => {
  const { values, setFieldValue, handleSubmit } =
    useFormikContext<ICalculatorStep>();
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const handleCondition = () => {
    if (
      inputRef.current &&
      values.tieUpSteps.length > 0 &&
      !values.tieUpSteps[0].condition.includes(inputRef.current.value)
    ) {
      setFieldValue("tieUpSteps[0].condition", [
        ...values.tieUpSteps[0].condition,
        inputRef.current.value,
      ]);
    } else {
      setFieldValue(
        "tieUpSteps[0].condition",
        values.tieUpSteps[0].condition.filter(
          (el) => stripHtmlFromString(el) !== inputRef.current!.value
        )
      );
    }
    handleSubmit();
    queryClient.invalidateQueries([queryKeys.getCalculatorClassicSteps]);
    queryClient.invalidateQueries([queryKeys.getCalculatorBlockchainSteps]);
  };

  return (
    <OptionWrapper>
      <TieUpInput
        type="checkbox"
        name="tieUpInput"
        id={`${tieUpItem.type}${tieUpItem.label}${ind}`}
        value={stripHtmlFromString(tieUpItem.label)}
        className={tieUpItem.type}
        checked={values.tieUpSteps[0].condition.includes(
          stripHtmlFromString(tieUpItem.label)
        )}
        ref={inputRef}
        onChange={handleCondition}
      />
      <TieUpLabel
        dangerouslySetInnerHTML={{ __html: tieUpItem.label }}
        htmlFor={`${tieUpItem.type}${tieUpItem.label}${ind}`}
      />
    </OptionWrapper>
  );
};

export default CalculatorTIeUpInputItem;
