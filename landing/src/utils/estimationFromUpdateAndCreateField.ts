import { IFormData } from "../types/EstimationForm.types";
import { ChangeEvent } from "react";

export const updateField = (
  prevState: IFormData,
  indexOfAnswer: number,
  e: ChangeEvent<HTMLInputElement>
) => {
  return prevState.clientAnswers.map((clientAnswer, index) => {
    return index === indexOfAnswer
      ? {
          ...clientAnswer,
          selectedOptions: [{ text: e.target.value }],
        }
      : clientAnswer;
  });
};
